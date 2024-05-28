# Teebay - Buy, Sell, and Rent Web Application

Teebay is a comprehensive user-friendly web application designed to facilitate buying, selling, and renting various products online.

## Technologies Used

- **Frontend**: React.js, CSS, Grapghql
- **Backend**: Node.js, Express.js, Graphql
- **Database**: Postgres, Prisma
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

To get started with Teebay locally, follow these steps:

1. Clone this repository `git clone https://github.com/morshedul-antor/teebay.git`
2. Setup `Docker` in local environment

### 3. Backend

At first run:
`openssl rand -hex 32` copy the generated value and paste it into the
`JWT_SECRET=` field within the `.env` file located at `teebay/backend/`

Then, run this steps at `teebay/backend`:

```
docker compose up --build
docker compose up
```

Access the `Express` server at `http://localhost:8000`

Access the `Graphql` server at `http://localhost:8000/graphql`

### 4. Frontend

Run this steps at `teebay/frontend`:

```
npm install
npm run dev
```

Access the application in your browser at `http://localhost:5173`
