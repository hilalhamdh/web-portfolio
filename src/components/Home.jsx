import { homeImage } from "../assets/images";
import { AppText } from "../constans";
import Aboutme from "./Aboutme";
import Companies from "./Companies";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-10 flex flex-col items-center md:flex-row px-4 md:px-20">
        <div>
          <h1 className="text-[40px] font-bold">{AppText.hello}</h1>
          <h1 className="text-[40px] font-bold">
            {AppText.Iam}
            <span className="text-purple-600 ">{AppText.Hilal}</span>
          </h1>
          <h1 className="text-gray-400 mt-4">{AppText.desc}</h1>
          <button className="bg-purple-600 p-2 px-3 rounded-md text-white mt-3 transition-all ease-in-out hover:scale-110">
            Resume
          </button>
        </div>
        <img src={homeImage} className=" w-[300px] md:w-[400px]" />
      </div>
      <Aboutme />
      <Skills />
      <Portfolio />
      <Companies />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
