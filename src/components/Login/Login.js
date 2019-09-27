import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/logInActions'
import { Typography, Form, Input, Button, Spin } from 'antd'

const { Title } = Typography

export class Login extends Component{
    constructor(props) {
        super(props)
        this.state = { 
                        isSubmitting: false,
                        submitSuccess: false,
                     }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const { email, password } = values;
                this.setState({isSubmitting: true}, 
                    () => this.props.login({ email: email, 
                                             password: password
                                            }))
            }
            if(err) {
                alert(this.props.lang.validation.checkForm);
            }
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.loginStatus !== prevProps.loginStatus) {
            this.setState({
                isSubmitting: false,
                submitSuccess: true,
            }, this.props.form.resetFields())
        }
    }

    render() {
        const { lang } = this.props
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Title level={2} data-test='title'>
                    {lang.login.title}
                </Title>
                <Form  className='login-form' onSubmit={this.handleSubmit} data-test='form'>
                    <Form.Item>
                        {
                            getFieldDecorator('email', {
                                rules: [
                                {
                                    type: 'email',
                                    message: lang.validation.emailNotValid,
                                },
                                {
                                    required: true,
                                    message: lang.validation.emailEmpty,
                                },
                                ],
                            })(<Input size='large' placeholder={lang.login.emailPlaceholder} name='email' disabled={this.state.isSubmitting}/>)
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('password', {
                                rules: [
                                  {
                                    required: true,
                                    message: lang.validation.passwordEmpty,
                                  },
                                  {
                                    min: 6,
                                    message: lang.validation.passwordTooShort
                                  },
                                ],
                              })(<Input size='large' type='password' placeholder={lang.login.passwordPlaceholder} name='password' disabled={this.state.isSubmitting}/>)
                        }  
                    </Form.Item>
                    <Form.Item>
                        <Button size='large' type='primary' htmlType='submit' block disabled={this.state.isSubmitting}>
                            {lang.login.buttonLabel}
                        </Button>
                    </Form.Item>
                </Form>
                {this.state.isSubmitting && <Spin data-test='spin'/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loginStatus: state.login.status,
})

export const WrappedLoginForm = Form.create({ name: 'login' })(Login);

export default connect(mapStateToProps, { login })(WrappedLoginForm)
