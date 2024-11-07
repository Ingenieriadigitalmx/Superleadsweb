import React from "react";

function Gradient(props) {
  const [currentLang, setCurrentLang] = React.useState("es");
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith("/en") ? "en" : "es";
    setCurrentLang(lang);
  }, []);
  return (
    <span className="text-gradient">
      {" "}
      {currentLang === "en" ? props.english : props.spanish}
    </span>
  );
}

export default Gradient;
