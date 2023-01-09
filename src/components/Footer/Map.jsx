import React from 'react';
const AddressMap = () => {
  return (
    <div className="google-map-code embed-responsive embed-responsive-16by9 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3686471143797!2d100.56655645013767!3d13.756628600841212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e8ca43973c1%3A0x3ad524358b1de0a9!2sChamnan%20Phenjati%20Business%20Center!5e0!3m2!1sen!2sth!4v1673250387174!5m2!1sen!2sth"
        className="embed-responsive-item"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
export default AddressMap;
