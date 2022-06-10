import React from "react"
import Layout from "../component/Layout"
import * as Style from "../assets/style/contact.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import BedList from "../component/detail/BedList"

const mainStyle = {
  minHeight: `calc(100vh - 15rem)`,
}

export const query = graphql`
  query showCaseBed {
    allContentfulBed(limit: 3) {
      nodes {
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        type
      }
    }
  }
`

export default function Contact() {
  const {
    allContentfulBed: { nodes },
  } = useStaticQuery(query)
  console.log(nodes)
  return (
    <>
      <Layout>
        <main style={mainStyle} className="grid-container">
          <div className={Style.container}>
            <div className={Style.container__par}>
              <h2>Want To Get In Touch?</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                expedita repudiandae cumque modi ipsam vero?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur sit obcaecati, molestiae commodi perferendis
                explicabo sed pariatur ea sint incidunt!
              </p>
            </div>

            {/* CONTACT FORM */}
            <div className={Style.container__form}>
              <form action="">
                <div class="form-row">
                  <label for="name">your name</label>
                  <input type="text" name="name" id="name" />
                </div>

                <div class="form-row">
                  <label for="email">your email</label>
                  <input type="text" name="email" id="email" />
                </div>

                <div class="form-row">
                  <label for="message">message</label>
                  <textarea
                    rows="10"
                    cols="30"
                    name="message"
                    id="message"
                  ></textarea>
                </div>

                <button type="submit" class="btn block">
                  submit
                </button>
              </form>
            </div>
          </div>

          {/* beautiful show case */}

          <div className={Style.showCase}>
            <div className={Style.showCase__heading}>
              <h2>look at this amazing beds!</h2>
            </div>

            <BedList bed={nodes} />
          </div>
        </main>
      </Layout>
    </>
  )
}
