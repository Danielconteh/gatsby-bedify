import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/style/main.scss"

export default function Layout({ children }) {
  return (
    <>
      <div className="grid-container">
        <Navbar />
      </div>

      {children}
      <Footer />
    </>
  )
}
