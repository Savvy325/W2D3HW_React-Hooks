import { useState } from 'react'
import ParentComponent from './components/ParentComponent';
import ShoppingCart from './components/ShoppingCart'


function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>My Counter App</h1>
      <p>Count: {count}</p>
      <ParentComponent onIncrement={handleIncrement} onDecrement={handleDecrement} />

      <div>
        <h1>Shopping Cart</h1>
        <ShoppingCart />
      </div>
    </div>
  );
};


export default App
