// components/SEO.tsx
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  structuredData?: Record<string, any>; // optional JSON-LD
  noindex?: boolean; // safety switch if you ever need it
}

export default function SEO({
  title,
  description,
  url,
  image,
  structuredData,
  noindex,
}: SEOProps) {
  const jsonLd = structuredData ? JSON.stringify(structuredData) : null;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      )}
    </Head>
  );
}
