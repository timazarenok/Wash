import React from "react"
import PriceListItem from "./price-list-item"

import data from "./info.json"
import './price-list.css'

const PriceList = () => (
  <>
    <h1 className="price-header">Прайс-лист</h1> 
    <ul className="price-list">
      {
        data.map((el, index) => (
          <li key={index}>
            <PriceListItem {...el}/>
          </li>
        ))
      }
    </ul>
  </>
);

export default PriceList;