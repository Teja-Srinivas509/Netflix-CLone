const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
const port = 3000
const customerRoutes = require("./routes/customers")
const path = require('path');

app.use(express.static(path.join(__dirname , '/public')))
// app.use(express.static(path.join(__dirname , '/LandPage')))
mongoose.connect('mongodb://localhost:27017/Users', {
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/customer',customerRoutes)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.get('/LandPage/index.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'LandPage', 'index.html'));
// });


app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})

