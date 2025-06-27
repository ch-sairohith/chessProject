import { FC, PropsWithChildren } from "react";

const PrivateLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};

export default PrivateLayout;
