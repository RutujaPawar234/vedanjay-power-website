/* ============================================================
   Vedanjay Power — Renewable portfolio under QCA / Forecasting &
   Scheduling management. Source: company "Our Projects" sheet.
   This is the MANAGED F&S/QCA portfolio (not owned or installed
   generation capacity). Total verified: 5,509.18 MW.
   Ambiguous export locations are marked "As per project records".
   ============================================================ */

export const PORTFOLIO_TOTAL_MW = '5,509.18';
export const PORTFOLIO_COUNT = 34;

// tech: 'Solar' | 'Wind' only where the record names it; else 'Renewable'.
export const PORTFOLIO_PROJECTS = [
  { name: 'Adani', mw: 1232, state: 'Rajasthan', tech: 'Renewable' },
  { name: 'Mundra Solar – Kasipet', mw: 15, state: 'Telangana', tech: 'Solar' },
  { name: 'Mundra Solar – Mandamarri', mw: 28, state: 'Telangana', tech: 'Solar' },
  { name: 'Mundra Solar – Bhupalpally', mw: 10, state: 'Telangana', tech: 'Solar' },
  { name: 'Mundra Solar – Kothagudam', mw: 37, state: 'Telangana', tech: 'Solar' },
  { name: 'OSEPL', mw: 20, state: 'Maharashtra', tech: 'Renewable' },
  { name: 'FDIPL', mw: 20, state: 'Maharashtra', tech: 'Renewable' },
  { name: 'Kilaj', mw: 20, state: 'Maharashtra', tech: 'Renewable' },
  { name: 'CME', mw: 7, state: 'Maharashtra', tech: 'Renewable' },
  { name: 'Virescent', mw: 20, state: 'Madhya Pradesh', tech: 'Renewable' },
  { name: 'Chandwasa PSS', mw: 10, state: 'Madhya Pradesh', tech: 'Renewable' },
  { name: 'GAIL India Ltd', mw: 10, state: 'Madhya Pradesh', tech: 'Renewable' },
  { name: 'UPC Renewable', mw: 300, state: 'Madhya Pradesh', tech: 'Renewable' },
  { name: 'AWEMPL', mw: 325, state: 'Madhya Pradesh', tech: 'Renewable' },
  { name: 'ZTRIC', mw: 75, state: 'Maharashtra', tech: 'Renewable' },
  { name: 'SEIT', mw: 250, state: 'Madhya Pradesh', tech: 'Renewable' },
  { name: 'TATA Power', mw: 100.08, state: 'Maharashtra', tech: 'Renewable' },
  { name: 'Fourth Patner Energy', mw: 250, state: 'Karnataka', tech: 'Renewable' },
  { name: 'Pick Renew', mw: 19, state: 'Maharashtra', tech: 'Renewable' },
  { name: 'Hero', mw: 155, state: 'MP / Telangana / Rajasthan', tech: 'Renewable' },
  { name: 'Arinsun (Sprng)', mw: 250, state: 'Madhya Pradesh', tech: 'Renewable' },
  { name: 'Mulanur (Sprng)', mw: 300, state: 'Tamil Nadu', tech: 'Renewable' },
  { name: 'SEMBCORP', mw: 250, state: 'Telangana', tech: 'Renewable' },
  { name: 'Enrich', mw: 100, state: 'Maharashtra', tech: 'Renewable' },
  { name: 'Juniper (Solar)', mw: 70, state: 'Maharashtra', tech: 'Solar' },
  { name: 'Juniper (Wind) – Gujarat', mw: 70, state: 'Gujarat', tech: 'Wind' },
  { name: 'Illios Power (Solar)', mw: 50, state: 'Gujarat', tech: 'Solar' },
  { name: 'Sprng', mw: 250, state: 'Madhya Pradesh', tech: 'Renewable' },
  { name: 'Athena', mw: 250, state: 'Madhya Pradesh', tech: 'Renewable' },
  { name: 'Juniper (Wind) – Maharashtra', mw: 50, state: 'Madhya Pradesh', tech: 'Wind' },
  { name: 'Sirmour', mw: 5.1, state: 'As per project records', tech: 'Renewable' },
  { name: 'SVKM', mw: 25, state: 'Maharashtra', tech: 'Renewable' },
  { name: 'JSW (Wind)', mw: 600, state: 'Madhya Pradesh', tech: 'Wind' },
  { name: 'JSW (Solar)', mw: 336, state: 'As per project records', tech: 'Solar' },
];

// Per-state summary (count + total MW), highest capacity first.
export const PORTFOLIO_BY_STATE = (() => {
  const map = new Map();
  for (const p of PORTFOLIO_PROJECTS) {
    const key = p.state;
    const cur = map.get(key) || { state: key, count: 0, mw: 0 };
    cur.count += 1;
    cur.mw += p.mw;
    map.set(key, cur);
  }
  return [...map.values()]
    .map((s) => ({ ...s, mw: Math.round(s.mw * 100) / 100 }))
    .sort((a, b) => b.mw - a.mw);
})();

// Unique portfolio clients / partners (from the "Our Projects" sheet).
// `logo` points to an OFFICIAL asset to be dropped at
// /public/images/clients/<slug>.png — never a fabricated/scraped logo.
// Until a file exists, a name tile is shown.
const CLIENT_NAMES = [
  'Adani', 'Mundra Solar', 'OSEPL', 'FDIPL', 'Kilaj', 'CME', 'Virescent',
  'Chandwasa PSS', 'GAIL India Ltd', 'UPC Renewable', 'AWEMPL', 'ZTRIC', 'SEIT',
  'TATA Power', 'Fourth Patner Energy', 'Pick Renew', 'Hero', 'Sprng', 'SEMBCORP',
  'Enrich', 'Juniper', 'Illios Power', 'Athena', 'Sirmour', 'SVKM', 'JSW',
];

export const CLIENTS = CLIENT_NAMES.map((name) => ({
  name,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
}));
