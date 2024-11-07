import React from "react";

import multicanal from "../assets/multicanalsistem.png";
import prospectos from "../assets/newplace.png";
import incluido from "../assets/newicons.png";
import Purplebutton2 from "./Items/Purplebutton2";
import Purplebutton3 from "./Items/Purplebutton3";
import Purplebutton4 from "./Items/Purplebutton4";

function Headercrm() {
  const [currentLang, setCurrentLang] = React.useState("es");
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith("/en") ? "en" : "es";
    setCurrentLang(lang);
  }, []);

  return (
    <div className="Crm-component">
      <h1 className="title-crm">
        {" "}
        {currentLang === "en"
          ? "When you make communication with your prospects and customers easy, your sales grow. "
          : "Cuando facilitas la comunicación con tus prospectos y clientes, tus ventas crecen.  "}
        <span> {currentLang === "en" ? "Guaranteed. " : "Garantizado. "}</span>{" "}
      </h1>
      <h4 className="subtitle-crm">
        {" "}
        {currentLang === "en"
          ? "Multichannel communication system & CRM"
          : "Sistema de comunicación multicanal & CRM"}
      </h4>
      <img className="img-incluye" src={incluido} alt="Servicios incluidos" />

      <h4 className="subtitle-crm-2">
        {" "}
        {currentLang === "en" ? "Includes" : "Incluye"}
      </h4>

      <ul className="ul-crm">
        <li>{currentLang === "en" ? "CRM" : "CRM"}</li>
        <li>
          {currentLang === "en"
            ? "Unlimited prospects"
            : "Prospectos ilimitados"}
        </li>
        <li>
          {currentLang === "en" ? "Unlimited Advisors" : "Asesores ilimitados"}
        </li>
        <li>{currentLang === "en" ? "Video Tutorials" : "Video Tutoriales"}</li>
        <li>
          {currentLang === "en"
            ? "Unlimited calendars"
            : "Calendarios ilimitados"}
        </li>
        <li>
          {currentLang === "en" ? "Unlimited Funnels" : "Funnels ilimitados"}
        </li>
        <li>
          {currentLang === "en"
            ? "Payments and Collections"
            : "Pagos y Cobranza"}
        </li>
        <li>
          {currentLang === "en"
            ? "Unlimited customizable fields"
            : "Campos personalizables ilimitados"}
        </li>
        <li>{currentLang === "en" ? "Unified tray" : "Bandeja  unificada"}</li>
      </ul>
      <h4 className="subtitle-crm-2">
        {" "}
        {currentLang === "en" ? "Pay per use" : "Pago por uso"}
      </h4>
      <ul className="ul-crm">
        <li>{currentLang === "en" ? "Mail" : "Correos"}</li>
        <li>{currentLang === "en" ? "Calls" : "Llamadas "}</li>
        <li>{currentLang === "en" ? "SMS" : "SMS"}</li>
        <li>{currentLang === "en" ? "Mass WhatsApp" : "WhatsApp masivo"}</li>
      </ul>

      <Purplebutton2
        link="https://superleads.mx"
        textenglish="See the Demo"
        textspanish="Ver el Demo "
      />
      <Purplebutton3
        link="https://superleads.mx"
        textenglish="Try free for 30 days! then $999 MXN per month"
        textspanish="¡Probar gratis por 30 días! despúes $999 MXN al mes "
      />
      <h5 className="subtitle-crm-3">
        {" "}
        {currentLang === "en"
          ? "No limit on users. Paying per user is always more expensive."
          : "Sin limite de usuarios. Pagar por usuario siempre sale más costoso"}
      </h5>
      <h5 className="subtitle-crm-3">
        {" "}
        {currentLang === "en"
          ? "It is practically impossible for you not to increase your sales. We take away that fear with a FREE service policy if you do not increase them by at least $1,000 MXN per month."
          : "Es prácticamente imposible que no aumentes tus ventas, te quitamos ese miedo con un póliza de servicio GRATIS si no te las aumenta al menos $1,000 MXN al mes."}
      </h5>
     
      
      <img
        className="img-phone"
        src={multicanal}
        alt="sistema de comunicación multicanal"
      />
      <img
        className="img-prospects"
        src={prospectos}
        alt="¡Todos los prospectos en un solo lugar, nunca antes logrado!"
      />
       <Purplebutton4
        link="https://superleads.mx"
        textenglish="See success stories"
        textspanish="Ver casos de Éxito"
      />
    </div>
  );
}

export default Headercrm;
