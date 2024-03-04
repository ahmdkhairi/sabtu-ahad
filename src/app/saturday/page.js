"use client";

import { DragDropContext } from "react-beautiful-dnd";
import { useCounterStore, useFactStore } from "../store";
import { useEffect } from "react";

export default function Saturday() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const facts = useFactStore((state) => state.facts);
  const fetchFacts = useFactStore((state) => state.fetch);

  const example = {
    facts: [
      {
        text: 'When asked if her husband had any hobbies, Mary Todd Lincoln is said to have replied "cats."',
      },
      {
        text: "Cats make about 100 different sounds. Dogs make only about 10.",
      },
      {
        text: "Owning a cat can reduce the risk of stroke and heart attack by a third.",
      },
      {
        text: "Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool drinking water.",
      },
      {
        text: "It was illegal to slay cats in ancient Egypt, in large part because they provided the great service of controlling the rat population.",
      },
    ],
  };

  console.log(facts);

  function fetchData() {
    fetchFacts("facts");

    console.log(facts);
  }

  return (
    <div className="m-4">
      <p className="text-center m-auto text-3xl font-bold">
        SATURDAY (sa·tuh·day)
      </p>
      <p className="text-center m-auto text-2xl font-bold">SABTU (sa·eb·tu)</p>
      <p className="text-center m-auto text-2xl font-bold mt-5">
        Sabtu ialah hari pertama cuti setiap minggu bagi negeri negeri berikut:
      </p>
      <div className="flex justify-center">
        <table className="text-left text-2xl font-bold mt-5">
          <tbody>
            <tr>
              <th>• Pulau Pinang</th>
            </tr>
            <tr>
              <th>• Perak</th>
            </tr>
            <tr>
              <th>• Pahang</th>
            </tr>
            <tr>
              <th>• Selangor</th>
            </tr>
            <tr>
              <th>• WP Kuala Lumpur</th>
            </tr>
            <tr>
              <th>• WP Putrajaya</th>
            </tr>
            <tr>
              <th>• Negeri Sembilan</th>
            </tr>
            <tr>
              <th>• Melaka</th>
            </tr>
            <tr>
              <th>• WP Labuan</th>
            </tr>
            <tr>
              <th>• Sabah</th>
            </tr>
            <tr>
              <th>• Sarawak</th>
            </tr>
            <tr>
              <th>• Perlis</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border-2  my-5 flex justify-between flex-col items-center m-auto max-w-[40rem]">
        <p className="text-2xl mt-3 text-center">
          First here are two button for you to click. Click it to waste your
          time on a lazy saturday~~~
        </p>

        <p className=" font-bold text-2xl py-4"> {count}</p>
        <div className="flex justify-around ">
          <div>
            <button className="border p-2 rounded-lg" onClick={increment}>
              increment
            </button>
          </div>
          <div>
            <button className="border p-2 rounded-lg" onClick={decrement}>
              decrement
            </button>
          </div>
        </div>
      </div>
      <div className="  flex justify-between flex-col items-center mt-5">
        <p>Now click this button to see cat facts???? try it bro</p>

        <button
          className="  mt-5 border rounded-lg bg-slate-400"
          onClick={fetchData}
        >
          Load Facts
        </button>
        <div className="my-3 max-w-[80rem] text-xl m-auto">
          {facts.length > 0 ? (
            <ul>
              {facts.map((fact, index) => (
                <li key={index}>{fact.text}</li> // Display each fact's text
              ))}
            </ul>
          ) : (
            <div className="border-2  rounded-md content-center p-2">
              {" "}
              <p>nothing</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
