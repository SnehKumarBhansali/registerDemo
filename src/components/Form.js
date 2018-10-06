import React from 'react';
import {
    FormGroup,
    FormControl,
    ControlLabel
} from 'react-bootstrap';
import {
    withRouter
} from 'react-router-dom'

import RegisterButton from './RegisterButton'
import '../styles/components/Register.css'

const profilePicStyles = { maxWidth: 320, margin: '0 auto 30px' };

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userMobile: '',
            profilepic: '',
            error: undefined,
            imageUrl: ''
        }
    }

    componentWillMount() {
        const { userName, userMobile, imageUrl } = this.props;
        if (userName && userMobile && imageUrl) this.setState({ userName, userMobile, imageUrl })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    validateForm = () => {
        return (
            this.state.userName.length > 0 &&
            this.state.userMobile > 0
        )
    }

    encodeFileToBase64 = (event) => {
        let selectedFile = event.target.files[0]

        //Check File is not Empty
        if (selectedFile.size > 0) {
            // FileReader function for read the file.
            let fileReader = new FileReader();

            // Onload of file read the file content
            fileReader.onload = (fileLoadedEvent) => {
                const base64 = fileLoadedEvent.target.result;
                this.setState({ profilepic: base64.split(',')[1] })
            };
            fileReader.readAsDataURL(selectedFile);

        }
    }

    renderForm() {
        return (
            <form>
                <FormGroup validationState='error'>
                    <p style={{ fontSize: '15px', textAlign: 'center', color: 'red' }}>{this.state.error}</p>
                </FormGroup>
                <FormGroup controlId='userName' bsSize='large'>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        autoFocus
                        type='text'
                        value={this.state.userName}
                        onChange={this.handleChange}
                        disabled={this.props.match.path === "/dashboard"}
                    />
                </FormGroup>
                <FormGroup controlId='userMobile' bsSize='large'>
                    <ControlLabel>Mobile Number</ControlLabel>
                    <FormControl
                        type='number'
                        min='0'
                        value={this.state.userMobile}
                        onChange={this.handleChange}
                        disabled={this.props.match.path === "/dashboard"}
                    />
                </FormGroup>

            </form>
        )

    }

    handleSubmit = () => {
        if (this.state.userName && this.state.userMobile && this.state.profilepic) {
            fetch('https://xqbfdokg63.execute-api.us-east-1.amazonaws.com/dev/storeimage', {
                method: "post",
                body: JSON.stringify({ 'image64': this.state.profilepic })
            }).then((response) => response.json())
                .then((data) => {
                    let imageLink = data['imageurl']
                    const { userName, userMobile } = this.state
                    this.props.handleForm({ userName, userMobile, imageUrl: imageLink })
                    this.props.history.push('/dashboard')
                }).catch((err) => {
                    console.log(err)
                })
        } else {
            this.setState({ error: "Please fill all the details" })
        }
    }

    render() {
        return (
            <div className='Register'>
                {this.renderForm()}
                {this.props.match.path === "/dashboard" ?
                    <FormGroup style={{ textAlign: 'center' }}>
                        <img src={this.state.imageUrl} width="250px" height="250px" />
                    </FormGroup> :
                    <FormGroup controlId='profilePic' style={profilePicStyles}>
                        <ControlLabel>Profile Picture </ControlLabel>
                        <FormControl
                            type="file"
                            accept=".jpeg,.jpg,.png"
                            onChange={this.encodeFileToBase64}
                        />
                    </FormGroup>}
                {this.props.match.path === "/dashboard" || <RegisterButton handleSubmit={this.handleSubmit} />}
            </div>
        )
    }
}

export default withRouter(RegisterForm);