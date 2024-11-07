import React from "react";

function Greenbutton(props) {
  const [currentLang, setCurrentLang] = React.useState("es");
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith("/en") ? "en" : "es";
    setCurrentLang(lang);
  }, []);
  return (
    <a className="Greenbutton" href={props.link}>
      <div className="container">
        <p className="text">
          {currentLang === "en" ? props.textenglish : props.textspanish}
        </p>
      </div>
    </a>
  );
}

export default Greenbutton;
