Frontend quick start

Prerequisites:
- Node.js 18+
- npm

Install and run:

1. cd frontend
2. npm install
3. npm start

This will start the Angular dev server and proxy `/api` requests to http://localhost:8080

Notes:
- This is a lightweight scaffold. To generate a full Angular CLI project, run `npx @angular/cli new frontend` and then copy the `src` files provided.
- The services in `src/app/core/services` expect backend endpoints under `/api/v1` (proxy will forward them to the Spring backend).
