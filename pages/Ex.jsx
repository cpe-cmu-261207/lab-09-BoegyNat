import React from "react";
import Navbar from "../components/Navbar";

export default function ex() {
  return (
    <div style={{ backgroundColor: "#a27b5c" }}>
      <div style={{ backgroundColor: "#2c3639" }}>
        <Navbar />
        <div className="d-flex justify-content-center my-5">
          <iframe
            src="https://scratch.mit.edu/projects/563240990/embed"
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <h5 className="d-flex justify-content-center my-5">
          โปรเจกท์ของผม ตอนปี1 เทอม1
        </h5>
        <p className="d-flex justify-content-center">
          โปรเจกท์นี่เป็นเกมจรวจยิงอุปสรรคมากมาย
        </p>
        <a
          href="https://scratch.mit.edu/projects/563240990/"
          text-decoration="none"
          className="d-flex justify-content-center link-light px-md-5 py-3"
        >
          <span>หากเล่นไม่ได้ คลิกที่นี่</span>
        </a>
      </div>
      <img
        src="code.png"
        alt="My picture"
        width="485"
        style={{ objectFit: "cover" }}
        className="d-flex mx-auto my-5"
      />
      <h5 className="d-flex justify-content-center my-5">
        โปรเจกท์ของผม ตอนปี1 เทอม2
      </h5>
      <p className="d-flex justify-content-center">
        โปรเจกท์นี่เป็นระบบจัดการของโรงภาพยนต์ เขียนด้วยภาษา C++
      </p>
    </div>
  );
}
