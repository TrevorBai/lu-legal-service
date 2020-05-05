import React from 'react';
import './Testimonials.css';
import customerPic1 from '../../assets/images/customer-1.jpg';
import customerPic2 from '../../assets/images/customer-2.jpg';
import customerPic3 from '../../assets/images/customer-3.jpg';
import Testimonial from './Testimonial/Testimonial';

const Testimonials = () => {
  return (
    <section className="Testimonials">
      <h2>Reviews of Lu legal services</h2>
      <div className="row">
        <Testimonial
          citation="Lu Zhang is a great paralegal to work with. She is professional, patient, willing to listen and resolve issues. She took great care in ensuring that my best interest was taken care of. At Lu Legal Services they were very attentive and they looked after every detail. Whenever I had questions or forms that I had to deal with through my claim they were right by my side. I would recommend Mrs. Lu and her staff to others and found that she was sincere and forward each step of the way."
          customerPic={customerPic1}
          customerName="Robert Duncan"
        />
        <Testimonial
          citation="My experience with Lu Legal Services was excellent from start to finish. Olivia attended at our home on a regular basis to help us whenever needed."
          customerPic={customerPic2}
          customerName="Joana Silva"
        />
        <Testimonial
          citation="No question is too small and all inquiries are addressed in a timely manner. I would like to take the time to say thank you to the fantastic team at Lu Legal Services, I couldn't have asked for better service. The staff were very friendly and cooperative and always made very welcome during visits to the office."
          customerPic={customerPic3}
          customerName="Milton Nelson"
        />
      </div>
    </section>
  );
};

export default Testimonials;
