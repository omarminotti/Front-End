import Boilers from "./Boilers/index";

export default function Shop() {
  return (
    <div className="col-4 two border-left">
      <p className="right complementary book">
        Ordina per: migliori recensioni
        <i className="fas fa-chevron-down colorReset fixSpace"></i>
      </p>
      <Boilers />
      <hr className="footer_border"></hr>

      <div className="nav_footer">
        <div className="left_div book">
          <a href="#0">
            <i className="fas fa-angle-left"></i>
            Prev
          </a>
        </div>
        <div className="middle_div black">
          <button href="#0" className="current_page">
            1
          </button>
          <button href="#0">2</button>
          <button href="#0">3</button>
        </div>
        <div className="right_div book">
          <a href="#0">
            <p className="next_link">Next</p>
            <i className="fas fa-angle-right complementary"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
