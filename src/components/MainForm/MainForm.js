import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUp from '../SignUp/SingUp'
import Login from '../Login/Login'
import { FormSwitcher } from '../FormSwitcher/FormSwitcher'
import { Row, Col } from 'antd';

export class MainForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin:true
        }
    }

    loginLabels = {
        header: 'Are you here for the first time?',
        buttonLabel: 'Sign Up'
    }

    signUpLabels = {
        header: 'Already registered?',
        buttonLabel: 'Log In'
    }

    switchForm = () => {
        this.setState( {showLogin: !this.state.showLogin})
    }

    render() {
        const labels = this.state.showLogin ? this.loginLabels : this.signUpLabels;

        return (
            <div>
                <Row type="flex" justify="space-around">
                    <Col span={8}>
                        { this.state.showLogin ? <Login /> : <SignUp /> }
                        <FormSwitcher labels={labels} onSwitch={this.switchForm}/>
                    </Col>
                </Row>
            </div>
        )
    }


}

const mapStateToProps = state => ({
    language: state.language.language,
})

export default connect(mapStateToProps, {})(MainForm)