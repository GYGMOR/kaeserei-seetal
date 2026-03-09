import React from 'react';
import './Partners.css';

const partnersList = [
  'Winkelhof', 'Seetal Milch', 'Alpenkräuter AG', 'Weingut Sonne', 'Bio-Hof Lehmann', 'Regio-Mühle', 'Swiss Dairy'
];

const Partners = () => {
  return (
    <section id="partners" className="partners-section">
      <div className="section-header">
        <h2>Unser Netzwerk</h2>
        <h3>Starke Partner</h3>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {[...partnersList, ...partnersList].map((partner, index) => (
            <div key={index} className="partner-logo glass-panel">
              {partner}
            </div>
          ))}
        </div>
      </div>

      <div className="map-wrapper container">
        <div className="glass-panel large-map">
          <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.832961816554!2d8.225574075355655!3d47.16542617115372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479013c7dbab0857%3A0xcac49fbfc4ec950a!2sK%C3%A4serei%20Seetal%20AG!5e0!3m2!1sde!2sch!4v1700000000000!5m2!1sde!2sch" 
             width="100%" height="500" style={{border:0}} 
             allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Partners;
