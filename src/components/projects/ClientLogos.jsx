import { useState } from 'react';
import { CLIENTS } from '../../data/portfolioData.js';

/**
 * Portfolio clients / partners as a continuous marquee. Shows the official
 * logo when an approved asset exists at /public/images/clients/<slug>.png,
 * otherwise a clean name pill. No fabricated or scraped logos.
 */
function ClientItem({ client }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="client-item" title={client.name}>
      {!failed ? (
        <img
          className="client-item__logo"
          src={`/images/clients/${client.slug}.png`}
          alt={`${client.name} logo`}
          onError={() => setFailed(true)}
          onLoad={(e) => { if (!e.currentTarget.naturalWidth) setFailed(true); }}
        />
      ) : (
        <span className="client-item__name">{client.name}</span>
      )}
    </div>
  );
}

function MarqueeRow({ items, reverse }) {
  // Duplicate the list so the loop is seamless.
  const loop = [...items, ...items];
  return (
    <div className="client-marquee" aria-hidden="true">
      <div className={`client-marquee__track ${reverse ? 'client-marquee__track--rev' : ''}`}>
        {loop.map((c, i) => <ClientItem key={`${c.slug}-${i}`} client={c} />)}
      </div>
    </div>
  );
}

export default function ClientLogos() {
  const mid = Math.ceil(CLIENTS.length / 2);
  const rowA = CLIENTS.slice(0, mid);
  const rowB = CLIENTS.slice(mid);

  return (
    <section className="section" id="clients">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Clients &amp; Partners</span>
          <h2 className="section-title clients-title mt-2">Trusted across the renewable-energy portfolio</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            Renewable-energy clients supported under our QCA / Forecasting &amp; Scheduling operations.
          </p>
        </div>
      </div>

      {/* Full-width continuous marquees */}
      <div className="client-marquees reveal">
        <MarqueeRow items={rowA} reverse={false} />
        <MarqueeRow items={rowB} reverse />
      </div>

      {/* Accessible list of all clients (visually hidden, for SR/SEO) */}
      <ul className="visually-hidden">
        {CLIENTS.map((c) => <li key={c.slug}>{c.name}</li>)}
      </ul>
    </section>
  );
}
