import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/** Types `text` out character by character when `enabled`. */
function useTypewriter(text, enabled) {
  const [out, setOut] = useState(enabled ? '' : text);

  useEffect(() => {
    if (!enabled) { setOut(text); return undefined; }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setOut(text); return undefined; }
    setOut('');
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [text, enabled]);

  return out;
}

export default function ChatMessage({ message, onCta }) {
  const isBot = message.from === 'bot';
  const animate = isBot && message.animate;
  const shown = useTypewriter(message.text, animate);
  const typing = shown.length < message.text.length;

  return (
    <div className={`chatmsg ${isBot ? 'chatmsg--bot' : 'chatmsg--user'}`}>
      <div className="chatmsg__bubble">
        {shown}
        {typing && <span className="chatmsg__caret" aria-hidden="true" />}
        {isBot && message.cta && !typing && (
          <Link to={message.cta.to} className="chatmsg__cta" onClick={onCta}>
            {message.cta.label} <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        )}
      </div>
      <time className="chatmsg__time">{message.time}</time>
    </div>
  );
}
