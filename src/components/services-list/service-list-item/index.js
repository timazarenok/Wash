import React from 'react'

import './service-item.css'

const ServiceItem = ({src, alt, text}) => (
  <div className="block"> 
    <img className="icon" src={src} alt={alt}/>
    <div className="text">
      {text}
    </div>
  </div>
);  

export default ServiceItem;