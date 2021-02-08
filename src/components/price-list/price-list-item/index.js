import React from 'react'
import PriceItem from '../priceitem'
import "./price-list-item.css"

const Mobile = ({children}) => (
  <div className="mobile-prices">
    {children}
  </div>
) 

const Desktop = ({children}) => (
  <div className="desktop-prices">
    {children}
  </div>
)

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