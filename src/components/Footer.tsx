import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "../styles";
import { useEffect, useState } from "react";
const Footer = () => {
  const [autorizza, setAutorizza] = useState<Boolean>(false);
  useEffect(() => {
    if (autorizza) {
      setTimeout(() => {
        setAutorizza(false);
      }, 10000);
    }
  }, [autorizza]);
  return (
    <footer
      className={`${styles.flexCenter} ${styles.navbarColor} flex-col p-5 text-white`}
    >
      <div className="px-2 my-2 text-center">
        <h1>
          © Copyright 2023 | All Rights Reserved | Website by Navbharti Moudgill
        </h1>
        <u onClick={() => setAutorizza(!autorizza)}>
          {autorizza ? "Close" : "Read More"}
        </u>
        {autorizza && (
          <h1 className="text-center">
            Autorizzo il trattamento dei miei dati personali presenti nel CV ai
            sensi dell'art. 13 d. lgs. 30 giugno 2003 n. 196 - “Codice in
            materia di protezione dei dati personali” e dell'art. 13 GDPR 679/16
            - “Regolamento europeo sulla protezione dei dati personali”.
          </h1>
        )}
      </div>
      <div className={`${styles.flexCenter} my-1 mx-3`}>
        <LinkedInIcon sx={{ marginRight: "1rem" }} />
        <a href="">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
