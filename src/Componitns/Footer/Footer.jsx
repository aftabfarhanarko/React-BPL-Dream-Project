import React from "react";
import bgimg from '../../assets/logo-footer.png'
import UpFooter from "./UpFooter";
const Footer = () => {
  return (
    <div className="bg-[#0d1230] text-white mt-[300px] pt-10">
        <UpFooter></UpFooter>
        <div >
            <img className="flex mx-auto" src={bgimg}></img>
        </div>
      <footer className="footer px-5 text-base-content p-10 flex flex-col md:flex-row justify-between max-w-[1100px] mx-auto">
        <div className="text-white">
          <h5 className="footer-title">About Us</h5>
          <p className="max-w-[200px]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="text-white">
          <h6 className="footer-title">Quick Link</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover"> Services</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>

        <form className="text-white">
          <h6 className="footer-title">Subscribe</h6>
          <p className="max-w-[220px] md:max-w-full">Subscribe to our newsletter for the latest updates.</p>
          <fieldset className="w-80">
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item rounded-l-lg  max-w-[200px] md:max-w-full"
              />
              <button className="btn bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300 join-item text-black font-semibold rounded-r-lg">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className=" border-t py-4 border-gray-400">
        <p className="text-center">©IPL 2025 Player Beating</p>
      </div>
    </div>
  );
};

export default Footer;
