import { useParams } from 'react-router-dom';

const dummyProducts = {
  "Cotton Sarees": [
    {
      id: 1,
      name: "Elegant Cotton Saree",
      image: "https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg",
      price: "₹799",
      color: "Blue"
    },
    {
      id: 2,
      name: "Traditional Cotton Saree",
      image: "https://images.pexels.com/photos/2270078/pexels-photo-2270078.jpeg",
      price: "₹899",
      color: "Red"
    },

        {
      id: 3,
      name: "Traditional Cotton Saree",
      image: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg",
      price: "₹899",
      color: "Red"
    },

        {
      id: 1,
      name: "Elegant Cotton Saree",
      image: "https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg",
      price: "₹799",
      color: "Blue"
    },
    {
      id: 2,
      name: "Traditional Cotton Saree",
      image: "https://images.pexels.com/photos/2270078/pexels-photo-2270078.jpeg",
      price: "₹899",
      color: "Red"
    },

        {
      id: 3,
      name: "Traditional Cotton Saree",
      image: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg",
      price: "₹899",
      color: "Red"
    },

        {
      id: 1,
      name: "Elegant Cotton Saree",
      image: "https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg",
      price: "₹799",
      color: "Blue"
    },
    {
      id: 2,
      name: "Traditional Cotton Saree",
      image: "https://images.pexels.com/photos/2270078/pexels-photo-2270078.jpeg",
      price: "₹899",
      color: "Red"
    },

        {
      id: 3,
      name: "Traditional Cotton Saree",
      image: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg",
      price: "₹899",
      color: "Red"
    },

        {
      id: 1,
      name: "Elegant Cotton Saree",
      image: "https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg",
      price: "₹799",
      color: "Blue"
    },
    {
      id: 2,
      name: "Traditional Cotton Saree",
      image: "https://images.pexels.com/photos/2270078/pexels-photo-2270078.jpeg",
      price: "₹899",
      color: "Red"
    },

        {
      id: 3,
      name: "Traditional Cotton Saree",
      image: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg",
      price: "₹899",
      color: "Red"
    },

        {
      id: 1,
      name: "Elegant Cotton Saree",
      image: "https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg",
      price: "₹799",
      color: "Blue"
    },
    {
      id: 2,
      name: "Traditional Cotton Saree",
      image: "https://images.pexels.com/photos/2270078/pexels-photo-2270078.jpeg",
      price: "₹899",
      color: "Red"
    },

        {
      id: 3,
      name: "Traditional Cotton Saree",
      image: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg",
      price: "₹899",
      color: "Red"
    }
    
  ],
  "Silk Sarees": [
    {
      id: 1,
      name: "Royal Silk Saree",
      image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg",
      price: "₹1299",
      color: "Blue"
    },

        {
      id: 2,
      name: "New Silk Saree",
      image: "https://images.pexels.com/photos/2686117/pexels-photo-2686117.jpeg",
      price: "₹1999",
      color: "Green"
    },

        {
      id: 3,
      name: "Latest Silk Saree",
      image: "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg",
      price: "₹1599",
      color: "Red"
    },

    {
      id: 1,
      name: "Royal Silk Saree",
      image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg",
      price: "₹1299",
      color: "Blue"
    },

        {
      id: 2,
      name: "New Silk Saree",
      image: "https://images.pexels.com/photos/2686117/pexels-photo-2686117.jpeg",
      price: "₹1999",
      color: "Green"
    },

        {
      id: 3,
      name: "Latest Silk Saree",
      image: "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg",
      price: "₹1599",
      color: "Red"
    },

    {
      id: 1,
      name: "Royal Silk Saree",
      image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg",
      price: "₹1299",
      color: "Blue"
    },

        {
      id: 2,
      name: "New Silk Saree",
      image: "https://images.pexels.com/photos/2686117/pexels-photo-2686117.jpeg",
      price: "₹1999",
      color: "Green"
    },

        {
      id: 3,
      name: "Latest Silk Saree",
      image: "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg",
      price: "₹1599",
      color: "Red"
    },

    {
      id: 1,
      name: "Royal Silk Saree",
      image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg",
      price: "₹1299",
      color: "Blue"
    },

        {
      id: 2,
      name: "New Silk Saree",
      image: "https://images.pexels.com/photos/2686117/pexels-photo-2686117.jpeg",
      price: "₹1999",
      color: "Green"
    },

        {
      id: 3,
      name: "Latest Silk Saree",
      image: "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg",
      price: "₹1599",
      color: "Red"
    },

    {
      id: 1,
      name: "Royal Silk Saree",
      image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg",
      price: "₹1299",
      color: "Blue"
    },

        {
      id: 2,
      name: "New Silk Saree",
      image: "https://images.pexels.com/photos/2686117/pexels-photo-2686117.jpeg",
      price: "₹1999",
      color: "Green"
    },

        {
      id: 3,
      name: "Latest Silk Saree",
      image: "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg",
      price: "₹1599",
      color: "Red"
    },
  ],

  "Georgette Sarees": [
    {
      id: 1,
      name: "Royal Silk Saree",
      image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg",
      price: "₹1299",
      color: "Blue"
    },

        {
      id: 2,
      name: "New Silk Saree",
      image: "https://images.pexels.com/photos/2686117/pexels-photo-2686117.jpeg",
      price: "₹1999",
      color: "Green"
    },

        {
      id: 3,
      name: "Latest Silk Saree",
      image: "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg",
      price: "₹1599",
      color: "Red"
    },

    {
      id: 1,
      name: "Royal Silk Saree",
      image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg",
      price: "₹1299",
      color: "Blue"
    },

        {
      id: 2,
      name: "New Silk Saree",
      image: "https://images.pexels.com/photos/2686117/pexels-photo-2686117.jpeg",
      price: "₹1999",
      color: "Green"
    },

        {
      id: 3,
      name: "Latest Silk Saree",
      image: "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg",
      price: "₹1599",
      color: "Red"
    },
  ],

  "Chiffon Sarees": [
    {
      id: 1,
      name: "Royal Silk Saree",
      image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg",
      price: "₹1299",
      color: "Blue"
    },

        {
      id: 2,
      name: "New Silk Saree",
      image: "https://images.pexels.com/photos/2686117/pexels-photo-2686117.jpeg",
      price: "₹1999",
      color: "Green"
    },

        {
      id: 3,
      name: "Latest Silk Saree",
      image: "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg",
      price: "₹1599",
      color: "Red"
    },

    {
      id: 1,
      name: "Royal Silk Saree",
      image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg",
      price: "₹1299",
      color: "Blue"
    },

        {
      id: 2,
      name: "New Silk Saree",
      image: "https://images.pexels.com/photos/2686117/pexels-photo-2686117.jpeg",
      price: "₹1999",
      color: "Green"
    },

        {
      id: 3,
      name: "Latest Silk Saree",
      image: "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg",
      price: "₹1599",
      color: "Red"
    },
  ],

 "Crop Tops": [
     {
      id: 1,
      name: "Floral Printed Crop Top",
      image: "https://images.pexels.com/photos/2315309/pexels-photo-2315309.jpeg",
      price: "₹499",
      color: "White"
    },
    {
      id: 2,
      name: "Black Ribbed Crop Tee",
      image: "https://images.pexels.com/photos/3755931/pexels-photo-3755931.jpeg",
      price: "₹599",
      color: "Red"
    },
    {
      id: 3,
      name: "White Off-Shoulder Crop",
      image: "https://images.pexels.com/photos/2266551/pexels-photo-2266551.jpeg",
      price: "₹549",
      color: "Black"
    },
    {
      id: 4,
      name: "Tie-Dye Knotted Crop Top",
      image: "https://images.pexels.com/photos/32747286/pexels-photo-32747286.jpeg",
      price: "₹699",
      color: "Multicolor"
    },
    {
      id: 5,
      name: "Sleeveless Stretch Crop",
      image: "https://images.pexels.com/photos/6721039/pexels-photo-6721039.jpeg",
      price: "₹399",
      color: "Blue"
    },
    {
      id: 6,
      name: "Text Print Casual Crop Top",
      image: "https://images.pexels.com/photos/19330216/pexels-photo-19330216.jpeg",
      price: "₹459",
      color: "Sky Blue"
    }
 ],

  "Blouses": [
    {
      id: 1,
      name: "Embroidered Silk Blouse",
      image: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg",
      price: "₹699",
      color: "Maroon"
    },
    {
      id: 2,
      name: "Sleeveless Designer Blouse",
      image: "https://images.pexels.com/photos/1857375/pexels-photo-1857375.jpeg",
      price: "₹599",
      color: "Golden"
    },
    {
      id: 3,
      name: "Boat Neck Blouse",
      image: "https://images.pexels.com/photos/3302595/pexels-photo-3302595.jpeg",
      price: "₹649",
      color: "Black"
    },

    {
      id: 4,
      name: "Embroidered Silk Blouse",
      image: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg",
      price: "₹699",
      color: "Maroon"
    },
    {
      id: 5,
      name: "Sleeveless Designer Blouse",
      image: "https://images.pexels.com/photos/1857375/pexels-photo-1857375.jpeg",
      price: "₹599",
      color: "Golden"
    },
    {
      id: 6,
      name: "Boat Neck Blouse",
      image: "https://images.pexels.com/photos/3302595/pexels-photo-3302595.jpeg",
      price: "₹649",
      color: "Black"
    }
],
"Tunics": [
    {
      id: 1,
      name: "Colorful Floral Tunic",
      image: "https://images.pexels.com/photos/31879669/pexels-photo-31879669.jpeg",
      price: "₹799",
      color: "Turquoise & Pink"
    },
    {
      id: 2,
      name: "White Flowing Tunic Dress",
      image: "https://images.pexels.com/photos/15234473/pexels-photo-15234473.jpeg",
      price: "₹899",
      color: "White"
    },
    {
      id: 3,
      name: "Blue Ao Dai Style Tunic",
      image: "https://images.pexels.com/photos/19699557/pexels-photo-19699557.jpeg",
      price: "₹999",
      color: "Light Blue"
    },

        {
      id: 1,
      name: "Colorful Floral Tunic",
      image: "https://images.pexels.com/photos/31879669/pexels-photo-31879669.jpeg",
      price: "₹799",
      color: "Turquoise & Pink"
    },
    {
      id: 2,
      name: "White Flowing Tunic Dress",
      image: "https://images.pexels.com/photos/15234473/pexels-photo-15234473.jpeg",
      price: "₹899",
      color: "White"
    },
    {
      id: 3,
      name: "Blue Ao Dai Style Tunic",
      image: "https://images.pexels.com/photos/19699557/pexels-photo-19699557.jpeg",
      price: "₹999",
      color: "Light Blue"
    }
],

  "Maxi Dresses": [
    {
      id: 1,
      name: "Floral Maxi Dress",
      image: "https://images.pexels.com/photos/10074120/pexels-photo-10074120.jpeg",
      price: "₹1,299",
      color: "Pastel Blue"
    },
    {
      id: 2,
      name: "Boho Print Maxi",
      image: "https://images.pexels.com/photos/13408403/pexels-photo-13408403.jpeg",
      price: "₹1,499",
      color: "Multi-color"
    },
    {
      id: 3,
      name: "Solid Orange Maxi Dress",
      image: "https://images.pexels.com/photos/17291616/pexels-photo-17291616.jpeg",
      price: "₹1,199",
      color: "Terracotta"
    },
    {
      id: 4,
      name: "Elegant White Maxi",
      image: "https://images.pexels.com/photos/16005918/pexels-photo-16005918.jpeg",
      price: "₹1,399",
      color: "White"
    },
        {
      id: 3,
      name: "Solid Orange Maxi Dress",
      image: "https://images.pexels.com/photos/17291616/pexels-photo-17291616.jpeg",
      price: "₹1,199",
      color: "Terracotta"
    },
    {
      id: 4,
      name: "Elegant White Maxi",
      image: "https://images.pexels.com/photos/16005918/pexels-photo-16005918.jpeg",
      price: "₹1,399",
      color: "White"
    }
  ],

   "Mini Dresses": [
    {
      id: 1,
      name: "White Lace Mini Dress",
      image: "https://images.pexels.com/photos/18851901/pexels-photo-18851901.jpeg",
      price: "₹999",
      color: "White"
    },
    {
      id: 2,
      name: "Striped Urban Mini Dress",
      image: "https://images.pexels.com/photos/18299032/pexels-photo-18299032.jpeg",
      price: "₹899",
      color: "Black Stripes"
    },
    {
      id: 3,
      name: "Catwalk White Mini Dress",
      image: "https://images.pexels.com/photos/18650822/pexels-photo-18650822.jpeg",
      price: "₹1,099",
      color: "White"
    },
    {
      id: 4,
      name: "White Seashore Mini Dress",
      image: "https://images.pexels.com/photos/14590428/pexels-photo-14590428.jpeg",
      price: "₹1,199",
      color: "White"
    },
    {
      id: 5,
      name: "Black Field Mini Dress",
      image: "https://images.pexels.com/photos/18399228/pexels-photo-18399228.jpeg",
      price: "₹999",
      color: "Black"
    },
    {
      id: 6,
      name: "Orange Short Mini Dress",
      image: "https://images.pexels.com/photos/19266151/pexels-photo-19266151.jpeg",
      price: "₹949",
      color: "Orange"
    }
  ],
  
"Т‑Shirts": [
  { id:1, name:"Graphic White Tee", image:"https://images.pexels.com/photos/8719955/pexels-photo-8719955.jpeg", price:"₹499", color:"White" },
  { id:2, name:"Basic Grey Tee", image:"https://images.pexels.com/photos/12714040/pexels-photo-12714040.jpeg", price:"₹450", color:"Grey" },
  { id:3, name:"Blue Crew-neck Tee", image:"https://images.pexels.com/photos/2040426/pexels-photo-2040426.jpeg", price:"₹479", color:"Blue" },
  { id:4, name:"Black Graphic Tee", image:"https://images.pexels.com/photos/15834878/pexels-photo-15834878.jpeg", price:"₹529", color:"Black" },
  { id:5, name:"Oversized White Tee", image:"https://images.pexels.com/photos/8851053/pexels-photo-8851053.jpeg", price:"₹549", color:"White" },
  { id:6, name:"Casual Sport Tee", image:"https://images.pexels.com/photos/15565683/pexels-photo-15565683.jpeg", price:"₹499", color:"Black" }
]
,

"Shirts": [
  { id:1, name:"Slim Fit White Shirt", image:"https://images.pexels.com/photos/15834878/pexels-photo-15834878.jpeg", price:"₹799", color:"White" },
  { id:2, name:"Blue Checked Shirt", image:"https://images.pexels.com/photos/12714040/pexels-photo-12714040.jpeg", price:"₹859", color:"Blue" },
  { id:3, name:"Denim Blue Shirt", image:"https://images.pexels.com/photos/2040426/pexels-photo-2040426.jpeg", price:"₹899", color:"Denim" },
  { id:4, name:"Olive Green Shirt", image:"https://images.pexels.com/photos/8851053/pexels-photo-8851053.jpeg", price:"₹819", color:"Green" },
  { id:5, name:"Formal Black Shirt", image:"https://images.pexels.com/photos/5091150/pexels-photo-5091150.jpeg", price:"₹899", color:"Black" },
  { id:6, name:"Casual Pink Shirt", image:"https://images.pexels.com/photos/15565683/pexels-photo-15565683.jpeg", price:"₹799", color:"Pink" }
],

"Jackets": [
  { id:1, name:"Leather Biker Jacket", image:"https://images.pexels.com/photos/9861655/pexels-photo-9861655.jpeg", price:"₹2,499", color:"Black" },
  { id:2, name:"Denim Trucker Jacket", image:"https://images.pexels.com/photos/5091150/pexels-photo-5091150.jpeg", price:"₹1,999", color:"Blue" },
  { id:3, name:"Bomber Jacket", image:"https://images.pexels.com/photos/16031654/pexels-photo-16031654.jpeg", price:"₹2,199", color:"Green" },
  { id:4, name:"Hooded Winter Jacket", image:"https://images.pexels.com/photos/9861655/pexels-photo-9861655.jpeg", price:"₹2,799", color:"Grey" },
  { id:5, name:"Statement Blazer", image:"https://images.pexels.com/photos/9861655/pexels-photo-9861655.jpeg", price:"₹2,299", color:"Charcoal" },
  { id:6, name:"Utility Cargo Jacket", image:"https://images.pexels.com/photos/16031654/pexels-photo-16031654.jpeg", price:"₹2,149", color:"Olive" }
],

"Jeans": [
  { id:1, name:"Slim Blue Denim", image:"https://images.pexels.com/photos/30710126/pexels-photo-30710126.jpeg", price:"₹1,199", color:"Blue" },
  { id:2, name:"Black Skinny Jeans", image:"https://images.pexels.com/photos/30710126/pexels-photo-30710126.jpeg", price:"₹1,249", color:"Black" },
  { id:3, name:"Ripped Grey Jeans", image:"https://images.pexels.com/photos/30710126/pexels-photo-30710126.jpeg", price:"₹1,299", color:"Grey" },
  { id:4, name:"Denim Bootcut Jeans", image:"https://images.pexels.com/photos/30710126/pexels-photo-30710126.jpeg", price:"₹1,349", color:"Blue" },
  { id:5, name:"Classic Relaxed Jeans", image:"https://images.pexels.com/photos/30710126/pexels-photo-30710126.jpeg", price:"₹1,199", color:"Indigo" },
  { id:6, name:"Stretch Skinny Jeans", image:"https://images.pexels.com/photos/30710126/pexels-photo-30710126.jpeg", price:"₹1,299", color:"Dark Blue" }
],

"Trousers": [
  { id:1, name:"Formal Slim Trousers", image:"https://images.pexels.com/photos/5091150/pexels-photo-5091150.jpeg", price:"₹899", color:"Black" },
  { id:2, name:"Chino Khaki Trousers", image:"https://images.pexels.com/photos/2040426/pexels-photo-2040426.jpeg", price:"₹849", color:"Khaki" },
  { id:3, name:"Grey Pleated Trousers", image:"https://images.pexels.com/photos/5091150/pexels-photo-5091150.jpeg", price:"₹899", color:"Grey" },
  { id:4, name:"Navy Work Trousers", image:"https://images.pexels.com/photos/8870/pexels-photo-8870.jpeg", price:"₹899", color:"Navy" },
  { id:5, name:"Black Wide-Leg Trousers", image:"https://images.pexels.com/photos/5091150/pexels-photo-5091150.jpeg", price:"₹949", color:"Black" },
  { id:6, name:"Beige Tapered Trousers", image:"https://images.pexels.com/photos/2040426/pexels-photo-2040426.jpeg", price:"₹899", color:"Beige" }
],

"Track Pants": [
  { id:1, name:"Black Jogger Pants", image:"https://images.pexels.com/photos/15565683/pexels-photo-15565683.jpeg", price:"₹699", color:"Black" },
  { id:2, name:"Grey Sweatpants", image:"https://images.pexels.com/photos/2040426/pexels-photo-2040426.jpeg", price:"₹649", color:"Grey" },
  { id:3, name:"Blue Gym Track Pants", image:"https://images.pexels.com/photos/30710126/pexels-photo-30710126.jpeg", price:"₹699", color:"Blue" },
  { id:4, name:"Olive Cargo Track Pants", image:"https://images.pexels.com/photos/8851053/pexels-photo-8851053.jpeg", price:"₹749", color:"Olive" },
  { id:5, name:"Navy Slim Track Pants", image:"https://images.pexels.com/photos/9861655/pexels-photo-9861655.jpeg", price:"₹699", color:"Navy" },
  { id:6, name:"Charcoal Athleisure Pants", image:"https://images.pexels.com/photos/16031654/pexels-photo-16031654.jpeg", price:"₹749", color:"Charcoal" }
]
,
"Kurta Pyjama": [
  { id:1, name:"White Cotton Kurta", image:"https://images.pexels.com/photos/15565683/pexels-photo-15565683.jpeg", price:"₹1,199", color:"White" },
  { id:2, name:"Beige Embroidered Kurta", image:"https://images.pexels.com/photos/2040426/pexels-photo-2040426.jpeg", price:"₹1,299", color:"Beige" },
  { id:3, name:"Pastel Green Kurta", image:"https://images.pexels.com/photos/5091150/pexels-photo-5091150.jpeg", price:"₹1,249", color:"Green" },
  { id:4, name:"Blue Traditional Kurta", image:"https://images.pexels.com/photos/9861655/pexels-photo-9861655.jpeg", price:"₹1,299", color:"Blue" },
  { id:5, name:"Peach Festive Kurta", image:"https://images.pexels.com/photos/16031654/pexels-photo-16031654.jpeg", price:"₹1,349", color:"Peach" },
  { id:6, name:"Grey Printed Kurta", image:"https://images.pexels.com/photos/8851053/pexels-photo-8851053.jpeg", price:"₹1,199", color:"Grey" }
]
,

"Sherwani": [
  { id:1, name:"Gold Embroidered Sherwani", image:"https://images.pexels.com/photos/9861655/pexels-photo-9861655.jpeg", price:"₹4,499", color:"Gold" },
  { id:2, name:"Maroon Wedding Sherwani", image:"https://images.pexels.com/photos/5091150/pexels-photo-5091150.jpeg", price:"₹4,799", color:"Maroon" },
  { id:3, name:"Cream Sherwani with Stole", image:"https://images.pexels.com/photos/16031654/pexels-photo-16031654.jpeg", price:"₹4,599", color:"Cream" },
  { id:4, name:"Navy Achkan Sherwani", image:"https://images.pexels.com/photos/2040426/pexels-photo-2040426.jpeg", price:"₹4,699", color:"Navy" },
  { id:5, name:"Black Regal Sherwani", image:"https://images.pexels.com/photos/8851053/pexels-photo-8851053.jpeg", price:"₹4,599", color:"Black" },
  { id:6, name:"Olive Festive Sherwani", image:"https://images.pexels.com/photos/15565683/pexels-photo-15565683.jpeg", price:"₹4,499", color:"Olive" }
]
,

"Nehru Jackets": [
  { id:1, name:"Beige Formal Nehru", image:"https://images.pexels.com/photos/2040426/pexels-photo-2040426.jpeg", price:"₹1,999", color:"Beige" },
  { id:2, name:"Blue Silk Nehru Jacket", image:"https://images.pexels.com/photos/9861655/pexels-photo-9861655.jpeg", price:"₹2,199", color:"Blue" },
  { id:3, name:"Grey Linen Nehru", image:"https://images.pexels.com/photos/5091150/pexels-photo-5091150.jpeg", price:"₹2,149", color:"Grey" },
  { id:4, name:"Maroon Party Nehru", image:"https://images.pexels.com/photos/16031654/pexels-photo-16031654.jpeg", price:"₹2,299", color:"Maroon" },
  { id:5, name:"Black Formal Nehru", image:"https://images.pexels.com/photos/8851053/pexels-photo-8851053.jpeg", price:"₹2,199", color:"Black" },
  { id:6, name:"Olive Casual Nehru", image:"https://images.pexels.com/photos/15565683/pexels-photo-15565683.jpeg", price:"₹2,249", color:"Olive" }
]
,

  "T‑Shirts": [
    { id: 1, name: "Graphic White Tee", image: "https://images.pexels.com/photos/8719955.jpg", price: "₹499", color: "White" },
    { id: 2, name: "Basic Grey Tee", image: "https://images.pexels.com/photos/12714040.jpg", price: "₹450", color: "Grey" },
    { id: 3, name: "Black Crew‑neck Tee", image: "https://images.pexels.com/photos/2040426.jpg", price: "₹479", color: "Black" }
  ],
  "Pants": [
    { id: 1, name: "Slim-fit Chinos", image: "https://images.pexels.com/photos/217937/pexels-photo-217937.jpeg", price: "₹1,099", color: "Khaki" },
    { id: 2, name: "Casual Denim Jeans", image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg", price: "₹1,299", color: "Blue" }
  ],
  "Dresses": [
    { id: 1, name: "Summer A‑line Dress", image: "https://images.pexels.com/photos/462030/pexels-photo-462030.jpeg", price: "₹1,199", color: "Yellow" },
    { id: 2, name: "Floral Midi Dress", image: "https://images.pexels.com/photos/12105697/pexels-photo-12105697.jpeg", price: "₹1,299", color: "Multi-color" }
  ],
  "Frocks": [
    { id: 1, name: "Girls Party Frock", image: "https://images.pexels.com/photos/1607021/pexels-photo-1607021.jpeg", price: "₹699", color: "Pink" },
    { id: 2, name: "Smocked Casual Frock", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg", price: "₹649", color: "Mint Green" }
  ],
  "Leggings": [
    { id: 1, name: "Black Yoga Leggings", image: "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg", price: "₹599", color: "Black" },
    { id: 2, name: "Printed Stretch Leggings", image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", price: "₹649", color: "Floral Print" }
  ],

  "Wall Stickers": [
    { id: 1, name: "Bird & Branch Stickers", image: "https://images.pexels.com/photos/21702014", price: "₹299", color: "Black" },
    { id: 2, name: "Minimalist Leaf Stickers", image: "https://images.pexels.com/photos/5490197", price: "₹349", color: "Green" },
    { id: 3, name: "Abstract Wall Decals", image: "https://images.pexels.com/photos/10597862", price: "₹279", color: "Multi" },
    { id: 4, name: "Scandinavian Art Stickers", image: "https://images.pexels.com/photos/10823878", price: "₹399", color: "Beige" },
    { id: 5, name: "Happy Quote Stickers", image: "https://images.pexels.com/photos/21702014", price: "₹319", color: "Black" },
    { id: 6, name: "Boho Pattern Stickers", image: "https://images.pexels.com/photos/5490197", price: "₹329", color: "Brown" }
  ],
  "Clocks": [
    { id: 1, name: "Vintage Wall Clock", image: "https://images.pexels.com/photos/old-clock", price: "₹899", color: "Bronze" },
    { id: 2, name: "Antique Pocket Clock", image: "https://images.pexels.com/photos/old-clock", price: "₹799", color: "Silver" },
    { id: 3, name: "Minimalist Alarm Clock", image: "https://images.pexels.com/photos/old-clock", price: "₹699", color: "White" },
    { id: 4, name: "Roman Numeral Clock", image: "https://images.pexels.com/photos/old-clock", price: "₹849", color: "Black" },
    { id: 5, name: "Wooden Mantel Clock", image: "https://images.pexels.com/photos/old-clock", price: "₹949", color: "Brown" },
    { id: 6, name: "Retro Analog Clock", image: "https://images.pexels.com/photos/old-clock", price: "₹759", color: "Cream" }
  ],
  "Lamps": [
    { id: 1, name: "Scandinavian Table Lamp", image: "https://images.pexels.com/photos/10823878", price: "₹1,199", color: "White" },
    { id: 2, name: "Boho Floor Lamp", image: "https://images.pexels.com/photos/10823878", price: "₹1,499", color: "Beige" },
    { id: 3, name: "Modern Desk Lamp", image: "https://images.pexels.com/photos/10823878", price: "₹1,099", color: "Black" },
    { id: 4, name: "Industrial Hanging Lamp", image: "https://images.pexels.com/photos/10823878", price: "₹1,299", color: "Metal" },
    { id: 5, name: "Minimalist Wall Lamp", image: "https://images.pexels.com/photos/10823878", price: "₹1,249", color: "Grey" },
    { id: 6, name: "LED Touch Lamp", image: "https://images.pexels.com/photos/10823878", price: "₹1,349", color: "White" }
  ],
  "Cookware": [
    { id: 1, name: "Non‑stick Pan Set", image: "https://images.pexels.com/search/cookware", price: "₹2,499", color: "Grey" },
    { id: 2, name: "Stainless Steel Kadai", image: "https://images.pexels.com/search/cookware", price: "₹1,899", color: "Steel" },
    { id: 3, name: "Ceramic Cookware Set", image: "https://images.pexels.com/search/cookware", price: "₹2,999", color: "White" },
    { id: 4, name: "Pressure Cooker", image: "https://images.pexels.com/search/cookware", price: "₹1,599", color: "Silver" },
    { id: 5, name: "Saucepan with Lid", image: "https://images.pexels.com/search/cookware", price: "₹1,299", color: "Black" },
    { id: 6, name: "Cast Iron Skillet", image: "https://images.pexels.com/search/cookware", price: "₹2,199", color: "Black" }
  ],
  "Storage": [
    { id: 1, name: "Acrylic Container Set", image: "https://images.pexels.com/search/storage", price: "₹799", color: "Clear" },
    { id: 2, name: "Stackable Pantry Jars", image: "https://images.pexels.com/search/storage", price: "₹899", color: "Transparent" },
    { id: 3, name: "Fabric Storage Bin", image: "https://images.pexels.com/search/storage", price: "₹699", color: "Blue" },
    { id: 4, name: "Closet Organizer Box", image: "https://images.pexels.com/search/storage", price: "₹999", color: "Grey" },
    { id: 5, name: "Plastic Drawer Unit", image: "https://images.pexels.com/search/storage", price: "₹1,199", color: "White" },
    { id: 6, name: "Wooden Crate Set", image: "https://images.pexels.com/search/storage", price: "₹1,499", color: "Brown" }
  ],
  "Dinner Sets": [
    { id: 1, name: "Porcelain Dinner Set", image: "https://images.pexels.com/search/dinner%20set", price: "₹1,999", color: "White" },
    { id: 2, name: "Floral Ceramic Set", image: "https://images.pexels.com/search/dinner%20set", price: "₹2,299", color: "Floral Print" },
    { id: 3, name: "Bone China Set", image: "https://images.pexels.com/search/dinner%20set", price: "₹2,499", color: "Ivory" },
    { id: 4, name: "Stoneware Gadget Set", image: "https://images.pexels.com/search/dinner%20set", price: "₹2,199", color: "Grey" },
    { id: 5, name: "Melamine Outdoor Set", image: "https://images.pexels.com/search/dinner%20set", price: "₹1,699", color: "Blue" },
    { id: 6, name: "Glass Set – 16 pcs", image: "https://images.pexels.com/search/dinner%20set", price: "₹1,499", color: "Clear" }
  ],
  "Bedsheets": [
    { id: 1, name: "Queen Printed Bedsheet", image: "https://images.pexels.com/search/bedsheet", price: "₹1,299", color: "Pink" },
    { id: 2, name: "Microfiber Bedsheet", image: "https://images.pexels.com/search/bedsheet", price: "₹1,099", color: "Blue" },
    { id: 3, name: "Floral Bedsheet Set", image: "https://images.pexels.com/search/bedsheet", price: "₹1,399", color: "Multi" },
    { id: 4, name: "Solid King Bedsheet", image: "https://images.pexels.com/search/bedsheet", price: "₹1,499", color: "Grey" },
    { id: 5, name: "Cotton Bedsheet", image: "https://images.pexels.com/search/bedsheet", price: "₹1,199", color: "White" },
    { id: 6, name: "Stripe Bedsheet Set", image: "https://images.pexels.com/search/bedsheet", price: "₹1,299", color: "Striped" }
  ],
  "Curtains": [
    { id: 1, name: "Blackout Curtain", image: "https://images.pexels.com/search/curtain", price: "₹1,599", color: "Beige" },
    { id: 2, name: "Sheer White Curtain", image: "https://images.pexels.com/search/curtain", price: "₹1,299", color: "White" },
    { id: 3, name: "Printed Curtain Panel", image: "https://images.pexels.com/search/curtain", price: "₹1,699", color: "Floral Print" },
    { id: 4, name: "Tab-Top Curtain", image: "https://images.pexels.com/search/curtain", price: "₹1,449", color: "Grey" },
    { id: 5, name: "Grommet Curtain", image: "https://images.pexels.com/search/curtain", price: "₹1,549", color: "Blue" },
    { id: 6, name: "Embroidered Curtain", image: "https://images.pexels.com/search/curtain", price: "₹1,799", color: "Cream" }
  ],
  "Pillows": [
    { id: 1, name: "Floral Cushion Pillow", image: "https://images.pexels.com/search/pillow", price: "₹499", color: "Floral" },
    { id: 2, name: "Velvet Throw Pillow", image: "https://images.pexels.com/search/pillow", price: "₹599", color: "Teal" },
    { id: 3, name: "Lumbar Support Pillow", image: "https://images.pexels.com/search/pillow", price: "₹549", color: "Grey" },
    { id: 4, name: "Emoji Cushion Pillow", image: "https://images.pexels.com/search/pillow", price: "₹459", color: "Yellow" },
    { id: 5, name: "Faux Fur Pillow", image: "https://images.pexels.com/search/pillow", price: "₹649", color: "White" },
    { id: 6, name: "Boho Print Pillow", image: "https://images.pexels.com/search/pillow", price: "₹699", color: "Brown" }
  ],

  "Lipsticks": [
    { id: 1, name: "Matte Red Lipstick", image: "https://images.pexels.com/photos/1625037/pexels-photo-1625037.jpeg", price: "₹699", color: "Red" },
    { id: 2, name: "Nude Liquid Lipstick", image: "https://images.pexels.com/photos/9273315/pexels-photo-9273315.jpeg", price: "₹649", color: "Nude" },
    { id: 3, name: "Pink Gloss Lipstick", image: "https://images.pexels.com/photos/7749399/pexels-photo-7749399.jpeg", price: "₹599", color: "Pink" },
    { id: 4, name: "Coral Satin Lipstick", image: "https://images.pexels.com/photos/10011265/pexels-photo-10011265.jpeg", price: "₹749", color: "Coral" },
    { id: 5, name: "Plum Velvet Lipstick", image: "https://images.pexels.com/photos/9687544/pexels-photo-9687544.jpeg", price: "₹799", color: "Plum" },
    { id: 6, name: "Bright Orange Lipstick", image: "https://images.pexels.com/photos/9805674/pexels-photo-9805674.jpeg", price: "₹679", color: "Orange" }
  ],
  "Kajal": [
    { id: 1, name: "Black Gel Kajal", image: "https://images.pexels.com/photos/572892/pexels-photo-572892.jpeg", price: "₹299", color: "Black" },
    { id: 2, name: "Waterproof Kajal Pencil", image: "https://images.pexels.com/photos/8404066/pexels-photo-8404066.jpeg", price: "₹349", color: "Deep Black" },
    { id: 3, name: "Smokey Kajal Crayon", image: "https://images.pexels.com/photos/4870657/pexels-photo-4870657.jpeg", price: "₹319", color: "Grey Black" },
    { id: 4, name: "Long-lasting Kajal Pen", image: "https://images.pexels.com/photos/694066/pexels-photo-694066.jpeg", price: "₹329", color: "Onyx" },
    { id: 5, name: "Classic Kajal Stick", image: "https://images.pexels.com/photos/67642/pexels-photo-67642.jpeg", price: "₹289", color: "Black" },
    { id: 6, name: "Bright White Kajal", image: "https://images.pexels.com/photos/4587789/pexels-photo-4587789.jpeg", price: "₹299", color: "White" }
  ],
  "Foundations": [
    { id: 1, name: "Liquid Foundation Bottle", image: "https://images.pexels.com/photos/5427657/pexels-photo-5427657.jpeg", price: "₹1,299", color: "Beige" },
    { id: 2, name: "Cushion Compact Foundation", image: "https://images.pexels.com/photos/5441018/pexels-photo-5441018.jpeg", price: "₹1,099", color: "Light" },
    { id: 3, name: "Matte Stick Foundation", image: "https://images.pexels.com/photos/6380921/pexels-photo-6380921.jpeg", price: "₹1,199", color: "Tan" },
    { id: 4, name: "Dewy Skin Foundation", image: "https://images.pexels.com/photos/4557804/pexels-photo-4557804.jpeg", price: "₹1,249", color: "Sand" },
    { id: 5, name: "SPF Foundation", image: "https://images.pexels.com/photos/6056561/pexels-photo-6056561.jpeg", price: "₹1,349", color: "Olive" },
    { id: 6, name: "Full Coverage Foundation", image: "https://images.pexels.com/photos/6618080/pexels-photo-6618080.jpeg", price: "₹1,399", color: "Warm Beige" }
  ],
  "Supplements": [
    { id: 1, name: "Vitamin C Tablets", image: "https://images.pexels.com/photos/4050224/pexels-photo-4050224.jpeg", price: "₹899", color: "Orange" },
    { id: 2, name: "Omega‑3 Capsules", image: "https://images.pexels.com/photos/4050226/pexels-photo-4050226.jpeg", price: "₹1,099", color: "Clear Gel" },
    { id: 3, name: "Multivitamin Gummies", image: "https://images.pexels.com/photos/4668771/pexels-photo-4668771.jpeg", price: "₹799", color: "Mixed" },
    { id: 4, name: "Protein Powder Jar", image: "https://images.pexels.com/photos/4498513/pexels-photo-4498513.jpeg", price: "₹1,499", color: "Chocolate" },
    { id: 5, name: "Iron Syrup Bottle", image: "https://images.pexels.com/photos/6914779/pexels-photo-6914779.jpeg", price: "₹649", color: "Red Berry" },
    { id: 6, name: "Calcium Capsules", image: "https://images.pexels.com/photos/4050228/pexels-photo-4050228.jpeg", price: "₹749", color: "White" }
  ],
  "Fitness Equipment": [
    { id: 1, name: "Adjustable Dumbbell", image: "https://images.pexels.com/photos/4498514/pexels-photo-4498514.jpeg", price: "₹2,499", color: "Black" },
    { id: 2, name: "Yoga Mat Roll", image: "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg", price: "₹999", color: "Purple" },
    { id: 3, name: "Resistance Bands", image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg", price: "₹629", color: "Multicolor" },
    { id: 4, name: "Kettlebell Weight", image: "https://images.pexels.com/photos/4498601/pexels-photo-4498601.jpeg", price: "₹1,799", color: "Grey" },
    { id: 5, name: "Skipping Rope", image: "https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg", price: "₹449", color: "Red" },
    { id: 6, name: "Hand Grip Strengthener", image: "https://images.pexels.com/photos/532963/pexels-photo-532963.jpeg", price: "₹399", color: "Black" }
  ],


  "Gold Plated": [
    { id: 1, name: "Elegant Gold-Plated Chain", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹1,999", color: "Gold" },
    { id: 2, name: "Floral Gold-Plated Necklace", image: "https://images.pexels.com/photos/8706570/pexels-photo-8706570.jpeg", price: "₹2,499", color: "Gold" },
    { id: 3, name: "Heart Pendant Gold-Plated", image: "https://images.pexels.com/photos/unknown.jpeg", price: "₹1,899", color: "Gold" },
    { id: 4, name: "Delicate Gold Plated Necklace", image: "https://images.pexels.com/photos/?.jpeg", price: "₹1,799", color: "Gold" },
    { id: 5, name: "Golden Layered Necklace", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹2,299", color: "Gold" },
    { id: 6, name: "Gold Chain with Pendant", image: "https://images.pexels.com/photos/8706570/pexels-photo-8706570.jpeg", price: "₹1,699", color: "Gold" }
  ],
  "Oxidised": [
    { id: 1, name: "Oxidised Style Necklace", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹799", color: "Silver" },
    { id: 2, name: "Oxidised Pendant", image: "https://images.pexels.com/photos/8706570/pexels-photo-8706570.jpeg", price: "₹849", color: "Silver" },
    { id: 3, name: "Oxidised Layered Necklace", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹899", color: "Silver" },
    { id: 4, name: "Oxidised Collar Necklace", image: "https://images.pexels.com/photos/8706570/pexels-photo-8706570.jpeg", price: "₹799", color: "Silver" },
    { id: 5, name: "Oxidised Drop Pendant", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹749", color: "Silver" },
    { id: 6, name: "Long Oxidised Necklace", image: "https://images.pexels.com/photos/8706570/pexels-photo-8706570.jpeg", price: "₹699", color: "Silver" }
  ],
  "Temple Jewellery": [
    { id: 1, name: "Temple Pendant Set", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹2,599", color: "Gold" },
    { id: 2, name: "Antique Temple Necklace", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹2,999", color: "Gold+Green" },
    { id: 3, name: "Temple Bridal Set", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹3,199", color: "Gold+Red" },
    { id: 4, name: "Temple Long Necklace", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹2,799", color: "Gold" },
    { id: 5, name: "Temple Pendant Chain", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹1,999", color: "Gold" },
    { id: 6, name: "Temple Statement Necklace", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹3,499", color: "Gold" }
  ],
  "Studs": [
    { id: 1, name: "Classic Gold Studs", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹999", color: "Gold" },
    { id: 2, name: "CZ Stone Studs", image: "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg", price: "₹1,099", color: "Silver" },
    { id: 3, name: "Pearl Stud Earrings", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹899", color: "White" },
    { id: 4, name: "Flower Design Studs", image: "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg", price: "₹949", color: "Gold" },
    { id: 5, name: "Square CZ Studs", image: "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg", price: "₹1,199", color: "Silver" },
    { id: 6, name: "Heart Shape Studs", image: "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg", price: "₹1,099", color: "Rose Gold" }
  ],
  "Jhumkas": [
    { id: 1, name: "Gold Jhumka Earrings", image: "https://images.pexels.com/photos/29415954/pexels-photo-29415954.jpeg", price: "₹1,499", color: "Gold" },
    { id: 2, name: "Temple Jhumkas", image: "https://images.pexels.com/photos/29415954/pexels-photo-29415954.jpeg", price: "₹1,699", color: "Gold+Red" },
    { id: 3, name: "Antique Jhumkas", image: "https://images.pexels.com/photos/29415954/pexels-photo-29415954.jpeg", price: "₹1,599", color: "Silver+Black" },
    { id: 4, name: "Oxidised Jhumkas", image: "https://images.pexels.com/photos/27836559/pexels-photo-27836559.jpeg", price: "₹1,299", color: "Silver" },
    { id: 5, name: "Stone Studded Jhumkas", image: "https://images.pexels.com/photos/29415954/pexels-photo-29415954.jpeg", price: "₹1,899", color: "Multi" },
    { id: 6, name: "Pearl Jhumkas", image: "https://images.pexels.com/photos/29415954/pexels-photo-29415954.jpeg", price: "₹1,799", color: "Gold+Pearl" }
  ],
  "Hoops": [
    { id: 1, name: "Gold Hoop Earrings", image: "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg", price: "₹1,099", color: "Gold" },
    { id: 2, name: "Thin Silver Hoops", image: "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg", price: "₹999", color: "Silver" },
    { id: 3, name: "Diamond Hoop Earrings", image: "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg", price: "₹1,299", color: "Silver" },
    { id: 4, name: "Enamel Black Hoops", image: "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg", price: "₹1,149", color: "Black & Gold" },
    { id: 5, name: "Charm Hoops", image: "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg", price: "₹1,199", color: "Gold" },
    { id: 6, name: "Large Statement Hoops", image: "https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg", price: "₹1,399", color: "Rose Gold" }
  ],

  "Handbags": [
    { id:1, name:"Black Leather Handbag", image:"https://images.pexels.com/photos/8386986/pexels-photo-8386986.jpeg", price:"₹1,299", color:"Black" },
    { id:2, name:"White Chain-Strap Bag", image:"https://images.pexels.com/photos/8282902/pexels-photo-8282902.jpeg", price:"₹1,399", color:"White" },
    { id:3, name:"Brown Satchel Bag", image:"https://images.pexels.com/photos/6310998/pexels-photo-6310998.jpeg", price:"₹1,199", color:"Brown" },
    { id:4, name:"Minimalist Tote", image:"https://images.pexels.com/photos/7752195/pexels-photo-7752195.jpeg", price:"₹1,499", color:"Beige" },
    { id:5, name:"Floral Print Handbag", image:"https://images.pexels.com/photos/6195782/pexels-photo-6195782.jpeg", price:"₹1,349", color:"Multi-color" },
    { id:6, name:"Black Quilted Clutch Bag", image:"https://images.pexels.com/photos/892633/pexels-photo-892633.jpeg", price:"₹1,099", color:"Black" }
  ],
  "Backpacks": [
    { id:1, name:"Casual Black Backpack", image:"https://images.pexels.com/photos/5589533/pexels-photo-5589533.jpeg", price:"₹899", color:"Black" },
    { id:2, name:"Blue Hiking Backpack", image:"https://images.pexels.com/photos/4039469/pexels-photo-4039469.jpeg", price:"₹1,199", color:"Blue" },
    { id:3, name:"Leather Daypack", image:"https://images.pexels.com/photos/8446341/pexels-photo-8446341.jpeg", price:"₹1,499", color:"Brown" },
    { id:4, name:"Minimalist Canvas Backpack", image:"https://images.pexels.com/photos/305974/pexels-photo-305974.jpeg", price:"₹1,099", color:"Grey" },
    { id:5, name:"Red Urban Backpack", image:"https://images.pexels.com/photos/4498684/pexels-photo-4498684.jpeg", price:"₹1,249", color:"Red" },
    { id:6, name:"Sporty Travel Backpack", image:"https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg", price:"₹1,349", color:"Black/Grey" }
  ],
  "Clutches": [
    { id:1, name:"Beige Clutch Purse", image:"https://images.pexels.com/photos/1029093/pexels-photo-1029093.jpeg", price:"₹799", color:"Beige" },
    { id:2, name:"Black Evening Clutch", image:"https://images.pexels.com/photos/8189927/pexels-photo-8189927.jpeg", price:"₹899", color:"Black" },
    { id:3, name:"Floral Clutch", image:"https://images.pexels.com/photos/4787386/pexels-photo-4787386.jpeg", price:"₹849", color:"Multi-color" },
    { id:4, name:"White Rhinestone Clutch", image:"https://images.pexels.com/photos/55838/pexels-photo-55838.jpeg", price:"₹999", color:"White" },
    { id:5, name:"Metallic Gold Clutch", image:"https://images.pexels.com/photos/414914/pexels-photo-414914.jpeg", price:"₹1,099", color:"Gold" },
    { id:6, name:"Minimal Leather Clutch", image:"https://images.pexels.com/photos/692171/pexels-photo-692171.jpeg", price:"₹949", color:"Brown" }
  ],
  "Flats": [
    { id:1, name:"Black Ballerina Flats", image:"https://images.pexels.com/photos/19090/pexels-photo.jpg", price:"₹699", color:"Black" },
    { id:2, name:"Beige Loafers", image:"https://images.pexels.com/photos/1829279/pexels-photo-1829279.jpeg", price:"₹749", color:"Beige" },
    { id:3, name:"Red Pointed Flats", image:"https://images.pexels.com/photos/1026017/pexels-photo-1026017.jpeg", price:"₹799", color:"Red" },
    { id:4, name:"Blue Slip-on Flats", image:"https://images.pexels.com/photos/292786/pexels-photo-292786.jpeg", price:"₹729", color:"Blue" },
    { id:5, name:"Floral Print Flats", image:"https://images.pexels.com/photos/3313462/pexels-photo-3313462.jpeg", price:"₹779", color:"Multi-color" },
    { id:6, name:"Neutral Tassel Flats", image:"https://images.pexels.com/photos/15740685/pexels-photo-15740685.jpeg", price:"₹749", color:"Tan" }
  ],
  "Heels": [
    { id:1, name:"Black Stiletto Heels", image:"https://images.pexels.com/photos/19090/pexels-photo-19090.jpeg", price:"₹1,199", color:"Black" },
    { id:2, name:"Red Block Heels", image:"https://images.pexels.com/photos/145734/pexels-photo-145734.jpeg", price:"₹1,249", color:"Red" },
    { id:3, name:"Beige Pump Heels", image:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", price:"₹1,299", color:"Beige" },
    { id:4, name:"Silver Evening Heels", image:"https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg", price:"₹1,399", color:"Silver" },
    { id:5, name:"Floral Heels", image:"https://images.pexels.com/photos/361752/pexels-photo-361752.jpeg", price:"₹1,349", color:"Multi-color" },
    { id:6, name:"Strappy Nude Heels", image:"https://images.pexels.com/photos/15740684/pexels-photo-15740684.jpeg", price:"₹1,299", color:"Nude" }
  ],
  "Sandals": [
    { id:1, name:"Black Slide Sandals", image:"https://images.pexels.com/photos/373716/pexels-photo-373716.jpeg", price:"₹499", color:"Black" },
    { id:2, name:"Beige Strappy Sandals", image:"https://images.pexels.com/photos/269630/pexels-photo-269630.jpeg", price:"₹549", color:"Beige" },
    { id:3, name:"Floral Print Sandals", image:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", price:"₹579", color:"Multi-color" },
    { id:4, name:"Brown Leather Sandals", image:"https://images.pexels.com/photos/984518/pexels-photo-984518.jpeg", price:"₹629", color:"Brown" },
    { id:5, name:"White Comfort Sandals", image:"https://images.pexels.com/photos/2983466/pexels-photo-2983466.jpeg", price:"₹599", color:"White" },
    { id:6, name:"Pink Beach Sandals", image:"https://images.pexels.com/photos/3671973/pexels-photo-3671973.jpeg", price:"₹579", color:"Pink" }
  ],

  "Smartphones": [
    { id:1, name:"Modern Android Phone", image:"https://images.pexels.com/photos/359757/pexels-photo-359757.jpeg", price:"₹7,999", color:"Black" },
    { id:2, name:"Sleek iPhone Mockup", image:"https://images.pexels.com/photos/854958/pexels-photo-854958.jpeg", price:"₹49,999", color:"White" },
    { id:3, name:"Hand-Held Smartphone", image:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg", price:"₹9,499", color:"Blue" },
    { id:4, name:"Minimal Flat Lay Phone", image:"https://images.pexels.com/photos/267606/pexels-photo-267606.jpeg", price:"₹8,299", color:"Silver" },
    { id:5, name:"Outdoor Smartphone Shot", image:"https://images.pexels.com/photos/8282947/pexels-photo-8282947.jpeg", price:"₹7,599", color:"Grey" },
    { id:6, name:"Person Using Phone", image:"https://images.pexels.com/photos/359757/pexels-photo-359757.jpeg", price:"₹7,799", color:"Black" }
  ],
  "Feature Phones": [
    { id:1, name:"Classic Nokia 3310", image:"https://images.pexels.com/photos/19335258/pexels-photo-19335258.jpeg", price:"₹1,599", color:"Dark Blue" },
    { id:2, name:"Retro Keypad Phone", image:"https://images.pexels.com/photos/16388464/pexels-photo-16388464.jpeg", price:"₹1,299", color:"Black" },
    { id:3, name:"Vintage Flip Phone", image:"https://images.pexels.com/photos/29415954/pexels-photo-29415954.jpeg", price:"₹1,799", color:"Grey" },
    { id:4, name:"Old-School Handset", image:"https://images.pexels.com/photos/19335258/pexels-photo-19335258.jpeg", price:"₹1,699", color:"Blue" },
    { id:5, name:"Brick Phone Throwback", image:"https://images.pexels.com/photos/16388464/pexels-photo-16388464.jpeg", price:"₹1,899", color:"Black" },
    { id:6, name:"Classic Keypad Model", image:"https://images.pexels.com/photos/16388464/pexels-photo-16388464.jpeg", price:"₹1,499", color:"Black" }
  ],
  "Headphones": [
    { id:1, name:"Studio Over‑Ear Headphones", image:"https://images.pexels.com/photos/159853/headphones-on-a-monitor-159853.jpeg", price:"₹1,299", color:"Black" },
    { id:2, name:"Wireless On‑Ear Headphones", image:"https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg", price:"₹1,499", color:"White" },
    { id:3, name:"Gaming Headset", image:"https://images.pexels.com/photos/159855/headphones-on-a-desk-159855.jpeg", price:"₹1,899", color:"Gray" },
    { id:4, name:"Noise‑Canceling Headphones", image:"https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg", price:"₹2,999", color:"Black" },
    { id:5, name:"Budget In‑Ear Headphones", image:"https://images.pexels.com/photos/159850/headphones-on-a-rock-159850.jpeg", price:"₹899", color:"Black" },
    { id:6, name:"Retro Wired Headphones", image:"https://images.pexels.com/photos/159854/headphones-on-keyboard-159854.jpeg", price:"₹1,099", color:"Silver" }
  ],
  "Chargers": [
    { id:1, name:"USB‑C Wall Charger", image:"https://images.pexels.com/photos/3945651/pexels-photo-3945651.jpeg", price:"₹499", color:"White" },
    { id:2, name:"Wireless Charging Pad", image:"https://images.pexels.com/photos/5077048/pexels-photo-5077048.jpeg", price:"₹999", color:"Black" },
    { id:3, name:"Fast Charger Adapter", image:"https://images.pexels.com/photos/3945652/pexels-photo-3945652.jpeg", price:"₹699", color:"White" },
    { id:4, name:"Power Bank Charger", image:"https://images.pexels.com/photos/3952043/pexels-photo-3952043.jpeg", price:"₹1,299", color:"Silver" },
    { id:5, name:"Car Charger Dual USB", image:"https://images.pexels.com/photos/3945660/pexels-photo-3945660.jpeg", price:"₹599", color:"Black" },
    { id:6, name:"Multi‑Port USB Charger", image:"https://images.pexels.com/photos/3945654/pexels-photo-3945654.jpeg", price:"₹1,099", color:"Grey" }
  ],
  "Cables": [
    { id:1, name:"USB‑C to USB‑C Cable", image:"https://images.pexels.com/photos/2054224/pexels-photo-2054224.jpeg", price:"₹299", color:"Black" },
    { id:2, name:"Lightning to USB‑A Cable", image:"https://images.pexels.com/photos/2054225/pexels-photo-2054225.jpeg", price:"₹399", color:"White" },
    { id:3, name:"Braided Micro‑USB Cable", image:"https://images.pexels.com/photos/2054223/pexels-photo-2054223.jpeg", price:"₹349", color:"Grey" },
    { id:4, name:"Fast‑Charge USB Cable", image:"https://images.pexels.com/photos/3944672/pexels-photo-3944672.jpeg", price:"₹499", color:"Black" },
    { id:5, name:"3‑in‑1 Charging Cable", image:"https://images.pexels.com/photos/3944674/pexels-photo-3944674.jpeg", price:"₹599", color:"Multi‑color" },
    { id:6, name:"High‑Speed HDMI Cable", image:"https://images.pexels.com/photos/3944675/pexels-photo-3944675.jpeg", price:"₹799", color:"Black" }
  ],

  "Yoga": [
    {id:1, name:"Blue Yoga Mat", image:"https://images.pexels.com/photos/2394051/pexels-photo-2394051.jpeg", price:"₹1,299", color:"Blue"},
    {id:2, name:"Meditation Yoga Mat", image:"https://images.pexels.com/photos/7113502/pexels-photo-7113502.jpeg", price:"₹1,499", color:"Purple"},
    {id:3, name:"Black Yoga Mat", image:"https://images.pexels.com/photos/8173539/pexels-photo-8173539.jpeg", price:"₹1,099", color:"Black"},
    {id:4, name:"Roll-up Yoga Mat", image:"https://images.pexels.com/photos/3823203/pexels-photo-3823203.jpeg", price:"₹1,199", color:"Gray"},
    {id:5, name:"Orange Yoga Mat", image:"https://images.pexels.com/photos/6740756/pexels-photo-6740756.jpeg", price:"₹1,349", color:"Orange"},
    {id:6, name:"Outdoor Yoga Mat", image:"https://images.pexels.com/photos/5384531/pexels-photo-5384531.jpeg", price:"₹1,249", color:"Green"}
  ],
  "Hand Grip Strengthener": [
    {id:1, name:"Chrome Hand Grip", image:"https://images.pexels.com/photos/15158950/pexels-photo-15158950.jpeg", price:"₹599", color:"Silver"},
    {id:2, name:"Rainbow Grip Strengthener", image:"https://images.pexels.com/photos/532963/pexels-photo-532963.jpeg", price:"₹649", color:"Multicolor"},
    {id:3, name:"Black Resistance Grip", image:"https://images.pexels.com/photos/4498601/pexels-photo-4498601.jpeg", price:"₹699", color:"Black"},
    {id:4, name:"Wooden Grip Strengthener", image:"https://images.pexels.com/photos/4050226/pexels-photo-4050226.jpeg", price:"₹549", color:"Wooden"},
    {id:5, name:"Compact Grip Trainer", image:"https://images.pexels.com/photos/4050224/pexels-photo-4050224.jpeg", price:"₹529", color:"Black"},
    {id:6, name:"Pro Metal Grip", image:"https://images.pexels.com/photos/4050228/pexels-photo-4050228.jpeg", price:"₹799", color:"Metallic"}
  ],
  "Tummy Trimmers": [
    {id:1, name:"Adjustable Waist Trimmer", image:"https://images.pexels.com/photos/4498514/pexels-photo-4498514.jpeg", price:"₹899", color:"Black"},
    {id:2, name:"Neoprene Trimmer Belt", image:"https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg", price:"₹1,099", color:"Grey"},
    {id:3, name:"Slimming Waist Band", image:"https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg", price:"₹799", color:"Blue"},
    {id:4, name:"Thermal Sweat Belt", image:"https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg", price:"₹1,199", color:"Black"},
    {id:5, name:"Mesh Tummy Trimmer", image:"https://images.pexels.com/photos/532963/pexels-photo-532963.jpeg", price:"₹699", color:"Black Mesh"},
    {id:6, name:"Compression Waist Trimmer", image:"https://images.pexels.com/photos/4498601/pexels-photo-4498601.jpeg", price:"₹1,299", color:"Grey"}
  ],
  "Skipping Ropes": [
    {id:1, name:"PVC Jump Rope", image:"https://images.pexels.com/photos/4498514/pexels-photo-4498514.jpeg", price:"₹299", color:"Red"},
    {id:2, name:"Adjustable Speed Rope", image:"https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg", price:"₹399", color:"Black"},
    {id:3, name:"Leather Jump Rope", image:"https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg", price:"₹499", color:"Brown"},
    {id:4, name:"Beaded Jump Rope", image:"https://images.pexels.com/photos/4050224/pexels-photo-4050224.jpeg", price:"₹449", color:"Multicolor"},
    {id:5, name:"Weighted Fitness Rope", image:"https://images.pexels.com/photos/4050226/pexels-photo-4050226.jpeg", price:"₹599", color:"Grey"},
    {id:6, name:"Digital Counter Rope", image:"https://images.pexels.com/photos/4050228/pexels-photo-4050228.jpeg", price:"₹699", color:"Black"}
  ],
  "Sweat Belts": [
    {id:1, name:"Neoprene Sweat Belt", image:"https://images.pexels.com/photos/4498601/pexels-photo-4498601.jpeg", price:"₹499", color:"Black"},
    {id:2, name:"Adjustable Waist Sweat Belt", image:"https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg", price:"₹549", color:"Grey"},
    {id:3, name:"Mesh Workout Belt", image:"https://images.pexels.com/photos/532963/pexels-photo-532963.jpeg", price:"₹599", color:"Black Mesh"},
    {id:4, name:"Power Sweat Belt", image:"https://images.pexels.com/photos/4050224/pexels-photo-4050224.jpeg", price:"₹649", color:"Black/Red"},
    {id:5, name:"Slimming Sweat Wrap", image:"https://images.pexels.com/photos/4050228/pexels-photo-4050228.jpeg", price:"₹699", color:"Grey"},
    {id:6, name:"Thermo Waist Belt", image:"https://images.pexels.com/photos/4050226/pexels-photo-4050226.jpeg", price:"₹749", color:"Blue/Black"}
  ],


  "Badminton": [
    {id:1, name:"Carbon Fiber Racket", image:"https://images.pexels.com/photos/416913/pexels-photo-416913.jpeg", price:"₹2,499", color:"Black/Blue"},
    {id:2, name:"Nylon Shuttlecock Pack", image:"https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg", price:"₹349", color:"White"},
    {id:3, name:"Badminton Grip Tape", image:"https://images.pexels.com/photos/4498601/pexels-photo-4498601.jpeg", price:"₹199", color:"Black"},
    {id:4, name:"Tournament Shuttle Set", image:"https://images.pexels.com/photos/4050224/pexels-photo-4050224.jpeg", price:"₹499", color:"Yellow/White"},
    {id:5, name:"Lightweight Racket Cover", image:"https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg", price:"₹299", color:"Black"},
    {id:6, name:"Badminton Net Kit", image:"https://images.pexels.com/photos/4050226/pexels-photo-4050226.jpeg", price:"₹999", color:"White/Blue"}
  ],
  "Skating": [
    {id:1, name:"Inline Skates", image:"https://images.pexels.com/photos/1639233/pexels-photo-1639233.jpeg", price:"₹3,499", color:"Black/Red"},
    {id:2, name:"Protective Skate Helmet", image:"https://images.pexels.com/photos/722306/pexels-photo-722306.jpeg", price:"₹799", color:"White"},
    {id:3, name:"Wrist Guards Set", image:"https://images.pexels.com/photos/532963/pexels-photo-532963.jpeg", price:"₹499", color:"Black"},
    {id:4, name:"Padded Knee & Elbow Set", image:"https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg", price:"₹699", color:"Black"},
    {id:5, name:"Skating Tool Kit", image:"https://images.pexels.com/photos/4050224/pexels-photo-4050224.jpeg", price:"₹299", color:"Silver"},
    {id:6, name:"Roller Skate Laces", image:"https://images.pexels.com/photos/4050226/pexels-photo-4050226.jpeg", price:"₹199", color:"Multicolor"}
  ],
  "Football": [
    {id:1, name:"Professional Football", image:"https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg", price:"₹899", color:"White/Black"},
    {id:2, name:"Goalkeeper Gloves", image:"https://images.pexels.com/photos/196641/pexels-photo-196641.jpeg", price:"₹1,299", color:"Black"},
    {id:3, name:"Football Shin Guards", image:"https://images.pexels.com/photos/42558/child-football-soccerzi.jpg", price:"₹349", color:"Black"},
    {id:4, name:"Outdoor Football Pump", image:"https://images.pexels.com/photos/3952033/pexels-photo-3952033.jpeg", price:"₹199", color:"Red"},
    {id:5, name:"Training Cones Set", image:"https://images.pexels.com/photos/3952043/pexels-photo-3952043.jpeg", price:"₹299", color:"Orange"},
    {id:6, name:"Football Net", image:"https://images.pexels.com/photos/3952051/pexels-photo-3952051.jpeg", price:"₹1,499", color:"White"}
  ],
  "Cricket": [
    {id:1, name:"Willow Cricket Bat", image:"https://images.pexels.com/photos/4498513/pexels-photo-4498513.jpeg", price:"₹4,499", color:"Natural"},
    {id:2, name:"Leather Cricket Ball", image:"https://images.pexels.com/photos/4050224/pexels-photo-4050224.jpeg", price:"₹399", color:"Brown"},
    {id:3, name:"Cricket Bat Grip Tape", image:"https://images.pexels.com/photos/4050226/pexels-photo-4050226.jpeg", price:"₹199", color:"Black"},
    {id:4, name:"Wicket Stumps Set", image:"https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg", price:"₹1,999", color:"Wooden"},
    {id:5, name:"Cricket Helmet", image:"https://images.pexels.com/photos/532963/pexels-photo-532963.jpeg", price:"₹1,499", color:"White"},
    {id:6, name:"Protective Leg Pads", image:"https://images.pexels.com/photos/4050328/pexels-photo-4050328.jpeg", price:"₹1,299", color:"White"}
  ],
  "Car Covers": [
    {id:1, name:"Full Car Cover", image:"https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg", price:"₹2,999", color:"Silver"},
    {id:2, name:"Waterproof SUV Cover", image:"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg", price:"₹3,499", color:"Gray"},
    {id:3, name:"Dustproof Sedan Cover", image:"https://images.pexels.com/photos/210020/pexels-photo-210020.jpeg", price:"₹2,799", color:"Beige"},
    {id:4, name:"All-Weather Hatchback Cover", image:"https://images.pexels.com/photos/210021/pexels-photo-210021.jpeg", price:"₹3,199", color:"Blue"},
    {id:5, name:"Custom Fit Cover", image:"https://images.pexels.com/photos/210022/pexels-photo-210022.jpeg", price:"₹3,599", color:"Black"},
    {id:6, name:"Reflective Car Shade", image:"https://images.pexels.com/photos/210023/pexels-photo-210023.jpeg", price:"₹2,899", color:"Silver/Black"}
  ],
  "Interior Accessories": [
    {id:1, name:"Seat Cover Set", image:"https://images.pexels.com/photos/210024/pexels-photo-210024.jpeg", price:"₹4,499", color:"Gray"},
    {id:2, name:"Steering Wheel Cover", image:"https://images.pexels.com/photos/210025/pexels-photo-210025.jpeg", price:"₹499", color:"Black"},
    {id:3, name:"Dashboard Mat", image:"https://images.pexels.com/photos/210026/pexels-photo-210026.jpeg", price:"₹799", color:"Brown"},
    {id:4, name:"Air Freshener Set", image:"https://images.pexels.com/photos/210027/pexels-photo-210027.jpeg", price:"₹249", color:"Lavender"},
    {id:5, name:"Seat Organizer", image:"https://images.pexels.com/photos/210028/pexels-photo-210028.jpeg", price:"₹699", color:"Black"},
    {id:6, name:"UV Sunshade", image:"https://images.pexels.com/photos/210029/pexels-photo-210029.jpeg", price:"₹899", color:"Silver"}
  ],
  "Car Mobile Holders": [
    {id:1, name:"Dashboard Phone Mount", image:"https://images.pexels.com/photos/210030/pexels-photo-210030.jpeg", price:"₹499", color:"Black"},
    {id:2, name:"Vent Phone Holder", image:"https://images.pexels.com/photos/210031/pexels-photo-210031.jpeg", price:"₹399", color:"Gray"},
    {id:3, name:"Magnetic Phone Mount", image:"https://images.pexels.com/photos/210032/pexels-photo-210032.jpeg", price:"₹599", color:"Black"},
    {id:4, name:"Wireless Charging Holder", image:"https://images.pexels.com/photos/210033/pexels-photo-210033.jpeg", price:"₹1,299", color:"Black"},
    {id:5, name:"Cup Holder Phone Mount", image:"https://images.pexels.com/photos/210034/pexels-photo-210034.jpeg", price:"₹699", color:"Black"},
    {id:6, name:"CD Slot Holder", image:"https://images.pexels.com/photos/210035/pexels-photo-210035.jpeg", price:"₹599", color:"Gray"}
  ],
  "Car Repair Assistance": [
    {id:1, name:"Emergency Jumper Cables", image:"https://images.pexels.com/photos/210036/pexels-photo-210036.jpeg", price:"₹1,199", color:"Red/Black"},
    {id:2, name:"Portable Tire Inflator", image:"https://images.pexels.com/photos/210037/pexels-photo-210037.jpeg", price:"₹2,499", color:"Black"},
    {id:3, name:"Car Toolkit", image:"https://images.pexels.com/photos/210038/pexels-photo-210038.jpeg", price:"₹1,799", color:"Silver"},
    {id:4, name:"Battery Booster Pack", image:"https://images.pexels.com/photos/210039/pexels-photo-210039.jpeg", price:"₹3,299", color:"Black"},
    {id:5, name:"Engine Diagnostic Scanner", image:"https://images.pexels.com/photos/210040/pexels-photo-210040.jpeg", price:"₹2,999", color:"Black"},
    {id:6, name:"Tow Rope", image:"https://images.pexels.com/photos/210041/pexels-photo-210041.jpeg", price:"₹499", color:"Yellow/Red"}
  ],


  "Diaries & Notebooks": [
    { id:1, name:"Spiral Notebook", image:"https://images.pexels.com/photos/4887168/pexels-photo-4887168.jpeg", price:"₹499", color:"White" },
    { id:2, name:"Diary with Pen", image:"https://images.pexels.com/photos/6353763/pexels-photo-6353763.jpeg", price:"₹699", color:"Beige" },
    { id:3, name:"Flat Lay Open Notebook", image:"https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg", price:"₹549", color:"Brown" },
    { id:4, name:"Journal on Desk", image:"https://images.pexels.com/photos/4887168/pexels-photo-4887168.jpeg", price:"₹599", color:"Black" },
    { id:5, name:"Minimal Notebook", image:"https://images.pexels.com/photos/6353766/pexels-photo-6353766.jpeg", price:"₹529", color:"White" },
    { id:6, name:"Planner Journal", image:"https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg", price:"₹649", color:"Rose" }
  ],
  "Adhesive & Notebooks": [
    { id:1, name:"Sticky Note Pads", image:"https://images.pexels.com/videos/29018243/pexels-video-29018243.mp4", price:"₹299", color:"Yellow" },
    { id:2, name:"Paper Clips & Notes", image:"https://images.pexels.com/photos/6991388/pexels-photo-6991388.jpeg", price:"₹329", color:"Multicolor" },
    { id:3, name:"Clip-On Notepad", image:"https://images.pexels.com/photos/6991388/pexels-photo-6991388.jpeg", price:"₹349", color:"Blue" },
    { id:4, name:"Adhesive Memo Block", image:"https://images.pexels.com/videos/29018243/pexels-video-29018243.mp4", price:"₹319", color:"Pink" },
    { id:5, name:"Desk Sticky Notes", image:"https://images.pexels.com/photos/6991388/pexels-photo-6991388.jpeg", price:"₹289", color:"Orange" },
    { id:6, name:"Planner Sticky Tab", image:"https://images.pexels.com/videos/29018243/pexels-video-29018243.mp4", price:"₹359", color:"Green" }
  ],
  "Files & Desk Organizers": [
    { id:1, name:"Clipboard File Folder", image:"https://images.pexels.com/photos/6353766/pexels-photo-6353766.jpeg", price:"₹799", color:"Black" },
    { id:2, name:"Desk Tray Organizer", image:"https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg", price:"₹899", color:"White" },
    { id:3, name:"Document File Holder", image:"https://images.pexels.com/photos/4887168/pexels-photo-4887168.jpeg", price:"₹699", color:"Gray" },
    { id:4, name:"Stationery Desk Organizer", image:"https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg", price:"₹749", color:"Brown" },
    { id:5, name:"Wire Mesh Organizer", image:"https://images.pexels.com/photos/4887168/pexels-photo-4887168.jpeg", price:"₹819", color:"Black" },
    { id:6, name:"File Stand Rack", image:"https://images.pexels.com/photos/6353763/pexels-photo-6353763.jpeg", price:"₹849", color:"Beige" }
  ],
  "Pen & Pencils": [
    { id:1, name:"Black Gel Pen", image:"https://images.pexels.com/photos/4887168/pexels-photo-4887168.jpeg", price:"₹59", color:"Black" },
    { id:2, name:"Color Pencil Set", image:"https://images.pexels.com/photos/6991388/pexels-photo-6991388.jpeg", price:"₹299", color:"Multicolor" },
    { id:3, name:"Metal Ballpoint Pen", image:"https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg", price:"₹99", color:"Silver" },
    { id:4, name:"Fountain Pen Black", image:"https://images.pexels.com/photos/4887168/pexels-photo-4887168.jpeg", price:"₹199", color:"Black" },
    { id:5, name:"Mechanical Pencil", image:"https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg", price:"₹149", color:"Gray" },
    { id:6, name:"Highlighter Pens", image:"https://images.pexels.com/photos/6991388/pexels-photo-6991388.jpeg", price:"₹129", color:"Assorted" }
  ],
  "Paintings & Photoframes": [
    { id:1, name:"Abstract Wall Painting", image:"https://images.pexels.com/photos/4887168/pexels-photo-4887168.jpeg", price:"₹1,299", color:"Blue/White" },
    { id:2, name:"Minimalist Frame", image:"https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg", price:"₹999", color:"Black" },
    { id:3, name:"Floral Photo Frame", image:"https://images.pexels.com/photos/6991388/pexels-photo-6991388.jpeg", price:"₹1,199", color:"Pink" },
    { id:4, name:"Canvas Wall Art", image:"https://images.pexels.com/photos/6353766/pexels-photo-6353766.jpeg", price:"₹1,499", color:"Multi" },
    { id:5, name:"Wooden Photo Frame", image:"https://images.pexels.com/photos/4887168/pexels-photo-4887168.jpeg", price:"₹1,099", color:"Brown" },
    { id:6, name:"Inspirational Quote Frame", image:"https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg", price:"₹1,149", color:"White" }
  ],






  
};










const ProductPage = () => {
  const { subcategory } = useParams();
  const products = dummyProducts[decodeURIComponent(subcategory)] || [];

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6 text-pink-600">{subcategory}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded" />
            <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-700">Price: {product.price}</p>
            <p className="text-gray-600">Color: {product.color}</p>
            <div className="flex gap-4 mt-3">
              <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">Buy</button>
              <button className="border border-pink-600 text-pink-600 px-4 py-2 rounded hover:bg-pink-50">Cart</button>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <p className="text-gray-500 col-span-full">No products found for {subcategory}</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
