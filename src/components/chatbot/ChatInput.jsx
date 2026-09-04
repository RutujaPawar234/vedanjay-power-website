import { useState } from 'react';

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    onSend(t);
    setText('');
  };

  return (
    <form className="chat-input" onSubmit={submit}>
      <label className="visually-hidden" htmlFor="chat-input-field">Type your message</label>
      <input
        id="chat-input-field"
        className="chat-input__field"
        type="text"
        placeholder="Type your message…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoComplete="off"
      />
      <button type="submit" className="chat-input__send" aria-label="Send message" disabled={disabled || !text.trim()}>
        <i className="bi bi-send-fill" aria-hidden="true" />
      </button>
    </form>
  );
}
