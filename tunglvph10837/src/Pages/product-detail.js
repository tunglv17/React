import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductAPI from '../api/ProductAPI'
import Footer from '../components/Footer';
const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id)
                setProduct(data);
            } catch (error) {

            }
        }
        getProduct();
    }, [])
    return (
        <div>
            <div className="box-container">
                <div className="box">
                    <div className="image-container">
                        <div className="big-image">
                        <img src={`http://localhost:4000/api/products/photo/${product._id}`} alt=""></img>
                        </div>
                    </div>
                    <div className="content">
                        <h3 className="title">{product.name}</h3>
                        <div className="price">${product.price}</div>
                        <p>{product.description}</p>
                        <form action>
                            <div className="dropDown">
                                <span> size : </span>
                                <select name id>
                                    <option value="small">small</option>
                                    <option value="medium">medium</option>
                                    <option value="large">large</option>
                                    <option value="extra large">extra large</option>
                                </select>
                                <span> color : </span>
                                <select name id>
                                    <option value="black">black</option>
                                    <option value="blue">blue</option>
                                    <option value="white">white</option>
                                </select>
                            </div>
                            <div className="quantity">
                                <span> Quantity : </span>
                                <input type="number" defaultValue={1} />
                            </div>
                        </form>
                        <a href="#"><button className="btn"> <i className="fas fa-shopping-cart" /> Add to cart </button></a>
                        <span className="stock"> <i className="fas fa-check" /> in stock </span>
                        <div className="share">
                            <a href="#">facebook</a>
                            <a href="#">twitter</a>
                            <a href="#">instagram</a>
                            <a href="#">pinterest</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProductDetailPage
