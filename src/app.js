import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            userMobile: '',
            imageUrl: ''
        }
    }

    handleForm = ({ userName, userMobile, imageUrl }) => {
        this.setState({ userName, userMobile, imageUrl })
    }

    render() {
        const { userName, userMobile, imageUrl } = this.state;
        return (
            <div>
                <AppRouter handleForm={this.handleForm} userName={userName} userMobile={userMobile} imageUrl={imageUrl} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
