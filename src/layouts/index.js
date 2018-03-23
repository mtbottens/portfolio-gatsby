import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import styles from './index.module.scss'

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    }
    this.setNavState = this.setNavState.bind(this);
    this.getBodyClasses = this.getBodyClasses.bind(this);
  }

  setNavState(value) {
    this.setState({
      navOpen: value
    });
  }

  getBodyClasses() {
    const classes = [styles.page];
    if (this.state.navOpen) {
      classes.push(styles.pageNavOpen);
    }
    return classes.join(' ');
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={this.getBodyClasses()}>
          <Helmet
            title="Gatsby Default Starter"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header setNavState={this.setNavState} />
          <div>
            {this.props.children()}
          </div>
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
