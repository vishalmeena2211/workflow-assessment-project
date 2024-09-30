# VectorShift Workflow

VectorShift Workflow is a project that utilizes React for the frontend and FastAPI for the backend to create and manage workflows. This project supports Directed Acyclic Graphs (DAGs) for workflow management.

## Features

- **React Frontend**: A modern, responsive UI built with React.
- **FastAPI Backend**: A high-performance backend built with FastAPI.
- **DAG Support**: Create and manage workflows using Directed Acyclic Graphs.

## Installation

### Prerequisites

- Node.js
- Python 3.7+
- FastAPI

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Create a virtual environment:
    ```bash
    python -m venv venv
    ```
3. Activate the virtual environment:
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
4. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
5. Start the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the React frontend.
2. Use the UI to create and manage workflows.
3. The backend API is available at `http://localhost:8000`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or inquiries, please contact [vishalmeena111](mailto:meenavishal2211@gmail.com).

## Screenshots

Here are some screenshots of the VectorShift Workflow in action:

![Dashboard](screenshots/dashboard.png)
*Dashboard view of the application.*

![Workflow Creation](screenshots/workflow_creation.png)
*Creating a new workflow using the UI.*

![DAG View](screenshots/dag_view.png)
*Visual representation of a Directed Acyclic Graph (DAG).*

## Live Demo

Check out the live demo of the VectorShift Workflow [here](https://workflow-assessment-project.vercel.app).


















