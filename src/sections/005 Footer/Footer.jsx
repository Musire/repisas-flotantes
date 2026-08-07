import { Image } from "@/components";

// Vite's dynamic URL import - works in both dev and production build
const footerBg = new URL("/src/assets/idea/footer_background.png", import.meta.url).href;

export default function Footer() {
  return (
    <main className="max-w-full grow-0 centered border-t relative h-[30dvh] overflow-hidden p-4 bg-primary">
      <Image
        contain
        src={footerBg}
        className="w-full absolute -right-6 -bottom-6"
      />
    </main>
  );
}