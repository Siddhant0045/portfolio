import React from 'react';

export const Fluid = () => {
  React.useEffect(() => {
    const script = document.createElement('script');

    script.src = `${import.meta.env.BASE_URL}assets/js/fluidInit.js`;
    script.async = false;
    script.type = 'module';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas className="fluid-canvas"></canvas>;
};