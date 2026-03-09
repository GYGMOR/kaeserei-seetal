import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Impressum = () => {
  return (
    <div id="impressum-page" style={{ paddingTop: '100px', backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      <Header />
      <div className="container glass-panel" style={{ maxWidth: '800px', margin: '4rem auto', padding: '4rem', color: 'var(--text-main)' }}>
        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '2rem' }}>Impressum</h2>
        
        <h4 style={{ marginBottom: '0.5rem' }}>Betreiber der Website</h4>
        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
          Käserei Seetal AG<br />
          Käsereistrasse 1<br />
          5732 Zetzwil<br />
          Schweiz
        </p>

        <h4 style={{ marginBottom: '0.5rem' }}>Kontakt</h4>
        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
          Telefon: +41 62 123 45 67<br />
          E-Mail: info@kaeserei-seetal.ch
        </p>

        <h4 style={{ marginBottom: '0.5rem' }}>Vertretungsberechtigte Personen</h4>
        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
          Max Mustermann, Geschäftsführer
        </p>

        <h4 style={{ marginBottom: '0.5rem' }}>Handelsregistereintrag</h4>
        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
          Eingetragener Firmenname: Käserei Seetal AG<br />
          Nummer: CH-123.4.567.890-1<br />
          Handelsregisteramt: Kanton Aargau
        </p>

        <h4 style={{ marginBottom: '0.5rem' }}>Mehrwertsteuernummer</h4>
        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
          CHE-123.456.789 MWST
        </p>

        <h4 style={{ marginBottom: '0.5rem' }}>Haftungsausschluss</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
          Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Impressum;
