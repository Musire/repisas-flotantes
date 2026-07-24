import { Link } from "@/components";

; // Adjust this path to match your project

export default function RootPage() {
  return (
    <div className="flex-1 flex flex-col bg-slate-900 text-white font-sans">
      
      {/* Test Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-800/80 backdrop-blur border-b border-slate-700 p-4 flex justify-between items-center z-50">
        <span className="font-bold text-indigo-400">Vite NextLink Test</span>
        <div className="flex gap-6">
          {/* Test 1: Jump to a separate page route */}
          <Link href="/tinker" className="text-sm font-medium hover:text-indigo-400 transition">
            Go to Tinker Page →
          </Link>
          
          {/* Test 2: Same-page smooth scroll down to the footer */}
          <Link href="#footer-landing" className="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 rounded transition">
            Scroll to Footer ↓
          </Link>
        </div>
      </nav>

      {/* Main Content Body */}
      <main className="flex-1 flex flex-col pt-20 px-6  w-full">
        
        {/* Intro Hero section */}
        <section className="py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
            Testing Custom Routing & Scrolling
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Click the "Scroll to Footer" button in the top right to test the smooth scrolling component logic.
          </p>
        </section>

        {/* Large Simulated Content Area (Creates scrollable space) */}
        <div className="my-12 h-[150vh] flex flex-col items-center justify-center bg-slate-800/40 rounded-2xl border-2 border-dashed border-slate-700 text-slate-500 font-mono text-sm">
          <p>[ Scrolling Zone ]</p>
          <p className="text-xs text-slate-600 mt-2">The IntersectionObserver is watching your viewport</p>
        </div>

        {/* Test 3: The Target Footer Element */}
        <footer 
          id="footer-landing" 
          className="mt-auto mb-16 p-12 bg-indigo-950 rounded-2xl border border-indigo-500/30 text-center shadow-xl shadow-indigo-500/5"
        >
          <h2 className="text-2xl font-bold text-indigo-300 mb-2">🎯 Footer Reached!</h2>
          <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm">
            If you arrived here smoothly without an instant layout snap, your custom layout scroll handler is operating perfectly.
          </p>
          
          {/* Test 4: Smooth scroll back up to the very top */}
          <Link href="#" className="text-xs text-indigo-400 hover:text-indigo-300 underline font-medium">
            Back to top ↑
          </Link>
        </footer>

      </main>
    </div>
  );
}
