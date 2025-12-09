import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Lenis from "lenis";
import { ThemeProvider } from "./contexts/ThemeContext";

const root = createRoot(document.getElementById("root")!);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

// Smooth scroll using Lenis for a premium feel
const lenis = new Lenis({
  lerp: 0.1,
  smoothWheel: true,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

