import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom'
import CategoryAPI from '../../../api/CategoryAPI';
const EditCategoryPage = ({ onEditCate }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const { id } = useParams();
    const [category, setCategory] = useState({});
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await CategoryAPI.get(id)
                setCategory(data);
            } catch (error) {
                console.error(error)
            }
        }
        getCategory();
    }, []);
    const onHandleSubmit = (data) => {
        const newCate = {
            id: id,
            ...data
        }
        onEditCate(id, newCate);
        history.push('/admin/category');
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="cate-name"
                        defaultValue={category.name}
                        placeholder="Tên"
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="cate-name">Tên</label>
                    {errors.name && <span className="text-danger mt-2">Field</span>}
                </div>
                <button type="submit" className="btn btn-primary">ADD</button>
            </form>
        </div>
    )
}

export default EditCategoryPage

