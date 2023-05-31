"use client";
import Image from "next/image";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="App">
        <h1>React Custom Hooks</h1>
        <section className="counter-container">
          <CounterOne />
          <CounterTwo />
          <CounterThree />
        </section>
      </div>
    </main>
  );
}
