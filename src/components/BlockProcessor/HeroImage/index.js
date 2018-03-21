import React, {Component} from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'

class HeroImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.hero}>
                <div className={styles['hero-image']}>
                    <Img sizes={this.props.image.sizes}/>
                </div>
                <div className={styles['hero-content']} dangerouslySetInnerHTML={{__html:this.props.text.html}} />
            </div>
        );
    }
}

export default HeroImage
