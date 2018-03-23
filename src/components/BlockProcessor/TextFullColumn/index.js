import React, {Component} from 'react'
import styles from './index.module.scss'

class TextFullColumn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.textFullColumn} dangerouslySetInnerHTML={{__html:this.props.text.html}} />
        );
    }
}

export default TextFullColumn
