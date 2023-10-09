import React from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler'

const Header = () => {

    const [menuOpen, setMenuOpen] = React.useState(false)
    function handleClick() {
        setMenuOpen(prevState => !prevState)
    }

    const getMenuStyle = (menuOpen) => {
        if(document.documentElement.clientWidth <= 800){
            return {right: !menuOpen && "-100%"}
        }
    }

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler
                onOutsideClick={()=> {
                  setMenuOpen(false)  
                }}
                >
                    <div className="flexCenter h-menu"
                    style={getMenuStyle(menuOpen)}>
                        <a href="">Residencies</a>
                        <a href="">Our Value</a>
                        <a href="">Contac Us</a>
                        <a href="">Get Started</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={handleClick}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    )
}
export default Header