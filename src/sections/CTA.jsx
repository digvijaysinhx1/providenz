import React from 'react';
import StartProject from '../components/ui/StartProject';

const CTA = () => {
  return (
    <section id='cta' className="cta-section">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-left">
            <h2 className="cta-heading">
              LET'S WORK<br />TOGETHER
            </h2>
          </div>
          <div className="cta-right">
            <div className="cta-content">
              <p className="cta-description">
                Have a project in mind? We'd love to hear about it. Let's create something great together!
              </p>
              <StartProject link="https://cal.com/rathod-digvijay-sinh-providenz/discovery-call" text="GET IN TOUCH" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
