import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../redux/actions/signUpActions'
import { Typography, Form, Input, Button, Spin } from 'antd';

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
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const { email, password, name } = this.state;
                this.setState({isSubmitting: true},
                    () =>this.props.signup({ email: email, 
                                password: password,
                                name: name
                                }))
            }
            if(err) {
                alert(this.props.lang.validation.checkForm);
            }
          });
        
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

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      };

    compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
        callback(this.props.lang.validation.passwordDoesntatch);
    } else {
        callback();
    }
    };

    render() {
        const { lang } = this.props
        const { getFieldDecorator } = this.props.form
        return (
            <div>
               <Title level={2}> {lang.signup.title} </Title>
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
                            })(<Input size='large' placeholder={lang.signup.emailPlaceholder} name='email' onChange={this.handleChange} disabled={this.state.isSubmitting}/>)
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
                                    validator: this.validateToNextPassword,
                                  },
                                  {
                                    min: 6,
                                    message: lang.validation.passwordTooShort
                                  },
                                ],
                              })(<Input size='large' placeholder={lang.signup.passwordPlaceholder} type='password' name='password' onChange={this.handleChange} disabled={this.state.isSubmitting}/>)
                        }     
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('confirm', {
                                rules: [
                                  {
                                    required: true,
                                    message: lang.validation.passwordConfirm,
                                  },
                                  {
                                    validator: this.compareToFirstPassword,
                                  },
                                ],
                              })(<Input size='large' placeholder={lang.signup.confirmPasswordPlaceholder} type='password' name='confirmPassword' onChange={this.handleChange} disabled={this.state.isSubmitting}/>)
                        }                       
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('name', {
                                rules: [
                                {
                                    required: true,
                                    message: lang.validation.nameEmpty,
                                },
                                ],
                            })(<Input size='large' placeholder={lang.signup.namePlaceholder} name='name' onChange={this.handleChange} disabled={this.state.isSubmitting}/>)
                        } 
                    </Form.Item>
        
                    <Form.Item>
                        <Button size='large' type='primary' htmlType='submit' block disabled={this.state.isSubmitting}>
                            {lang.signup.buttonLabel}
                        </Button>
                    </Form.Item>
                </Form> 
                {this.state.isSubmitting && <Spin/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    signupStatus: state.signup.status,
    language: state.language.language
})

const WrappedSignUpForm = Form.create({ name: 'signup' })(SignUp);

export default connect(mapStateToProps, {signup})(WrappedSignUpForm)
