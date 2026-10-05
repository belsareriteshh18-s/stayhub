const express = require('express');
const router = express.Router();
const Listing=require("../models/listing.js");  //listing.js ko required
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,validatelisting}=require("../middleware.js");

const listingController=require("../controllers/listings.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer ({storage});


router.route("/")

.get(wrapAsync(listingController.index))

.post(
    isLoggedIn,
    upload.single("image"),
        validatelisting,
    wrapAsync(listingController.createListings)
);
//new
router.get("/new", isLoggedIn, listingController.renderNewForm);

//edit
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.editListings)
);

//show, update, delete
router.route("/:id")
.get(
    wrapAsync(listingController.ShowListings)
)
.put(
    isLoggedIn,
    isOwner,
    upload.single("image"),
    validatelisting,
    wrapAsync(listingController.updateListings)
)
.delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.deletedListings)
);
module.exports=router;