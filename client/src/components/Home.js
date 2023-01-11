import React from "react";
import "./homepage.css";

export const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p className="pt-5">WELCOME</p>
          <h1 className="mern">We Are The MERN Developer</h1>
        </div>
      </div>

      <div className="space-bt">
        <h3 className="exph3">Skills</h3>
      </div>
      <div className="home_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phone number */}
              <div className="home_info_item d-flex justify-content-start align-items-center">
                <div className="home_info_content">
                  <div className="home_info_title"></div>
                  <div className="home_info_text">
                    <ul>
                      <li>HTML</li>
                      <li>HTML</li>
                      <li>HTML</li>
                      <li>HTML</li>
                      <li>HTML</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* email  */}
              <div className="home_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="phone"
                />
                <div className="home_info_content">
                  <div className="home_info_title">Email</div>
                  <div className="home_info_text">
                    ahmed-ahsan70@hotmail.com
                  </div>
                </div>
              </div>
              {/* Address  */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="home_info_title">Address</div>
                  <div className="home_info_text">Karachi, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
