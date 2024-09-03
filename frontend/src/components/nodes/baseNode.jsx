import { Handle, useUpdateNodeInternals } from 'reactflow';
import { Separator } from '../ui/separator';
import { BreadcrumbWithCustomSeparator } from '../BreadcrumbWithCustomSeparator';
import { useEffect } from 'react';

const BaseNode = ({ id, title, icon, handles }) => {

  const updateNodeInternals = useUpdateNodeInternals();

  // Update node internals when handles change
  useEffect(() => {
    updateNodeInternals(id);
  }, [handles, id, updateNodeInternals]);



  return (
    <div >
      {/* Render handles */}
      {handles?.map((handle, idx) => (
        <Handle
          key={idx}
          type={handle.type}
          position={handle.position}
          style={handle.style}
          id={handle.id}
        >
          {handle.variable && <span className='absolute -left-16 w-12 overflow-x-hidden'>
            {handle.variable}
          </span>}
        </Handle>
      ))}

      <div className='mx-2'>
        {/* Render title with icon */}
        {title && (
          <div className='flex justify-center'>
            <BreadcrumbWithCustomSeparator icon={icon} title={title} />
          </div>
        )}

        <Separator className='my-2' />

      </div>
    </div>
  );
};

export default BaseNode;