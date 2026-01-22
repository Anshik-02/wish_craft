"use client";

export default function BirthdaySong({ music }: { music?: string | null }) {
  return (
    <section className="w-full px-1 md:mt-24 mt-10 mb-20 flex justify-center">
      <div className="max-w-3xl w-full bg-[#FFF8EE] rounded-3xl 
                      shadow-[0_20px_60px_rgba(0,0,0,0.08)] 
                      p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#C25B5B] mb-4">
          A Song For You
        </h2>
        <p className="text-[#6A4A42] text-lg mb-8">
          Play this when things feel quiet, heavy, or when you just want to feel understood.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            style={{ borderRadius: "10px" }}
            src={music ||""}

            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        <p className="mt-6 text-sm text-[#8B6A60] italic">
          “Some songs feel like people.”
        </p>
      </div>
    </section>
  );
}
