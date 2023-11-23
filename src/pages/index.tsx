import React from 'react'
import Header from '../components/Header'
import { useEffect, useState } from 'react'

const Index = () => {
    const [component, setComponent] = useState<any>(null)
    
    return(
    <div>
        <Header setComponent={setComponent}/>
        {component}
    </div>
    )
}

export default Index