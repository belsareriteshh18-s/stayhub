const Listing=require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapBoxToken });

//index route
module.exports.index=async(req,res)=>{             //listing route mai all list shows
   const allListings=  await Listing.find({})
      res.render("listings/index.ejs",{allListings});
    };


//new route
module.exports.renderNewForm=(req, res) => {
   res.render("listings/new.ejs");
};

//show route
module.exports.ShowListings = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            }
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "The listing you requested does not exist");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing ,    mapToken: process.env.MAP_TOKEN
 });
};

//edit route
module.exports.editListings=async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
     if (!listing) {
        req.flash("error", "The listing you requested does not exist");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
  };

//create route
module.exports.createListings = async (req, res, next) => {
      let response= await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
        limit:1,
     })
     .send();
     

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {
        url,
        filename
    };
    newListing.geometry = response.body.features[0].geometry;
    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New listing created successfully!");

    res.redirect("/listings");
};

// update route
module.exports.updateListings = async (req, res) => {

    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true, runValidators: true }
    );
    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };

        await listing.save();
    }
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
};

//delete route
module.exports.deletedListings=async(req ,res)=>{
   let {id}=req.params;
  let deletedListing=await Listing.findByIdAndDelete (id);
  console.log(deletedListing);
      req.flash("success","lisitng deleted");
  res.redirect("/listings");
}