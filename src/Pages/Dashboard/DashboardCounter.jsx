
import React, { useState } from "react";

function DashboardCounter() {
  const [count, setCount] = useState(100);
  const add=() => setCount(prev=>prev+1)
  const Minus=() => setCount(prev => Math.max(0, prev - 1))
  const reset=() => setCount(0)

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Counter App</h1>

        <h2 style={styles.number}>{count}</h2>

        <div style={styles.buttons}>
          <button
            style={styles.increment}
            onClick={add}
          >
            +
          </button>

          <button
            style={styles.decrement}
            onClick={Minus}
          >
            -
          </button>

          <button
            style={styles.reset}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#75a35b",
    fontFamily: "Arial"
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
  },
  number: {
    fontSize: "60px",
    color: "#333",
    margin: "25px"
  },
  buttons: {
    display: "flex",
    gap: "12px"
  },
  increment: {
    background: "green",
    color: "white",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    fontSize: "22px",
    cursor: "pointer"
  },
  decrement: {
    background: "red",
    color: "white",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    fontSize: "22px",
    cursor: "pointer"
  },
  reset: {
    background: "#333",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default DashboardCounter;
