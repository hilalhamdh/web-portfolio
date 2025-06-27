import { AppText, portfolio } from "../constans";
import { useState } from "react";
import { robo } from "../assets/images";
import SectionHeading from "../shared/SectionHeading";

const Portfolio = () => {
  const [portfolioList, setPortfolioList] = useState(portfolio);

  const FilterPortfolio = (type) => {
    if (type === "All") {
      setPortfolioList(portfolio);
    } else {
      const result = portfolio.filter((item) => item.type === type);
      setPortfolioList(result);
    }
  };
  return (
    <div className="mt-20 flex justify-center flex-col">
      <div className="flex flex-row px-6 md:px-0 items-center justify-center">
        {/* <h1 className='text-[40px] font-bold'>{AppText.Creative}
        <span className='text-purple-600'>{AppText.Portfolio}</span></h1> */}
        <SectionHeading
          firstTitle={AppText.Creative}
          secondTitle={AppText.Portfolio}
        />
        <img src={robo} className="w-[70px] ml-5 animate-bounce" />
      </div>

      <div className="flex flex-row  justify-center mt-3 gap-2 md:gap-8 px-45 md:px-72">
        <button
          onClick={() => FilterPortfolio("All")}
          className="border-purple-600 border-2 text-purple-600  focus:text-white active:bg-purple-500 p-1 px-4 rounded-md
           focus:ring-violet-300 focus:bg-purple-600 focus:ring"
        >
          All
        </button>

        <button
          onClick={() => FilterPortfolio("ui/ux")}
          className="border-purple-600 border-2 text-purple-600  focus:text-white active:bg-purple-500 p-1 px-4 rounded-md
           focus:ring-violet-300 focus:bg-purple-600 focus:ring"
        >
          UI/UX
        </button>
        <button
          onClick={() => FilterPortfolio("website")}
          className="border-purple-600 border-2 text-purple-600  focus:text-white active:bg-purple-500 p-1 px-4 rounded-md
           focus:ring-violet-300 focus:bg-purple-600 focus:ring"
        >
          Website
        </button>
        <button
          onClick={() => FilterPortfolio("mobile")}
          className="border-purple-600 border-2 text-purple-600  focus:text-white active:bg-purple-500 p-1 px-4 rounded-md
           focus:ring-violet-300 focus:bg-purple-600 focus:ring"
        >
          Mobile
        </button>
      </div>
      <div className="grid grid-cols-2 items-center content-center md:grid-cols-3 lg:grid-cols-3 md:px-24 lg:px-48 p-4">
        {portfolioList.map((port) => (
          <div
            key={port.id}
            className="p-2 flex flex-col m-2 rounded-lg bg-purple-100
                transition-all ease-in-out group hover:scale-110"
          >
            <img
              src={port.imageUrl}
              className="h-[180px] object-cover rounded-lg"
            />
            <h1 className="text-[14px] group-hover:scale-110 mt-2 text-center  font-bold">
              {port.title}
            </h1>
            <h1 className="text-[12px] text-gray-500 px-3 md:px-6 pb-3">
              {port.desc}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
