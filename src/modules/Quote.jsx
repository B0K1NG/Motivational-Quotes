import React from 'react';

const Quote = ({ quote, author }) => {
    return (
        <div className='quoteContainer'>
        <p className='quoteText'>{quote}</p>
        <p className='quoteAuthor'>- {author}</p>
    </div>
    );
};

export default Quote;
