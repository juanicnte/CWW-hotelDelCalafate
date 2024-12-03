import React, { useEffect, useRef, useContext, useState } from 'react';

export const BookingWidget = () => {
    useEffect(() => {
      const scriptId = 'bb-widget-script';
      // Verificar si el script ya está en el DOM
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://bed-booking.com/widget/widget.js';
        script.async = true;
        script.onload = () => {
          // Asegurarse de que window.w1 está disponible antes de inicializar
          if (window.w1) {
            window.w1('init', {
              targetElementId: 'widgetHolder_pssc1apgn',
              widgetId: '4b8bbb20c04e7419812dae345159e8145c8bee36',
              type: 'simple',
              staticWidget: 1,
            });
          } else {
            console.error('window.w1 is not available');
          }
        };
  
        script.onerror = (error) => {
          console.error('Error loading the script:', error);
        };
  
        document.body.appendChild(script);
      } else {
        console.log('Script already loaded');
      }
  
      // Limpiar el script cuando el componente se desmonte
      return () => {
        const script = document.getElementById(scriptId);
        if (script) {
          document.body.removeChild(script);
        }
      };
    }, []);
  
    return <div id="widgetHolder_pssc1apgn"></div>;
  };