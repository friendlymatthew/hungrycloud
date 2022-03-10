import { useEffect } from "react";
import $ from "jquery";

export default function RiceLogs(props) {
  var scrolled = false;
  const updateScroll = () => {
    if (!scrolled) {
      var element = document.getElementById("logbox");
      element.scrollTop = element.scrollHeight;
    }
  };

  $("#logbox").on("scroll", function () {
    scrolled = true;
  });

  useEffect(() => {
    let element = document.getElementById("logbox");
    element.scrollTop = element.scrollHeight;

    setInterval(updateScroll, 1000);
  }, [props.blocks]);

  return (
    <div className="w-full bg-slate-600 py-4 text-white">
      <div className="py-3  border-slate-800 border-b-2 font-extrabold text-xl text-white">
        <div className="px-4">Server Logs</div>
      </div>
      <section
        id="logbox"
        className="py-3 px-4 h-96 overscroll-contain overflow-y-scroll "
      >
        <div className="flex-col-reverse">
          {props.blocks.map((block) => {
            return (
              <div  key={block.grainId} className="flex justify-between items-center">
                <div className="w-full py-2 ">
                  {block.grainId}
                </div>
                {block.state.modalStatus === "Finalized" ? (
                  <div className="bg-green-300 m-1 p-2 text-black font-extrabold">
                    {" "}
                    200{" "}
                  </div>
                ) : block.state.modalStatus === "Error" ? (
                  <div className="bg-red-400 font-extrabold"> ERR </div>
                ) : (
                  <div className="bg-slate-800 m-1 p-2 text-white font-extrabold">
                    {" "}
                    lol{" "}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
