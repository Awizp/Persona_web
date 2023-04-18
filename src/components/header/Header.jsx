import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/logo.png"
import { FaOpencart } from "react-icons/fa"
import { GoThreeBars } from "react-icons/go"

export default function Header() {

    const [showMenu, setShowMenu] = useState(true)

    const toggleMenu = () => {
        setShowMenu((showMenu) => !showMenu)
    }

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="logo-png" />
                <span>Persona</span>
            </div>
            <div className={css.right}>

                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars />
                </div>

                <ul className={css.menu} style={{ display: showMenu ? "inherit" : "none" }}>
                    <li>New</li>
                    <li>Collections</li>
                    <li>Brand</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>

                <input type="text" className={css.search} placeholder='search' />

                <FaOpencart className={css.cart} />
            </div>
        </div>
    )
}
