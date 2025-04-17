import React from 'react'
import "../footer/footer.css"
import myimg  from "../../assets/img.png"
const Footer = () => {
  return (
    <div className="footer">
        <p>copyright &copy; NAVTTC COURSE FULL STACK</p>
        <p>All rights reserved</p>
        <img src={myimg} alt="" />
    </div>
  )
}

export default Footer