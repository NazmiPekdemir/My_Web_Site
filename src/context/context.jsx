import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("language", "tr");

  const toogle = () => {
    setLang(lang === "tr" ? "en" : "tr");
  };

  let npdata = [];

  axios
    .get("https://6646320e51e227f23aae2ccd.mockapi.io/data/nazmi_data")
    .then((res) => {
      console.log(res.data);
      npdata = [...res.data];
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <Context.Provider value={{ lang, toogle, npdata }}>
      {children}
    </Context.Provider>
  );
};
export const Context = createContext();
export default ContextProvider;
