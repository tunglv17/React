import React from 'react'
import { Redirect , Route } from 'react-router'
import { isAuthenticated } from '.'


const AdminRoute = ({ children }) => {
    return (
        <div>
            <Route render={()=>{
                return isAuthenticated() && isAuthenticated().user.role == 1 ? children : <Redirect to={{pathname : '/signin'}} />
            }}/>
        </div>
    )
}

export default AdminRoute