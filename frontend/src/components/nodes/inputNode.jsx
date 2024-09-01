// inputNode.js

import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { FormInput } from 'lucide-react';

export const InputNode = ({ id, data }) => {
    return (
        <>
            <BaseNode
                id={id}
                name={data?.inputName || id.replace('customInput-', 'input_')}
                type={data.inputType || 'Text'}
                icon={<FormInput />}
                title={'Input'}
                handles={[
                    { type: 'source', position: Position.Right, id: `${id}-output` }
                ]}
            />
        </>
    );
}
