import React from "react"
import * as Style from '../assets/style/footer.module.scss'
export default function Footer() {
  return (
    <>
      <div className={Style.Footer}>
        <div className={Style.footer_item}>
          © {new Date().getFullYear()} Simplybed. Built with Gatsby
          <p>daniel conteh</p>
        </div>
      </div>
    </>
  )
}
