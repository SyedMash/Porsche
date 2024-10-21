import ReactLenis from "lenis/react";

const Smooth = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default Smooth;
