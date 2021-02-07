import React from 'react'
import PriceItem from '../priceitem'
import "./price-list-item.css"

const PiceListItem = ({name, description, prices}) => (
  <div className="item">
    <h3 className="name">{name}</h3>
    <ul className="prices">
      {
        prices.map((el, index) => (
          <li key={index}>
            <PriceItem {...el}/>
          </li>
        ))
      }
    </ul>
    <div className="service-description">{description}</div>
  </div>
);

export default PiceListItem;