import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp'


import { AboutPage } from './Pages/AboutPage';
import { HomePage } from './Pages/HomePage';
import { Error404 } from './Pages/404';

import WebsiteLayout from './layouts/Website';
import AdminLayout from './layouts/Admin';
import ProductDetailPage from './Pages/product-detail'
import AdminProducts from './Pages/admin/product/index'
import AdminProductAddPage from './Pages/admin/product/add';
import EditProductPage from './Pages/admin/product/edit';
import EditCategoryPage from './Pages/admin/category/edit';
import AdminCategory from './Pages/admin/category';
import AdminContact from './Pages/admin/contact';
import AddCategoryPage from './Pages/admin/category/add';
import PrivateRoute from './auth/privateRoute';
import UserDashboard from './user/userDashboard';
import Header from './components/Header';
import AdminRoute from './auth/adminRoute';
import AdminDashboard from './user/adminDashboard';
import AllProduct from './Pages/AllProduct';
import ContactPage from './Pages/ContactPage';
import CategoryProductPage from './Pages/CategoryProduct';


const Routers = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin/:path?/:path?">
                    <AdminLayout>
                        <Switch>
                            <AdminRoute exact path="/admin/dashboard">
                                <AdminDashboard />
                            </AdminRoute>
                            <Route exact path="/admin/product">
                                <AdminProducts {...props} />
                            </Route>
                            <Route exact path="/admin/contact">
                                <AdminContact {...props} />
                            </Route>
                            <Route exact path="/admin/product/add">
                                <AdminProductAddPage {...props} />
                            </Route>
                            <Route exact path="/admin/category/add">
                                <AddCategoryPage {...props} />
                            </Route>
                            <Route path="/admin/product/:id">
                                <EditProductPage {...props} />
                            </Route>
                            <Route path="/admin/category/:id">
                                <EditCategoryPage {...props} />
                            </Route>
                            <Route exact path="/admin/dashboard">
                                Dashboard
                            </Route>
                            <Route exact path="/admin/category">
                                <AdminCategory {...props} />
                            </Route>
                            <Route exact path="/admin/user">
                                User
                            </Route>
                        </Switch>
                    </AdminLayout>
                </Route>
                <Route>
                    <WebsiteLayout>
                        <Header />
                        <Switch>
                            <Route exact path="/">
                                <HomePage {...props} />
                            </Route>
                            <Route exact path="/allproduct">
                                <AllProduct {...props} />
                            </Route>
                            <PrivateRoute exact path="/user/dashboard">
                                <UserDashboard />
                            </PrivateRoute>
                           
                            <Route exact path="/product/:id">
                                <ProductDetailPage {...props} />
                            </Route>
                            <Route exact path="/category/:id">
                                <CategoryProductPage {...props} />
                            </Route>
                            <Route exact path="/contact">
                                <ContactPage {...props}/>
                            </Route>
                            <Route path="/signin" exact component={SignIn} />
                            <Route path="/signup" exact component={SignUp} />
                            <Route path="/about" exact component={AboutPage} />
                            {/* <Route path="/contact" exact component={ContactPage} /> */}
                            <Route path="*" exact component={Error404} />
                            <Route path="/product/:id">
                                <ProductDetailPage />
                            </Route>
                        </Switch>
                    </WebsiteLayout>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routers
