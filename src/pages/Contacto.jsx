import React from "react";
import arrow from "../assets/arrow.png";
// import AutoHeightIframe from "../components/Contacto/AutoHeightIframe";

function Contacto() {
  // eslint-disable-next-line
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentLang, setCurrentLang] = React.useState("es");
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith("/en") ? "en" : "es";
    setCurrentLang(lang);
  }, []);

  return (
    <div className="contact-section">
      <div className="colors"></div>
      <div className="content-section">
        <h1>
          {" "}
          {currentLang === "en"
            ? "Schedule a personalized consultation for school admissions"
            : "Agenda una asesoría personalizada para admisiones escolares"}
        </h1>
        <p className="next-level">
          {" "}
          {currentLang === "en"
            ? "Learn the power of SuperLeads and discover how to"
            : "Conoce el poder de SuperLeads y descubre la forma de "}
        </p>
        <p className="next-level-2">
          <span>
            {" "}
            {currentLang === "en"
              ? "take your registrations to the next level."
              : "llevar tus inscripciones al siguiente nivel.   "}
          </span>{" "}
        </p>
        <div>
          <iframe
            src="https://link.superleads.mx/widget/booking/DkdKtdy2N4iUTnNpKxII"
            style={{ width: "100%", border: "none", minHeight: "700px" }}
            scrolling="no"
            id="DkdKtdy2N4iUTnNpKxII_1730591270516"
          ></iframe>
          <script
            src="https://link.superleads.mx/js/form_embed.js"
            type="text/javascript"
          ></script>
        </div>
        <div className="Button-section-contact">
          <h3>
            {currentLang === "en"
              ? "*This will only work if you have a private school"
              : "*Esto solo va funcionar si tienes un colegio privado   "}{" "}
            <span>
              {currentLang === "en" ? "with more than 200" : "con más de 200"}
            </span>
            {currentLang === "en"
              ? "students and with average tuition fees of more"
              : "alumnos y con colegiaturas promedio de más "}{" "}
            <span>
              {currentLang === "en" ? "from $2,500 MXN." : "de $2,500 MXN."}
            </span>
            {currentLang === "en"
              ? "It doesn't work for other types of businesses."
              : "No funciona para otro tipo de negocios. "}
          </h3>
          {/* eslint-disable-next-line */}
          <a className="buttons button-right buttonss">
            {currentLang === "en" ? "View prices" : "Ver precios"}{" "}
            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
