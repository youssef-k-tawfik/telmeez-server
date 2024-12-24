import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (_, res) => {
  res.json({message: 'Hello World!'});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
