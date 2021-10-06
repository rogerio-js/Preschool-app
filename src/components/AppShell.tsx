import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AppShell = ({ children }: Props) => {
  return (
    <div style={{maxHeight: "80vh"}}  className="mx-auto max-w-8xl">
      <div className="relative flex flex-col">
        <div className="flex-grow w-full lg:flex">{children}</div>
      </div>
    </div>
  );
};

export default AppShell;
