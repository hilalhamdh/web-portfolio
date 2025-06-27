import { skill } from "../assets/images";
import { AppText, skillsList, workDetail } from "../constans";

const Skills = () => {
  return (
    <div className="mt-10" id="skills">
      <div className="flex flex-row justify-center items-center">
        <img
          src={skill}
          alt="skill image"
          className="w-[70px] hover:animate-bounce"
        />
        <h1 className=" text-[40px] font-bold">
          {AppText.Skills}{" "}
          <span className="text-purple-600 text-[40px] font-bold">
            {AppText.Experties}
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8">
        <div className="grid grid-cols-4 md:grid-cols-4  gap-8 items-center">
          {skillsList.map((skil) => (
            <div
              key={skil.id}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full'
"
            >
              <img src={skil.icon} alt="icon-image" className="w-[60px]" />
            </div>
          ))}
        </div>
        <div className="flex mt-5 flex-col justify-end  md:mt-0 lg:mt-0">
          {workDetail.map((work) => (
            <div key={work.id} className="flex flex-row mb-6">
              <div className="mr-10 font-bold">
                <h2>{work.year}</h2>
              </div>
              <div>
                <h3 className="font-bold w-full">{work.position}</h3>
                <h3 className="font-thin text-[15px] text-gray-400">
                  {work.compnayName}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
