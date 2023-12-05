import Wrapper from '../public/assets/styles/footer'
import { useEffect, useState } from 'react'

const Footer = () => {
    const [date, setDate] = useState<number>(0)
    
    useEffect(() => {
        setDate(new Date().getFullYear())
    }, [])

    return (
        <Wrapper>
            &copy;{date} YungyoungGwon all right reserved
        </Wrapper>
    )
}

export default Footer
