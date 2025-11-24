import Image from "next/image";

export default function Home() {
  return (
    <div
      className="hero h-[40vh] md:h-[70vh]"
      style={{
        backgroundImage: "url(hero-bg.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content flex flex-col justify-center text-neutral-content text-center relative h-full">
        <div className="max-w-lg space-y-2 md:space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Green Fabric</h1>
          <p className="tracking-wide hidden md:block">
            Premium quality T-shirts crafted for everyday comfort and effortless
            style. Discover your perfect fit and express yourself with our
            unique designs.
          </p>
          <p className="tracking-wide md:hidden">
            Wear Your Style, Own Your Comfort
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        {/* <div className="space-y-2 md:hidden items-end border">
          <h1 className="text-3xl font-bold">Green Fabric</h1>
          <p className=" mb-5">
            Premium quality T-shirts crafted for everyday comfort and effortless
            style. Discover your perfect fit and express yourself with our
            unique designs.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div> */}
      </div>
    </div>
  );
}
