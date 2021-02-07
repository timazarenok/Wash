import React from "react"
import './priceitem.css'

const PriceItem = ({price, type}) => (
  <div className="price-block"> 
    <h3 className="type">{type}</h3>
    <h2 className="price">
      {price}
    </h2>
  </div>
)

export default PriceItem;