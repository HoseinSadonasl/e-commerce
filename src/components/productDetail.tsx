import { MdStar } from "react-icons/md";

const ProductDetail = () => {
  return (
    <div className="flex flex-col p-4 lg:p-0 gap-3">
      <h4 className="text-sm text-primary-color">تست / تست</h4>
      <h2 className="text-2xl h-16 min-h-max text-gray-500">
        سامسونگ گلکسی اس 22 الترا
      </h2>
      <h4 className="text-md text-gray-500 flex flex-row">
        امتیاز کاربران:
        <span className="flex flex-row">
          <MdStar size={16} color={"orange"} />
          <MdStar size={16} color={"orange"} />
          <MdStar size={16} color={"orange"} />
          <MdStar size={16} color={"grey"} />
          <MdStar size={16} color={"grey"} />
        </span>
      </h4>
      <div className="flex flex-row items-center gap-4 mt-2">
        <span className="text-sm text-gray-500 ">رنگ: </span>
        <div className="flex flex-row items-center p-1 outline outline-2 outline-gray-400 bg-white rounded-full">
          <div className="p-3 bg-primary-color outline outline-2 outline-white rounded-full"></div>
          <span className="px-2">سبز</span>
        </div>
      </div>
      <span className="text-sm text-gray-500 ">گارانتی: </span>
    </div>
  );
};

export default ProductDetail;
