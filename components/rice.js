/**
 * 
 * @param {
    <label
      for={`modal-${props.grain_id}`}
      className={`bg-${
        statusHex[props.status]
      }  cursor-pointer h-6 w-6 modal-button rounded-md m-1 hover:scale-105 transition ease-in duration-300`}
    >
      <input
        type="checkbox"
        id={`modal-${props.grain_id}`}
        className="modal-toggle"
      />
      <label for={`modal-${props.grain_id}`} className="modal cursor-pointer">
        <label className="modal-box rounded-none grid grid-cols-1 place-items-center">
          <div className="text-2xl font-extrabold text-black">
            Grain Information
          </div>

          <section className="my-4 py-4 w-8/12">
            <div className="flex justify-between py-2 items-center text-black text-lg">
              <div>grain_id</div>
              <div>{props.grain_id}</div>
            </div>
            <div className="flex justify-between py-2 items-center text-black text-lg">
              <div>pressed key</div>
              <kbd className="kbd">{props.letter}</kbd>
            </div>
          </section>
        </label>
      </label>
    </label>} props 
 * @returns 
 */

export default function RiceComponent(props) {
  const statusHex = {
    0: "zinc-700",
    1: "green-400",
    2: "red-300",
  };

  return (
    <div>
      <label htmlFor={`modal-${props.grainId}`} className={`modal-button`}>
        <div
          className={`h-6 w-6 bg-${props.grainState.hue} hover:opacity-80 transition ease-in duration-100 hover:scale-105 rounded-md m-1 cursor-pointer`}
        ></div>
      </label>

      <input
        type="checkbox"
        id={`modal-${props.grainId}`}
        className="modal-toggle"
      />
      <label
        htmlFor={`modal-${props.grainId}`}
        className="modal cursor-pointer"
      >
        <label
          className="modal-box rounded-none relative text-white bg-slate-600 font-medium"
          htmlFor=""
        >
          <div className="grid grid-cols-1 place-items-center">
            <div className="py-2 text-lg font-bold">Grain Details</div>
            <section className="py-6 px-4 w-10/12 border-white border-b">
              <div className="flex mb-5 items-center justify-between text-lg font-medium">
                <div>Grain Id</div>
                <div className="w-8/12 text-right">{props.grainId}</div>
              </div>
              <div className="flex  mt-5 items-center justify-between  text-lg  font-medium">
                <div>Key Pressed</div>
                <kbd className="kbd text-black">{props.letter}</kbd>
              </div>
            </section>
          </div>
          <div className="grid grid-cols-1 place-items-center">
            <section className="py-6 px-4 w-10/12 ">
              <div className="flex mb-5 items-center justify-between text-lg font-medium">
                <div>Confirmation Time</div>
                {props.duration ? (
                  <div>{props.duration} </div>
                ) : (
                  <div className="animate-spin h-5 w-5"></div>
                )}
              </div>
              <div className="flex  mt-5 items-center justify-between   text-lg  font-medium">
                <div>Grain Status</div>
                {props.grainState.modalStatus === "Finalized" ? (
                  <div className="text-green-300">
                    {props.grainState.modalStatus}
                  </div>
                ) : props.grainState.modalStatus === "Failed" ? (
                  <div className="text-red-500">
                    {" "}
                    {props.grainState.modalStatus}
                  </div>
                ) : (
                  <div className="text-white">
                    {" "}
                    {props.grainState.modalStatus}
                  </div>
                )}
              </div>
            </section>
          </div>
        </label>
      </label>
    </div>
  );
}
