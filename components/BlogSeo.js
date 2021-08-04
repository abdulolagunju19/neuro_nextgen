import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
    const date = new Date(publishedAt).toISOString()

    return (
        <>
            <NextSeo
                title={title}
                description={summary}
                canonical={url}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: date
                    },
                    url,
                    title,
                    description: summary
                }}
            />
            <ArticleJsonLd
                authorName="Abdul-Samad Olagunju"
                dateModified={date}
                datePublished={date}
                description={summary}
                publisherName="Abdul-Samad Olagunju"
                title={title}
                url={url}
            />
        </>
    )
}

export default BlogSeo
