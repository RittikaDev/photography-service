import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <header class="header">
      <div class="container about mt-0">
        <div class="about-content">
          <div class="about-img flex">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="photographer img"
              className="rounded rounded-circle"
            />
          </div>
          <h2>Frame Your Moments</h2>
          <h3 className="pb-2">| Photographer | </h3>
          <blockquote className="my-2 mx-auto text-center">
            "Photography is a way of feeling, of touching, of loving. What you
            have caught on film is captured forever ... It remembers little
            things, long after you have forgotten everything."
            <span>-Aaron Siskind</span>
          </blockquote>
        </div>

        <div class="social-icons">
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Banner;
