"use client";
import { MdLogin, MdShoppingCart, MdMenu } from "react-icons/md";
import Logo from "./logo";
import Nav from "./nav";
import SearchBar from "./searchBar";
import Link from "next/link";
import { setOpen } from "@/redux/features/navBarSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  function handleSideMenuShow() {
    dispatch(setOpen());
  }

  return (
    <div className="w-full grid grid-cols-3 pt-3 gap-3 bg-primary-color text-white drop-shadow-md fixed z-50">
      <div className="col-span-3 lg:col-span-2 flex flex-row h-12 items-center gap-3">
        <Logo />
        <div className="w-3/5">
          <SearchBar />
        </div>
      </div>
      <div
        className="flex lg:hidden xl:hidden col-span-1 md:col-span-2 p-3"
        onClick={handleSideMenuShow}
      >
        <MdMenu size={24} color={"white"} />
      </div>
      <div className=" flex flex-row gap-2 justify-center col-span-2 md:col-span-1  items-center justify-self-end">
        <Link href={`/cart`} className="flex flex-row p-2 divide-x-2">
          <MdShoppingCart size={24} color={"white"} />
        </Link>
        <div className="flex flex-row p-2 rounded-md gap-1">
          <MdLogin className="" size={24} color={"white"} />
          <Link className=" text-white" href={`/user/profile`}>
            ورود/ثبت نام
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex bg-white col-span-3 lg:col-span-3 items-center px-2">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
