import React, {Component} from 'react'

import HeroImage from './HeroImage'

class BlockProcessor extends Component {
    constructor(props) {
        super(props);
        this.types = {};
        this.registerBlockType('hero_image', HeroImage);
    }

    registerBlockType(blockName, component) {
        this.types[blockName] = component;
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.blocks.map(block => {
                    const Block = this.types[block.type];

                    return <Block key={block.id} image={block.childImageContent} text={block.childTextContent} />
                })}
            </div>
        );
    }
}

export default BlockProcessor
