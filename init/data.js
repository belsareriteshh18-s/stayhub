const sampleListings = [
  {
    title: "Beachfront Villa in Goa",
    description:
      "Relax in a beautiful beachfront villa with stunning sea views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Calangute, Goa",
    country: "India",
  },
  {
    title: "Luxury Apartment in Mumbai",
    description:
      "Enjoy a comfortable stay in a modern apartment located in the heart of Mumbai.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Mumbai, Maharashtra",
    country: "India",
  },
  {
    title: "Mountain Cottage in Manali",
    description:
      "A peaceful mountain cottage surrounded by beautiful Himalayan scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Manali, Himachal Pradesh",
    country: "India",
  },
  {
    title: "Heritage Haveli in Jaipur",
    description:
      "Experience traditional Rajasthani architecture and royal hospitality in this charming haveli.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Jaipur, Rajasthan",
    country: "India",
  },
  {
    title: "Backwater Villa in Kerala",
    description:
      "Stay beside the peaceful Kerala backwaters in a beautiful traditional villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Alleppey, Kerala",
    country: "India",
  },
  {
    title: "Modern Apartment in Pune",
    description:
      "A stylish and comfortable apartment perfect for business trips and city exploration.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Pune, Maharashtra",
    country: "India",
  },
  {
    title: "Lake View Resort in Udaipur",
    description:
      "Enjoy breathtaking lake views from this elegant stay in the city of lakes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Udaipur, Rajasthan",
    country: "India",
  },
  {
    title: "Luxury Resort in Shimla",
    description:
      "Relax in a luxurious mountain resort surrounded by the beautiful hills of Shimla.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Shimla, Himachal Pradesh",
    country: "India",
  },
  {
    title: "Cozy Cottage in Lonavala",
    description:
      "Escape the city and enjoy a peaceful weekend in this cozy cottage surrounded by greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Lonavala, Maharashtra",
    country: "India",
  },
  {
    title: "Luxury Stay in Hyderabad",
    description:
      "A modern luxury stay close to the city's popular attractions and business districts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Hyderabad, Telangana",
    country: "India",
  },
  {
    title: "Beach House in Varkala",
    description:
      "Stay near the Arabian Sea in this peaceful beach house overlooking the beautiful coastline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Varkala, Kerala",
    country: "India",
  },
  {
    title: "Royal Palace Stay in Jodhpur",
    description:
      "Experience royal Rajasthan in a beautifully designed traditional property.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Jodhpur, Rajasthan",
    country: "India",
  },
  {
    title: "Mountain Retreat in Kashmir",
    description:
      "Enjoy peaceful mountain views and fresh air in this beautiful Kashmir retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Srinagar, Kashmir",
    country: "India",
  },
  {
    title: "Luxury Villa in Alibaug",
    description:
      "A spacious private villa perfect for a relaxing weekend near Mumbai.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Alibaug, Maharashtra",
    country: "India",
  },
  {
    title: "Forest Cabin in Coorg",
    description:
      "Wake up surrounded by coffee plantations and lush green forests in this cozy cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Coorg, Karnataka",
    country: "India",
  },
  {
    title: "Luxury Apartment in Bengaluru",
    description:
      "Stay in a modern apartment located close to Bengaluru's major technology hubs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Bengaluru, Karnataka",
    country: "India",
  },
  {
    title: "Sea View Apartment in Chennai",
    description:
      "Enjoy refreshing ocean views from this comfortable apartment near the Chennai coast.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Chennai, Tamil Nadu",
    country: "India",
  },
  {
    title: "Riverside Cottage in Rishikesh",
    description:
      "A peaceful riverside stay perfect for relaxation, yoga and adventure activities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Rishikesh, Uttarakhand",
    country: "India",
  },
  {
    title: "Luxury Resort in Goa",
    description:
      "Enjoy a premium tropical vacation with comfortable rooms, pools and beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Candolim, Goa",
    country: "India",
  },
  {
    title: "Desert Camp in Jaisalmer",
    description:
      "Experience the magic of the Thar Desert with a unique and comfortable desert camp.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Jaisalmer, Rajasthan",
    country: "India",
  },
  {
    title: "Hilltop Villa in Mussoorie",
    description:
      "Relax in a peaceful hilltop villa offering beautiful views of the surrounding mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520984032042-162d526883e0?auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Mussoorie, Uttarakhand",
    country: "India",
  },
  {
    title: "Traditional House in Amritsar",
    description:
      "Enjoy a comfortable stay in a traditional home close to the city's famous attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Amritsar, Punjab",
    country: "India",
  },
  {
    title: "Modern Studio in Delhi",
    description:
      "A convenient modern studio located close to major attractions and business areas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "New Delhi, Delhi",
    country: "India",
  },
  {
    title: "Backwater Houseboat in Alleppey",
    description:
      "Spend a relaxing night on a traditional Kerala houseboat surrounded by peaceful backwaters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Alleppey, Kerala",
    country: "India",
  },
  {
    title: "Nature Retreat in Munnar",
    description:
      "Stay among tea plantations and misty mountains in this peaceful nature retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Munnar, Kerala",
    country: "India",
  },
  {
    title: "Luxury Stay in Agra",
    description:
      "Enjoy a comfortable luxury stay close to the iconic Taj Mahal and other attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Agra, Uttar Pradesh",
    country: "India",
  },
  {
    title: "Beach Cottage in Pondicherry",
    description:
      "Relax in a charming coastal cottage with easy access to beaches and French-style streets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Luxury Villa in Wayanad",
    description:
      "Escape into nature with this private villa surrounded by forests and green hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Wayanad, Kerala",
    country: "India",
  },
  {
    title: "Lakefront Villa in Nainital",
    description:
      "Enjoy beautiful lake views and a peaceful mountain atmosphere in this comfortable villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Nainital, Uttarakhand",
    country: "India",
  },
  {
    title: "Eco Resort in Andaman",
    description:
      "Enjoy a tropical island getaway surrounded by clear waters, beaches and natural beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Port Blair, Andaman",
    country: "India",
  },
];

module.exports = { data: sampleListings };