import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-o w-dvw h-dvh overflow-hidden flex flex-col px-4" >
        <header className="w-full h-16 bg-blue-950">
            header
        </header>
        <main className="flex-1 flex py-6 bg-background">
            <Outlet /> 
        </main>
    </div>
  );
}
