import React from 'react'
import Head from 'next/head'
import '../public/reset.css'

const App = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <link rel='icon' href='/images/sheepFavicon.png' />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App