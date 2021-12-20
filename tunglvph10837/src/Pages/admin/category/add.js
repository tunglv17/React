import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
const AddCategoryPage = ({ onAddCate }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit = (data) => {
        onAddCate(data);
        history.push('/admin/category');
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="cate-name"
                        placeholder="Tên Cate"
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

export default AddCategoryPage
