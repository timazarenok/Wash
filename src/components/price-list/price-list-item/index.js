import React from 'react'
import PriceItem from '../priceitem'
import {Mobile, Desktop} from '../../utils'

import "./price-list-item.css"

const PiceListItem = ({name, description, prices}) => (
  <>
    <Desktop>
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
    </Desktop>
    <Mobile>
      <div className="item">
        <h3 className="name">{name}</h3>
        <div className="service-description">{description}</div>
        <ul className="prices">
          {
            prices.map((el, index) => (
              <li key={index}>
                <PriceItem {...el}/>
              </li>
            ))
          }
        </ul>
      </div>
    </Mobile>
  </>
);

export default PiceListItem;