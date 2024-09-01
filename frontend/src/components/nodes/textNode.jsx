import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { Text } from 'lucide-react';

export const TextNode = ({ id, data }) => {

    return (
        <BaseNode
            id={id}
            name={data?.text || '{{input}}'}
            icon={<Text />}
            title={'Text'}
            handles={[
                { type: 'source', position: Position.Right, id: `${id}-output` }
            ]}
        />
    );
};
