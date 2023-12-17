const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
   name: String,
   rating: Number,
   review: String
})


const Fruit = mongoose.model("Fruit", fruitSchema)

const apple = new Fruit({
   name: "Apple",
   rating: 9,
   review: "Rasanya manis"
})

apple.save(function (error) {
   if (error) {
      console.error();
   } else {
      console.log("Berhasil simpan buah apel ke dalam database");
   }
})