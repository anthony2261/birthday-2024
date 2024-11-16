export function Content({ blur }: { blur: boolean }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      {/* Container for the content that looks like an envelope */}
      <div className="relative">
        {/* Envelope flap */}
        <div className="absolute w-full h-12 bg-amber-50 origin-bottom -top-6 left-0 transform -rotate-2 border-t border-x border-gray-300 rounded-t-[40px] shadow-sm" />

        {/* Main envelope body */}
        <div className="relative bg-amber-50 border border-gray-300 rounded-lg p-8 shadow-md">
          {/* Letter content */}
          <div
            className={`relative bg-white rounded shadow-sm transform rotate-1`}
          >
            <div className={`p-6  ${blur ? "blur-[1px]" : ""}`}>
              {/* Decorative letterhead */}
              <div className="absolute top-2 right-2 text-[3px] text-gray-400">
                November 16, 2024
              </div>

              <div className="text-[3px] text-gray-700 max-w-2xl leading-relaxed space-y-2">
                <p className="font-serif italic text-[3.5px] text-gray-800 mb-3">
                  Dear Friend,
                </p>

                <p>You are hereby cordially invited to my birthday party!</p>

                <div className="space-y-1">
                  <p>
                    <span className="font-medium">Date:</span> December 26, 2023
                  </p>
                  <p>
                    <span className="font-medium">Time:</span> 2:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Location:</span> Roumieh,
                    Beirut, Lebanon
                  </p>
                  <p>
                    <span className="font-medium">Theme:</span> Tiny
                  </p>
                </div>

                <p>
                  I would be delighted to have you join me for this special
                  celebration.
                </p>

                <p className="mt-3 font-serif italic text-[3.5px] text-gray-800">
                  Warmest regards,
                  <br />
                  Anthony
                </p>
              </div>

              {/* Decorative watermark */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] text-gray-100 font-serif rotate-[-15deg]">
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
