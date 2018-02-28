import React, {Component} from 'react'
import Link from 'gatsby-link'
import styles from './index.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.getMenuClasses = this.getMenuClasses.bind(this)
  }

  toggleMenu() {
    this.setState({
      active: !this.state.active
    })
  }

  getMenuClasses() {
    const classes = [styles.hamburgerInner]
    if (this.state.active) classes.push(styles.hamburgerInnerActive)
    return classes.join(' ')
  }

  render() {
    return (
      <header className={styles.globalHeader}>
        <h1><Link to="/">Bottens</Link></h1>

        <button onClick={this.toggleMenu} className={styles.hamburger} type="button" aria-label="Menu" aria-controls="navigation">
          <span className={styles.hamburgerBox}>
            <span className={this.getMenuClasses()}></span>
          </span>
        </button>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
