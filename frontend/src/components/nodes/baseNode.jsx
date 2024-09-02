import { Handle } from 'reactflow';
import { Separator } from '../ui/separator';
import { BreadcrumbWithCustomSeparator } from '../BreadcrumbWithCustomSeparator';

const BaseNode = ({ title, icon, handles }) => {
  return (
    <div >
      {/* Render handles */}
      {handles?.map((handle, idx) => (
        <>
          <Handle
            key={idx}
            type={handle.type}
            position={handle.position}
            style={handle.style}
            id={handle.id}
          />
        </>
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