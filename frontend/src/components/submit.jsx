import { useReactFlow } from 'reactflow';
import { Button } from './ui/button';
import { Send } from 'lucide-react';
import axios from 'axios';

export const SubmitButton = () => {
    const { getNodes, getEdges } = useReactFlow();

    const handleSubmit = async () => {
        const nodes = getNodes();
        const edges = getEdges();

        // Prepare data to send to the backend
        const pipelineData = {
            nodes: nodes.map(node => ({ id: node.id, type: node.type })),
            edges: edges.map(edge => ({ id: edge.id, source: edge.source, target: edge.target })),
        };

        try {
            const response = await axios.post('http://localhost:8000/pipelines/parse', pipelineData);
            const result = response.data;
            // Displaying an alert with the response data
            alert(`Number of Nodes: ${result.num_nodes}, Number of Edges: ${result.num_edges}, Is DAG: ${result.is_dag}`);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
        }
    };

    return (

        <div className="flex justify-center items-center md:py-10 py-4">
            <Button onClick={handleSubmit} variant='ghost' className='border rounded flex gap-2'>
                <Send />
                Submit
            </Button>
        </div>
    );
};

