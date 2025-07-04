import React from 'react';
import { useNavigate } from 'react-router-dom';
//tasmeen quraishi
const products = [

    { id:1, name:"Blue Printed Anarkali Kurti", image:"https://i.pinimg.com/736x/f2/27/9b/f2279ba2d15f5de99c3537d7e76b70c9.jpg", price:"₹1,299", color:"Blue" },
    { id:2, name:"Black & Brown Anarkali Kurti", image:"https://cdn.pixabay.com/photo/2022/01/21/10/17/anarkali-kurta-6954377_1280.jpg", price:"₹1,399", color:"Black/Brown" },
    { id:3, name:"Zig-Zag Blue Anarkali Kurti", image:"https://cdn.pixabay.com/photo/2022/01/21/11/04/anarkali-kurta-6954528_1280.jpg", price:"₹1,099", color:"Blue" },
    { id:4, name:"Peach Georgette Anarkali Kurti", image:"https://cdn.pixabay.com/photo/2022/01/21/11/36/anarkali-kurta-6954569_1280.jpg", price:"₹1,499", color:"Peach" },
    { id:5, name:"White Embroidered Kurti", image:"https://cdn.pixabay.com/photo/2019/02/10/08/29/baby-3984479_1280.jpg", price:"₹1,099", color:"White" },
    { id:6, name:"Green Floral Readymade Kurta", image:"https://cdn.pixabay.com/photo/2018/02/10/19/09/girl-3143021_1280.jpg", price:"₹1,199", color:"Green" },
    { id:7, name:"Pink A-line Kurti", image:"https://cdn.pixabay.com/photo/2018/02/01/03/08/girl-3121791_1280.jpg", price:"₹1,249", color:"Pink" },
    { id:8, name:"Denim Straight Kurti", image:"https://cdn.pixabay.com/photo/2018/03/14/14/24/model-3221354_1280.jpg", price:"₹1,299", color:"Denim" },
    { id:9, name:"Coral Maxi Kurti", image:"https://cdn.pixabay.com/photo/2016/11/29/06/15/people-1869710_1280.jpg", price:"₹1,199", color:"Coral" },
    { id:10, name:"Black Floor-length Kurti", image:"https://cdn.pixabay.com/photo/2017/05/10/19/47/beauty-2309513_1280.jpg", price:"₹1,399", color:"Black" },
    { id:11, name:"Yellow Summer Kurti", image:"https://cdn.pixabay.com/photo/2016/11/18/12/09/people-1836057_1280.jpg", price:"₹1,049", color:"Yellow" },
    { id:12, name:"Orange Rayon Kurti", image:"https://cdn.pixabay.com/photo/2017/03/30/16/06/people-2185160_1280.jpg", price:"₹1,149", color:"Orange" },
    { id:13, name:"Maroon Embroidered Kurti", image:"https://cdn.pixabay.com/photo/2017/03/27/18/55/monochrome-2181517_1280.jpg", price:"₹1,299", color:"Maroon" },
    { id:14, name:"Beige Cotton Kurti", image:"https://cdn.pixabay.com/photo/2016/09/05/15/14/blouse-1647035_1280.jpg", price:"₹1,199", color:"Beige" },
    { id:15, name:"Teal Printed Kurti", image:"https://cdn.pixabay.com/photo/2018/01/15/07/51/girl-3084915_1280.jpg", price:"₹1,249", color:"Teal" },
    { id:16, name:"Purple Festive Kurti", image:"https://cdn.pixabay.com/photo/2015/07/02/10/34/blouse-828039_1280.jpg", price:"₹1,349", color:"Purple" },
    { id:17, name:"Floral Print Kurti", image:"https://cdn.pixabay.com/photo/2017/08/02/05/47/people-2576300_1280.jpg", price:"₹1,179", color:"Multi" },
    { id:18, name:"Red Straight Kurti", image:"https://cdn.pixabay.com/photo/2015/07/25/11/20/people-859452_1280.jpg", price:"₹1,199", color:"Red" },
    { id:19, name:"Mint Green Kurti", image:"https://cdn.pixabay.com/photo/2016/04/20/11/36/girl-1341806_1280.jpg", price:"₹1,149", color:"Mint" },
    { id:20, name:"Grey Casual Kurti", image:"https://cdn.pixabay.com/photo/2017/03/11/09/47/model-2132273_1280.jpg", price:"₹1,099", color:"Grey" },
    { id:21, name:"Mustard Printed Kurti", image:"https://cdn.pixabay.com/photo/2018/05/17/16/05/people-3416363_1280.jpg", price:"₹1,179", color:"Mustard" },
    { id:22, name:"Peach Printed Anarkali", image:"https://cdn.pixabay.com/photo/2015/03/04/19/54/wedding-660280_1280.jpg", price:"₹1,349", color:"Peach" },
    { id:23, name:"Olive Green Kurti", image:"https://cdn.pixabay.com/photo/2018/05/28/14/38/girl-3432744_1280.jpg", price:"₹1,249", color:"Olive" },
    { id:24, name:"Purple Straight Kurti", image:"https://cdn.pixabay.com/photo/2016/10/04/09/03/people-1715246_1280.jpg", price:"₹1,279", color:"Purple" },
    { id:25, name:"Navy Blue Kurti", image:"https://cdn.pixabay.com/photo/2018/08/23/09/30/girl-3626099_1280.jpg", price:"₹1,299", color:"Navy" },
    { id:26, name:"Rainbows Print Kurti", image:"https://cdn.pixabay.com/photo/2017/07/23/09/37/people-2531588_1280.jpg", price:"₹1,099", color:"Multi" },
    { id:27, name:"Lime Kurti", image:"https://cdn.pixabay.com/photo/2017/08/02/05/23/people-2576267_1280.jpg", price:"₹1,149", color:"Lime" },
    { id:28, name:"Chocolate Brown Kurti", image:"https://cdn.pixabay.com/photo/2018/06/03/11/53/girl-3454177_1280.jpg", price:"₹1,199", color:"Brown" },
    { id:29, name:"Rust Orange Kurti", image:"https://cdn.pixabay.com/photo/2017/09/23/13/22/girl-2776506_1280.jpg", price:"₹1,179", color:"Rust" },
    { id:30, name:"Sky Blue Kurti", image:"https://cdn.pixabay.com/photo/2017/07/30/14/42/people-2565192_1280.jpg", price:"₹1,199", color:"Sky Blue" },
    { id:31, name:"Magenta Printed Kurti", image:"https://cdn.pixabay.com/photo/2017/07/12/20/03/people-2494000_1280.jpg", price:"₹1,249", color:"Magenta" },
    { id:32, name:"Ivory Daily Wear Kurti", image:"https://cdn.pixabay.com/photo/2017/05/19/07/04/girl-2324377_1280.jpg", price:"₹1,099", color:"Ivory" },
    { id:33, name:"Mint Straight Kurti", image:"https://cdn.pixabay.com/photo/2016/04/13/20/20/girl-1327215_1280.jpg", price:"₹1,149", color:"Mint" },
    { id:34, name:"Brick Red A-Line Kurti", image:"https://cdn.pixabay.com/photo/2016/03/31/20/16/girl-1297035_1280.jpg", price:"₹1,199", color:"Brick Red" },
    { id:35, name:"Pastel Yellow Kurti", image:"https://cdn.pixabay.com/photo/2017/05/10/19/47/beauty-2309523_1280.jpg", price:"₹1,099", color:"Pastel Yellow" },
    { id:36, name:"Aqua Blue Kurti", image:"https://cdn.pixabay.com/photo/2017/06/06/17/49/people-2387198_1280.jpg", price:"₹1,149", color:"Aqua" },
    { id:37, name:"Fuchsia Summer Kurti", image:"https://cdn.pixabay.com/photo/2017/07/21/12/40/people-2529152_1280.jpg", price:"₹1,199", color:"Fuchsia" },
    { id:38, name:"Royal Blue Kurti", image:"https://cdn.pixabay.com/photo/2017/08/03/15/44/people-2579552_1280.jpg", price:"₹1,249", color:"Royal Blue" },
    { id:39, name:"Sage Green Kurti", image:"https://cdn.pixabay.com/photo/2016/09/04/19/42/girl-1646692_1280.jpg", price:"₹1,199", color:"Sage Green" },
    { id:40, name:"Wine Red Kurti", image:"https://cdn.pixabay.com/photo/2017/06/05/00/15/girl-2372422_1280.jpg", price:"₹1,299", color:"Wine Red" },

    { id:1, name:"Blue Printed Anarkali Kurti", image:"https://cdn.pixabay.com/photo/2017/07/31/11/23/people-2557417_1280.jpg", price:"₹1,299", color:"Blue" },
    { id:2, name:"Black & Brown Anarkali Kurti", image:"https://cdn.pixabay.com/photo/2016/10/13/09/53/woman-1737254_1280.jpg", price:"₹1,399", color:"Black/Brown" },
    { id:3, name:"Zig-Zag Blue Anarkali Kurti", image:"https://cdn.pixabay.com/photo/2021/05/21/08/19/indian-6277177_1280.jpg", price:"₹1,099", color:"Blue" },
    { id:4, name:"Peach Georgette Anarkali Kurti", image:"https://cdn.pixabay.com/photo/2018/05/02/23/16/woman-3366434_1280.jpg", price:"₹1,499", color:"Peach" },
    { id:5, name:"White Embroidered Kurti", image:"https://cdn.pixabay.com/photo/2019/02/10/08/29/baby-3984479_1280.jpg", price:"₹1,099", color:"White" },
    { id:6, name:"Green Floral Readymade Kurta", image:"https://cdn.pixabay.com/photo/2018/02/10/19/09/girl-3143021_1280.jpg", price:"₹1,199", color:"Green" },
    { id:7, name:"Pink A-line Kurti", image:"https://cdn.pixabay.com/photo/2018/02/01/03/08/girl-3121791_1280.jpg", price:"₹1,249", color:"Pink" },
    { id:8, name:"Denim Straight Kurti", image:"https://cdn.pixabay.com/photo/2018/03/14/14/24/model-3221354_1280.jpg", price:"₹1,299", color:"Denim" },
    { id:9, name:"Coral Maxi Kurti", image:"https://cdn.pixabay.com/photo/2016/11/29/06/15/people-1869710_1280.jpg", price:"₹1,199", color:"Coral" },
    { id:10, name:"Black Floor-length Kurti", image:"https://cdn.pixabay.com/photo/2017/05/10/19/47/beauty-2309513_1280.jpg", price:"₹1,399", color:"Black" },
    { id:11, name:"Yellow Summer Kurti", image:"https://cdn.pixabay.com/photo/2016/11/18/12/09/people-1836057_1280.jpg", price:"₹1,049", color:"Yellow" },
    { id:12, name:"Orange Rayon Kurti", image:"https://cdn.pixabay.com/photo/2017/03/30/16/06/people-2185160_1280.jpg", price:"₹1,149", color:"Orange" },
    { id:13, name:"Maroon Embroidered Kurti", image:"https://cdn.pixabay.com/photo/2017/03/27/18/55/monochrome-2181517_1280.jpg", price:"₹1,299", color:"Maroon" },
    { id:14, name:"Beige Cotton Kurti", image:"https://cdn.pixabay.com/photo/2016/09/05/15/14/blouse-1647035_1280.jpg", price:"₹1,199", color:"Beige" },
    { id:15, name:"Teal Printed Kurti", image:"https://cdn.pixabay.com/photo/2018/01/15/07/51/girl-3084915_1280.jpg", price:"₹1,249", color:"Teal" },
    { id:16, name:"Purple Festive Kurti", image:"https://cdn.pixabay.com/photo/2015/07/02/10/34/blouse-828039_1280.jpg", price:"₹1,349", color:"Purple" },
    { id:17, name:"Floral Print Kurti", image:"https://cdn.pixabay.com/photo/2017/08/02/05/47/people-2576300_1280.jpg", price:"₹1,179", color:"Multi" },
    { id:18, name:"Red Straight Kurti", image:"https://cdn.pixabay.com/photo/2015/07/25/11/20/people-859452_1280.jpg", price:"₹1,199", color:"Red" },
    { id:19, name:"Mint Green Kurti", image:"https://cdn.pixabay.com/photo/2016/04/20/11/36/girl-1341806_1280.jpg", price:"₹1,149", color:"Mint" },
    { id:20, name:"Grey Casual Kurti", image:"https://cdn.pixabay.com/photo/2017/03/11/09/47/model-2132273_1280.jpg", price:"₹1,099", color:"Grey" },
    { id:21, name:"Mustard Printed Kurti", image:"https://cdn.pixabay.com/photo/2018/05/17/16/05/people-3416363_1280.jpg", price:"₹1,179", color:"Mustard" },
    { id:22, name:"Peach Printed Anarkali", image:"https://cdn.pixabay.com/photo/2015/03/04/19/54/wedding-660280_1280.jpg", price:"₹1,349", color:"Peach" },
    { id:23, name:"Olive Green Kurti", image:"https://cdn.pixabay.com/photo/2018/05/28/14/38/girl-3432744_1280.jpg", price:"₹1,249", color:"Olive" },
    { id:24, name:"Purple Straight Kurti", image:"https://cdn.pixabay.com/photo/2016/10/04/09/03/people-1715246_1280.jpg", price:"₹1,279", color:"Purple" },
    { id:25, name:"Navy Blue Kurti", image:"https://cdn.pixabay.com/photo/2018/08/23/09/30/girl-3626099_1280.jpg", price:"₹1,299", color:"Navy" },
    { id:26, name:"Rainbows Print Kurti", image:"https://cdn.pixabay.com/photo/2017/07/23/09/37/people-2531588_1280.jpg", price:"₹1,099", color:"Multi" },
    { id:27, name:"Lime Kurti", image:"https://cdn.pixabay.com/photo/2017/08/02/05/23/people-2576267_1280.jpg", price:"₹1,149", color:"Lime" },
    { id:28, name:"Chocolate Brown Kurti", image:"https://cdn.pixabay.com/photo/2018/06/03/11/53/girl-3454177_1280.jpg", price:"₹1,199", color:"Brown" },
    { id:29, name:"Rust Orange Kurti", image:"https://cdn.pixabay.com/photo/2017/09/23/13/22/girl-2776506_1280.jpg", price:"₹1,179", color:"Rust" },
    { id:30, name:"Sky Blue Kurti", image:"https://cdn.pixabay.com/photo/2017/07/30/14/42/people-2565192_1280.jpg", price:"₹1,199", color:"Sky Blue" },
    { id:31, name:"Magenta Printed Kurti", image:"https://cdn.pixabay.com/photo/2017/07/12/20/03/people-2494000_1280.jpg", price:"₹1,249", color:"Magenta" },
    { id:32, name:"Ivory Daily Wear Kurti", image:"https://cdn.pixabay.com/photo/2017/05/19/07/04/girl-2324377_1280.jpg", price:"₹1,099", color:"Ivory" },
    { id:33, name:"Mint Straight Kurti", image:"https://cdn.pixabay.com/photo/2016/04/13/20/20/girl-1327215_1280.jpg", price:"₹1,149", color:"Mint" },
    { id:34, name:"Brick Red A-Line Kurti", image:"https://cdn.pixabay.com/photo/2016/03/31/20/16/girl-1297035_1280.jpg", price:"₹1,199", color:"Brick Red" },
    { id:35, name:"Pastel Yellow Kurti", image:"https://cdn.pixabay.com/photo/2017/05/10/19/47/beauty-2309523_1280.jpg", price:"₹1,099", color:"Pastel Yellow" },
    { id:36, name:"Aqua Blue Kurti", image:"https://cdn.pixabay.com/photo/2017/06/06/17/49/people-2387198_1280.jpg", price:"₹1,149", color:"Aqua" },
    { id:37, name:"Fuchsia Summer Kurti", image:"https://cdn.pixabay.com/photo/2017/07/21/12/40/people-2529152_1280.jpg", price:"₹1,199", color:"Fuchsia" },
    { id:38, name:"Royal Blue Kurti", image:"https://cdn.pixabay.com/photo/2017/08/03/15/44/people-2579552_1280.jpg", price:"₹1,249", color:"Royal Blue" },
    { id:39, name:"Sage Green Kurti", image:"https://cdn.pixabay.com/photo/2016/09/04/19/42/girl-1646692_1280.jpg", price:"₹1,199", color:"Sage Green" },
    { id:40, name:"Wine Red Kurti", image:"https://cdn.pixabay.com/photo/2017/06/05/00/15/girl-2372422_1280.jpg", price:"₹1,299", color:"Wine Red" }
  ]




export default function AllProducts() {
  const navigate = useNavigate();
const handleBuy = (product) => {
  navigate("/buy", { state: product });
};
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Explore All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div key={idx} className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded" />
           <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-700">Price: {product.price}</p>
            <p className="text-gray-600">Color: {product.color}</p>
            <div className="flex gap-4 mt-3">
              <button onClick={() => handleBuy(product)} className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">Buy</button>
              <button className="border border-pink-600 text-pink-600 px-4 py-2 rounded hover:bg-pink-50">Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

