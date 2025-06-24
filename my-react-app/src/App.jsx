import React from 'react';
import Button from './components/Button';


function App() {
    const handleClick = () => {
        alert('Кнопку натиснуто!');
    };

    return (
        <div>
            <h1>Мій React Проєкт</h1>
            <Button text="Натисни мене" onClick={handleClick} />
        </div>
    );
}

export default App;
