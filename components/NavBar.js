import Link from "next/link";

export default function NavBar() {
  return (
    <div className="grid place-items-center py-2 bg-slate-800">
      <div className=" flex justify-between w-10/12  text-white p-3 font-medium text-lg items-center ">
        <Link href="/">
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
        </Link>

        <a
          href="https://github.com/matthewkim0"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hover:bg-[#02ffff] bg-[#fdff2d] text-black py-2 px-3 transition ease-in duration-300">
            Source
          </div>
        </a>
      </div>
    </div>
  );
}
