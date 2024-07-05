import React from 'react';
import ReactDOM from 'react-dom';

// Example components
const AvailableComponent = () => <div>Item is available!</div>;
const OutOfStockComponent = () => <div>Item is out of stock!</div>;

// App component
const App = () => {
  // Assume instock is a boolean variable, true for in stock, false for out of stock
  const instock = true; // Change this value to see different components rendered

  return (
    <div>
      {instock ? <AvailableComponent /> : <OutOfStockComponent />}
    </div>
  );
};

// Render the App component
ReactDOM.render(<App />, document.getElementById('root'));