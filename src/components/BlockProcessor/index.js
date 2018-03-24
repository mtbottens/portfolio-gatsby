import React, {Component} from 'react'

import HeroImage from './HeroImage'
import TextFullColumn from './TextFullColumn'

class BlockProcessor extends Component {
    constructor(props) {
        super(props);
        this.types = {};
        this.defaultType = TextFullColumn;
        this.registerBlockType('hero_image', HeroImage);
        this.registerBlockType('text_full_column', TextFullColumn);
    }

    registerBlockType(blockName, component) {
        this.types[blockName] = component;
    }

    render() {
        return (
            <div>
                {this.props.blocks.map(block => {
                    const Block = this.types[block.type.type] || this.defaultType;

                    return <Block key={block.id} image={block.image_content.childImageSharp} text={block.text_content.childMarkdownRemark} />
                })}
            </div>
        );
    }
}

export default BlockProcessor
