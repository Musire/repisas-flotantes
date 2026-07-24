import { ScrollHandler } from "@/components";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="max-w-dvw min-h-dvh flex flex-col overflow-x-hidden overflow-y-auto bg-background text-foreground px-4 scrollbar-adjust">
      <ScrollHandler />
      <header className="w-full h-16 sticky left-0 top-0 border-b bg-card px-6 flex items-center shrink-0 z-50">
        <div className="font-bold">My Application Logo</div>
      </header>
      <main className="py-6 flex flex-1 ">
          <Outlet /> 
        </main>

    </div>
  );
}
