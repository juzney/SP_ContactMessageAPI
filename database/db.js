const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Contact", () =>
{
  
    console.log("mongodb connected");
})