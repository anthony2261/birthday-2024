export function Content() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      {/* Container for the content that looks like an envelope */}
      <div className="relative">
        {/* Envelope flap */}
        <div className="absolute w-full h-8 bg-amber-50 origin-bottom -top-4 left-0 transform -rotate-2 border-t border-x border-gray-300 rounded-t-3xl shadow-sm" />
        
        {/* Main envelope body */}
        <div className="relative bg-amber-50 border border-gray-300 rounded-lg p-6 shadow-sm">
          {/* Letter content */}
          <p className="text-[4px] text-gray-600 max-w-2xl leading-relaxed bg-white p-4 rounded shadow-sm">
            Hello!
            <br />
            You are hereby cordially invited to my birthday party on the 26th of
            December.
            <br />
            Location: Roumieh, Beirut, Lebanon
            <br />
            Time: 2:00 PM
            <br />
            Theme: Tiny
            {/* In the depths of quantum realms, where particles dance in mysterious
          ways, scientists discovered that the very fabric of reality is not what
          it seems. The observer effect suggests that the mere act of looking at
          something changes its behavior, much like this magnifying glass changes
          how you perceive these words. What other secrets might we uncover when
          we look closer at the world around us? */}
          </p>
        </div>
      </div>
    </div>
  );
}
