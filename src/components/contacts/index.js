import React from "react"
import ContactsInfo from "./contacts-info"
import { Mobile, Desktop } from '../utils'

import './contacts.css'


const Contacts = () => (
  <>
    <Mobile>
      <ContactsInfo />
    </Mobile>
    <Desktop>
      <ContactsInfo />
    </Desktop>
  </>
)

export default Contacts;