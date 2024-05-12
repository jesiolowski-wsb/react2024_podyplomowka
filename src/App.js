import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 7 },
    { id: 4, value: 23 },
  ]);

  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };

  const handleReset = () => {
    const countersReset = counters.map((c) => {
      c.value = 0;
      return c;
    });

    setCounters(countersReset);
  };

  const handleIncrement = (counter) => {
    const countersUpdated = [...counters];
    const index = countersUpdated.indexOf(counter);
    countersUpdated[index] = { ...counter };
    countersUpdated[index].value++;

    setCounters(countersUpdated);
  };

  const handleDecrement = (counter) => {
    const countersUpdated = [...counters];
    const index = countersUpdated.indexOf(counter);
    countersUpdated[index] = { ...counter };
    countersUpdated[index].value--;
    setCounters(countersUpdated);
  };

  return (
    <>
      <Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className={"container"} role={"main"}>
        <Counters
          counters={counters}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
        />
      </main>
    </>
  );
}

export default App;
