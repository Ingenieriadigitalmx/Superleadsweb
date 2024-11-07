import React from "react";
import Title from "./Items/Title";
import family from "../assets/SuperLeads_Family.png";
import family2 from "../assets/SuperLeads_Family2.png";
import checkbox from "../assets/checkbox.png";
import Whitebutton from "./Items/Whitebutton";
import Greenbutton from "./Items/Greenbutton";
import Purplebutton from "./Items/Purplebutton";
import Gradient from "./Items/Gradient";

function Prices() {
  const [currentLang, setCurrentLang] = React.useState("es");
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith("/en") ? "en" : "es";
    setCurrentLang(lang);
  }, []);
  return (
    <div className="Precios">
      <Title titleenglish="Prices" titlespanish="Precios" />
      <div className="container-green">
        <img className="imagenfa" src={family} alt="Familia SuperLeads" />
        <img className="imagenfa-1" src={family2} alt="Familia SuperLeads" />
        <div className="texto">
          <h3>
            {" "}
            {currentLang === "en"
              ? "Payment for + New Students"
              : "Pago por + Nuevos Alumnos"}
          </h3>
          <div className="List-elements">
            <img className="icon-check" src={checkbox} alt="Checkbox" />
            <p>
              {" "}
              {currentLang === "en"
                ? "We negotiate the return because we are 100% guaranteed the results"
                : "Negociamos el retorno por que somos 100% garantizado los resultados"}
            </p>

            <img className="icon-check" src={checkbox} alt="Checkbox" />
            <p>
              {" "}
              {currentLang === "en"
                ? "+$50,000 MXN for installation and training"
                : "+$50,000 MXN de instalación y capacitación"}
            </p>
            <img className="icon-check" src={checkbox} alt="Checkbox" />
            <p>
              {" "}
              {currentLang === "en"
                ? "+Educational CRM $1,999 MXN per month"
                : "+CRM educativo $1,999 MXN mensuales"}
            </p>
            <img className="icon-check" src={checkbox} alt="Checkbox" />
            <p>
              {" "}
              {currentLang === "en"
                ? "Content Board and Monthly Feedback"
                : "Junta de contenido y retorno mensual"}
            </p>
          </div>
          <Whitebutton
            textspanish="Negociar ROI"
            textenglish="Negotiating ROI"
            link="https://superleads.mx"
          />
        </div>
      </div>
      <h3 className="text-purple">
        {currentLang === "en"
          ? "More students = better salaries, better facilities, better classes, it benefits everyone."
          : "Más alumnos = mejores sueldos, mejores instalaciones, mejores clases, a todos nos conviene. "}
      </h3>
      <div className="two-buttons">
        <Greenbutton
          textspanish="Agendar presentación personalizada."
          textenglish="Schedule a personalized presentation."
          link="https://superleads.mx"
        />
        <Purplebutton
          textspanish="Contratar y agendar instalación"
          textenglish="Hire and schedule installation"
          link="https://superleads.mx/Contacto"
        />
      </div>
      <div className="Flechascontainer">
        <h4>
          <Gradient
            english="We guarantee a constant flow of opportunities"
            spanish="Garantizamos un flujo constante de oportunidades"
          />
        </h4>
      </div>
    </div>
  );
}

export default Prices;
