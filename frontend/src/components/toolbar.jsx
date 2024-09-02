// toolbar.js

import { ModeToggle } from './mode-toggler';
import { DraggableNode } from './draggableNode';
import { Calendar, ChartBar, Command, FileInput, FileOutputIcon, Hash, Key, Mail, TextIcon } from 'lucide-react';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' icon={<FileInput fontSize={12} />} />
                <DraggableNode type='llm' label='LLM' icon={<ChartBar />} />
                <DraggableNode type='customOutput' label='Output' icon={<FileOutputIcon fontSize={12} />} />
                <DraggableNode type='text' label='Text' icon={<TextIcon fontSize={12} />} />
                <DraggableNode type='button' label='Button' icon={<Command fontSize={12} />} />
                <DraggableNode type='date' label='Date' icon={<Calendar fontSize={12} />} />
                <DraggableNode type='email' label='Email' icon={<Mail fontSize={12} />} />
                <DraggableNode type='number' label='Number' icon={<Hash fontSize={12} />} />
                <DraggableNode type='password' label='Password' icon={<Key fontSize={12} />} />

                <ModeToggle />
            </div>
        </div>
    );
};
