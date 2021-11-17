import * as React from "react";
import immagine from "../../images/boiler.png";

export default function Boiler({
  brand,
  descrizione,
  prezzo,
  prezzoPreSconto,
  note,
  stelle,
}) {
  return (
    <div className="card" style={{ width: 291, height: 300 }}>
      <div className="cover">
        <div className="banner">Risparmi il 20%</div>
        <i class="far fa-heart fa-lg heart"></i>
        <img
          class="card-img-top"
          src={immagine}
          alt="Boiler"
          style={{ height: 180 }}
        ></img>
      </div>
      <div className="cover_caption">
        <div className="cover_caption_copy">
          <h6>{brand}</h6>
          <div>{descrizione}</div>

          <div className="prezzi">
            <p className="prezzo">{prezzo} €</p>
            <p className="prezzoPreSconto">{prezzoPreSconto}</p>
          </div>

          <p className="note">{note}</p>
          <hr className="card_border"></hr>

          <div className="card_footer">
            <div>{stelle}</div>

            <div>
              <text className="compare_p">CONFRONTA</text>
              <label class="card_filter_container">
                <input type="checkbox"></input>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
