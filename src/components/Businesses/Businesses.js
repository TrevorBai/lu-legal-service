import React from 'react';
import './Businesses.css';
import Business from './Business/Business';

const Businesses = () => {
  return (
    <section className="Businesses">
      <h2>Here is what we can help you</h2>
      <p>
        Our businesses involve traffic tickets, landlord and tenent, small
        claims court and mediation and tribunals. Hire a member of our team to start working on your court matters,  it will save you in the long run!
      </p>
      <div className="row">
        <Business
          icon="car"
          title="traffic tickets"
          description={`Speeding ticket, stunt driving ticket, careless driving ticket, unsafe lane change, 
          fail to yield from private drive, follow too closely, careless driving and other highway traffic matters along with charges that could lead to high fines and possibly jail time without being represented.`}
        />
        <div className="col-sm-2"></div>
        <Business
          icon="home"
          title="landlord and tenant"
          description="Eviction, unpaid rent, property damage, tenant not leaving, landlord withhold a deposit. We represent either a landlord or a tenant in matters before the board with professionalism and skill."
        />
      </div>
      <div className="row">
        <Business
          icon="cash"
          title="small claims"
          description="Unpaid debts, civil litigation matters up to $35,000.00, wrongful dismissal and dismissal based upon Human Rights violations, contract disputes and resolution (promissory notes), personal injury including accident benefits, WSIB, being hurt due to negligence, slip and fall. We welcome the opportunity to discuss your case, to prepare your documents and even represent your matter in the courts."
        />
        <div className="col-sm-2"></div>
        <Business
          icon="create"
          title="mediation and tribunals"
          description="Pet dispute, cancelled wedding, broken contract and disciplinary hearing. We can represent you, help mediate the issue and come to an acceptable resolution for both sides."
        />
      </div>
    </section>
  );
};

export default Businesses;
