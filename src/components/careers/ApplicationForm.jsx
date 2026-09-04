import { useRef, useState } from 'react';
import { COMPANY } from '../../data/homeData.js';
import { POSITIONS } from '../../data/careersData.js';

const MAX_MB = 5;
const ACCEPT = '.pdf,.doc,.docx';

export default function ApplicationForm({ position, setPosition }) {
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'validated'
  const fileRef = useRef(null);

  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((p) => (p[name] ? { ...p, [name]: undefined } : p));
    if (status !== 'idle') setStatus('idle');
  };

  const onFile = (e) => {
    const f = e.target.files?.[0] || null;
    setResume(f);
    setErrors((p) => ({ ...p, resume: undefined }));
    if (status !== 'idle') setStatus('idle');
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your full name.';
    if (!values.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please enter a valid email.';
    if (!values.phone.trim()) next.phone = 'Please enter your phone number.';
    else if (!/^[0-9+()\-\s]{7,15}$/.test(values.phone)) next.phone = 'Please enter a valid phone number.';
    if (!position) next.position = 'Please select a position.';
    if (resume) {
      const okType = /\.(pdf|docx?|)$/i.test(resume.name) && /(pdf|word|document|octet-stream)/i.test(resume.type || 'application/octet-stream');
      if (!okType && !/\.(pdf|docx?)$/i.test(resume.name)) next.resume = 'Please upload a PDF or Word document.';
      else if (resume.size > MAX_MB * 1024 * 1024) next.resume = `File must be under ${MAX_MB} MB.`;
    }
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    // No backend — never claim the application was submitted.
    setStatus(Object.keys(next).length === 0 ? 'validated' : 'idle');
  };

  return (
    <section className="section section--mist" id="apply">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5 reveal-left">
            <span className="eyebrow">Apply</span>
            <h2 className="section-title mt-2">Send us your application</h2>
            <div className="title-rule" />
            <p className="section-lead">
              Share your details and area of interest. Our team reviews applications for current
              and upcoming requirements.
            </p>
            <ul className="apply-contact" aria-label="Application contacts">
              <li>
                <i className="bi bi-envelope" aria-hidden="true" />
                <a href={`mailto:${COMPANY.emailGeneral}`}>{COMPANY.emailGeneral}</a>
              </li>
              <li>
                <i className="bi bi-telephone" aria-hidden="true" />
                <a href={`tel:+91${COMPANY.phone}`}>{COMPANY.phone}</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-7 reveal-right">
            <form className="enquiry" onSubmit={onSubmit} noValidate>
              <h3 className="enquiry__title">Application Form</h3>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="enquiry__label" htmlFor="a-name">Full Name<span aria-hidden="true">*</span></label>
                  <input id="a-name" name="name" className={`enquiry__input ${errors.name ? 'is-invalid' : ''}`}
                    value={values.name} onChange={update} autoComplete="name" />
                  {errors.name && <span className="enquiry__error">{errors.name}</span>}
                </div>
                <div className="col-sm-6">
                  <label className="enquiry__label" htmlFor="a-email">Email<span aria-hidden="true">*</span></label>
                  <input id="a-email" name="email" type="email" className={`enquiry__input ${errors.email ? 'is-invalid' : ''}`}
                    value={values.email} onChange={update} autoComplete="email" />
                  {errors.email && <span className="enquiry__error">{errors.email}</span>}
                </div>
                <div className="col-sm-6">
                  <label className="enquiry__label" htmlFor="a-phone">Phone<span aria-hidden="true">*</span></label>
                  <input id="a-phone" name="phone" type="tel" className={`enquiry__input ${errors.phone ? 'is-invalid' : ''}`}
                    value={values.phone} onChange={update} autoComplete="tel" />
                  {errors.phone && <span className="enquiry__error">{errors.phone}</span>}
                </div>
                <div className="col-sm-6">
                  <label className="enquiry__label" htmlFor="a-position">Position<span aria-hidden="true">*</span></label>
                  <select id="a-position" name="position" className={`enquiry__input ${errors.position ? 'is-invalid' : ''}`}
                    value={position} onChange={(e) => { setPosition(e.target.value); setErrors((p) => ({ ...p, position: undefined })); if (status !== 'idle') setStatus('idle'); }}>
                    <option value="">Select a position…</option>
                    {POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.position && <span className="enquiry__error">{errors.position}</span>}
                </div>
                <div className="col-12">
                  <label className="enquiry__label" htmlFor="a-resume">Resume Upload <span className="enquiry__opt">(PDF or Word, max {MAX_MB} MB)</span></label>
                  <div className={`upload ${errors.resume ? 'is-invalid' : ''}`}>
                    <input ref={fileRef} id="a-resume" name="resume" type="file" accept={ACCEPT} className="upload__input" onChange={onFile} />
                    <span className="upload__btn"><i className="bi bi-paperclip" aria-hidden="true" /> Choose file</span>
                    <span className="upload__name">{resume ? resume.name : 'No file selected'}</span>
                  </div>
                  {errors.resume && <span className="enquiry__error">{errors.resume}</span>}
                </div>
                <div className="col-12">
                  <label className="enquiry__label" htmlFor="a-message">Message</label>
                  <textarea id="a-message" name="message" rows="4" className="enquiry__input"
                    value={values.message} onChange={update} />
                </div>
              </div>

              <button type="submit" className="btn-vp btn-vp-gold mt-3">
                <i className="bi bi-send" aria-hidden="true" /> Review Application
              </button>

              {status === 'validated' && (
                <p className="enquiry__note enquiry__note--ok" role="status">
                  <i className="bi bi-check-circle" aria-hidden="true" /> Details look good. Online applications
                  are not enabled yet — please email your application (with resume) to{' '}
                  <a href={`mailto:${COMPANY.emailGeneral}`}>{COMPANY.emailGeneral}</a> or call{' '}
                  <a href={`tel:+91${COMPANY.phone}`}>{COMPANY.phone}</a>.
                </p>
              )}
              <p className="enquiry__hint">Fields marked * are required.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
