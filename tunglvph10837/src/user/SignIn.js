import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Redirect, useHistory } from 'react-router-dom'
import { signIn, authenticate, isAuthenticated } from '../auth'
const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirectToRef, setRedirectToRef] = useState(false);
    const { user } = isAuthenticated();

    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                    setLoading(false);
                } else {

                    authenticate(dataUser, () => {
                        setRedirectToRef(true);
                    })
                }

            })
    }
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const redirectUser = () => {
        if (redirectToRef) {
            if (user.role == 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/user/dashboard" />
            }
        }
    }
    const showLoading = () => {
        return loading && <div className="alert alert-info">
            <h2>...Loading</h2>
        </div>
    }
    const signInForm = () => {
        return (
            <div className="container1">
                <div className="title-lg">Đăng Nhập</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="user-details">
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
            {redirectUser()}
            {showError()}
            {showLoading()}
            {signInForm()}
        </div>
    )
}

export default SignIn
