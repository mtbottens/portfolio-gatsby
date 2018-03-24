import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BlockProcessor from '../BlockProcessor'

class StructureProcessor extends Component {
    constructor(props) {
        super(props);
        this.groupBlocksAndRows = this.groupBlocksAndRows.bind(this);
    }

    groupBlocksAndRows({blocks, columnsPerRow, blocksPerColumn}) {
        let clonedBlocks = blocks.slice(),
            blockGroups = [],
            groupColumns = [];

        while (clonedBlocks.length > 0) {
            let remaining = clonedBlocks.splice(blocksPerColumn);
            blockGroups.push(clonedBlocks);
            clonedBlocks = remaining;
        }

        let clonedGroups = blockGroups.slice();
        while (clonedGroups.length > 0) {
            let remaining = clonedGroups.splice(columnsPerRow);
            groupColumns.push(clonedGroups);
            clonedGroups = remaining;
        }

        return groupColumns;
    }

    render() {
        return (
            <div>
                {this.props.structures.map(structure => {
                    return this.groupBlocksAndRows({
                        blocks: structure.blocks,
                        columnsPerRow: structure.type.columns_per_row,
                        blocksPerColumn: structure.type.blocks_per_column
                    }).map((row, rowIndex) => (
                        <div key={`${structure.id}___${rowIndex}`} className="row">
                            {row.map((column, columnIndex) => (
                                <div key={`${structure.id}___${rowIndex}___${columnIndex}`} className="column">
                                    <BlockProcessor blocks={column} />
                                </div>
                            ))}
                        </div>
                    ))
                })}
            </div>
        );
    }
}

StructureProcessor.PropTypes = {
    structures: PropTypes.object.isRequired
}

export default StructureProcessor
