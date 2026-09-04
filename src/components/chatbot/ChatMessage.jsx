import { Link } from 'react-router-dom';

export default function ChatMessage({ message, onCta }) {
  const isBot = message.from === 'bot';
  return (
    <div className={`chatmsg ${isBot ? 'chatmsg--bot' : 'chatmsg--user'}`}>
      <div className="chatmsg__bubble">
        {message.text}
        {isBot && message.cta && (
          <Link to={message.cta.to} className="chatmsg__cta" onClick={onCta}>
            {message.cta.label} <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        )}
      </div>
      <time className="chatmsg__time">{message.time}</time>
    </div>
  );
}
