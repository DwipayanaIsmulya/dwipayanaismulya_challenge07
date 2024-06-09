import NavbarCars from "../../Components/Header/NavbarCars";
import FooterCars from "../../Components/Footer/FooterCars";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

// asset
import imgCar from "../../assets/img_car.png";
import imgPhoto from "../../assets/img_photo.png";
import imgPhoto1 from "../../assets/img_photo1.png";
import group53 from "../../assets/group53.png";
import imgService from "../../assets/img_service.png";
import iconComplete from "../../assets/icon_complete.png";
import iconPrice from "../../assets/icon_price.png";
import icon24hrs from "../../assets/icon_24hrs.png";
import iconProfessional from "../../assets/icon_professional.png";

const LandingPage = () => {
  return (
    <>
      <div className="container-fluid bg-body-tertiary px-0">
        {/* Navbar */}
        <NavbarCars />
        {/* Landings Content */}
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1
                className="lh-base fw-bold"
                style={{ fontSize: "2rem" }}
                id="landing"
              >
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p className="mt-4 text-wrap">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link
                to="/cars"
                className="btn mb-4"
                style={{
                  backgroundColor: "#5cb85f",
                  color: "white",
                  borderRadius: "3px",
                  fontWeight: "600",
                }}
              >
                Mulai Sewa Mobil
              </Link>
            </div>
            <div className="col-md-6">
              <img src={imgCar} className="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Content Our Services --> */}
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row justify-content-center">
          <div className="col-md-5 me-2">
            <img src={imgService} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-5 ms-3 pt-4">
            <h1
              id="service"
              className="fw-bold lh-base mb-4"
              style={{ fontSize: "1.5rem" }}
            >
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h1>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="d-flex flex-column mb-2 flex-wrap">
              <div className="d-flex flex-row pb-3">
                <img src={group53} alt="" className="img-fluid" />
                <p className="ps-2 mb-0">
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
              </div>
              <div className="d-flex flex-row pb-3">
                <img src={group53} alt="" />
                <p className="ps-2 mb-0">
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
              </div>
              <div className="d-flex flex-row pb-3">
                <img src={group53} alt="" />
                <p className="ps-2 mb-0">Sewa Mobil Jangka Panjang Bulanan</p>
              </div>
              <div className="d-flex flex-row pb-3">
                <img src={group53} alt="" />
                <p className="ps-2 mb-0">
                  Gratis Antar - Jemput Mobil di Bandara
                </p>
              </div>
              <div className="d-flex flex-row pb-3">
                <img src={group53} alt="" />
                <p className="ps-2 mb-0">
                  Layanan Airport Transfer / Drop in Out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Content Why Us --> */}
      <div className="container" style={{ marginTop: "100px" }}>
        <h1
          id="whyus"
          className="fw-bold whyUsContent"
          style={{ fontSize: "1.5rem" }}
        >
          Why Us?
        </h1>
        <p className="mt-4 mb-3 whyUsContent">
          Mengapa harus pilih Binar Car Rental?
        </p>
        <div className="row mt-4">
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={iconComplete} alt="" className="img-fluid mb-4" />
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Mobil Lengkap
                </h6>
                <p className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={iconPrice} alt="" className="img-fluid mb-4" />
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Harga Murah
                </h6>
                <p className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={icon24hrs} alt="" className="img-fluid mb-4" />
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Layanan 24 Jam
                </h6>
                <p className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={iconProfessional} alt="" className="img-fluid mb-4" />
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Sopir Profesional
                </h6>
                <p className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Content Testimonial --> */}
      <section id="testimonial" style={{ marginTop: "100px" }}>
        <div className="container-fluid text-center mt-5 mb-5">
          <h3 id="testimonial" className="fw-bold">
            Testimonial
          </h3>
          <p className="mb-lg-5">
            Berbagai review positif dari para pelanggan kami
          </p>
          <div className="loop owl-carousel owl-theme">
            <div className="item">
              <div
                className="card p-lg-5 p-4 border-light"
                style={{ backgroundColor: "#f1f3ff" }}
              >
                <div className="card-body d-flex align-items-center">
                  <div className="row">
                    <div className="col-lg-2 d-flex align-items-center justify-content-center">
                      <img
                        src={imgPhoto}
                        alt="photo"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <div className="col-lg-10 text-lg-start">
                      <div className="mb-2 mt-2">⭐⭐⭐⭐⭐</div>
                      <p style={{ fontSize: "14px" }} className="text-start">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="card p-lg-5 p-4 border-light"
                style={{ backgroundColor: "#f1f3ff" }}
              >
                <div className="card-body d-flex align-items-center">
                  <div className="row justify-content-center">
                    <div className="col-lg-2 d-flex align-items-center justify-content-center">
                      <img
                        src={imgPhoto1}
                        alt="photo"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <div className="col-lg-10 col-12 text-lg-start">
                      <div className="mb-2 mt-2">⭐⭐⭐⭐⭐</div>
                      <p style={{ fontSize: "14px" }}>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="card p-lg-5 p-4 border-light"
                style={{ backgroundColor: "#f1f3ff" }}
              >
                <div className="card-body d-flex align-items-center">
                  <div className="row justify-content-center">
                    <div className="col-lg-2 d-flex align-items-center justify-content-center">
                      <img
                        src={imgPhoto}
                        alt="photo"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <div className="col-lg-10 col-12 text-lg-start">
                      <div className="mb-2 mt-2">⭐⭐⭐⭐⭐</div>
                      <p style={{ fontSize: "14px" }}>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Content Sewa Mobil --> */}
      <div
        className="container text-center"
        style={{ color: "white", marginTop: "100px" }}
      >
        <div
          className="row align-items-center justify-content-center p-5 m-2"
          style={{ backgroundColor: "#0d28a6", borderRadius: "15px" }}
        >
          <div className="col-md-8">
            <h1 id="faq" className="fw-bold contentSewaMobil">
              Sewa Mobil di (Lokasimu) Sekarang
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className="btn mb-4"
              style={{
                backgroundColor: "#5cb85f",
                color: "white",
                borderRadius: "3px",
                fontWeight: "600",
              }}
            >
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Content FAQ --> */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-5">
            <h1 className="mb-3 whyUsContent">Frequently Asked Question</h1>
            <p className="whyUsContent">
              Lorem ipsum dolor sit amet. Lorem, ipsum.
            </p>
          </div>
          <div className="col-md-7">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Apa saja syarat yang dibutuhkan?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, iusto ad? Iusto, nisi provident sit culpa qui
                  dolore similique in quae omnis commodi ut ad!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Berapa hari minimal sewa mobil lepas kunci?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis explicabo facere tempore reprehenderit, officia
                  exercitationem ipsam cumque sunt nulla rem, rerum distinctio
                  quia perferendis natus?
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Berapa hari sebelumnya sebaiknya booking sewa mobil?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  hic autem officiis, eius modi, totam velit libero quas minima
                  distinctio natus aut quam excepturi sit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Apakah Ada biaya antar-jemput?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  hic autem officiis, eius modi, totam velit libero quas minima
                  distinctio natus aut quam excepturi sit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Bagaimana jika terjadi kecelakaan?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  hic autem officiis, eius modi, totam velit libero quas minima
                  distinctio natus aut quam excepturi sit.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <FooterCars />
    </>
  );
};

export default LandingPage;
