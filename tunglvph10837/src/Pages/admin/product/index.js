
import React, { Componrnt } from 'react'
import { Link } from 'react-router-dom'
const AdminProducts = (props) => {
    return (
        <div>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Descriptions</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        <th> <div>
                            <Link to="/admin/product/add" className="btn btn-primary">Add</Link>
                        </div></th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td> <img  src={`http://localhost:4000/api/products/photo/${product._id}`} alt="" width="50px"></img></td>
                            <td>{product.description}</td>
                            <td>{product.quantity}</td>
                            <td>
                                <Link to={`/admin/product/${product._id}`} className="btn btn-primary">Edit</Link>
                                <Link className="btn btn-danger" onClick={() => props.onDelete(product._id)}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )
}
export default AdminProducts