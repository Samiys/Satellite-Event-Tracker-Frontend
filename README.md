# Satellite Event Tracker Frontend

This is the frontend application for the Satellite Event Tracker. The application is built using Vue.js and is containerized using Docker for easy deployment.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Docker](#docker)
- [License](#license)

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)
- [Docker](https://www.docker.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Samiys/Satellite-Event-Tracker-Frontend.git
   cd Satellite-Event-Tracker-Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Application

To run the application locally:

```bash
npm run serve
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Building for Production

To build the application for production:

```bash
npm run build
```

The production-ready files will be in the \`dist\` directory.

## Docker

### Building the Docker Image

To build the Docker image for the application:

```bash
docker-compose build
```

### Running the Docker Container

To run the Docker container:

```bash
docker-compose up
```

The application will be available at [http://localhost:8080](http://localhost:8080).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
