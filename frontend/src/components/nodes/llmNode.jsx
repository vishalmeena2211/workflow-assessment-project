import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { ChartBarIcon } from 'lucide-react';

export const LLMNode = ({ id }) => {
    return (
        <BaseNode
            id={id}
            icon={<ChartBarIcon/>}
            title={'LLM'}
            content={'This is an LLM.'}
            handles={[
                { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: `${100 / 3}%` } },
                { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: `${200 / 3}%` } },
                { type: 'source', position: Position.Right, id: `${id}-response` },
            ]}
        />
    );
};
