import { Helmet } from 'react-helmet-async';

/**
 * Per-page SEO metadata. Defaults suit the homepage.
 */
export default function SEO({
  title = 'Vedanjay Power Pvt. Ltd. | Renewable Energy & Power Sector Solutions',
  description = 'Vedanjay Power Pvt. Ltd. delivers integrated power-sector solutions across renewable energy, Forecasting & Scheduling, QCA services, open access, ABT metering, telemetry, electrical infrastructure, transmission and grid consultancy.',
  canonical = 'https://vedanjay-power.com/',
  jsonLd = null,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vedanjay Power Pvt. Ltd." />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
