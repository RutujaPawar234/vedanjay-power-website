import { QUICK_REPLIES } from '../../data/chatbotKnowledge.js';

export default function QuickReplies({ onPick }) {
  return (
    <div className="chat-quick" role="group" aria-label="Quick options">
      {QUICK_REPLIES.map((q) => (
        <button key={q.intent} type="button" className="chat-quick__btn" onClick={() => onPick(q)}>
          {q.label}
        </button>
      ))}
    </div>
  );
}
