import React, { useState } from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Johannes Müller',
    role: 'Käsermeister',
    shortDesc: 'Über 20 Jahre Erfahrung in traditioneller Käseherstellung.',
    fullDesc: 'Johannes ist seit über 20 Jahren in der Käseherstellung tätig. Durch seine Erfahrung und sein feines Gespür für Reifeprozesse kreiert er unvergleichliche Geschmackserlebnisse. In seiner Freizeit verbringt er gerne Zeit auf den Alpen.',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=face',
    color: '#d4af37'
  },
  {
    id: 2,
    name: 'Laura Schmidt',
    role: 'Leitung Verkauf & Events',
    shortDesc: 'Organisiert unvergessliche Degustationen und Events.',
    fullDesc: 'Laura sorgt dafür, dass jeder Besuch in der Käserei Seetal zu einem unvergesslichen Erlebnis wird. Sie weiss genau, welcher Wein zu welchem Käse passt.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    color: '#c9a227'
  },
  {
    id: 3,
    name: 'Thomas Huber',
    role: 'Reifekeller-Spezialist',
    shortDesc: 'Experte für Reifung und Affinage von Hartkäsen.',
    fullDesc: 'Thomas betreut unsere Reifekeller mit Hingabe und überwacht täglich die optimalen Bedingungen für unsere Käse. Sein Wissen über Mikroklima und Reifeprozesse ist einzigartig.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    color: '#b89020'
  },
  {
    id: 4,
    name: 'Sophie Weber',
    role: 'Käse-Sommelière',
    shortDesc: 'Zertifizierte Käse-Sommelière und Pairing-Expertin.',
    fullDesc: 'Sophie hat ihre Ausbildung zur Käse-Sommelière in der Schweiz und Frankreich absolviert. Sie berät unsere Kunden zu perfekten Wein-Käse-Kombinationen für jeden Anlass.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    color: '#d4af37'
  },
  {
    id: 5,
    name: 'Marco Baumann',
    role: 'Milchwirtschaft & Lieferkette',
    shortDesc: 'Sorgt für die beste Rohmilch von lokalen Bauernhöfen.',
    fullDesc: 'Marco pflegt die Beziehungen zu unseren regionalen Milchbauern und stellt sicher, dass nur die hochwertigste Rohmilch in unsere Käserei gelangt. Qualität beginnt bei der Quelle.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    color: '#c9a227'
  },
  {
    id: 6,
    name: 'Anna Zimmermann',
    role: 'Kreation & Innovation',
    shortDesc: 'Entwickelt neue Rezepturen und saisonale Spezialitäten.',
    fullDesc: 'Anna ist unsere kreative Kraft hinter neuen Käsesorten und saisonalen Spezialitäten. Sie kombiniert traditionelle Techniken mit modernen Aromen und begeistert immer wieder mit überraschenden Kreationen.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    color: '#b89020'
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="team" className="team-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-label">Unser Team</div>
          <h2 className="section-title">Die Menschen hinter dem Käse</h2>
          <p className="section-desc">Sechs Leidenschaften, eine Vision – handwerkliche Exzellenz aus dem Herzen des Seetals.</p>
        </ScrollReveal>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 80}>
              <div className="team-card" onClick={() => openModal(member)}>
                <div className="team-card-img-wrap">
                  <img src={member.image} alt={member.name} className="team-card-img" />
                  <div className="team-card-overlay">
                    <span className="team-card-see-more">Mehr erfahren →</span>
                  </div>
                </div>
                <div className="team-card-body">
                  <div className="team-card-role" style={{ color: member.color }}>{member.role}</div>
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-desc">{member.shortDesc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="team-modal-overlay" onClick={closeModal}>
          <div className="team-modal" onClick={e => e.stopPropagation()}>
            <button className="team-modal-close" onClick={closeModal}>✕</button>
            <div className="team-modal-inner">
              <img src={selectedMember.image} alt={selectedMember.name} className="team-modal-img" />
              <div className="team-modal-text">
                <div className="team-card-role" style={{ color: selectedMember.color }}>{selectedMember.role}</div>
                <h2>{selectedMember.name}</h2>
                <div className="team-modal-divider" style={{ background: selectedMember.color }}></div>
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
