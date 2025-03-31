Backend Architecture
The backend of the Todo app is powered by Node.js and Express. 
It acts as the server that handles HTTP requests and responses. 
The core of the backend lies in the server.js file, where the server is 
initialized and configured to listen on a specific port.
It also connects to a MongoDB database using the mongoose library, 
which simplifies database operations and data modeling.
The Todo model defines the structure of each task, specifying fields like the 
task title and completion status.

Routes in the backend are managed through the todoRoutes.js file. Each endpoint 
corresponds to a specific operation, including creating, reading, updating, and 
deleting todos. These endpoints use asynchronous functions to interact with the 
database, ensuring that each operation is performed efficiently and without 
blocking the server. The server also employs CORS to enable communication between 
the frontend and backend, while dotenv is used to handle environment variables,
keeping sensitive data like database URIs secure.
