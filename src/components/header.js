import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import {header,
  title,
  navList,
  navItem,
  activeNavItem} from "./header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={header}>
      <h1>
        <Link className={title} to="/">
          Rohit JP Singh
        </Link>
      </h1>
      <nav>
        <ul className={navList}>
          <li>
            <Link
              className={navItem}
              activeClassName={activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={navItem}
              activeClassName={activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={navItem}
              activeClassName={activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={navItem}
              activeClassName={activeNavItem}
              to="/service"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={navItem}
              activeClassName={activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
