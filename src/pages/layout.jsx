import { MetadataManager, Navbar, ScrollHandler } from "@/components";
import { Footer } from "@/sections";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <HelmetProvider>
      <div className="max-w-dvw min-h-dvh flex flex-col overflow-x-hidden overflow-y-auto bg-background text-foreground  scrollbar-adjust">
        <MetadataManager />
        <ScrollHandler />
        <Navbar />
        <main className="py-6 flex flex-1 mt-16 px-4">
            <Outlet /> 
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
