import React from 'react'
import { Link } from 'react-router-dom'
const Products = (props) => {
  return (
    <div>

      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Products
      </h2>
          </div>
          <div className="row">
            {props.products.slice(0,8).map((item ,index) => {
              return <div className="col-sm-6 col-xl-3" key={index}>
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
                        New
                  </span>
                    </div>
                  </a>
                </div>
              </div>
            })}
          </div>
        </div>
        <div className="btn-box">
          <Link to="/allproduct">
            View All
    </Link>
        </div>
      </section>
    </div>

  )
}


export default Products