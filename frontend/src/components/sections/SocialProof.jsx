import React from 'react';

const SocialProof = () => {
  const logos = [
    {
      name: "Google Play",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX5gbOQyxfszIBmB5HlkTHXCY293_i9DOOXHbojt7eSg_7ySoKqetQAkN65ip0hUtoIykGWNIdiZfxaBQ1QH_6WIkOCacutidvG34pR06ToCTsWIOQR_TSjLAoUkz_sWTGOdRa5uN2KAHdxPp0HHaDxQNUbpmVZ7sIBVgDOC7JLn4KND4Mjbg4ypW6hYexEXtyQYVuM6v62gRndovzykHGa9Mqa3803m-o4ZsM9EsxBV7HElpkvrrgEUWr20zbfaPeBgR6XfX99Eg",
      width: "w-32",
      height: "h-10",
    },
    {
      name: "Android Police",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL_CxG9yqPHnIDXZH2eDa5QYPPqWzy7bjJKzMSQ8TYnRN2qiL5Gv29XljZYhmL6Z_f_1LE279YD9V-1RNj_Dadj4yFSsZw-azDFj9OU3Rg5z4fYHh78f28LPwVTFxY3TkZvKNOyRfO1I9e7Zrcbt7-GGrXsyyKY0--IeFGYQi4l8Zcdvv5puvH5UoRTPzyPN11CALHmMVj2hqrS_F9JtoJBgT1pSaY2TGXmw7LuA0E0zKyI5ImCExVvrJQB1rAPJ2Nu9j3vu3d7aQ",
      width: "w-32",
      height: "h-10",
    },
    {
      name: "XDA Developers",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRvDy13O_5yev6lSDXAnThF-3GmTa6hTC5r4TM632MyJef4CIo95mt_OLUb6q4EqIfZJRV199wkC_u0PgNcOGwpT-kxP3klBW_OQ2elIbVtEUWY-j9v3NQnE5ntZL8bS-u9ikMzosrIeRDbpcqD9R_Wugdj1kVW0Ddbu8xoYd0AEjUp9KnHuUosT3hGzWAX1BxRLknQI9_eCUAD5ETQWzvDVg-fMGTR9wVxoN77af1i_MY0fDr6tLVwTfp4ly-JoJYWlIHlzIlOog",
      width: "w-24",
      height: "h-10",
    },
    {
      name: "TechRadar",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRE9HrZphrKer-66HF2LaaX4o-lZjB-F3TapxfO5Nd6DWsurnr9erOK8rInAinN-KaXyVPEUqvc7Dsddh7xRvTXpQJIdcNMtgdycW_4oyeSiwgsFjzG1RLbz2V1yZsSVgPc_QLKIs-2Ej0aRWmdZXa27_xpzUp0FcsFK_sahzG4hLNKph6fW4DpmlwvTHqxQq9FdqSDGaQLgcvo4R93kfWUh8y3cHg04p2-0c16LQ_dBSt5HvU98C4ZSGIHBKYYRyJz7TqB-hVpdg",
      width: "w-32",
      height: "h-8",
    },
    {
      name: "Android Authority",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmFfrT8yhR43NfGxRYpURaYYmV4Bf4u41fiWzvWNLQuggsr6cDhADGPV-bjJ9AU2sPpPCI9Vj9Q5OtSZ4X9VvSIEzttbW5WJhrNPfWhQtt2AUEXu0mOeQVdp2tx6XqtqZ01bsta1jGPSgMHAQ__8bGWi24MznUknhZ1LW5W0a8YZlIssOiAHwaQlgWs2jU7suIN3rVqqJhCl1QlE8d2IMK3nbsNaqZ0N6obyg91Cy4Dd7Rcp-O1Bp68pTFosOK3K8RYwzYsVAB3nY",
      width: "w-32",
      height: "h-10",
    },
  ];

  return (
    <section
      aria-label="Featured in and trusted by"
      className="relative w-full"
    >
      {/* Soft dotted background behind the bar */}
      <div className="absolute inset-0 bg-paper-texture opacity-40 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto rounded-[24px] bg-white/95 dark:bg-[#1e2329]/95 shadow-sm backdrop-blur-md border border-slate-100/80 dark:border-slate-800 px-6 py-6 md:px-12 md:py-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Featured In / Trusted By
          </span>
          <span className="text-xs text-slate-400">
            Loved by Android experts and readers worldwide
          </span>
        </div>

        {/* Logos row */}
        <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-8 md:justify-between md:gap-x-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group relative flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <img
                alt={`${logo.name} logo`}
                className={`${logo.height} ${logo.width} object-contain opacity-70 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 mix-blend-multiply`}
                src={logo.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
