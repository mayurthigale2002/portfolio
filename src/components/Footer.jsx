import React from "react";

const Footer = () => {
  return (
    <>
      {/* Thank You Section */}
      <section className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl md:text-3xl font-semibold text-yellow-500 tracking-wide">
            Thank You For Visiting My Portfolio..!!
          </h3>
        </div>
        <div className="max-w-6xl mx-auto mt-10 px-6 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
