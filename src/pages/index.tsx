import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import Footer from '../components/Footer'
import { useState } from 'react'

const Index = () => {
    const [component, setComponent] = useState<any>(<Home />)
    
    return(
    <div>
        <Header setComponent={setComponent}/>
        {component}
        <Footer />
    </div>
    )
}

export default Index