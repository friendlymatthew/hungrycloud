export default function Odometer(props) {
  return (
    <div className="w-full grid grid-cols-1 mt-8 place-items-center">
      <section className="w-10/12 grid grid-cols-1 lg:grid-cols-3 py-24 bg-slate-700">
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
      </section>
    </div>
  );
}
