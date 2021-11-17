import Five from "./Stars/Five";
import Four from "./Stars/Four";
import Three from "./Stars/Three";
import Two from "./Stars/Two";
import One from "./Stars/One";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Filters() {
  const [stocks, setStock] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:9000/stock");
      response.status === 200 && setStock(response.data);
    }
    fetchData();
  }, []);
  //   stocks.map((stock) => {
  //     return console.log(stock);
  //   });

  return (
    <div className="col-4 one">
      <div className="filters">
        <h6 className="black">CATEGORIE</h6>
        <p className="complementary pointer book">Riscaldamento</p>
        <ul className="book">
          <li>Casa e acqua</li>
          <li>Casa</li>
          <li>Acqua</li>
        </ul>
        <hr className="border-bottom"></hr>
        <h6>SCEGLI PER</h6>
        <label className="filter_container">
          Disponibili ({stocks.disponibili})<input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <label className="filter_container">
          In Promozione ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <h6>MARCHE</h6>
        <label className="filter_container">
          Aristom ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <label className="filter_container">
          Baxi ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <label className="filter_container">
          Ariston ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <h6>TIPOLOGIA</h6>
        <label className="filter_container">
          Aristom ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <label className="filter_container">
          Baxi ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <label className="filter_container">
          Ariston ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <h6>ALIMENTAZIONE</h6>
        <label className="filter_container">
          Elettrica ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <label className="filter_container">
          Metano ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <h6>POTENZA NOMINALE (kW)</h6>
        <label className="filter_container">
          19.5 ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <label className="filter_container">
          24 ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <label className="filter_container">
          25 ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <label className="filter_container">
          da 30 a 34 ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <h6>UTILIZZZO</h6>
        <label className="filter_container">
          Esterno ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <label className="filter_container">
          Interno ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <label className="filter_container">
          Esterno / Interno ()
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </label>
        <h6>RECENSIONI</h6>
        <label className="filter_container stars">
          <Five />
          <input type="checkbox"></input>
          <span className="checkmark"></span>
          <div className="star_value">)(</div>
        </label>
        <label className="filter_container stars">
          <Four />
          <input type="checkbox"></input>
          <span className="checkmark"></span>
          <div className="star_value">)(</div>
        </label>
        <label className="filter_container stars">
          <Three />
          <input type="checkbox"></input>
          <span className="checkmark"></span>
          <div className="star_value">)(</div>
        </label>
        <label className="filter_container stars">
          <Two />
          <input type="checkbox"></input>
          <span className="checkmark"></span>
          <div className="star_value">)(</div>
        </label>
        <label className="filter_container stars">
          <One />
          <input type="checkbox"></input>
          <span className="checkmark"></span>
          <div className="star_value">)(</div>
        </label>
      </div>
    </div>
  );
}
