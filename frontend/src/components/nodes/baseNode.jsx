import { useState } from 'react';
import { Handle } from 'reactflow';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { BreadcrumbWithCustomSeparator } from '../BreadcrumbWithCustomSeparator';

const BaseNode = ({ title, icon, name, type, content, handles }) => {
  const [currName, setCurrName] = useState(name);
  const [nodeType, setNodeType] = useState(type);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setNodeType(e.target.value);
  };

  return (
    <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card'>

      {/* Render handles */}

      {handles?.map((handle, idx) => (
        <Handle
          key={idx}
          type={handle.type}
          position={handle.position}
          style={handle.style}
          id={handle.id}
          // className='!bg-foreground'

        />
      ))}

      <div className='mx-2'>
        {title && <div className='flex justify-center'>
          <BreadcrumbWithCustomSeparator icon={icon} title={title} />
        </div>
        }

        <Separator className='my-2' />

        {content && <div className='flex justify-center'>
          {content}
        </div>}

        {/* Render name input */}
        {name && (
          <div className="mb-2 ">
            <Label htmlFor="name-input">Name</Label>
            <Input
              type="text"
              className="py-1"
              value={currName}
              onChange={handleNameChange}
              id="name-input"
              placeholder="Enter name"
            />
          </div>
        )}

        {/* Render type select */}
        {type && (
          <>
            <Label>Type</Label>
            <Select value={nodeType} onChange={handleTypeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Type:</SelectLabel>
                  <SelectItem value="Text">Text</SelectItem>
                  <SelectItem value="File">Image</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </>
        )}
      </div>
    </div>
  );
};

export default BaseNode;

