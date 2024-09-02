
import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { FileOutputIcon } from 'lucide-react';


export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
      <BaseNode
        title="Output"
        icon={<FileOutputIcon />} // Pass the icon if needed
        handles={[
          { type: 'target', position: Position.Left, id: `${id}-value` },
        ]}
      />
      {/* Name Input */}
      <div className="mx-2 mb-2">
        <Label htmlFor="output-name-input">Name</Label>
        <Input
          type="text"
          className="py-1"
          value={currName}
          onChange={handleNameChange}
          id="output-name-input"
          placeholder="Enter name"
        />
      </div>

      {/* Type Select */}
      <div className="mx-2 mb-2">
        <Label htmlFor="output-type-select">Type</Label>
        <Select value={outputType} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              <SelectItem value="Text">Text</SelectItem>
              <SelectItem value="File">Image</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};


