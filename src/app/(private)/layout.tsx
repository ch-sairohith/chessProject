import { FC, PropsWithChildren } from "react";

const PrivateLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">Chess Hub</h1>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Chess Hub
      </footer>
    </div>
  );
};

export default PrivateLayout;
