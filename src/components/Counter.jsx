const Counter = () => {
  const handleIncrement = () => {
    console.log("Increment button clicked!");
  };
  return (
    <div>
      <h3>Count: 0</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
