import { useState, useEffect } from 'react';
import Api from './modules/fetchApi';
import Quote from './modules/Quote';
import NavigationButtons from './modules/Navigation';
import { handleForward, handleBackward } from './modules/buttonLogic';
import './App.css';

function App() {
  // State to store quotes and current quote index
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Fetch quotes on component mount
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const data = await Api();
        setQuotes(data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  // Function to render the current quote or a loading message
  const updateQuote = () => {
    if (quotes.length > 0) {
      const { quote, author } = quotes[currentQuoteIndex];
      return <Quote quote={quote} author={author} />;
    } else {
      return <div>Loading quotes...</div>;
    }
  };

  return (
    <div className='App'>
      <h1>Quote Carousel</h1>
      {updateQuote()}
      <NavigationButtons 
        handleForward={() => handleForward(setCurrentQuoteIndex, quotes.length)}
        handleBackward={() => handleBackward(setCurrentQuoteIndex, quotes.length)}
      />
    </div>
  );
}

export default App;
