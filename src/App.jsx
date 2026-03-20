import React, { useState, useEffect } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['hero', 'carte', 'apropos', 'avis', 'contact'];
      const scrollPos = window.scrollY + 100;
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPos && element.offsetTop + element.offsetHeight > scrollPos) {
          setActiveSection(section);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const styles = {
    root: {
      fontFamily: "'Georgia', 'Times New Roman', serif",
      margin: 0,
      padding: 0,
      backgroundColor: '#FDF5E6',
      color: '#2C1810',
      overflowX: 'hidden'
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(44, 24, 16, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      padding: '15px 0',
      boxShadow: '0 2px 20px rgba(0,0,0,0.3)'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px'
    },
    logo: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#D4A574',
      textDecoration: 'none',
      letterSpacing: '1px'
    },
    navLinks: {
      display: 'flex',
      gap: '30px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: '#FDF5E6',
      textDecoration: 'none',
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      position: 'relative'
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      gap: '5px'
    },
    hamburgerLine: {
      width: '25px',
      height: '3px',
      backgroundColor: '#D4A574',
      borderRadius: '2px',
      transition: 'all 0.3s ease'
    },
    hero: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(44, 24, 16, 0.85) 0%, rgba(139, 69, 19, 0.75) 100%), url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 50m-40 0a40,40 0 1,0 80,0a40,40 0 1,0 -80,0\' fill=\'none\' stroke=\'%23D4A574\' stroke-width=\'0.5\' opacity=\'0.1\'/%3E%3C/svg%3E")',
      backgroundSize: 'cover, 100px 100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 1s ease-out',
      zIndex: 2,
      padding: '20px'
    },
    heroIcon: {
      fontSize: '4rem',
      marginBottom: '20px',
      display: 'block'
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      color: '#FDF5E6',
      marginBottom: '10px',
      fontWeight: '400',
      letterSpacing: '3px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
      color: '#D4A574',
      marginBottom: '15px',
      fontStyle: 'italic'
    },
    heroTagline: {
      fontSize: 'clamp(1.1rem, 3vw, 1.8rem)',
      color: '#FDF5E6',
      marginBottom: '30px',
      fontWeight: '300',
      maxWidth: '600px',
      lineHeight: '1.6'
    },
    badge: {
      display: 'inline-block',
      backgroundColor: '#D4A574',
      color: '#2C1810',
      padding: '8px 20px',
      borderRadius: '25px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      marginBottom: '25px'
    },
    ctaButton: {
      backgroundColor: '#D4A574',
      color: '#2C1810',
      border: 'none',
      padding: '15px 40px',
      fontSize: '1.1rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: 'bold',
      letterSpacing: '1px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(212, 165, 116, 0.4)',
      margin: '10px'
    },
    section: {
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      color: '#8B4513',
      textAlign: 'center',
      marginBottom: '15px',
      position: 'relative',
      fontWeight: '400'
    },
    sectionSubtitle: {
      textAlign: 'center',
      color: '#6B4423',
      marginBottom: '50px',
      fontSize: '1.1rem',
      fontStyle: 'italic'
    },
    carteSection: {
      backgroundColor: '#2C1810',
      padding: '80px 20px'
    },
    carteSectionInner: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    carteTitle: {
      color: '#D4A574',
      textAlign: 'center',
      marginBottom: '50px',
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)'
    },
    carteGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px'
    },
    carteCard: {
      backgroundColor: 'rgba(253, 245, 230, 0.05)',
      borderRadius: '15px',
      padding: '30px',
      textAlign: 'center',
      border: '1px solid rgba(212, 165, 116, 0.2)',
      transition: 'all 0.4s ease'
    },
    carteIcon: {
      fontSize: '3rem',
      marginBottom: '15px'
    },
    carteCardTitle: {
      color: '#D4A574',
      fontSize: '1.4rem',
      marginBottom: '15px'
    },
    carteCardText: {
      color: '#FDF5E6',
      opacity: 0.8,
      lineHeight: '1.7',
      fontSize: '0.95rem'
    },
    aproposSection: {
      backgroundColor: '#FDF5E6',
      padding: '80px 20px'
    },
    aproposGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '50px',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    aproposImage: {
      backgroundColor: '#8B4513',
      height: '400px',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '6rem',
      boxShadow: '0 20px 50px rgba(139, 69, 19, 0.3)'
    },
    aproposContent: {
      padding: '20px'
    },
    aproposText: {
      fontSize: '1.1rem',
      lineHeight: '1.9',
      color: '#4A3728',
      marginBottom: '25px'
    },
    valuesList: {
      listStyle: 'none',
      padding: 0
    },
    valueItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '15px',
      fontSize: '1rem',
      color: '#6B4423'
    },
    valueIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: '#D4A574',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem'
    },
    avisSection: {
      backgroundColor: '#F5EBE0',
      padding: '80px 20px'
    },
    avisGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    avisCard: {
      backgroundColor: '#FDF5E6',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      position: 'relative'
    },
    avisQuote: {
      fontSize: '3rem',
      color: '#D4A574',
      position: 'absolute',
      top: '15px',
      left: '20px',
      opacity: 0.5
    },
    avisText: {
      fontStyle: 'italic',
      color: '#4A3728',
      lineHeight: '1.8',
      marginBottom: '20px',
      paddingTop: '20px'
    },
    avisStars: {
      color: '#D4A574',
      fontSize: '1.2rem',
      marginBottom: '10px'
    },
    avisAuthor: {
      color: '#8B4513',
      fontWeight: 'bold'
    },
    contactSection: {
      backgroundColor: '#2C1810',
      padding: '80px 20px'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    contactCard: {
      textAlign: 'center',
      padding: '30px'
    },
    contactIcon: {
      fontSize: '2.5rem',
      marginBottom: '15px'
    },
    contactLabel: {
      color: '#D4A574',
      fontSize: '1.2rem',
      marginBottom: '10px'
    },
    contactValue: {
      color: '#FDF5E6',
      fontSize: '1rem',
      lineHeight: '1.6'
    },
    contactLink: {
      color: '#FDF5E6',
      textDecoration: 'none'
    },
    horaires: {
      backgroundColor: 'rgba(212, 165, 116, 0.1)',
      borderRadius: '15px',
      padding: '30px',
      marginTop: '40px',
      maxWidth: '600px',
      margin: '40px auto 0'
    },
    horairesTitle: {
      color: '#D4A574',
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '1.3rem'
    },
    horairesLine: {
      display: 'flex',
      justifyContent: 'space-between',
      color: '#FDF5E6',
      padding: '8px 0',
      borderBottom: '1px solid rgba(212, 165, 116, 0.2)'
    },
    footer: {
      backgroundColor: '#1A0F0A',
      padding: '40px 20px',
      textAlign: 'center'
    },
    footerText: {
      color: '#D4A574',
      opacity: 0.7,
      fontSize: '0.9rem'
    },
    mobileMenu: {
      position: 'fixed',
      top: '70px',
      left: 0,
      right: 0,
      backgroundColor: 'rgba(44, 24, 16, 0.98)',
      padding: '20px',
      display: menuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '20px',
      zIndex: 999
    },
    mobileMenuLink: {
      color: '#FDF5E6',
      textDecoration: 'none',
      fontSize: '1.1rem',
      padding: '10px',
      textAlign: 'center',
      cursor: 'pointer'
    },
    decorCircle: {
      position: 'absolute',
      borderRadius: '50%',
      border: '1px solid rgba(212, 165, 116, 0.2)',
      pointerEvents: 'none'
    }
  };

  const menuItems = [
    { icon: '🥞', title: 'Crêpes & Galettes', desc: 'Galettes de sarrasin garnies et crêpes sucrées préparées avec passion, selon la tradition bretonne' },
    { icon: '🍕', title: 'Pizzas Maison', desc: 'Pizzas artisanales cuites à la perfection, avec des ingrédients frais et savoureux' },
    { icon: '🥩', title: 'Grillades', desc: 'Viandes sélectionnées et grillées à point, accompagnées de garnitures généreuses' },
    { icon: '🥗', title: 'Salades Fraîches', desc: 'Compositions gourmandes et équilibrées pour les amateurs de fraîcheur' },
    { icon: '🐟', title: 'Poissons', desc: 'Poissons préparés avec soin pour les amateurs de saveurs marines' },
    { icon: '📦', title: 'À Emporter', desc: 'Tous nos plats disponibles à emporter pour savourer chez vous' }
  ];

  const avis = [
    { text: 'Crêpes salées et sucrées succulentes et copieuses ! Un vrai régal pour toute la famille.', stars: 5, author: 'Marie L.' },
    { text: 'Propriétaires très agréables, chaleureux et accueillants. On se sent comme à la maison !', stars: 5, author: 'Pierre D.' },
    { text: 'Excellent rapport qualité-prix dans un cadre sympathique et chaleureux. Je recommande vivement !', stars: 5, author: 'Sophie M.' }
  ];

  return (
    <div style={styles.root}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .carte-card:hover {
          transform: translateY(-10px);
          border-color: rgba(212, 165, 116, 0.5) !important;
        }
        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(212, 165, 116, 0.5) !important;
          background-color: #E8B88A !important;
        }
        .nav-link:hover {
          color: #D4A574 !important;
        }
        .avis-card:hover {
          transform: translateY(-5px);
        }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
          .hero-buttons { flex-direction: column; }
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <span style={styles.logo}>🥞 Aux Anciennes Halles</span>
          <ul style={styles.navLinks} className="nav-links">
            {[['hero', 'Accueil'], ['carte', 'Notre Carte'], ['apropos', 'À Propos'], ['avis', 'Avis'], ['contact', 'Contact']].map(([id, label]) => (
              <li key={id}>
                <span
                  style={{...styles.navLink, color: activeSection === id ? '#D4A574' : '#FDF5E6'}}
                  className="nav-link"
                  onClick={() => scrollToSection(id)}
                >{label}</span>
              </li>
            ))}
          </ul>
          <div style={styles.hamburger} className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={styles.hamburgerLine}></span>
            <span style={styles.hamburgerLine}></span>
            <span style={styles.hamburgerLine}></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        {[['hero', 'Accueil'], ['carte', 'Notre Carte'], ['apropos', 'À Propos'], ['avis', 'Avis'], ['contact', 'Contact']].map(([id, label]) => (
          <span key={id} style={styles.mobileMenuLink} onClick={() => scrollToSection(id)}>{label}</span>
        ))}
      </div>

      {/* Hero */}
      <section id="hero" style={styles.hero}>
        <div style={{...styles.decorCircle, width: '500px', height: '500px', top: '-100px', right: '-100px'}}></div>
        <div style={{...styles.decorCircle, width: '300px', height: '300px', bottom: '50px', left: '-50px'}}></div>
        <div style={styles.heroContent}>
          <span style={{...styles.heroIcon, animation: 'float 3s ease-in-out infinite'}}>🥞</span>
          <div style={styles.badge}>⭐ Travellers' Choice - Top 10%</div>
          <h1 style={styles.heroTitle}>AUX ANCIENNES HALLES</h1>
          <p style={styles.heroSubtitle}>Crêperie • Restaurant • Pizzeria</p>
          <p style={styles.heroTagline}>L'authenticité bretonne au cœur de la Normandie</p>
          <div className="hero-buttons" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <button style={styles.ctaButton} className="cta-btn" onClick={() => scrollToSection('carte')}>Découvrir la Carte</button>
            <button style={{...styles.ctaButton, backgroundColor: 'transparent', border: '2px solid #D4A574', color: '#D4A574'}} className="cta-btn" onClick={() => scrollToSection('contact')}>Réserver</button>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section id="carte" style={styles.carteSection}>
        <div style={styles.carteSectionInner}>
          <h2 style={styles.carteTitle}>🍽️ Notre Carte</h2>
          <p style={{...styles.sectionSubtitle, color: '#D4A574'}}>Des saveurs authentiques préparées avec passion</p>
          <div style={styles.carteGrid}>
            {menuItems.map((item, index) => (
              <div key={index} style={styles.carteCard} className="carte-card">
                <div style={styles.carteIcon}>{item.icon}</div>
                <h3 style={styles.carteCardTitle}>{item.title}</h3>
                <p style={styles.carteCardText}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À Propos */}
      <section id="apropos" style={styles.aproposSection}>
        <div style={styles.aproposGrid}>
          <div style={styles.aproposImage}>🏠</div>
          <div style={styles.aproposContent}>
            <h2 style={styles.sectionTitle}>Notre Histoire</h2>
            <p style={styles.aproposText}>
              Depuis 2011, Aux Anciennes Halles accueille les gourmands sur la place Persac à Buchy. 
              Notre crêperie-restaurant est devenue un lieu incontournable pour les amateurs de galettes 
              authentiques, de pizzas savoureuses et de grillades généreuses.
            </p>
            <p style={styles.aproposText}>
              Notre secret ? Un accueil chaleureux et familial, des recettes traditionnelles préparées 
              avec des produits de qualité, et une passion intacte pour faire plaisir à nos clients.
            </p>
            <ul style={styles.valuesList}>
              {[['😊', 'Accueil familial et chaleureux'], ['⭐', 'N°2 des restaurants à Buchy'], ['👨‍👩‍👧‍👦', 'Adapté aux familles'], ['💝', '14 ans d\'expérience']].map(([icon, text], i) => (
                <li key={i} style={styles.valueItem}>
                  <span style={styles.valueIcon}>{icon}</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" style={styles.avisSection}>
        <h2 style={styles.sectionTitle}>💬 Ce que disent nos clients</h2>
        <p style={styles.sectionSubtitle}>70 avis sur Tripadvisor - N°2 des restaurants à Buchy</p>
        <div style={styles.avisGrid}>
          {avis.map((a, index) => (
            <div key={index} style={styles.avisCard} className="avis-card">
              <span style={styles.avisQuote}>"</span>
              <div style={styles.avisStars}>{'★'.repeat(a.stars)}</div>
              <p style={styles.avisText}>{a.text}</p>
              <p style={styles.avisAuthor}>— {a.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.contactSection}>
        <h2 style={{...styles.sectionTitle, color: '#D4A574'}}>📍 Nous Trouver</h2>
        <p style={{...styles.sectionSubtitle, color: '#FDF5E6', opacity: 0.8}}>Venez nous rendre visite à Buchy</p>
        <div style={styles.contactGrid}>
          <div style={styles.contactCard}>
            <div style={styles.contactIcon}>📍</div>
            <h3 style={styles.contactLabel}>Adresse</h3>
            <p style={styles.contactValue}>97 Place Persac<br/>76750 Buchy</p>
          </div>
          <div style={styles.contactCard}>
            <div style={styles.contactIcon}>📞</div>
            <h3 style={styles.contactLabel}>Téléphone</h3>
            <p style={styles.contactValue}>
              <a href="tel:0235XXXXXX" style={styles.contactLink}>02 35 XX XX XX</a>
            </p>
          </div>
          <div style={styles.contactCard}>
            <div style={styles.contactIcon}>✉️</div>
            <h3 style={styles.contactLabel}>Email</h3>
            <p style={styles.contactValue}>
              <a href="mailto:contact@aux-anciennes-halles-de-buchy.fr" style={styles.contactLink}>contact@aux-anciennes-halles-de-buchy.fr</a>
            </p>
          </div>
        </div>
        <div style={styles.horaires}>
          <h3 style={styles.horairesTitle}>🕐 Horaires d'ouverture</h3>
          {[['Lundi', '12h-14h / 19h-22h'], ['Mardi', 'Fermé'], ['Mercredi', '12h-14h / 19h-22h'], ['Jeudi', '12h-14h / 19h-22h'], ['Vendredi', '12h-14h / 19h-22h'], ['Samedi', '12h-14h / 19h-22h'], ['Dimanche', '12h-14h / 19h-22h']].map(([day, hours], i) => (
            <div key={i} style={{...styles.horairesLine, opacity: hours === 'Fermé' ? 0.5 : 1}}>
              <span>{day}</span>
              <span>{hours}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Aux Anciennes Halles de Buchy - Tous droits réservés</p>
        <p style={{...styles.footerText, marginTop: '10px'}}>🥞 Crêperie • Restaurant • Pizzeria depuis 2011</p>
      </footer>
    </div>
  );
};

export default App;