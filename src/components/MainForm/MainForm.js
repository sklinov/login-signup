import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUp from '../SignUp/SingUp'
import Login from '../Login/Login'
import { FormSwitcher } from '../FormSwitcher/FormSwitcher'
import { Row, Col } from 'antd';
import Language from '../Language/Language'

export class MainForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin:true
        }
    }

    switchForm = () => {
        this.setState( {showLogin: !this.state.showLogin})
    }

    render() {
        return (
            <div data-test="main-form">
                <Row type="flex" justify="space-around">
                    <Col span={12}>
                        <Language>
                            { this.state.showLogin ? <Login data-test="login"/> : <SignUp data-test="signup"/> }
                            <FormSwitcher showLogin={this.state.showLogin} onSwitch={this.switchForm} data-test="form-switcher"/>
                        </Language>
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