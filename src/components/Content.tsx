import { HandDrawnArrow } from "./HandDrawnArrow";
import "../styles/readme.css";

export function Content({ blur }: { blur: boolean }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      {/* Container for the content that looks like an envelope */}
      <div className="relative">
        {/* "Read Me" sign with funky font */}
        <div className="absolute transform -translate-y-24 translate-x-7 w-16">
          <p className="text-slate-600 boogaloo-regular text-xl">read me!</p>
        </div>
        {/* Hand drawn arrow */}
        <div className="absolute transform rotate-[115deg] -translate-y-[3.6rem] translate-x-4 stroke-slate-600">
          <HandDrawnArrow />
        </div>
        {/* Envelope flap */}

        <div className="absolute w-[28px] h-[28px] bg-amber-50 -top-[14px] left-[6px] transform border rotate-45 border-gray-300 rounded-tl-sm rounded-tr-[1px] rounded-bl-[1px] shadow-sm" />

        {/* Main envelope body */}
        <div className="relative bg-amber-50 border border-gray-300 rounded-b-sm rounded-t-[1px] p-[3px] shadow-md w-[40px]">
          {/* Letter content */}
          <div
            className={`relative bg-white rounded-sm shadow-sm transform rotate-1`}
          >
            <div
              className={`px-[0.125rem] py-[0.2rem]  ${
                blur ? "blur-[0.2px]" : ""
              }`}
            >
              {/* Decorative letterhead */}
              <div className="absolute top-[2px] right-1 text-[1px] text-gray-400">
                November 16, 2024
              </div>

              <div className="text-[1px] text-gray-700 max-w-2xl leading-relaxed space-y-[1px]">
                <p className="font-serif italic text-gray-800">Hi there!</p>
                <p>You are invited to my birthday party.</p>

                <p>
                  <span className="font-bold text-rose-800">Theme: Tiny</span>
                </p>

                <p className="!mb-[3px] font-semibold">
                  Click{" "}
                  <a
                    href={blur ? "#" : "/competition"}
                    className="text-sky-500"
                  >
                    this link
                  </a>{" "}
                  for details.
                </p>

                <p className="font-serif italic text-[1.5px] text-gray-800">
                  Warmest regards,
                  <br />
                  Anthony
                </p>
              </div>

              {/* Decorative watermark */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[57%] left-1/2 -translate-y-1/2 text-[4px] text-gray-300 font-serif rotate-[-15deg]">
                  ✧✧✧
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
