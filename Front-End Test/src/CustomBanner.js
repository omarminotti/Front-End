import Banner from "react-js-banner";
import { useContext } from "react";
import { MyAppContext } from "./App";

const banner = {
  css: {
    color: "#FFF",
    backgroundColor: "#5738ff",
    position: "fixed",
    width: "100%",
    bottom: -10,
    left: 0,
    right: 0,
  },
};

export default function CustomBanner() {
  const [state] = useContext(MyAppContext);
  console.log(state.selectedProducts);

  const number = state.selectedProducts.length;
  const areThereThree = state.selectedProducts.length > 0;

  function handleText(n) {
    switch (n) {
      case 1:
        return "Seleziona altri 2 prodotti per confrontarli";
      case 2:
        return "Seleziona ancora un prodotto per un confronto più dettagliato";
      case 3:
        return "Confronta i modelli selezionati";
      default:
        return "Troppi prodotti";
    }
  }

  return (
    <div
      style={{ display: areThereThree ? "block" : "none" }}
      className="banner_div"
    >
      <Banner css={banner.css}>
        <div className="left_message">{handleText(number)}</div>
        <div className="right_message black">
          <button
            className="message_button"
            disabled={number === 3 ? false : true}
          >
            CONFRONTA
          </button>
        </div>
      </Banner>
    </div>
  );
}
