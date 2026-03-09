import React, { useState } from 'react';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Johannes Müller',
    role: 'Käsermeister',
    shortDesc: 'Die Leidenschaft für Käse wurde ihm in die Wiege gelegt.',
    fullDesc: 'Johannes ist seit über 20 Jahren in der Käseherstellung tätig. Durch seine Erfahrung und sein feines Gespür für Reifeprozesse kreiert er unvergleichliche Geschmackserlebnisse. In seiner Freizeit verbringt er gerne Zeit auf den Alpen, um neue Inspirationen zu sammeln.',
    images: ['1', '2', '3']
  },
  {
    id: 2,
    name: 'Laura Schmidt',
    role: 'Leitung Verkauf & Events',
    shortDesc: 'Ihr Lächeln ist so einladend wie unser Ambiente.',
    fullDesc: 'Laura sorgt dafür, dass jeder Besuch in der Käserei Seetal zu einem unvergesslichen Erlebnis wird. Mit ihrer Liebe zum Detail organisiert sie unsere legendären Degustationen und Events. Sie weiss genau, welcher Wein zu welchem Käse passt.',
    images: ['1', '2', '3']
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openModal = (member) => {
    setSelectedMember(member);
    setActiveImage(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <h2>Wer dahinter steht</h2>
          <h3>Unser Team</h3>
        </div>

        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card glass-panel" onClick={() => openModal(member)}>
              <div className="card-image-wrapper">
                <div className="image-placeholder">
                  <span>{member.name.charAt(0)}</span>
                </div>
              </div>
              <div className="team-info">
                <h4>{member.name}</h4>
                <p className="role">{member.role}</p>
                <p className="desc">{member.shortDesc}</p>
                <button className="btn-text">Mehr erfahren &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <div className="modal-body">
              <div className="modal-gallery">
                <div className="main-image image-placeholder large">
                  <span>{selectedMember.name.charAt(0)}</span>
                  <div className="image-counter">Bild {activeImage + 1} von {selectedMember.images.length}</div>
                </div>
                <div className="thumbnail-list">
                  {selectedMember.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`thumbnail image-placeholder ${activeImage === idx ? 'active' : ''}`}
                      onClick={() => setActiveImage(idx)}
                    >
                      <span>{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-text">
                <h3>{selectedMember.name}</h3>
                <p className="role">{selectedMember.role}</p>
                <div className="divider"></div>
                <p>{selectedMember.fullDesc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
