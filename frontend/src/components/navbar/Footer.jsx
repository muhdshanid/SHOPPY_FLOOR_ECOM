import React from "react";
import { BsLinkedin, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-12/12  bg-green-800 ">
      <div
        className="w-12/12  flex  px-4
     lg:px-16 md:px-14 sm:px-8  "
      >
        <div className="grid borer-b grid-cols-2 w-full sm:grid-cols-3 md:grid-cols-4 py-4">
          <div className="flex flex-col gap-6 py-4">
            <div>
              <h6 className="font-semibold text-2xl text-white">Contact Us</h6>
            </div>
            <div className="flex text-white font-semibold text-lg">
              Hno : 277 Near Post Office , <br />
              Wayanad, Kerela <br />
              Pincode : 670645
            </div>
            <div>
              <a
                href="tel:+91 7306639007"
                className="text-white text-lg block "
              >
                +91 7306639007
              </a>
            </div>
            <div>
              <a
                href="mailto:shanidshani91@gmail.com"
                className="text-white text-lg block "
              >
                shanidshani91@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-6 ">
              <a className="text-white" href="/">
                <BsLinkedin size={29} />
              </a>
              <a className="text-white" href="/">
                <BsInstagram size={29} />
              </a>
              <a className="text-white" href="/">
                <BsGithub size={31} />
              </a>
              <a className="text-white" href="/">
                <BsYoutube size={35} />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-4">
            <div>
              <h6 className="font-semibold text-2xl text-white">
                Information{" "}
              </h6>
            </div>
            <div>
              <p className="font-normal text-lg text-white">Privacy Policy</p>
            </div>
            <div>
              <p className="font-normal text-lg text-white">Refund Policy</p>
            </div>
            <div>
              <p className="font-normal text-lg text-white">Shipping Policy</p>
            </div>
            <div>
              <p className="font-normal text-lg text-white">
                Terms & Conditions
              </p>
            </div>
            <div>
              <p className="font-normal text-lg text-white">Blogs</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-4">
            <div>
              <h6 className="font-semibold text-2xl text-white">Account </h6>
            </div>
            <div>
              <p className="font-normal text-lg text-white">About Us</p>
            </div>
            <div>
              <p className="font-normal text-lg text-white">FAQ</p>
            </div>
            <div>
              <p className="font-normal text-lg text-white">Contact</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-4">
            <div>
              <h6 className="font-semibold text-2xl text-white">
                Quick Links{" "}
              </h6>
            </div>
            <div>
              <Link
                to={"/cat-products/laptops"}
                className="font-normal capitalize text-lg text-white"
              >
                Laptops
              </Link>
            </div>
            <div>
              <Link
                to={"/cat-products/headphones"}
                className="font-normal capitalize text-lg text-white"
              >
                Headphones
              </Link>{" "}
            </div>
            <div>
              <Link
                to={"/cat-products/mobiles"}
                className="font-normal capitalize text-lg text-white"
              >
                Mobiles
              </Link>{" "}
            </div>
            <div>
              <Link
                to={"/cat-products/watches"}
                className="font-normal capitalize text-lg text-white"
              >
                Watches
              </Link>{" "}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
