import React from 'react';
const AddressMap = () => {
  return (
    <div className="google-map-code embed-responsive embed-responsive-16by9 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d61994.195789575126!2d100.55344760849901!3d13.800728720755806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d13.8510336!2d100.60759039999999!4m5!1s0x30e29e8ca43973c1%3A0x3ad524358b1de0a9!2z4LiK4Liz4LiZ4Liy4LiN4LmA4Lie4LmH4LiN4LiK4Liy4LiV4Li0IGdvb2dsZSBtYXA!3m2!1d13.7566122!2d100.5688088!5e0!3m2!1sth!2sth!4v1672890531547!5m2!1sth!2sth"
        className="embed-responsive-item"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
export default AddressMap;
