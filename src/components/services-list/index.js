import React from 'react'

import ServiceItem from './service-list-item'
import data from './info'

import './service-list.css'

const ServiceList = () => (
  <>
    <ul className="service-list">
      {
        data.map(el => (
          <li key={el.text}>
            <ServiceItem {...el}/>
          </li>
        ))
      }
    </ul>
  </> 
);

export default ServiceList;