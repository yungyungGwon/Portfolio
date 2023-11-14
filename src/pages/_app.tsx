import React from 'react'
import '../public/reset.css'

const App = ({Component, pageProps}) => {
    return (
        <Component {...pageProps} />
    )
}

export default App