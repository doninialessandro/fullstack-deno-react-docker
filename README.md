This is a mission control panel based on [Deno](https://deno.land) and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> :warning: **This is a learning project**, some best practices are out of scope.

## Installation

1. Ensure you have Node installed: [https://nodejs.org/](https://nodejs.org/)
2. Ensure you have Deno installed: [https://deno.land/](https://deno.land/)
3. Ensure you have Denon installed: [https://deno.land/x/denon@2.4.7](https://deno.land/x/denon@2.4.7)

## Getting Started

Run the development [`server`](./server):
```bash
npm run start-server
```
Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

Once the server is running run the following commands to start the [`client`](./client):
```bash
npm install-and-start-client
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run with Docker

```bash
npm run start-app
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To stop the services: 
```bash
npm run stop-app
```

## Backend API

Ensure the backend is running by making a GET request to http://localhost:8000/

## Front End

Browse to the Mission Control front end at http://localhost:3000 and schedule an interstellar mission launch!

## Learn More

To learn more about Deno, take a look at the following resources:

- [Deno Documentation](https://deno.land/manual) - learn about Deno

To learn more about React, take a loot at the following resources:

- [React documentation](https://reactjs.org/) - learn about React
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) - learn about CRA
