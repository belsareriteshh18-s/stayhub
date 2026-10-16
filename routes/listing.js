const express = require("express");
const router = express.Router();

const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");

const {
    isLoggedIn,
    isOwner,
    validatelisting
} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");

const upload = multer({ storage });

// INDEX + CREATE
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single("image"),
        validatelisting,
        wrapAsync(listingController.createListings)
    );

// NEW LISTING
router.get(
    "/new",
    isLoggedIn,
    listingController.renderNewForm
);

// SEARCH LISTINGS
router.get(
    "/search",
    wrapAsync(listingController.search)
);

// EDIT LISTING
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.editListings)
);

// SHOW + UPDATE + DELETE
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

module.exports = router;