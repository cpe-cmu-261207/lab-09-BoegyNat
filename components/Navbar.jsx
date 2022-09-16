import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div style={{ maxWidth: "600px" }} className="mx-auto">
      <div className="d-flex justify-content-center gap-5 fs-4">
        <Link href="/">
          <a className="link-light">Home</a>
        </Link>
        <Link href="/Ex">
          <a className="link-light">Experience</a>
        </Link>
        <Link href="/contact">
          <a className="link-light">Contact</a>
        </Link>
        <Link href="/lab-07">
          <a className="link-light">Lap-07</a>
        </Link>
      </div>
      <hr />
    </div>
  );
}
