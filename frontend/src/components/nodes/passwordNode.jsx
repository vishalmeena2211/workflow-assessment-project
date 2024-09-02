import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Key } from 'lucide-react';

export const PasswordNode = ({ id, data }) => {
    // State management for password input
    const [password, setPassword] = useState(data?.password || '');
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
            <BaseNode
                title="Password"
                icon={<Key />}  // Pass the icon for password
                handles={[
                    { type: 'source', position: Position.Right, id: `${id}-output` },
                ]}
            />
            {/* Password Input */}
            <div className="mx-2 mb-2">
                <Label htmlFor="password-input">Password</Label>
                <Input
                    type="password"
                    className="py-1"
                    value={password}
                    onChange={handlePasswordChange}
                    id="password-input"
                    placeholder="Enter password"
                />
            </div>
        </div>
    );
};
