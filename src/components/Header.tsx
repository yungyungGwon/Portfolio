import Wrapper from '../assets/styles/header'
import Image from 'next/image'
import Router from 'next/router'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Project from '../components/Project'
import Contact from '../components/Contact'
import HambugerIcon from '../assets/images/hamburger2.png'
import CloseIcon from '../assets/images/close.png'
import { useState } from 'react'

const Header = ({setComponent}: any) => {
    const [ isVisible, setIsVisible ] = useState<Boolean>(false)
    const MenuList = [
        {
            itemKey: 0,
            title: 'Home',
            component: <Home />
        },
        {
            itemKey: 1,
            title: 'Profile',
            component: <Profile />  
        },
        {
            itemKey: 2,
            title: 'Project',
            component: <Project />
        },
        {
            itemKey: 3,
            title: 'Contact',
            component: <Contact />
        },
    ]

    return(
        <Wrapper>
            <div className='title' onClick={() => { setComponent(<Home />)}}>
                Hello, Portfolio World
            </div>
            {isVisible ? (
            <div className='gnbMenu'>
                <button onClick={() => setIsVisible(!isVisible)}>
                    <Image 
                        src={CloseIcon}
                        width={30}
                        height={30}
                        loading='lazy'
                        unoptimized
                        alt='CloseIcon'/>
                </button>
                <ul className='gnbItem'>
                {MenuList.map(item => {
                    return (
                        <li
                            key={item.itemKey} 
                            onClick={() => {
                                setComponent(item.component)
                                setIsVisible(!isVisible)
                            }}>{item.title}
                        </li>
                    )
                })}
            </ul>
            </div>
            ):(
            <button onClick={() => setIsVisible(!isVisible)}>
                <Image 
                    src={HambugerIcon}
                    width={30}
                    height={30}
                    loading='lazy'
                    unoptimized
                    alt='HambugerIcon'/>
            </button>
            )}
        </Wrapper>
    )
}

export default Header
