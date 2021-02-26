import React from 'react';
import MyMap  from './components/map'
import Header from './components/header';
import servicesback from './images/serviceback.jpg'
import wash from './images/washitem1.jpg'
import Contacts from './components/contacts'

import './App.css'
import ServiceList from './components/services-list';
import PriceList from './components/price-list'

function App() {
  return (
    <>
      <Header/>
      <div style={{
          background: `url(${servicesback}) 100% 30% no-repeat`,
          backgroundSize: "cover"
        }}> 
        <ServiceList/>
      </div>
      <div style={{
          background: `url(${wash}) 100% 190% no-repeat`,
          backgroundSize: "cover"
        }}>
          <PriceList />
      </div>
      <Contacts/>
      <MyMap/>
    </>
  );
}

export default App;
