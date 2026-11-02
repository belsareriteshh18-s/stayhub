const Booking = require("../models/booking");
const Listing = require("../models/listing");

// 1. Render New Booking Form
module.exports.renderBookingForm = async (req, res) => {
const { listingId } = req.params;

const listing = await Listing.findById(listingId);

if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
}

res.render("booking/new", { listing });


};

// 2. Create New Booking
module.exports.createBooking = async (req, res) => {
const { listingId } = req.params;


const listing = await Listing.findById(listingId);

if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
}

// Get booking details
const { name, address, phone, date, time } = req.body.booking || {};

// Validate form
if (
    !name?.trim() ||
    !address?.trim() ||
    !phone?.trim() ||
    !date ||
    !time
) {
    req.flash("error", "Please fill all booking details!");
    return res.redirect(`/listings/${listingId}/bookings/new`);
}

// Validate date and time
const bookingDate = new Date(`${date}T${time}`);

if (
    isNaN(bookingDate.getTime()) ||
    bookingDate <= new Date()
) {
    req.flash("error", "Please select a future booking date and time!");
    return res.redirect(`/listings/${listingId}/bookings/new`);
}

// Create booking
const newBooking = new Booking({
    name: name.trim(),
    address: address.trim(),
    phone: phone.trim(),
    date: bookingDate,
    time,
    listing: listing._id,
    user: req.user._id
});

await newBooking.save();

req.flash("success", "Your booking submitted successfully!");

res.redirect("/bookings/my");


};

// 3. Display My Bookings
module.exports.myBookings = async (req, res) => {


const bookings = await Booking.find({
    user: req.user._id
}).populate("listing");

res.render("booking/index", { bookings });


};

// 4. Cancel Booking
module.exports.cancelBooking = async (req, res) => {
const { id } = req.params;

const booking = await Booking.findOne({
    _id: id,
    user: req.user._id
});

if (!booking) {
    req.flash("error", "Booking not found!");
    return res.redirect("/bookings/my");
}

if (booking.status !== "Pending") {
    req.flash("error", "Only pending bookings can be cancelled!");
    return res.redirect("/bookings/my");
}

booking.status = "Cancelled";

await booking.save();

req.flash("success", "Booking cancelled successfully!");

res.redirect("/bookings/my");

};
