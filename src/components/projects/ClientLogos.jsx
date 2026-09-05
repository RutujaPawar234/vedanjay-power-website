import { useState } from 'react';
import { CLIENTS } from '../../data/portfolioData.js';

/**
 * Portfolio clients / partners. Shows the official logo when an approved
 * asset exists at /public/images/clients/<slug>.png, otherwise a clean
 * name tile. No fabricated or scraped logos.
 */
function ClientTile({ client }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="client-tile" title={client.name}>
      {!failed ? (
        <img
          className="client-tile__logo"
          src={`/images/clients/${client.slug}.png`}
          alt={`${client.name} logo`}
          onError={() => setFailed(true)}
          onLoad={(e) => { if (!e.currentTarget.naturalWidth) setFailed(true); }}
        />
      ) : (
        <span className="client-tile__name">{client.name}</span>
      )}
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="section" id="clients">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Clients &amp; Partners</span>
          <h2 className="section-title mt-2">Trusted across the renewable-energy portfolio</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            Renewable-energy clients supported under our QCA / Forecasting &amp; Scheduling operations.
          </p>
        </div>

        <div className="client-grid reveal">
          {CLIENTS.map((c) => (
            <ClientTile key={c.slug} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
