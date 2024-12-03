export function Content({ blur }: { blur: boolean }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      {/* Container for the content that looks like an envelope */}
      <div className="relative">
        {/* Envelope flap */}
        <div className="absolute w-[36px] h-[36px] bg-amber-50 -top-[17px] left-[7px] transform rotate-45 border border-gray-300 rounded-sm shadow-sm" />

        {/* Main envelope body */}
        <div className="relative bg-amber-50 border border-gray-300 rounded-sm p-[0.35rem] shadow-md">
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
              <div className="absolute top-[2px] right-1 text-[1.1px] text-gray-400">
                November 16, 2024
              </div>

              <div className="text-[1px] text-gray-700 max-w-2xl leading-relaxed space-y-[1px]">
                <p className="font-serif italic text-[1.1px] text-gray-800">
                  Hi there!
                </p>

                <p>You are invited to my birthday party.</p>

                <div className="space-y-[1px]">
                  <p>
                    <span className="font-semibold">Date:</span> December 28,
                    2024
                  </p>
                  <p>
                    <span className="font-semibold">Time:</span> 1:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span> Roumieh,
                    Beirut, Lebanon
                  </p>
                  <p>
                    <span className="font-bold text-rose-800">Theme: Tiny</span>
                  </p>
                </div>

                <p>
                  I would be delighted to have you join me for this special
                  celebration.
                </p>
                <p className="!mb-[3px] font-semibold">
                  Head over to{" "}
                  <span className="text-blue-800">
                    anthonymalkoun.party/competition
                  </span>{" "}
                  for competition details.
                </p>

                <p className="font-serif italic text-[1.5px] text-gray-800">
                  Warmest regards,
                  <br />
                  Anthony
                </p>
              </div>

              {/* Decorative watermark */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[88%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4px] text-gray-300 font-serif rotate-[-15deg]">
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
