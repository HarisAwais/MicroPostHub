const express = require('express');
const userRouter = require('./api/route/user.route');
const app = express();
const PORT = 3001;

app.use(express.json());
app.get('/api/service1', (req, res) => {
    res.send('Hello from Service 1');
});
app.use('/api/service1', userRouter);
app.listen(PORT, () => {
    console.log(`Service 1 running on http://localhost:${PORT}`);
});