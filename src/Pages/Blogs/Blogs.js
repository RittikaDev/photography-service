import React from "react";
import "./Blogs.css";
import firebase from "../../Images/blogs/firebase.png";
import service from "../../Images/blogs/service.png";
import authentication from "../../Images/blogs/authentication.jpg";

const Blogs = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-7 col-sm-12">
          <div class="wrapper-blog">
            <div class="blog_post pt-5 px-3 pb-1">
              <div class="img_pod">
                <img src={authentication} alt="" className="blog-img " />
              </div>
              <div class="container_copy">
                <h5 className="text-center">
                  Difference between authorization and authentication
                </h5>

                <p>
                  The position property specifies the type of positioning method
                  used for an element (static, relative, absolute, fixed, or
                  sticky).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-2"></div>
        <div className="col-lg-10 me-4">
          <div class="wrapper-blog">
            <div class="blog_post pt-5 px-3 pb-1">
              <div class="img_pod">
                <img src={firebase} alt="" className="blog-img " />
              </div>
              <div class="container_copy">
                <h5 className="text-center">
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </h5>
                <p>
                  The position property specifies the type of positioning method
                  used for an element (static, relative, absolute, fixed, or
                  sticky).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-4"></div>
        <div className="col-lg-8">
          <div class="wrapper-blog ">
            <div class="blog_post pt-5 px-3 pb-1">
              <div class="img_pod">
                <img src={service} alt="" className="blog-img " />
              </div>
              <div class="container_copy">
                <h5 className="text-center">
                  What other services does firebase provide other than
                  authentication
                </h5>

                <p>
                  The position property specifies the type of positioning method
                  used for an element (static, relative, absolute, fixed, or
                  sticky).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
