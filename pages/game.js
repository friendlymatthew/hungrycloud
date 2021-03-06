import React, { useState, useEffect, useCallback } from "react";
import RiceComponent from "../components/rice";
import NavBar from "../components/NavBar";
import Odometer from "../components/Odometer";
import ServerLogs from "../components/ServerLogs";

import axios from "axios";
import { v4 as uuid } from "uuid";

export default function GamePage() {
  const [start, setStart] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [pace, setPace] = useState([]);
  const [maxSpeed, setMaxSpeed] = useState(Math.max(pace));
  const [minSpeed, setMinSpeed] = useState(Math.min(pace));
  const [ confirmed, setConfirmed ] = useState([]);
  const [ rejected, setRejected ] = useState([]);

  const handleUserKeyPress = useCallback((event) => {
    let random = Math.floor(Math.random() * 100);
    let randomTwo = Math.floor(Math.random() * 100);
    let randomThree = Math.floor(Math.random() * 100);

    const { key, keyCode } = event;
    const unique_id = uuid();

    const newGrain = {
      grainId: unique_id,
      letter: key,
      state: {
        hue: "yellow-400",
        modalStatus: "Sending",
      },
    };

    setBlocks((blocks) => [...blocks, newGrain]);

    //time starts here
    var startTime = performance.now();

    axios
      .post(
        "https://qc9pzikhia.execute-api.us-east-1.amazonaws.com/prod/grain",
        {
          grainId: unique_id,
          letter: String(key),
        }
      )
      .then(function (response) {
        //stoptime
        var endTime = performance.now();
        //updateGrainIdState

        newGrain.state.hue = "green-300";
        newGrain.state.modalStatus = "Finalized";
        newGrain.state.duration = Number(endTime - startTime);

        setPace((pace) => [...pace, Number(endTime - startTime)]);

        if (maxSpeed < Number(endTime - startTime)) {
          setMaxSpeed(Number(endTime - startTime));
        } else {
          setMaxSpeed(maxSpeed)
        }

        if (minSpeed > Number(endTime - startTime)) {
          setMinSpeed(Number(endTime - startTime));
        } else {
          setMinSpeed(minSpeed)
        }
        setConfirmed((confirmed) => [...confirmed, newGrain.grainId])

        console.log(newGrain);
      })
      .catch(function (error) {
        //update errorIdState

        newGrain.state.hue = "red-300";
        newGrain.state.modalStatus = "Failed";

        setRejected((rejected) => [...rejected, newGrain.grainId])
        console.log(error);
      });


    setStart(true);
  }, []);

  const resetBlocks = () => {
    setBlocks([])
    setStart(false)
    setPace([])
    setConfirmed([])
    setRejected([])
  }

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <div className="bg-slate-800 min-h-screen scroll-smooth">
      <NavBar
        blocks={blocks}
        confirmed={confirmed}
      />

      <section className="grid grid-cols-1 ">
        {start ? (
          <section className="flex justify-center">
            <section className="grid grid-cols-1 gap-2 lg:grid-cols-3 w-10/12 ">
              <section className="">
                <ServerLogs blocks={blocks} />
              </section>
              <section className="col-span-2">
                <Odometer
                  blocks={blocks}
                  pace={pace}
                  minSpeed={minSpeed}
                  maxSpeed={maxSpeed}
                  confirmed={confirmed}
                  rejected={rejected}
                />
              </section>
            </section>
          </section>
        ) : (
          <div className="my-20"></div>
        )}
        <section className="grid grid-cols-1 place-items-center">
          <section id="transactionpanel" className="w-10/12 py-8 ">
            <section className="text-white font-medium items-center flex-none lg:flex justify-between py-4 px-8 bg-slate-600 border-b-2 border-slate-800 ">
              <span className="flex space-x-3 items-center">
                <button className="dropdown dropdown-hover">
                  <label tabIndex="0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </label>

                  <ul
                    tabIndex="0"
                    className="dropdown-content menu p-2 my-3 shadow bg-slate-600 rounded-box w-72 text-sm"
                  >
                    <li>
                      <div className="flex items-center">
                        <div className="h-6 w-6 bg-slate-800 rounded-md"></div>
                        <div>Pending Grain</div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <div className="h-6 w-6 bg-green-300 rounded-md"></div>
                        <div>Confirmed Grain</div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <div className="h-6 w-6 bg-red-400 rounded-md"></div>
                        <div>Failed Grain</div>
                      </div>
                    </li>
                  </ul>
                </button>
                <span>Live Grain Statuses</span>
              </span>

              <div className="invisible lg:visible">
                {" "}
                Press any key to send a rice grain{" "}
              </div>
            </section>

            {start ? (
              <section className="p-4 flex flex-wrap bg-slate-600">
                {blocks.map((block) => {
                  return (
                    <RiceComponent
                      grainId={block.grainId}
                      key={block.grainId}
                      letter={block.letter}
                      grainState={block.state}
                      duration={block.state.duration}
                    />
                  );
                })}
              </section>
            ) : (
              <div className="h-96 bg-slate-700 grid grid-cols-1 place-items-center text-white font-extrabold text-3xl opacity-80">
                PRESS ANY KEY TO SEND RICE
              </div>
            )}
          </section>
        </section>
      </section>
    </div>
  );
}
