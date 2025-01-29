import React, { useState, useEffect } from "react";
import "./CTASection.css";

const CTASectionComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480); // Проверяем ширину экрана для мобильных устройств
    };

    handleResize(); // Проверить при загрузке компонента
    window.addEventListener("resize", handleResize); // Следить за изменениями ширины

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="cta-section">
      <div className="cta-card">
        <div className="text-button-container">
          <h3 className="cta-title">Let’s make things happen</h3>
          <p className="cta-description">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="cta-button">
            <span className="cta-button-label">
              {isMobile ? "Get your proposal" : "Get your free proposal"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASectionComponent;
