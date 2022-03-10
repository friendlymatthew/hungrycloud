export default function Odometer(props) {
  return (
    <div className="w-full grid grid-cols-1 mt-8 place-items-center">
      <section className="w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-1 my-20 bg-slate-800">
        <section className="w-full h-32 bg-slate-700 px-4 py-3">
          <section className="  flex items-center  text-white font-bold">
            Rice Count
          </section>
          <section className="py-2 text-white font-medium">
            <div>{props.blocks.length} grains</div>
          </section>
        </section>
        <section className="w-full h-32 bg-slate-700">
          <section className=" border-b-2 border-slate-800 flex items-center px-4 py-3 text-white font-medium">
            Odometer
          </section>
        </section>
        <section className="w-full h-32 bg-slate-700">
          <section className=" border-b-2 border-slate-800 flex items-center px-4 py-3 text-white font-medium">
            Server Log
          </section>
        </section>
      </section>

      <section className="grid place-items-center text-white text-2xl font-extrabold">
        <div> Total Grains: {props.blocks.length}</div>
        <div className="flex space-x-2">
          <div>Confirmed Grains:</div>
          {Math.floor(props.blocks.length / props.blocks.length) === 1 ? (
            <div className="text-green-300">
              {props.blocks.length} / {props.blocks.length}
            </div>
          ) : (
            <div className="text-white">
              {" "}
              {props.blocks.length} / {props.blocks.length}
            </div>
          )}
        </div>
      </section>
      <section className="grid place-items-center text-white text-2xl font-extrabold">
        Throughput: {props.blocks.length}
      </section>
      <section className="grid place-items-center text-white text-2xl font-extrabold"></section>
    </div>
  );
}
