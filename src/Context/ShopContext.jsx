import { createContext } from "react";
import allProducts from "../Components/Assets/all_product";

export const shopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { allProducts };
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
