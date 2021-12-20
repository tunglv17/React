import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom'
import ProductAPI from '../../../api/ProductAPI'
const EditProductPage = ({onEdit}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    let { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProduct = async () => {
            try {
                const {data} = await ProductAPI.get(id)
                setProduct(data)
            } catch (error) {
                console.error(error)
            }
        };
        getProduct();
    })
    const onSubmit = (data) => {
        const uploads = new FormData();
        uploads.append("name", data.name);
        uploads.append("price", data.price);
        uploads.append("photo", data.photo[0]);
        uploads.append("description", data.description);
        uploads.append("quantity", data.quantity);
        onEdit(uploads);
        history.push('/admin/product');
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} enctype="mutilpart/form-data">
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        defaultValue={product.name}
                        placeholder="Tên SP"
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="product-name">Tên</label>
                    {errors.name && <span className="text-danger mt-2">Field</span>}
                </div>
                <div className="">
                    <label htmlFor="product-photo">Image</label>
                    <input type="file"
                        className="form-control"
                        id="product-photo"
                        placeholder="Photo"
                        {...register('photo', { required: true })}
                    />

                    {errors.photo && <span className="text-danger mt-2">Field</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        defaultValue={product.price}
                        placeholder="Price"
                        {...register('price', { required: true })}
                    />
                    <label htmlFor="product-price">Price</label>
                    {errors.price && <span className="text-danger mt-2">Field</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="number"
                        className="form-control"
                        id="product-quantity"
                        defaultValue={product.quantity}
                        placeholder="Quantity"
                        {...register('quantity', { required: true })}
                    />
                    <label htmlFor="product-quantity">Quantity</label>
                    {errors.quantity && <span className="text-danger mt-2">Field</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-desc">Mô tả</label>
                    <textarea type="text" cols="80"
                        className="form-control"
                        id="product-desc"
                        defaultValue={product.description}
                        {...register('description', { required: true })}
                    ></textarea>
                    {errors.description && <span className="text-danger mt-2">Field</span>}
                </div>
                <button type="submit" className="btn btn-primary">ADD</button>
            </form>
        </div>
    )
}

export default EditProductPage
