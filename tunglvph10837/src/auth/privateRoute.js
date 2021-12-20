import React from 'react'
import { Redirect , Route } from 'react-router'
import { isAuthenticated } from '.'


const PrivateRoute = ({ children }) => {
    return (
        <div>
            <Route render={()=>{
                return isAuthenticated() ? children : <Redirect to={{pathname : '/signin'}} />
            }}/>
        </div>
    )
}

export default PrivateRoute
