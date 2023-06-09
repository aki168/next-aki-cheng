import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Meta";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
