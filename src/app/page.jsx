import Container from "@/components/Container";
import PrimaryBtn from "@/components/PrimaryBtn";
import Service from "@/components/ui/service/page";

export default function Home() {
  return (
    <section>
      <div
        className="hero h-[40vh] md:h-[60vh]"
        style={{
          backgroundImage: "url(hero-bg.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content flex flex-col justify-center text-neutral-content text-center relative h-full">
          <div className="max-w-lg space-y-2 md:space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Green Fabric</h1>
            <p className="tracking-wide hidden md:block">
              Premium quality T-shirts crafted for everyday comfort and
              effortless style. Discover your perfect fit and express yourself
              with our unique designs.
            </p>
            <p className="tracking-wide md:hidden">
              Wear Your Style, Own Your Comfort
            </p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
      {/*  service  */}
      <Container className={"py-16 md:py-28"}>
        <Service />
      </Container>
    </section>
  );
}
