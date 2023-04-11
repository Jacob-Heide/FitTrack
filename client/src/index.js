import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <ConfigProvider locale={enUS}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
);