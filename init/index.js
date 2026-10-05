const mongoose=require('mongoose');
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL='mongodb://127.0.0.1:27017/StayHub';

main()
.then(()=>{
    console.log("StayHub-connected to db");
})
 .catch((err)=>{
    console.log(err)
 });
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: new mongoose.Types.ObjectId("6ab14c8772b046fa3772b430")
    }))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};
initDB()