import React from 'react';
import ReactDOM from 'react-dom';
import TitlePage from './titlePage';
import InputRectangle from './inputRectangle';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div className='container mt-4'>
        <TitlePage></TitlePage>
        <InputRectangle></InputRectangle>
    </div>
)
