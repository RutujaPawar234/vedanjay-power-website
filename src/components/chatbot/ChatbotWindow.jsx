import { useEffect, useRef } from 'react';
import Emblem from '../Emblem.jsx';
import ChatMessage from './ChatMessage.jsx';
import QuickReplies from './QuickReplies.jsx';
import ChatInput from './ChatInput.jsx';

export default function ChatbotWindow({ messages, typing, showQuick, onClose, onClear, onSend, onQuick, onCta }) {
  const bodyRef = useRef(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  return (
    <div className="vp-chatbot__panel" id="vp-chat-window" role="dialog" aria-label="Vedanjay Power assistant">
      <div className="vp-chatbot__header">
        <span className="vp-chatbot__avatar" aria-hidden="true"><Emblem className="vp-chatbot__emblem" /></span>
        <div className="vp-chatbot__id">
          <strong>Vedanjay Assistant</strong>
          <span className="vp-chatbot__status"><span className="vp-chatbot__dot" aria-hidden="true" /> Online</span>
        </div>
        <button type="button" className="vp-chatbot__act" onClick={onClear} aria-label="Clear conversation" title="Clear conversation">
          <i className="bi bi-arrow-counterclockwise" aria-hidden="true" />
        </button>
        <button type="button" className="vp-chatbot__act" onClick={onClose} aria-label="Minimize chat" title="Minimize">
          <i className="bi bi-dash-lg" aria-hidden="true" />
        </button>
      </div>

      <div className="vp-chatbot__body" ref={bodyRef}>
        {messages.map((m) => (
          <ChatMessage key={m.id} message={m} onCta={onCta} />
        ))}

        {typing && (
          <div className="chatmsg chatmsg--bot" aria-label="Assistant is typing">
            <div className="chatmsg__bubble chatmsg__typing">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}

        {showQuick && !typing && <QuickReplies onPick={onQuick} />}
      </div>

      <div className="vp-chatbot__footer">
        <ChatInput onSend={onSend} disabled={typing} />
      </div>
      <p className="vp-chatbot__note">Answers use approved Vedanjay Power information. For anything else, please contact our team.</p>
    </div>
  );
}
