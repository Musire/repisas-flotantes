import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className=" w-dvw h-dvh overflow-hidden flex flex-col px-4 bg-background" >
        <header className="w-full h-16 ">
            header
        </header>
        <main className="flex-1 flex py-6 ">
            <Outlet /> 
        </main>
    </div>
  );
}
