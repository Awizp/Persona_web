import React from 'react'
import css from "./Virtual.module.css"
import Shade from "../../assets/shade.png"
import ReactCompareImage from "react-compare-image"
import Before from "../../assets/before.png"
import After from "../../assets/after.png"

export default function Virtual() {
  return (
    <div className={css.virtual_container}>
      <div className={css.left_side}>
        <span>Virtual Try-on</span>
        <span>Never buy the wrong Shade Again!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="" />
      </div>

      <div className={css.right_side}>
        <div className={css.wrapper}>
        <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  )
}
