import { Link } from 'react-router-dom';
import HeroScene from '../HeroScene.jsx';

export default function ContactHero() {
  return (
    <section className="about-hero about-hero--short" aria-label="Contact Vedanjay Power">
      <div className="about-hero__bg" aria-hidden="true">
        <HeroScene theme="grid" />
        <img className="about-hero__img" src="/images/contact/hero.jpg" alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        <span className="about-hero__overlay" />
      </div>

      <div className="container about-hero__content">
        <nav className="breadcrumb-vp" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span aria-current="page">Contact</span>
        </nav>
        <span className="eyebrow eyebrow--light">Contact Us</span>
        <h1 className="about-hero__title">Let’s Connect</h1>
        <p className="about-hero__lead">
          Have a power-sector requirement? Vedanjay Power is available for enquiries related to its
          power-sector services and solutions.
        </p>
        <div className="hero__cta">
          <a href="#enquiry" className="btn-vp btn-vp-gold">
            <i className="bi bi-chat-dots" aria-hidden="true" /> Send an Enquiry
          </a>
          <a href={`https://wa.me/917666901814`} target="_blank" rel="noopener noreferrer" className="btn-vp btn-vp-ghost">
            <i className="bi bi-whatsapp" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
