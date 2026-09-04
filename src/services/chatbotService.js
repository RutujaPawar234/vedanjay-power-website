/* ============================================================
   Chatbot service — frontend intent matching over the approved
   knowledge base. No backend, no API keys. Swap `getBotResponse`
   for a secure backend/API call later if AI is connected.
   ============================================================ */

import { INTENTS, FALLBACK } from '../data/chatbotKnowledge.js';

// Topics the bot must never answer from itself — always route to contact.
const SENSITIVE = [
  'price', 'pricing', 'cost', 'rate', 'rates', 'tariff', 'penalty', 'charge',
  'salary', 'stipend', 'ctc', 'legal', 'law', 'lawyer', 'contract', 'agreement',
  'guarantee', 'guaranteed', 'certificate', 'certification', 'sla', 'refund',
  'discount', 'quote', 'quotation',
];

function isSensitive(text) {
  return SENSITIVE.some((w) => new RegExp(`\\b${w}\\b`).test(text));
}

function scoreIntent(text, intent) {
  let score = 0;
  for (const kw of intent.keywords) {
    if (text.includes(kw)) score += kw.includes(' ') ? 2 : 1;
  }
  return score;
}

export function matchIntent(rawText) {
  const text = (rawText || '').toLowerCase().trim();
  if (!text) return null;
  let best = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    const s = scoreIntent(text, intent);
    if (s > bestScore) { bestScore = s; best = intent; }
  }
  return bestScore > 0 ? best : null;
}

export function getIntentById(id) {
  return INTENTS.find((i) => i.id === id) || null;
}

/**
 * Returns a bot message object for a user's free-text input.
 * { text, cta? } — never fabricates; unknown → FALLBACK.
 */
export function getBotResponse(rawText) {
  const text = (rawText || '').toLowerCase();
  if (isSensitive(text)) return { text: FALLBACK };
  const intent = matchIntent(rawText);
  if (!intent) return { text: FALLBACK };
  return { text: intent.answer, cta: intent.cta };
}

export function getResponseForIntent(id) {
  const intent = getIntentById(id);
  if (!intent) return { text: FALLBACK };
  return { text: intent.answer, cta: intent.cta };
}
