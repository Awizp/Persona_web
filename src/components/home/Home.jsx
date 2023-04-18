import React from 'react'
import css from "./Home.module.css"
import HeroImg from "../../assets/hero.png"
import { RiHandbagFill } from "react-icons/ri"
import { AiOutlineArrowRight } from "react-icons/ai"
import { motion } from "framer-motion"

export default function Home() {

    const transition = { duration: "10ms", type: "spring" }

    return (
        <div className={css.container}>
            {/* left side of container */}
            <div className={css.container_sides}>
                <div className={css.new_item}>
                    <span>Skin protection cream</span>
                    <span>New item</span>
                </div>

                <div className={css.trend}>
                    <span>Trendy collection</span>
                    <span>Lorem ipsum adipisicing elit non quos.</span>
                </div>
            </div>

            {/* middle side of container */}
            <div className={css.wrapper}>
                <motion.div initial={{ bottom: "2rem" }} whileInView={{ bottom: "0rem" }}
                    transition={transition} className={css.img_circle}></motion.div>
                <motion.img initial={{ bottom: "-2rem" }} whileInView={{ bottom: "0rem" }}
                    transition={transition} src={HeroImg} alt="hero-png" />

                <motion.div initial={{ right: "5%" }} whileInView={{ right: "2%" }}
                    transition={transition} className={css.cart_bag}>
                    <RiHandbagFill />
                    <div className={css.signup}>
                        <span>Signup offers</span>

                        <div>
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* right side of container */}
            <div className={css.container_sides}>
                <div className={css.traffic}>
                    <span>1m</span>
                    <span>Our followers</span>
                </div>
                <div className={css.customers}>
                    <span>106k</span>
                    <span>Happy customers</span>
                </div>
            </div>
        </div >
    )
}
