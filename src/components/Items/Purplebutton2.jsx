import React from "react";
import imgyt from "../../assets/newyt.png";

function Purplebutton(props) {
  const [currentLang, setCurrentLang] = React.useState("es");
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith("/en") ? "en" : "es";
    setCurrentLang(lang);
  }, []);
  return (
    <a className="Purplebutton purplebutton2" href={props.link}>
      <div className="container">
        <img src={imgyt} alt="Youtube icon" />
        <p className="text">
          {currentLang === "en" ? props.textenglish : props.textspanish}
        </p>
      </div>
    </a>
  );
}

export default Purplebutton;
