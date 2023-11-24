import Wrapper from '../assets/styles/footer'
import { useEffect, useState } from 'react'

const Footer = () => {
    const [ date, setDate ] = useState(new Date().getFullYear())
    return (
        <Wrapper>
            &copy;{date} 권윤경 all right reserved
        </Wrapper>
    )
}

export default Footer
