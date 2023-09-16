import AuthForm from "@/components/authForm";
import Logo from "@/components/logo";

export default function Auth() {
  return (
    <main className="w-full h-screen p-4 flex flex-col gap-4 bg-white-color items-center justify-center outline outline-1 outline-grey-color pt-32 md:pt-36 ">
      <div className=" rounded-2xl outline outline-1 outline-grey-color flex flex-col">
        <div className="w-full h-[120px] bg-primary-color flex items-center justify-center rounded-t-2xl">
          <Logo />
        </div>
        <div className="p-4 flex flex-col gap-8">
          <a className="text-lg text-text-color font-bold">ورود | ثبت نام</a>
          <AuthForm />
        </div>
      </div>
    </main>
  );
}
