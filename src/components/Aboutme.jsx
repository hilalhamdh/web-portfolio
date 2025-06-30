import { laptop, wave } from "../assets/images";
import { aboutSection, AppText } from "../constans";

const Aboutme = () => {
  return (
    <div className="mt-36" id="about">
      <img
        src={wave}
        className="w-screen  absolute  object-cover h-10 sm:h-14 md:h-40 "
      />
      <img
        src={laptop}
        className="mt-[-130px] absolute md:mt-[-100px]  w-[220px] md:w-[300px]"
      />
      <div className="bg-purple-600 h-[300px] ">
        <h2 className="text-[50px] font-bold text-white text-center pt-18 lg:pt-6">
          {AppText.about}{" "}
          <span className="text-black text-center">{AppText.me}</span>
        </h2>
        <h2 className="text-white mt-5 md:mt-10 text-center px-7 md:px-60 lg:px-80">
          {AppText.aboutMeDescripion}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32   px-32px mt-[-20px] md:mt-[-30px]">
        {aboutSection.map((about) => (
          <div
            key={about.id}
            className="flex flex-col items-center group hover:bg-purple-600 transition-all ease-in-out hover:scale-110 rounded-lg  shadow-2xl px-2  "
          >
            <img
              src={about.image}
              className="w-[250px] h-[250px] object-cover rounded-md shadow-2xl "
            />
            <div className="w-[250px] pb-[20px]">
              <h2 className="font-bold text-center mt-2 group-hover:text-white">
                {about.title}
              </h2>
              <h2 className=" text-center mt-2 mb-3 text-gray-600 group-hover:text-white ">
                {about.desc}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutme;
