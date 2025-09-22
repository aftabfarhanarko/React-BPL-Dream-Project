import React from "react";

const UpFooter = () => {
  return (
    <div className="hero border max-w-[900px] mx-auto shadow-2xl relative mt-[-170px] mb-20 py-5 rounded-lg bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <p className="label">Email</p>
              <input type="email" className="input" placeholder="enter your Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300 join-item text-black font-semibold rounded-r-lg text-[18px]">
                Loging
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpFooter;
