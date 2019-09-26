import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/logInActions'
import { Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

export class Login extends Component{
    constructor(props) {
        super(props)
        this.state = { 
                        email: '',
                        password: '',
                        isSubmitting: false,
                        submitSuccess: false,
                     }
    }
    
    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        this.setState({ [name] : value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state;
        this.setState({isSubmitting: true}, 
            () => this.props.login({ email: email, 
                                        password: password
                                    })
        )
    }

    componentDidUpdate(prevProps) {
        if (this.props.loginStatus !== prevProps.loginStatus) {
            this.setState({
                isSubmitting: false,
                submitSuccess: true,
                email: '',
                password: ''
            })
        }
    }


    render() {
        return (
            <div>
                <Title level={2}>Log In</Title>
                <Form  className='login-form' onSubmit={this.handleSubmit}>
                    <Form.Item>
                        <Input size='large' placeholder='E-mail used during registration' name='email' onChange={this.handleChange} disabled={this.state.isSubmitting}/>
                    </Form.Item>
                    <Form.Item>
                        <Input size='large' type='password' placeholder='Password' name='password' onChange={this.handleChange} disabled={this.state.isSubmitting}/>
                    </Form.Item>
                    <Form.Item>
                        <Button size='large' type='primary' htmlType='submit' block disabled={this.state.isSubmitting}>
                            Log In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loginStatus: state.login.status,
})


export default connect(mapStateToProps, { login })(Login)
