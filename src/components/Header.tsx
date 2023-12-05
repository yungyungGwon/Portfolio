import Wrapper from '../public/assets/styles/header'
import Profile from '../components/Profile'
import Student from '../components/Student'
import Company from '../components/Company'
import Contact from '../components/Contact'
import { useState } from 'react'

const MenuList = [
        {
            itemKey: 0,
            title: 'Profile',
            component: <Profile />  
        },
        {
            itemKey: 1,
            title: 'Student',
            component: <Student />
        },
        {
            itemKey: 2,
            title: 'Company',
            component: <Company />
        },
        {
            itemKey: 3,
            title: 'Contact',
            component: <Contact />
        },
    ]

const Header = ({setComponent}: any) => {
    const [ isVisible, setIsVisible ] = useState<Boolean>(false)

    return(
        <Wrapper>
            <div className='navBarTitle' onClick={() => { setComponent(<Profile />)}}>
                Yungyong Gwon
            </div>
            <div className='navBarContent'>
                {MenuList.map(item => {
                    return (
                        <div
                            key={item.itemKey} 
                            onClick={() => {
                                setComponent(item.component)
                                setIsVisible(!isVisible)
                            }}>{item.title}
                        </div>
                    )
                })}
            </div>

            {/* {isVisible ? (
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
            )} */}
        </Wrapper>
    )
}

export default Header
