import react, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import * as d3 from "d3";

export default function Odometer(props) {
  const unique_id2 = uuid();

  const [serverPace, setServerPace] = useState(null);
  const [poleGrain, setPoleGrain] = useState();
  const [slowGrain, setSlowGrain] = useState();

  useEffect(() => {
    const sum = props.pace.reduce((partialSum, a) => partialSum + a, 0);
    const avg = Math.floor(sum / props.pace.length);

    setPoleGrain(Math.min(props.pace));
    setSlowGrain(Math.max(props.pace));

    console.log(props.pace);

    setServerPace(avg);
  }, [props.pace]);

  return (
    <div className="w-full bg-slate-600 pb-4 text-white">
      <div className="py-3 flex items-center border-slate-800 border-b-2 font-extrabold text-2xl text-white">
        <div className="px-4">Insights</div>
      </div>
      <section className="h-auto lg:h-96 px-4 py-3 text-xl font-medium">
        <span className="mb-2">
          server pace:{" "}
          {~~(serverPace / 1000) === 0 ? (
            <span className="">{serverPace}ms / transaction</span>
          ) : (
            <span>{(serverPace / 1000).toFixed(2)}s / transaction</span>
          )}{" "}
        </span>
        
        <div className="my-2">rice count: {props.blocks.length} grains</div>
        <div className="my-2">
          confirmed rice: {props.confirmed.length} grains
        </div>
        <div className="my-2">
          rejected rice: {props.rejected.length} grains
        </div>
        {props.confirmed.length / props.blocks.length === 1 ? (
          <div className="my-2 text-green-400">
            success rate:{" "}
            {((props.confirmed.length / props.blocks.length) * 100).toFixed(2)}%
          </div>
        ) : (
          <div className="my-2 text-yellow-300">
            success rate:{" "}
            {((props.confirmed.length / props.blocks.length) * 100).toFixed(2)}%
          </div>
        )}
      </section>
    </div>
  );
}
