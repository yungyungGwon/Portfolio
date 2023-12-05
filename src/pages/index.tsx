import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import { useState } from 'react'

const Index = () => {
    const [component, setComponent] = useState<any>(<Profile />)
    
    return(
    <>
        <Header setComponent={setComponent}/>
        {component}
        <Footer />
    </>
    )
}

export default Index