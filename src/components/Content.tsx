export function Content({ blur }: { blur: boolean }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      {/* Container for the content that looks like an envelope */}
      <div className="relative">
        {/* Envelope flap */}
        <div className="absolute w-full h-8 bg-amber-50 origin-bottom -top-4 left-0 transform -rotate-2 border-t border-x border-gray-300 rounded-t-3xl shadow-sm" />

        {/* Main envelope body */}
        <div className="relative bg-amber-50 border border-gray-300 rounded-lg p-6 shadow-sm">
          {/* Letter content */}
          <p className="text-[3.5px] text-gray-600 max-w-2xl leading-relaxed bg-white p-4 rounded shadow-sm">
            <div className={`${blur ? "blur-[1px]" : ""}`}>
              Hello!
              <br />
              You are hereby cordially invited to my birthday party on the 26th
              of December.
              <br />
              Location: Roumieh, Beirut, Lebanon
              <br />
              Time: 2:00 PM
              <br />
              Theme: Tiny
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
