import hero_bg_3 from "@assets/images/hero_bg_3.jpg";

function HeroProfilePage() {
  return (
    <div
      className="hero page-inner overlay"
      style={{ backgroundImage: `url(${hero_bg_3})` }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-9 text-center mt-5">
            <h1 className="heading" data-aos="fade-up">
              Thông tin cá nhân
            </h1>

            <nav
              aria-label="breadcrumb"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* <ol className="breadcrumb text-center justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/properties">Bất động sản</a>
                </li>
                <li
                  className="breadcrumb-item active text-white-50"
                  aria-current="page"
                >
                  5232 California AVE. 21BC
                </li>
              </ol> */}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroProfilePage;