import React from 'react'
import { TelephoneFill, Telegram, GeoAltFill } from 'react-bootstrap-icons';

const ContactsInfo = () => (
  <div className="contacts">
    <h2 className="price-header">Контакты</h2>
    <div className="tel">
      <TelephoneFill size={30} color="#ffe648" />
      <a href="tel: +375 (29) 605-50-04">+375 (29) 605-50-04</a>
    </div>
    <div className="tg">
      <Telegram size={36} color="#ffe648"/>
      <a href="tg://resolve?domain=timaazarenok">@timaazarenok</a>
    </div>
    <div className="geo">
      <GeoAltFill size={30} color="#ffe648"/>
      <a href="yandexmaps://maps.yandex.ru/?ll= 53.902236,27.549848&z=15">ул.Немига 5, Подъземный паркинг</a>
    </div>
  </div>
)

export default ContactsInfo;