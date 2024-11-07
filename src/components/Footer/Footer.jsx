import React from "react";
import SLogo from "../../assets/logofooter.png";
import calendar from "../../assets/calendar.png";
import arrow from "../../assets/arrow.png";
import LogoID from "../../assets/id.png";

const Footer = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentLang, setCurrentLang] = React.useState("es");
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith("/en") ? "en" : "es";
    setCurrentLang(lang);
  }, []);
  return (
    <div className="footer-container">
      <a className="a-link" href="https://superleads.mx/">
        {" "}
        <img src={SLogo} alt="Logo Superleads" />
      </a>
      <p className="text-p">
        {currentLang === "en"
          ? "We help educational institutions reduce their empty chairs, with own methodology and system."
          : "Ayudamos a las instituciones educativas a reducir sus sillas vacías, con metodología y sistema propios."}
      </p>
      <div className="buton-double">
        <a href="/Contacto" className="buttons button-left">
          {currentLang === "en" ? "Consultation appointment" : "Cita Asesoría"}
          <img src={calendar} alt="calendario" />
        </a>
        <a href="/Contacto" className="buttons button-right">
          {currentLang === "en" ? "Hire" : "Contratar"}{" "}
          <img src={arrow} alt="arrow" />
        </a>
      </div>

      <div className="creation-content">
        <div className="left">
          <p>
            {" "}
            {currentLang === "en"
              ? "©3000 All rights reserved -"
              : "©3000 Todos los derechos reservados - "}
            <a>
              {" "}
              {currentLang === "en"
                ? "Notice of Privacy"
                : "Aviso de privacidad"}
            </a>
          </p>
        </div>
        <div className="right">
          <p> {currentLang === "en" ? "Page made by " : "Página hecha por "}</p>{" "}
          <a href="https://Ingenieriadigital.mx">
            {" "}
            <img src={LogoID} alt="Ingenieria Digital" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
