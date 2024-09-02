import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Calendar } from 'lucide-react';

export const DateNode = ({ id, data }) => {
    // State management for date input
    const [selectedDate, setSelectedDate] = useState(data?.date || '');

    const handleDateChange = (e) => setSelectedDate(e.target.value);

    return (
        <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
            <BaseNode
                title="Date"
                icon={<Calendar />}  // Pass the icon for date
                handles={[
                    { type: 'source', position: Position.Right, id: `${id}-output` },
                ]}
            />
            {/* Date Input */}
            <div className="mx-2 mb-2">
                <Label htmlFor="date-input">Date</Label>
                <Input
                    type="date"
                    className="py-1"
                    value={selectedDate}
                    onChange={handleDateChange}
                    id="date-input"
                />
            </div>
        </div>
    );
};
