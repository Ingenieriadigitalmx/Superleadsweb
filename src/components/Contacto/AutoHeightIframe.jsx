import React, { useEffect, useRef, useState } from 'react';

const AutoHeightIframe = () => {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState('0px');

  useEffect(() => {
    const handleMessage = (event) => {
      // Verificar que el mensaje proviene del origen esperado
      if (event.origin === 'https://link.superleads.mx') {
        if (event.data.type === 'setHeight') {
          setIframeHeight(event.data.height + 'px');
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // Limpieza al desmontar el componente
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      <iframe
        ref={iframeRef}
        style={{ width: "100%", border: "none", height: iframeHeight }}
        title="AutoHeightIframe"
        className="Frame-calendar"
        src="https://link.superleads.mx/widget/booking/zlY9SNXAxpeUkstIoxBN"
        scrolling="no"
      ></iframe>
      <script
        src="https://link.superleads.mx/js/form_embed.js"
        type="text/javascript"
      ></script>
    </>
  );
};

export default AutoHeightIframe;
