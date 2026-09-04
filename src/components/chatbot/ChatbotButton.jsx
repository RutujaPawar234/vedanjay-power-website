export default function ChatbotButton({ open, onToggle }) {
  return (
    <button
      type="button"
      className={`vp-chatbot__fab ${open ? 'is-open' : ''}`}
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="vp-chat-window"
      aria-label={open ? 'Close chat' : 'Open chat with Vedanjay Power'}
    >
      {!open && <span className="vp-chatbot__pulse" aria-hidden="true" />}
      <i className={`bi ${open ? 'bi-x-lg' : 'bi-chat-dots-fill'}`} aria-hidden="true" />
    </button>
  );
}
