import CustomBanner from "./CustomBanner";
import Filters from "./Filters";
import Shop from "./Shop";
import { useReducer } from "react";
import { createContext } from "react";

const INITIAL_STATE = { selectedProducts: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const isProductSelected = state.selectedProducts.includes(action.payload);

      return {
        ...state,
        selectedProducts: isProductSelected
          ? state.selectedProducts.filter(
              (element) => element !== action.payload
            )
          : [...state.selectedProducts, action.payload],
      };
    default:
      return state;
  }
}

export const MyAppContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <MyAppContext.Provider value={[state, dispatch]}>
      <div className="container">
        <div className="row">
          <Filters />
          <Shop />
        </div>
        <CustomBanner />
      </div>
    </MyAppContext.Provider>
  );
}
