// // TextNode Component it renders a node with text input.

// import { useState } from 'react';
// import { Position } from 'reactflow';
// import BaseNode from './baseNode';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Text } from 'lucide-react';


// export const TextNode = ({ id, data }) => {
//     // State management for text input
//     const [currText, setCurrText] = useState(data?.text || '{{input}}');

//     const handleTextChange = (e) => setCurrText(e.target.value);

//     return (
//         <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
//             <BaseNode
//                 title="Text"
//                 icon={<Text />}  // Pass the icon if needed
//                 handles={[
//                     { type: 'source', position: Position.Right, id: `${id}-output` },
//                 ]}
//             />
//             {/* Text Input */}
//             <div className="mx-2 mb-2">
//                 <Label htmlFor="text-input">Text</Label>
//                 <Input
//                     type="text"
//                     className="py-1"
//                     value={currText}
//                     onChange={handleTextChange}
//                     id="text-input"
//                     placeholder="Enter text"
//                 />
//             </div>
//         </div>
//     );
// };

import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode'; // Ensure correct import path
import { Label } from '../ui/label';
import { Text } from 'lucide-react';
import useAutosizeTextArea from '../autoResizeTextArea';

export const TextNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || '{{input}}');
    const [handles, setHandles] = useState([]);
    const textAreaRef = useRef(null);

    useAutosizeTextArea(textAreaRef.current, currText);

    useEffect(() => {
        const variablePattern = /\{\{(\w+)\}\}/g;
        const variables = [];
        let match;

        while ((match = variablePattern.exec(currText)) !== null) {
            variables.push(match[1]);
        }

        setHandles(variables.map((variable, index) => ({
            type: 'target',
            position: Position.Left,
            id: `${id}-${variable}`,
            style: { top: `calc(${100 / (variables.length + 1) * (index + 1)}%)` }
        })));
    }, [currText, id]);

    const handleTextChange = (e) => setCurrText(e.target.value);

    return (
        <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
            <BaseNode
                title="Text"
                icon={<Text />}
                handles={handles}
            />
            <div className="mx-2 mb-2">
                <Label className='flex flex-col' htmlFor="text-input">Text
                    <textarea
                        ref={textAreaRef}
                        className='
                            mt-1
                            block
                            w-full
                            px-3
                            py-2
                            text-sm
                            leading-5
                            text-card-foreground
                            border
                            border-input
                            bg-transparent
                            rounded-md
                            shadow-sm
                            placeholder-muted-foreground
                            focus:outline-none
                            focus:ring-ring
                            focus:border-ring
                            transition
                            resize-none
                            &::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                        '
                        value={currText}
                        onChange={handleTextChange}
                        id="text-input"
                        placeholder="Enter text"
                    />
                </Label>
            </div>
        </div>
    );
};
