import React from 'react'
import { Link } from 'react-router-dom'
const ProductHot = (props) => {
  return (
    <div>
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Hot Product
      </h2>
          </div>
          <div className="row">
            {props.products.filter(item => item.hot == true).slice(0,4).map(item => {
              return <div className="col-sm-6 col-xl-3">
                <div className="box">
                  <a href>
                    <div className="img-box">
                      <img src={`http://localhost:4000/api/products/photo/${item._id}`} alt=""></img>
                    </div>
                    <div className="detail-box">
                      <h6>
                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                      </h6>
                      <h6>
                        Price:
                            <span>
                          {item.price}
                        </span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>
                        Hot
                          </span>
                    </div>
                  </a>
                </div>
              </div>
            })}
          </div>
        </div>
        <div className="btn-box">
          <a href>
            View All
    </a>
        </div>
      </section>
    </div>

  )
}


export default ProductHot