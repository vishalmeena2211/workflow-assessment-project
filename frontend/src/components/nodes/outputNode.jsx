import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { FileOutputIcon } from 'lucide-react';

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      name={data?.outputName || id.replace('customOutput-', 'output_')}
      type={data.outputType || 'Text'}
      icon={<FileOutputIcon/>}
      title={'Output'}
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-value` }
      ]}
    />
  );
};
