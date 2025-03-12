import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({children}: ContainerProps) {
  return (
    <div className='container' style={{ maxWidth: "1200px", width: "80vw", margin: "auto" }}>
      {children}
    </div>
  );
}
