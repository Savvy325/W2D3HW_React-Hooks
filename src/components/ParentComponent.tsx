import React from 'react';
import Count from './Count';

interface ParentProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

const ParentComponent: React.FC<ParentProps> = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Count onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
};

export default ParentComponent;