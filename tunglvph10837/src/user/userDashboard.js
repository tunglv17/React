import React from 'react'
import { Link} from 'react-router-dom'
import { isAuthenticated } from '../auth/index'
const UserDashboard = () => {
    const { user } = isAuthenticated();
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-header">Thanh Toán</div>
                        <ul className = "list-group">
                            <li className="list-group-item"><Link to="/card">Giỏ Hàng</Link></li>
                            <li className="list-group-item"><Link to="/profile">Thông Tin</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card-header">Thông tin User</div>
                        <ul className="list-group">
                            <li  className="list-group-item">Name: {user.name}</li>
                            <li  className="list-group-item">Email: {user.email}</li>
                            <li  className="list-group-item">{user.role == 1 ? 'Admin' : 'Register User'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard
