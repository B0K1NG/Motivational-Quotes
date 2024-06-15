export const handleForward = (setCurrentQuote, quotesLength) => {
    setCurrentQuote((currentIndex) => {
        //if not at the last quote go forward esle loop back to the first one
        return currentIndex < quotesLength - 1 ? currentIndex + 1 : 0;
    });
};



export const handleBackward = (setCurrentQuote, quotesLength) => {
    //if not at the 0 quote go backwards else go to the last quote
    setCurrentQuote((currentIndex) => {
        return currentIndex > 0 ? currentIndex - 1 : quotesLength - 1;
    });
};