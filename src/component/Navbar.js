import React from "react"
import { useRef, useState, useEffect } from "react"
import * as Styles from "../assets/style/navbar.module.scss"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// logo
import logo from "../assets/logo.png"

export default function Home() {
  const [showLinks, setShowLinks] = useState(false)

  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = ""
    }
  }, [showLinks])

  useEffect(() => {
    const winResize = () => {
      if (window.innerWidth > 800) {
        linksContainerRef.current.style.height = ""
        setShowLinks(false)
      }
    }
    window.addEventListener("resize", winResize)
    return () => {
      window.removeEventListener("resize", winResize)
    }
  }, [])

  return (
    <nav className={Styles.nav}>
      <div className={Styles.nav_container}>
        <div className={Styles.nav_header}>
          <Link to="/"className={Styles.nav_header_log}>

                <StaticImage
                  src="../assets/logo.png"
                  alt="logo"
                  placeholder="blurred"
                  layout="fixed"
                  width={25}
                  height={25}
                />                   
          </Link>
          <span onClick={toggleLinks} className={Styles.nav_header_icon}>
            {" "}
            <FaBars className={Styles.nav_header_icon_bar} />
          </span>
        </div>
        <div className={Styles.nav_links} ref={linksContainerRef}>
          <ul className={Styles.nav_link} ref={linksRef}>
            <Link to="/" onClick={toggleLinks}>
              home
            </Link>
            <Link to="/allbed" onClick={toggleLinks}>
              items
            </Link>
            <Link to="/tag" onClick={toggleLinks}>
              tags
            </Link>
            <Link to="/about" onClick={toggleLinks}>
              about
            </Link>
            <Link to="/contact" className={Styles.last_child}>
              <button onClick={toggleLinks}>contact</button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export async function getServerSideProps(context) {
  console.log("*************")
  // console.log(context)
  console.log("*************")

  return {
    props: {},
  }
}
