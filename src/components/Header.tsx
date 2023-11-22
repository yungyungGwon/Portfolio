import Wrapper from '../assets/styles/header'
import Image from 'next/image'
import Link from 'next/link'
import Home from '../components/Home'
import HambugerIcon from '../assets/images/hamburger2.png'
import CloseIcon from '../assets/images/close.png'

const Header = () => {

    const moveComponent = (componentId: number) => {
        switch(componentId) {
            case 0:
                return <Home />;
            case 1:
                ;
            case 2:
                ;
            case 3:
                ;
            default:
                ;
        }
    }

    return(
        <Wrapper>
            <Link href='/' className='title'>
                Hello, Portfolio World
            </Link>
            <div className='menuList'>
                <div>
                    <div onClick={(event) => {
                        moveComponent(0)
                    }}>
                        Home
                    </div>
                    <div onClick={(event) => {
                        moveComponent(1)
                    }}>
                        Profile
                    </div>
                    <div onClick={(event) => {
                        moveComponent(2)
                    }}>
                        Project
                    </div>
                    <div onClick={(event) => {
                        moveComponent(2)
                    }}>
                        Project
                    </div>

                    <li>
                        <a href="#profile" data-tabnum="1">Profile</a>
                    </li>
                    <li>
                        <a href="#project" data-tabnum="2">Project</a>
                    </li>
                    <li>
                        <a href="#contact" data-tabnum="3">contact</a>
                    </li>
                </div>
            </div>
            <div className='menuBtn'>
                <button>
                    <Image 
                    src={HambugerIcon}
                    width={25}
                    height={25}
                    loading='lazy'
                    unoptimized
                    alt='HambugerIcon'/>
                </button>
                <button>
                    <Image 
                    src={CloseIcon}
                    width={25}
                    height={25}
                    loading='lazy'
                    unoptimized
                    alt='CloseIcon'/>
                </button>
            </div>
        </Wrapper>
    )
}

export default Header
