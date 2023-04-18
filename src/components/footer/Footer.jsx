import React from 'react'
import css from "./Footer.module.css"
import Logo from "../../assets/logo.png"
import { GoLocation } from "react-icons/go"
import { BsTelephone } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import { VscSignIn } from "react-icons/vsc"
import { HiOutlineUsers } from "react-icons/hi"
import { BsLink45Deg } from "react-icons/bs"

export default function Footer() {
    return (
        <div className={css.footer_wrapper}>
            <hr />

            <div className={css.footer_container}>
                <div className={css.logo}>
                    <img src={Logo} alt="logo-img" />
                    <span>Persona</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact US</span>
                        <div className={css.pngLine}>
                            <GoLocation className={css.icon} />
                            <span>Tamilnadu, India</span>
                        </div>

                        <div className={css.pngLine}>
                            <BsTelephone className={css.icon} />
                            <span>+91 9876543210</span>
                        </div>

                        <div className={css.pngLine}>
                            <FiMail className={css.icon} />
                            <span>persona.company@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <div className={css.pngLine}>
                            <VscSignIn className={css.icon} />
                            <span>Sign In</span>
                        </div>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <div className={css.pngLine}>
                            <HiOutlineUsers className={css.icon} />
                            <span>About US</span>
                        </div>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <div className={css.pngLine}>
                            <BsLink45Deg className={css.icon} />
                            <span>Safety Privacy & Terms</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.copyright}>
                <span>All rights reserved @ Awizp 2023</span>
            </div>
        </div>
    )
}
