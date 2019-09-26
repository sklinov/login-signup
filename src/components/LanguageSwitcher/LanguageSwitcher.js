import React from 'react'
import { connect } from 'react-redux'
import { Radio } from 'antd'
import { switchLanguage } from '../../redux/actions/switchLanguageActions'

export function LanguageSwitcher(props) {
    
    const handleLanguageChange = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        props.switchLanguage(e.target.value);
    }

    return (
        <div>
            <Radio.Group value={props.language} size='small' onChange={handleLanguageChange}>
                <Radio.Button value='en'>en</Radio.Button>
                <Radio.Button value='ru'>ru</Radio.Button>
            </Radio.Group>
        </div>      
    )
}

const mapStateToProps = state => ({
    language: state.language.language,
})

export default connect(mapStateToProps, {switchLanguage})(LanguageSwitcher)