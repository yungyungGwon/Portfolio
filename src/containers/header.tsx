import Wrapper from '../assets/styles/header'
import Image from 'next/image'
import HambugerIcon from '@/assets/images/hamburger2.png'
import CloseIcon from '@/assets/images/close.png'

const Header = () => {
    return(
        <Wrapper>
            <div className="header_wrap">
                <h1 className="header_title">
                        <a href="#">Hello, Portfolio World</a>
                </h1>
                <nav className="gnb">
                    <h2 className="main_menu">메인메뉴</h2>
                    <ul className = "gnb_list">
                        <li className="btn">
                            <a href="#home" data-tabnum="0">Home</a>
                        </li>
                        <li className="btn">
                            <a href="#profile" data-tabnum="1">Profile</a>
                        </li>
                        <li className="btn">
                            <a href="#project" data-tabnum="2">Project</a>
                        </li>
                        <li className="btn">
                            <a href="#contact" data-tabnum="3">contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="btn_hamburger">
                    <button id="burger_icon">
                        <Image 
                        src={HambugerIcon}
                        loading='lazy'
                        alt='hamburgerImage'/>
                    </button>
                    <button id="close_icon">
                        <Image 
                        src={CloseIcon}
                        loading='lazy'
                        alt='closeImage'/>
                    </button>
                </div>
            </div>
        </Wrapper>
    )
}

export default Header
