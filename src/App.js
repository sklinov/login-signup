import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher'
import MainForm from './components/MainForm/MainForm'
import createStore from './redux/store/createStore'
import { Row, Col } from 'antd'

const store = createStore();

function App() {
    return (
        <div className='App'>
            <Provider store={store}>
                <Row>
                    <Col span={20} offset={2}>
                        <LanguageSwitcher />
                        <MainForm />
                    </Col>
                </Row>
            </Provider>
        </div>
    );
}

export default App;
