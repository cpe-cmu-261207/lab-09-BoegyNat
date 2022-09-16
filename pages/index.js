import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <div style={{ backgroundColor: "#dcd7c9" }}>
        <div style={{ backgroundColor: "#a27b5c" }}>
          <div style={{ backgroundColor: "#3f4e4f" }}>
            <div style={{ backgroundColor: "#2c3639" }}>
              <div className="d-flex fs-3">
                <Navbar />
              </div>

              <img
                src="IMG_20210607_170544.jpg"
                alt="My picture"
                width="300"
                height="300"
                style={{ objectFit: "cover" }}
                className="d-flex mx-auto my-5 rounded-circle"
              />
              <h1
                className="d-flex justify-content-center"
                style={{ color: "antiquewhite" }}
              >
                นายณัฏฐ์ อุจะรัตน <br />
              </h1>
              <p
                className="d-flex justify-content-center"
                style={{
                  color: "aliceblue",
                  fontFamily: "IBM Plex Sans Thai",
                }}
              >
                สวัสดีครับ! ผมชื่อ ณัฏฐ์ อุจะรัตน หรือเรียกผมว่า "โบกี้"
                ก็ได้ครับ
                <br />
              </p>
              <p
                className="d-flex justify-content-center"
                style={{
                  color: "aliceblue",
                  fontFamily: "IBM Plex Sans Thai",
                }}
              >
                ผมเรียนอยู่ที่มหาวิทยาลัยเชียงใหม่ คณะวิศวกรรมศาสตร์
                สาขาคอมพิวเตอร์
                <br />
              </p>
              <p
                className="d-flex justify-content-center"
                style={{
                  marginBottom: "50px",
                  color: "aliceblue",
                  fontFamily: "IBM Plex Sans Thai",
                }}
              >
                ผมชื่นชอบในการเขียนโปรแกรม และ เขียนเว็ปไซต์ต่างๆ
              </p>
            </div>
            <h2
              className="d-flex justify-content-center"
              style={{ marginBottom: "50px", color: "antiquewhite" }}
            >
              ความสามารถของผม
            </h2>
            <div
              className="d-flex justify-content-center"
              style={{ marginBottom: "50px" }}
            >
              <div
                className="card text-bg-secondary mb-3"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://catalyst-ca.net/wp-content/uploads/2021/12/top-programing-languages.jpeg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">การเขียนโปรแกรม</h5>
                      <p className="card-text">
                        ผมสามารถเขียนได้เพียงภาษา C++ เท่านั้น
                        แต่ในอนาคตผมจะศึกษาภาษาอื่นๆให้ชำนาญขึ้นครับ!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ marginBottom: "50px" }}
          >
            <div
              className="card text-bg-secondary mb-3"
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://www.bangkokbanksme.com/uploads/topics/15614370699467.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">งานอดิเรก</h5>
                    <p className="card-text">
                      ร้องเพลง ฟังเพลง วาดรูป เล่นเกม ดูหนัง ถ่ายรูป และ
                      เขียนโปรแกรม
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="card text-bg-secondary mb-3"
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="IMG_25621105_224333.JPG"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">กีฬาเทควันโด</h5>
                  <p className="card-text">
                    ผมได้ลงแข่งมาแล้วหลายแมตท์ ได้รางวัลมากมาย
                    รางวัลที่สูงที่สุดคือ"เหรียญทองระดับภาค"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
