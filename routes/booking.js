const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const bookingController = require("../controllers/booking");
const { isLoggedIn } = require("../middleware");

// 1. Booking Form
router.get(
    "/listings/:listingId/bookings/new",
    isLoggedIn,
    wrapAsync(bookingController.renderBookingForm)
);

// 2. Create Booking
router.post(
    "/listings/:listingId/bookings",
    isLoggedIn,
    wrapAsync(bookingController.createBooking)
);

// 3. My Bookings
router.get(
    "/bookings/my",
    isLoggedIn,
    wrapAsync(bookingController.myBookings)
);

// 4. Cancel Booking
router.post(
    "/bookings/:id/cancel",
    isLoggedIn,
    wrapAsync(bookingController.cancelBooking)
);

module.exports = router;