import React from "react";
import Vector from "../assets/vectorsubtitle.png";
import imgfirst from "../assets/imgfirst.png";
import imgsec from "../assets/imgsecond.png";
import imgphone from "../assets/imgphone.png";
import webp from "../assets/procesweb.png";
import mobilep from "../assets/processmobile.png";
import calendar from "../assets/calendar2.png"

function Howto() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentLang, setCurrentLang] = React.useState("es");
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith("/en") ? "en" : "es";
    setCurrentLang(lang);
  }, []);
  return (
    <div className="Howto-container">
      <div className="Top-title">
        <h2>
          {currentLang === "en"
            ? "How do we get interested parties and take them to campus reports?"
            : "¿Cómo te conseguimos a los interesados y los llevamos hasta informes en campus?"}
        </h2>
        <img src={Vector} alt="LineVector" />
      </div>
      <p className="anuncios-premium">
        {" "}
        {currentLang === "en"
          ? "Premium School Ads"
          : "Anuncios escolares premium"}
      </p>

      <div className="How-content">
        <div className="img-top">
          <p className="anuncios-premium2">
            {" "}
            {currentLang === "en"
              ? "Lead Attraction"
              : "Atracción de prospectos"}
          </p>{" "}
          <img src={imgfirst} alt="Atracción de prospectos superleads" />{" "}
          <img src={imgsec} alt="Contact Center Especializado" />
          <img src={imgphone} alt="Contacto Superleads" />{" "}
        </div>
        <div className="img-bottom">
          <img className="img-web" src={webp} alt="ProcesoWeb" />
          <img className="img-mobile" src={mobilep} alt="Proceso Mobile" />{" "}
        </div>
      </div>
      <a href="/Contacto" className="buttons button-left">
        {currentLang === "en" ? "FREE admissions analysis appointment" : "Cita de análisis de admisiones GRATUITA"}
        <img src={calendar} alt="calendario" />
      </a>
    </div>
  );
}

export default Howto;
