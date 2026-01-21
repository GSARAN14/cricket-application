import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
}

export function SEO({ title, description, image }: SEOProps) {
    const siteTitle = "South Zone Women's Cricket Tournament";
    const defaultDescription = "Official app for the South Zone Women's Cricket Tournament organized by K.S. Rangasamy College of Technology.";

    return (
        <Helmet>
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description || defaultDescription} />
            {image && <meta property="og:image" content={image} />}
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
}
