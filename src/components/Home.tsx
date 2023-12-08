import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  return (
    <div id="home" className="relative  lg:h-[95vh] h-[81vh] ">
      <LazyLoadImage
        src="./home.jpg"
        alt="webDevelopment"
        className="h-full w-[100%]"
      />
      <div className="bg-white p-3 typewriter rounded-xl absolute top-[15rem] left-[4rem] text-2xl font-serif">
        <h1>Junior Web Developer </h1>
        <h2 className=""> Re@dy to work</h2>
      </div>
      <div className="w-full  flex justify-center items-center absolute -bottom-6">
        <a href="#about">
          <div className="w-[32px] h-[61px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-[#0a1725] flex justify-center items-start ">
            <div className="rounded-full bg-[#0a1725] w-[0.6rem] h-[0.6rem] sm:w-3 sm:h-3 child-color-animation" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
