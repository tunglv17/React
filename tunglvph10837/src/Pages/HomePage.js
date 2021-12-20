import React from 'react'
 import Album from '../components/Album/index'
 import Banner from '../components/Banner/index'
 import Footer from '../components/Footer/index'
import Products from '../components/NewProduct'
import ProductHot from '../components/ProductHot'

export const HomePage = (props) => {
    return (
        <div>
            <Banner />
            <ProductHot {...props}/>
            <Products {...props}/>
            <Album/>
            <Footer/> 
        </div>
    )
}
