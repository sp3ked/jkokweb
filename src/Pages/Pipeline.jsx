import React from "react";
import "./pipeline.css";

// Nodes joined by pipes with packets flowing through them
function Pipeline({ steps }) {
  return (
    <div className="pipeline" aria-label={steps.join(" to ")}>
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          {i > 0 && <span className="pipe" style={{ animationDelay: `${i * -0.3}s` }} />}
          <span className="pipe-node">{step}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Pipeline;
