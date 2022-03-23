import Head from "next/head";

export default function SiteMeta() {
    return (
        <Head>
            <title>Cache Clouds</title>
            <meta name="description" content="The weather team of the metaverse"/>

            {/*<link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
            {/*<link rel="preconnect" href="https://fonts.gstatic.com"/>*/}
            <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
                  rel="stylesheet"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
                rel="stylesheet"
            />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <link rel="alternate icon" href="/favicon.ico"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff8a01"/>
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <meta property="og:image" content="/mstile-150x150.png"/>
            <meta property="og:url" content="https://www.cacheclouds.io/"/>
            <meta property="og:image:width" content="150"/>
            <meta property="og:image:height" content="150"/>
            <meta property="og:type" content="website"/>
            <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width"/>
        </Head>
    )
}
