import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main role="main" className="bg-gray-100">
        <div className="container mx-auto h-screen py-20 px-4">
          <div className="flex flex-wrap h-full -mx-4">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
