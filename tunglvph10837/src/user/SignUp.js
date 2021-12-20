import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { signUp } from '../auth'
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false)

    const onSubmit = (data, e) => {
        signUp(data)
            .then(dataInput => {
                if (dataInput.error) {
                    setError(dataInput.error);
                } else {
                    e.target.reset()
                    setError("");
                    setSuccess(true);
                }

            })
    }
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const showSuccess = () => {
        return <div className="alert alert-info" style={{ display: success ? "block" : "none" }}>
            Bạn đã tạo tài khoản thành công. Click để <Link to="/signin">Đăng nhập</Link>
        </div>
    }
    const signUpForm = () => {
        return (
            <div className="container1">
                <div className="title-lg">Đăng Kí</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="user-details">
                        <div className="input-box">
                            <label htmlFor="name" className="form-label">Tên</label>
                            <input type="text" className="form-control" placeholder="Enter your name"
                                id="name"
                                {...register('name')}
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" placeholder="Enter your email"
                                id="email"
                                {...register('email')}
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="password" className="form-label">Mật Khẩu</label>
                            <input type="password" className="form-control" placeholder="Enter your password"
                                id="password"
                                {...register('password')}
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary">Đăng Ký</button>
                </form>
            </div>
        )
    }
    return (
        <div>
            {showError()}
            {showSuccess()}
            {signUpForm()}
        </div>
    )
}

export default SignUp
