import React from 'react';
import RegisterForm from './Form'
import RegisterButton from './RegisterButton'

const registerPage = (props) => {
    return (
        <div>
            <RegisterForm handleForm={props.handleForm}/> 
        </div>
    )
}


export default registerPage;