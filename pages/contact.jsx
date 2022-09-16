import React from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div style={{ backgroundColor: "#2c3639" }}>
      <Navbar />

      <img
        src="What if 2.0.jpg"
        alt="My picture"
        width="300"
        height="300"
        style={{ objectFit: "cover" }}
        className="d-flex mx-auto my-5 rounded-circle"
      />
      <h1
        className="d-flex justify-content-center"
        style={{ color: "antiquewhite", marginBottom: "50px" }}
      >
        นายณัฏฐ์ อุจะรัตน (โบกี้)
        <br />
      </h1>
      <p className="d-flex justify-content-center">
        Tel : 0805551355
        <br />
      </p>
      <p className="d-flex justify-content-center">
        Email : bboegy@gmail.com
        <br />
      </p>
      <a
        href="https://www.facebook.com/nat.boegy"
        text-decoration="none"
        rel="noreferrer"
        className="d-flex justify-content-center link-light px-md-5 py-2"
      >
        <span>
          <h3 style={{ fontSize: "20px" }}>Facebook</h3>
        </span>
      </a>
      <a
        href="https://www.instagram.com/boegy_nat/?hl=en"
        text-decoration="none"
        rel="noreferrer"
        className="d-flex justify-content-center link-light px-md-5 py-3"
      >
        <span>
          <h3 style={{ fontSize: "20px" }}>Instagram</h3>
        </span>
      </a>
    </div>
  );
}
