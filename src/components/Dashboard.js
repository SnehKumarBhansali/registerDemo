import React from 'react';
import RegisterForm from './Form';

const dashboardPage = ({ userName, userMobile, imageUrl }) => {
    return (
        <div>
            <RegisterForm userName={userName} userMobile={userMobile} imageUrl={imageUrl} />
        </div>
    )
}

export default dashboardPage;