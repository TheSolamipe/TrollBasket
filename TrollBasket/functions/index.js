const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

//Using dotenv to manage ENV variables
require("dotenv").config();
const stripe = require("stripe")(`${process.env.STRIPEKEY}`);

//api

//App config
const app = express();

//Middlewares
// app.use(cors({ origin: true }));
app.use(express.json());
//applying CORS middleware
app.use(
  cors({
    allowedHeaders: [
      "sessionId",
      "Content-Type",
      "Origin, X-Requested-With, Accept, Authorization, remember-me, type",
    ],
    exposedHeaders: ["sessionId, Authorization"],
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

//API ROUTES
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received Boom!!! for this amount >> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-af7da/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
