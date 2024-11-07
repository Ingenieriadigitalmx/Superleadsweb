import * as React from "react";
import superleadssimg from "../assets/superimg.png";
import linesl from "../assets/slline.png";
import sharktank from "../assets/sharktank.png";
import calendar from "../assets/calendar.png";
import arrow from "../assets/arrow.png";

function Headersection() {
  // eslint-disable-next-line
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentLang, setCurrentLang] = React.useState("es");
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith("/en") ? "en" : "es";
    setCurrentLang(lang);
  }, []);

  return (
    <div className="Headersection-sl">
      <div className="Header-containerinner">
        <div className="alignment-containers">
          <h1>
            {" "}
            {currentLang === "en"
              ? "We help educational institutions enroll more students"
              : "Ayudamos a instituciones educativas a inscribir más alumnos"}
          </h1>

          <img className="sl-img" src={linesl} alt="Superleads line" />
          <div className="buton-double">
            <a href="/Contacto" className="buttons button-left">
              {currentLang === "en"
                ? "Consultation appointment"
                : "Cita Asesoría"}
              <img src={calendar} alt="calendario" />
            </a>
            <a href="/Contacto" className="buttons button-right">
              {currentLang === "en" ? "Hire" : "Contratar"}{" "}
              <img src={arrow} alt="arrow" />
            </a>
          </div>
          <h2>
            {currentLang === "en" ? "More students " : "Más alumnos "}
            <strong>
              {currentLang === "en" ? "100% guaranteed" : "100% garantizado"}
            </strong>
          </h2>
          <img className="sl-img sharkthank" src={sharktank} alt="Shark Tank" />
        </div>
        <img className="sl-img" src={superleadssimg} alt="Superleads" />
      </div>

   
    </div>
  );
}

export default Headersection;
