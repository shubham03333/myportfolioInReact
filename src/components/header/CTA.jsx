import React from "react";
import CV from "../../assets/cv.pdf";
import ME from "../../assets/me.png"
const CTA = () => {
  return (
    <div className="cta">
      {/* below line will download the CV */}
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
