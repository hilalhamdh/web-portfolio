import { AppText, CompanyImage } from "../constans";
const Companies = () => {
  return (
    <div className="mt-10 bg-purple-200 p-5">
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-bold text-[40px]">
          {AppText.CompaniesI}{" "}
          <span className="text-purple-600 font-bold text-[40px]">
            {AppText.WorkedFor}
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-3 place-items-center px-4 md:px-30  ">
        {CompanyImage.map((item) => (
          <div
            key={item.id}
            className="m-3 transition-all ease-in-out hover:scale-110 "
          >
            <img src={item.imageUrl} className="h-[60px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
