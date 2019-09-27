import React from 'react'
import { connect } from 'react-redux'
import en from '../../languages/en.json'
import ru from '../../languages/ru.json'

export function Language(props) {
    let lang
    switch(props.language) {
        case 'en':
            lang = en
            break
        case 'ru':
            lang = ru
            break
        default:
            lang = en
    }

    const children = React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          lang: lang
        });
      });
    return (
        <div>
            {children}
        </div>
    )
}

const mapStateToProps = state => ({
    language: state.language.language,
})

export default connect(mapStateToProps,{})(Language)


