interface CounterProps {
    onIncrement: () => void
    onDecrement: () => void
}

const CounterCallbackComponent = ({ onIncrement, onDecrement }: CounterProps) => {
  return (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}
export default CounterCallbackComponent