import React, {useState} from 'react'
import css from "./Products.module.css"
import Plane from "../../assets/plane.png"
import {ProductsData} from "../../data/products"
import {useAutoAnimate} from "@formkit/auto-animate/react"

export default function Products() {

    const[menuProducts, setMenuProducts] = useState(ProductsData)

    const filter = (type)=>{
        setMenuProducts(ProductsData.filter((products)=>(products.type === type)))
    }

    const[parent] = useAutoAnimate()

  return (
    <div className={css.products_container}>
        <img src={Plane} alt="plane-img" />
        <h1>Our featured products</h1>

        <div className={css.products}>
            <ul className={css.product_menu}>
                <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditioners</li>
                <li onClick={()=>filter("foundation")}>Foundations</li>
            </ul>

            <div className={css.product_list} ref={parent}>
                {
                    menuProducts.map((products, i)=>(
                        <div className={css.product}>
                            <div className="left_side">
                                <div className={css.product_name}>
                                    <span>{products.name}</span>
                                    <span>{products.detail}</span>
                                </div>
                                <span>{products.price}$</span>
                                <div>Shop Now!</div>
                            </div>

                            <img src={products.img} alt="product-img" className="product_img" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
