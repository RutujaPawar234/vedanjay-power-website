import { useCallback, useEffect, useRef, useState } from 'react';
import ChatbotButton from './ChatbotButton.jsx';
import ChatbotWindow from './ChatbotWindow.jsx';
import { WELCOME } from '../../data/chatbotKnowledge.js';
import { getBotResponse, getResponseForIntent } from '../../services/chatbotService.js';

const STORE_KEY = 'vp-chat-session';
const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
let seq = 0;
const uid = () => `m${Date.now()}_${seq++}`;

const seed = () => WELCOME.map((t) => ({ id: uid(), from: 'bot', text: t, time: now() }));

function loadMessages() {
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch { /* ignore */ }
  return seed();
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(loadMessages);
  const [typing, setTyping] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    try { sessionStorage.setItem(STORE_KEY, JSON.stringify(messages)); } catch { /* ignore */ }
  }, [messages]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const pushBot = useCallback((resp) => {
    setTyping(true);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { id: uid(), from: 'bot', text: resp.text, cta: resp.cta, time: now() }]);
      setTyping(false);
    }, reduced ? 150 : 650);
  }, []);

  const sendUser = useCallback((text) => {
    setMessages((m) => [...m, { id: uid(), from: 'user', text, time: now() }]);
    pushBot(getBotResponse(text));
  }, [pushBot]);

  const pickQuick = useCallback((q) => {
    setMessages((m) => [...m, { id: uid(), from: 'user', text: q.label, time: now() }]);
    pushBot(getResponseForIntent(q.intent));
  }, [pushBot]);

  const clearConversation = useCallback(() => {
    clearTimeout(timer.current);
    setTyping(false);
    const fresh = seed();
    setMessages(fresh);
    try { sessionStorage.setItem(STORE_KEY, JSON.stringify(fresh)); } catch { /* ignore */ }
  }, []);

  return (
    <div className="vp-chatbot">
      {open && (
        <ChatbotWindow
          messages={messages}
          typing={typing}
          showQuick
          onClose={() => setOpen(false)}
          onClear={clearConversation}
          onSend={sendUser}
          onQuick={pickQuick}
          onCta={() => setOpen(false)}
        />
      )}
      <ChatbotButton open={open} onToggle={() => setOpen((v) => !v)} />
    </div>
  );
}
