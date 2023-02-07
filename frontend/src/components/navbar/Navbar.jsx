import React from "react";

const Navbar = () => {
  return (
    <div className=" w-12/12  bg-green-900 h-10">
      <div className="sm:mx-16 mx-2 h-full  flex-ic-jb">
        <div className="  ">
          <p className="tw-tb-fs">
            Free Shipping Over 500 & Free Returns
          </p>
        </div>
        <div className="hidden sm:flex">
          <p className="tw-tb-fs">
            ph:{" "}
            <a className="text-white" href="tel:+91 7306639080">
              +91 7306639080
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
