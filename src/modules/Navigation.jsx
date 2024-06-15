import React from 'react';

const NavigationButtons = ({ handleForward, handleBackward }) => {
    return (
        <div>
            <button onClick={handleForward}>Next</button>
            <button onClick={handleBackward}>Previous</button>
        </div>
    );
};

export default NavigationButtons;