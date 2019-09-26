import React from 'react'
import { Typography, Button } from 'antd';
const { Text } = Typography;

export const FormSwitcher = (props) => {
    return (
        <div>
            <Text>{props.labels.header}</Text>
            <Button size="large" type='default' block onClick={props.onSwitch}>
                {props.labels.buttonLabel}
            </Button>
        </div>
    )
}