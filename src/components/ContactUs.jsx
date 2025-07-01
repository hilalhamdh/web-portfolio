import { contactusbg, phone } from "../assets/images";
import { AppText } from "../constans";
import { IoMdSend } from "react-icons/io";
import AOS from "aos";
const ContactUs = () => {
  AOS.init();
  return (
    <div className="mt-32 " id="contact">
      <div className="flex flex-row items-center justify-center">
        <h1 className="font-bold text-[40px] ">{AppText.Contact}</h1>
        <img src={phone} className="w-[80px] ml-5 animate-bounce " />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44 mt-10">
        <img
          src={contactusbg}
          alt="contact-image"
          className="cover-image w-[300px] mr-10"
        />
        {/* <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-gray-600 text-lg ">Email</label>
              <input
                className="border border-gray-500 p-2 rounded-sm"
                type="text"
                name="email"
                placeholder="input your email"
              ></input>
            </div>
            <div className="flex flex-col mt-3">
              <label className="text-gray-600 text-lg">Message</label>
              <textarea
                className="border-[1.5px] px-2 hover:border-purple-500 border-purple-300 rounded-md"
                type="text"
                rows={7}
                placeholder="input your message"
              ></textarea>
              <button className="transition-all ease-in-out hover:scale-110 bg-purple-500 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white  rounded-md">
                Submit
                <IoMdSend className="ml-2 w-6 h-6" />
              </button>
            </div>
          </form>
        </div> */}
        <div className="contact " id="kontak">
          <form
            action="https://formsubmit.co/hilalhamdihafit@gmail.com"
            method="POST"
            className="p-3 md:p-5 w-full sm:w-fit mx-auto rounded-md "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
            autoComplete="off"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col ">
                <label className=" font-semibold  ">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="input your name..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col ">
                <label className="font-semibold ">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="input your email..."
                  className="border border-purple-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="pesan" className="font-semibold ">
                  Message
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols={45}
                  rows={7}
                  placeholder="input your message..."
                  className="border border-purple-500 p-2 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="flex text-center">
                <button
                  type="submit"
                  className="bg-violet-700 p-3 flex items-center justify-center text-white rounded-lg w-full cursor-pointer border border-purple-600 hover:bg-violet-500 text-center"
                >
                  Send Message <IoMdSend className="ml-2 h-6 w-6" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
