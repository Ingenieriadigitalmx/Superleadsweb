import React from "react";

function Title( props ) {
  const [currentLang, setCurrentLang] = React.useState("es");
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith("/en") ? "en" : "es";
    setCurrentLang(lang);
  }, []);
  return (
    <div className="Title-container">
      {" "}
      <div className="titlebanner"></div>
      <h2 className="title-top">{currentLang === "en" ? props.titleenglish : props.titlespanish}</h2>
    </div>
  );
}

export default Title;
