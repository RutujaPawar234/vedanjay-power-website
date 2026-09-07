import { Helmet } from 'react-helmet-async';

/**
 * Per-page SEO metadata. Defaults suit the homepage.
 */
const OG_IMAGE = 'https://vedanjay-power.com/images/hero/transmission.jpg';

export default function SEO({
  title = 'Vedanjay Power Pvt. Ltd. | Renewable Energy & Power Sector Solutions',
  description = 'Vedanjay Power Pvt. Ltd. delivers integrated power-sector solutions across renewable energy, Forecasting & Scheduling, QCA services, open access, ABT metering, telemetry, electrical infrastructure, transmission and grid consultancy.',
  canonical = 'https://vedanjay-power.com/',
  image = OG_IMAGE,
  jsonLd = null,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vedanjay Power Pvt. Ltd." />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
