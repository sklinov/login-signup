import React from 'react'
import { Typography, Button } from 'antd'
const { Text } = Typography

export const FormSwitcher = (props) => {
    const { lang, showLogin } = props
    
    const loginLabels = {
        header: lang.formSwitch.loginHeader,
        buttonLabel: lang.formSwitch.loginButtonLabel
    }

    const signUpLabels = {
        header: lang.formSwitch.signUpHeader,
        buttonLabel: lang.formSwitch.signupButtonLabel
    }
    
    const labels = showLogin ? loginLabels : signUpLabels

    return (
        <div>
            <Text>{labels.header}</Text>
            <Button size="large" type='default' block onClick={props.onSwitch}>
                {labels.buttonLabel}
            </Button>
        </div>
    )
}