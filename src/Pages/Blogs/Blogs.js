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
                  Authentication is the process of verifying a user where a user
                  provides username,password,email address. And this information
                  is changeable by the user. Whereas, authorization defines
                  which resources or files or any such thing is accessible by
                  the user. And this is usually determined by an organization
                  and a user does not see this entire process that is happening
                  behind the scene.
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
                  Firebase provides one of the easiest authentication method
                  without going through the manual authentication building
                  system. It gives a much flexible backend service. Besides
                  email password it also helps to authenticate with social
                  accounts. Otheroptions for authentication are:- Auth0, Google
                  ID token authentication, Service accounts
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
                  Other Firebase services includes:- Hosting, Cloud Storage,
                  Google Analytics,Cloud Firestore, Cloud Functions, Cloud
                  Messaging,
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
