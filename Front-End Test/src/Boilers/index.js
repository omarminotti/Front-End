import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import immagine from "../images/boiler.png";
import Heart from "../Heart";
import Five from "../Stars/Five";
import Four from "../Stars/Four";
import Three from "../Stars/Three";
import Two from "../Stars/Two";
import One from "../Stars/One";
import { MyAppContext } from "../App";
import { useContext } from "react";

function chooseStars(n) {
  switch (n) {
    case 5:
      return <Five />;
    case 4:
      return <Four />;
    case 3:
      return <Three />;
    case 2:
      return <Two />;
    case 1:
      return <One />;
    default:
      return "Error";
  }
}

export default function Boilers() {
  const [boilers, setBoilers] = useState([]);
  const [, dispatch] = useContext(MyAppContext);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:9000/boilers");
      response.status === 200 && setBoilers(response.data);
    }

    fetchData();
  }, []);

  return (
    <Container fixed>
      <Grid container spacing={1}>
        {boilers.map((boiler) => {
          return (
            <Grid item xs={4} key={boiler._id}>
              <div className="card" style={{ width: 291, height: 300 }}>
                <div className="cover">
                  {boiler.inSconto === true && (
                    <div className="banner">Risparmi il 20%</div>
                  )}
                  <Heart />
                  <img
                    className="card-img-top"
                    src={immagine}
                    alt="Boiler"
                    style={{ height: 180 }}
                  ></img>
                </div>
                <div className="cover_caption">
                  <div className="cover_caption_copy">
                    <h6>{boiler.brand}</h6>
                    <div className="book">{boiler.descrizione}</div>

                    <div className="prezzi black">
                      <p className={`prezzo ${boiler.inSconto && "scontato"}`}>
                        {boiler.prezzo} €
                      </p>
                      <p className="prezzoPreSconto">
                        {boiler.prezzoPreSconto}
                      </p>
                    </div>

                    <p
                      className={`note black ${boiler.inSconto && "scontato"}`}
                    >
                      {boiler.note}
                    </p>
                    <hr className="card_border"></hr>

                    <div className="card_footer">
                      <div className="card_stars">
                        {chooseStars(boiler.stelle)}
                      </div>
                      <div>
                        <div className="compare_p">
                          CONFRONTA
                          <label className="card_filter_container">
                            <input
                              type="checkbox"
                              onClick={() =>
                                dispatch({
                                  type: "ADD_PRODUCT",
                                  payload: boiler._id,
                                })
                              }
                            ></input>
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
