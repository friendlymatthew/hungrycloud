import react, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export default function Odometer(props) {
  const unique_id2 = uuid();

  const [ serverPace, setServerPace ] = useState(null)

  useEffect(() => {

    const sum = props.pace.reduce((partialSum, a) => partialSum + a, 0);
    const avg = Math.floor(sum / (props.pace.length) );

    setServerPace(avg)
  }, [props.pace])

  return (
    <div className="w-full bg-slate-600 py-4 text-white">
      <div className="py-3  border-slate-800 border-b-2 font-extrabold text-xl text-white">
        <div className="px-4">Odometer</div>
      </div>
      <section className="h-96 px-4 py-3 text-lg">
        server pace: {serverPace} ms / transaction
      </section>
    </div>
  );
}
