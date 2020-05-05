import React from 'react';
import './Roster.css';
import Staff from './Staff/Staff';

const Roster = () => {
  const luZhangMemoir = [
    '•	Licensed Paralegal',
    '•	Experience in Highway Traffic',
    '•	Paralegal Diploma in Ontario',
    '•	Bachelor of Law in China',
    '•	In depth knowledge of legal terminology and principles',
    '•	Ability to analyze legal documents for accuracy',
    '•	Time management, produce a high quality and quantity of work product',
    '•	Strong work ethic, excellent attention to detail, highly organized and proactive',
    '•	Fluent in English and Mandarin',
  ];

  const vivianLeeMemoir = [
    '•	Jr. Licensed Paralegal',
    '•	Experience in Small Claims court',
    '•	an eager and bold litigant that will give you the personal service you are looking for in a representative',
    '•	passionate about volunteering and community involvement',
    '•	Fluent in English and Mandarin',
  ];

  const oliviaAllenMemoir = [
    '•	Licensed Paralegal',
    '•	Empathetic and solution-seeking, constantly striving to find the best resolutions for clients',
    '•	Mainly focused on Small Claims, Landlord and Tenant Issues, and Highway Traffic Act matters',
    '•	Capable of assisting a client from the outset of their matter until conclusion, including document preparation and courtroom advocacy',
    '•	Knowledgeable, professional, dedicated and dependable'
  ];

  return (
    <section className="Roster">
      <h2>Our strength is our team</h2>
      <p>
        All our paralegals are fully licensed and authorized by the Law Society
        of Upper Canada to commission documents.
      </p>
      <div className="row">
        <Staff name="Lu Zhang" memoir={luZhangMemoir} />
        <Staff name="Olivia Allen" memoir={oliviaAllenMemoir} />
        <Staff name="Vivian Lee" memoir={vivianLeeMemoir} />
      </div>
    </section>
  );
};

export default Roster;
