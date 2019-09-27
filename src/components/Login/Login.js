import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/logInActions'
import { Typography, Form, Input, Button, Spin } from 'antd';

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
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const { email, password } = this.state;
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
                email: '',
                password: ''
            })
        }
    }

    render() {
        const { lang } = this.props
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Title level={2}>
                    {lang.login.title}
                </Title>
                <Form  className='login-form' onSubmit={this.handleSubmit}>
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
                            })(<Input size='large' placeholder={lang.login.emailPlaceholder} name='email' onChange={this.handleChange} disabled={this.state.isSubmitting}/>)
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
                              })(<Input size='large' type='password' placeholder={lang.login.passwordPlaceholder} name='password' onChange={this.handleChange} disabled={this.state.isSubmitting}/>)
                        }  
                    </Form.Item>
                    <Form.Item>
                        <Button size='large' type='primary' htmlType='submit' block disabled={this.state.isSubmitting}>
                            {lang.login.buttonLabel}
                        </Button>
                    </Form.Item>
                </Form>
                {this.state.isSubmitting && <Spin/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loginStatus: state.login.status,
})

const WrappedLoginForm = Form.create({ name: 'login' })(Login);

export default connect(mapStateToProps, { login })(WrappedLoginForm)
