const express = require('express');
const router = express.Router({ mergeParams: true });
const Review = require('../models/review.js');
const Listing = require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const { isLoggedIn,isAuthor } = require("../middleware.js");
const {validatereview}=require("../middleware.js")

const reviewController=require("../controllers/reviews.js");
//review validation

//review route
router.post("/",
    isLoggedIn
    ,validatereview, 
    wrapAsync(reviewController.createReview));

router.delete(
    "/:reviewId",
    isAuthor,
    wrapAsync(reviewController.deleteReview)
);
module.exports = router;