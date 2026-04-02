import { FaPlus, FaMinus } from "react-icons/fa";

export default function CounterButton({ Count, setCount }) {
  
  const handleIncrement = () => {
    if (Count < 5) {
      setCount(Count + 1);
    }
  };

  const handleDecrement = () => {
    if (Count > 0) {
      setCount(Count - 1);
    }
  };

  return (
    <>
      <div className="button-container">

        <button className="count-btn" onClick={handleDecrement}>
          <FaMinus />
        </button>

        <button className="count-btn" onClick={handleIncrement}>
          <FaPlus />
        </button>

      </div>
    </>
  );
}