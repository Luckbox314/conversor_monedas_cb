# Currency Converter Application

This is a simple currency converter application built with a React frontend and an Express backend. The project is fully containerized using Docker and Docker Compose.

## Demo video (Spanish)
[![Youtube Video Demo](https://img.youtube.com/vi/JuAg3BN58eM/0.jpg)](https://www.youtube.com/watch?v=JuAg3BN58eM)

Youtube link: https://www.youtube.com/watch?v=JuAg3BN58eM

## Prerequisites

Before you start, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Project Structure

The project is structured as follows:

```
.
├── backend/ # Express backend
├── frontend/ # React frontend
├── docker-compose.yml # Docker Compose configuration
└── README.md # This file
```

## Getting Started

Follow these steps to get the project up and running.

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Luckbox314/conversor_monedas_cb
cd conversor_monedas_cb
```

### 2. Build and Run the Containers
Use Docker Compose to build and start the containers for both the frontend and backend:    
```bash
docker-compose up --build frontend backend
```
This command will:

* Build the Docker images for the frontend and backend using default enviroment variables.
* Start the containers.
* Attach the logs to your terminal.

### 3. Access the Application
Once the containers are up and running, you can access the application in your browser:

* Frontend: http://localhost:3000
* Backend: The backend runs at http://localhost:5000 but doesn't have any GUI.

### 4. Stopping the Application
To stop the running containers, press Ctrl + C in the terminal where docker-compose up is running, or run:
    
```bash
docker-compose down
```
This command will stop and remove the containers, networks, and any associated volumes.

## Backend Testing

To run the backend tests use the command:

```bash
docker-compose run --rm backend-tests
```

## Development
If you need to develop or debug the application:

* Backend: You can edit the code directly, and Docker will automatically reload the changes thanks to the volume mapping.
* Frontend: The same applies to the frontend; changes will be hot-reloaded in the development environment.
### Running Individual Containers
If you only need to run one part of the project (frontend or backend):

* Running the Backend
    ```bash
    docker-compose up backend
    ```
* Running the Frontend
    ```bash
    docker-compose up frontend
    ```

### Environment Variables
* Frontend: Environment variables can be set in a .env file in the root directory of the frontend project. For example:
    ```shell
    REACT_APP_BACKEND_API_URL=http://localhost:5000
    REACT_APP_CURRENCY_BIRD_API_URL=https://elb.currencybird.cl/apigateway-cb/api/public
    WATCHPACK_POLLING=true # for windows development using Docker
    ```
* Backend: Environment variables for the backend can also be configured in a similar way.
    ```shell
    PORT=5000
    API_URL=https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api
    API_VERSION=v1
    TRANSACTION_FEE=0.95
    ```