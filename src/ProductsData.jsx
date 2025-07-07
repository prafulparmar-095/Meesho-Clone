const productsData = [
  // Women Ethnic - Sarees
  {
    id: 1,
    name: "Elegant Cotton Saree",
    category: "Women Ethnic",
    subcategory: "Sarees",
    image: "https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg",
    price: 799,
    color: "Blue"
  },
  {
    id: 2,
    name: "Traditional Cotton Saree",
    category: "Women Ethnic",
    subcategory: "Sarees",
    image: "https://images.pexels.com/photos/2270078/pexels-photo-2270078.jpeg",
    price: 899,
    color: "Red"
  },
  {
    id: 3,
    name: "Modern Silk Saree",
    category: "Women Ethnic",
    subcategory: "Sarees",
    image: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg",
    price: 1299,
    color: "Green"
  },
  {
    id: 4,
    name: "Georgette Party Saree",
    category: "Women Ethnic",
    subcategory: "Sarees",
    image: "https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg",
    price: 1149,
    color: "White"
  },
  {
    id: 5,
    name: "Chiffon Floral Saree",
    category: "Women Ethnic",
    subcategory: "Sarees",
    image: "https://assets.ajio.com/medias/sys_master/root/20230623/5F2k/64952bb8a95610fd176461a2/-473Wx593H-469335967-blue-MODEL.jpg",
    price: 950,
    color: "Pink"
  },
  {
    id: 6,
    name: "Designer Banarasi Saree",
    category: "Women Ethnic",
    subcategory: "Sarees",
    image: "https://assets.ajio.com/medias/sys_master/root/20230623/5F2k/64952bb8a95610fd176461a2/-473Wx593H-469335967-blue-MODEL.jpg",
    price: 2500,
    color: "Gold"
  },

  // Women Ethnic - Kurtis
  {
    id: 7,
    name: "Blue Printed Anarkali Kurti",
    category: "Women Ethnic",
    subcategory: "Kurtis",
    image: "https://i.pinimg.com/736x/f2/27/9b/f2279ba2d15f5de99c3537d7e76b70c9.jpg",
    price: 1299,
    color: "Blue"
  },
  {
    id: 8,
    name: "Black & Brown Anarkali Kurti",
    category: "Women Ethnic",
    subcategory: "Kurtis",
    image: "https://cdn.pixabay.com/photo/2022/01/21/10/17/anarkali-kurta-6954377_1280.jpg",
    price: 1399,
    color: "Black/Brown"
  },
  {
    id: 9,
    name: "Zig-Zag Blue Anarkali Kurti",
    category: "Women Ethnic",
    subcategory: "Kurtis",
    image: "https://cdn.pixabay.com/photo/2022/01/21/11/04/anarkali-kurta-6954528_1280.jpg",
    price: 1199,
    color: "Blue"
  },
  {
    id: 10,
    name: "Floral Straight Kurti",
    category: "Women Ethnic",
    subcategory: "Kurtis",
    image: "https://images.meesho.com/images/products/377318859/6hklb_512.webp",
    price: 650,
    color: "White"
  },
  {
    id: 11,
    name: "Embroidered Designer Kurti",
    category: "Women Ethnic",
    subcategory: "Kurtis",
    image: "https://images.meesho.com/images/products/388915833/2q55r_512.webp",
    price: 999,
    color: "Yellow"
  },

  // Women Ethnic - Dress Materials
  {
    id: 12,
    name: "Unstitched Cotton Dress Material",
    category: "Women Ethnic",
    subcategory: "Dress Materials",
    image: "https://images.meesho.com/images/products/388915833/2q55r_512.webp",
    price: 750,
    color: "Pink"
  },
  {
    id: 13,
    name: "Semi-Stitched Georgette Suit",
    category: "Women Ethnic",
    subcategory: "Dress Materials",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07jWf2cR_P_E-6m2i5G4u3s2sQ_5zP6z-lQ&s",
    price: 1500,
    color: "Blue"
  },
  {
    id: 14,
    name: "Stitched Anarkali Dress Set",
    category: "Women Ethnic",
    subcategory: "Dress Materials",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_L-u-eYdI-M3G_N_zQ9vW7zQ5Y-5j7jY-0g&s",
    price: 2200,
    color: "Green"
  },

  // Women Western - Tops
  {
    id: 15,
    name: "Crop Top with Ruffles",
    category: "Women Western",
    subcategory: "Tops",
    image: "https://images.meesho.com/images/products/389104085/r6e5c_512.webp",
    price: 450,
    color: "Black"
  },
  {
    id: 16,
    name: "Casual Blouse",
    category: "Women Western",
    subcategory: "Tops",
    image: "https://images.meesho.com/images/products/390740924/h6k3t_512.webp",
    price: 550,
    color: "White"
  },
  {
    id: 17,
    name: "Printed Tunic Top",
    category: "Women Western",
    subcategory: "Tops",
    image: "https://images.meesho.com/images/products/389104085/r6e5c_512.webp",
    price: 600,
    color: "Red"
  },

  // Women Western - Dresses
  {
    id: 18,
    name: "Floral Maxi Dress",
    category: "Women Western",
    subcategory: "Dresses",
    image: "https://images.meesho.com/images/products/390740924/h6k3t_512.webp",
    price: 1200,
    color: "Blue"
  },
  {
    id: 19,
    name: "Party Mini Dress",
    category: "Women Western",
    subcategory: "Dresses",
    image: "https://images.meesho.com/images/products/389104085/r6e5c_512.webp",
    price: 900,
    color: "Black"
  },
  {
    id: 20,
    name: "Bodycon Dress",
    category: "Women Western",
    subcategory: "Dresses",
    image: "https://images.meesho.com/images/products/389104085/r6e5c_512.webp",
    price: 1100,
    color: "Green"
  },

  // Men - Top Wear
  {
    id: 21,
    name: "Men's Casual T-Shirt",
    category: "Men",
    subcategory: "Top Wear",
    image: "https://images.meesho.com/images/products/388915833/2q55r_512.webp",
    price: 350,
    color: "Grey"
  },
  {
    id: 22,
    name: "Men's Formal Shirt",
    category: "Men",
    subcategory: "Top Wear",
    image: "https://images.meesho.com/images/products/377318859/6hklb_512.webp",
    price: 700,
    color: "Blue"
  },
  {
    id: 23,
    name: "Men's Winter Jacket",
    category: "Men",
    subcategory: "Top Wear",
    image: "https://images.meesho.com/images/products/389104085/r6e5c_512.webp",
    price: 1500,
    color: "Black"
  },

  // Men - Bottom Wear
  {
    id: 24,
    name: "Men's Denim Jeans",
    category: "Men",
    subcategory: "Bottom Wear",
    image: "https://images.meesho.com/images/products/390740924/h6k3t_512.webp",
    price: 900,
    color: "Blue"
  },
  {
    id: 25,
    name: "Men's Casual Trousers",
    category: "Men",
    subcategory: "Bottom Wear",
    image: "https://images.meesho.com/images/products/388915833/2q55r_512.webp",
    price: 600,
    color: "Khaki"
  },
  {
    id: 26,
    name: "Men's Track Pants",
    category: "Men",
    subcategory: "Bottom Wear",
    image: "https://images.meesho.com/images/products/377318859/6hklb_512.webp",
    price: 450,
    color: "Black"
  },

  // Kids - Boys Clothing
  {
    id: 27,
    name: "Boys Printed T-Shirt",
    category: "Kids",
    subcategory: "Boys Clothing",
    image: "https://images.meesho.com/images/products/389104085/r6e5c_512.webp",
    price: 250,
    color: "Blue"
  },
  {
    id: 28,
    name: "Boys Denim Shorts",
    category: "Kids",
    subcategory: "Boys Clothing",
    image: "https://images.meesho.com/images/products/390740924/h6k3t_512.webp",
    price: 300,
    color: "Denim"
  },

  // Kids - Girls Clothing
  {
    id: 29,
    name: "Girls Party Frock",
    category: "Kids",
    subcategory: "Girls Clothing",
    image: "https://images.meesho.com/images/products/388915833/2q55r_512.webp",
    price: 700,
    color: "Pink"
  },
  {
    id: 30,
    name: "Girls Cotton Leggings",
    category: "Kids",
    subcategory: "Girls Clothing",
    image: "https://images.meesho.com/images/products/377318859/6hklb_512.webp",
    price: 200,
    color: "White"
  },

  // Home & Kitchen - Home Decor
  {
    id: 31,
    name: "Wall Sticker Decal",
    category: "Home & Kitchen",
    subcategory: "Home Decor",
    image: "https://images.meesho.com/images/products/389104085/r6e5c_512.webp",
    price: 350,
    color: "Multi"
  },
  {
    id: 32,
    name: "Decorative Wall Clock",
    category: "Home & Kitchen",
    subcategory: "Home Decor",
    image: "https://images.meesho.com/images/products/390740924/h6k3t_512.webp",
    price: 500,
    color: "Black"
  },

  // Home & Kitchen - Kitchen
  {
    id: 33,
    name: "Non-Stick Frying Pan",
    category: "Home & Kitchen",
    subcategory: "Kitchen",
    image: "https://images.meesho.com/images/products/388915833/2q55r_512.webp",
    price: 800,
    color: "Black"
  },
  {
    id: 34,
    name: "Stainless Steel Utensil Set",
    category: "Home & Kitchen",
    subcategory: "Kitchen",
    image: "https://images.meesho.com/images/products/377318859/6hklb_512.webp",
    price: 1500,
    color: "Silver"
  },
];

export default productsData;