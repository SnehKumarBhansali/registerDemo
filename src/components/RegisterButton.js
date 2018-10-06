import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

const wellStyles = { maxWidth: 320, margin: '0 auto 10px' };

const registerButton = (props) => {
    return (
        <div style={wellStyles}>
            <ButtonToolbar>
                <Button bsStyle="success" bsSize="large" block
                    type='submit'
                    onClick={props.handleSubmit}>Register
                </Button>
            </ButtonToolbar>
        </div>
    )
}

export default registerButton;