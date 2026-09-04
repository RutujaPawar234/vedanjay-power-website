import { FAQ } from '../../data/contactData.js';

export default function ContactFAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Quick Answers</span>
          <h2 className="section-title mt-2">Frequently asked questions</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row justify-content-center mt-2">
          <div className="col-lg-9">
            {FAQ.map((item, i) => (
              <details className="faq-item reveal" style={{ '--d': `${i * 50}ms` }} key={item.q}>
                <summary className="faq-item__q">
                  <span>{item.q}</span>
                  <i className="bi bi-plus-lg faq-item__icon" aria-hidden="true" />
                </summary>
                <div className="faq-item__a">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
