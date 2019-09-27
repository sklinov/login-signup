import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import MainForm from './components/MainForm/MainForm';
import createStore from './redux/store/createStore';

import i18next from './languages/i18n';


i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
});

const store = createStore();

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <LanguageSwitcher />
            <MainForm />
        </Provider>
    </div>
  );
}

export default App
