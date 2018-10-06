import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import RegisterPage from '../components/Register'
import DashboardPage from '../components/Dashboard'
import HelpPage from '../components/Help'
import NotFoundPage from '../components/NotFound'

const AppRouter = (props) => {
    const { handleForm, userName, userMobile, imageUrl} = props;
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" render = {(props) => <RegisterPage {...props} handleForm={handleForm} />} exact={true} />
                    <Route path="/register" render = {(props) => <RegisterPage {...props} handleForm={handleForm} />} />
                    <Route path="/dashboard" render = {(props) => <DashboardPage {...props} userName={userName} userMobile={userMobile} imageUrl={imageUrl} />}  />
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;