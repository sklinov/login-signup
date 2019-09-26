import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../redux/actions/signUpActions'
import { Typography, Form, Input, Button } from 'antd';
const { Title } = Typography;

export class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = { 
                        email: '',
                        password: '',
                        confirmPassword: '',
                        name: '',
                        isSubmitting: false,
                        submitSuccess: false,
                    }
    }

    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        this.setState({[name] : value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password, name } = this.state;
        this.setState({isSubmitting: true},
            () =>this.props.signup({ email: email, 
                           password: password,
                           name: name
                         }))
    }

    componentDidUpdate(prevProps) {
        if (this.props.signupStatus !== prevProps.signupStatus) {
            this.setState({
                isSubmitting: false,
                submitSuccess: true,
                email: '',
                password: '',
                confirmPassword: '',
                name: ''
            })
        }
    }

    render() {
        return (
            <div>
               <Title level={2}>Sign Up</Title>
                <Form  className='login-form' onSubmit={this.handleSubmit}>
                    <Form.Item>
                        <Input size='large' placeholder='Enter your email' name='email' onChange={this.handleChange} disabled={this.state.isSubmitting}/>
                    </Form.Item>
                    <Form.Item>
                        <Input size='large' placeholder='Enter your password' type='password' name='password' onChange={this.handleChange} disabled={this.state.isSubmitting}/>
                    </Form.Item>
                    <Form.Item>
                        <Input size='large' placeholder='Confirm password' type='password' name='confirmPassword' onChange={this.handleChange} disabled={this.state.isSubmitting}/>
                    </Form.Item>
                    <Form.Item>
                        <Input size='large' placeholder='Enter your name' name='name' onChange={this.handleChange} disabled={this.state.isSubmitting}/>
                    </Form.Item>
        
                    <Form.Item>
                        <Button size='large' type='primary' htmlType='submit' block disabled={this.state.isSubmitting}>
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    signupStatus: state.signup.status,
})


export default connect(mapStateToProps, {signup})(SignUp)
