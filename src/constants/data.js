import support_1 from '../images/support-1.png';
import support_2 from '../images/support-2.png';
import support_3 from '../images/support-3.png';
import support_4 from '../images/support-4.png';

export const NavList = [{title: 'Home', to: '/'}, {title: 'Shop', to: '/'},{title:  'Pages', to: '/'}, {title: 'Blog', to: '/'}, {title: 'Contact Us', to: '/contact'}];

export const ServicesList = [
  {
    title: 'Free Shipping',
    description: 'Free shipping on all order',
    icon: support_1,
  },
  {
    title: 'Support 24/7',
    description: 'Free shipping on all order',
    icon: support_2,
  },
  {
    title: 'Money Return',
    description: 'Free shipping on all order',
    icon: support_3,
  },
  {
    title: 'Order Discount',
    description: 'Free shipping on all order',
    icon: support_4,
  },
];

export const footerLinks = [
  {
    title: 'About Us',
    links: ['About us', 'Store Location', 'Contact', 'Orders Tracking'],
  },
  {
    title: 'Useful Links',
    links: ['Returns', 'Support Policy', 'Size guide', 'FAQs'],
  },
  {
    title: 'Follow Us',
    links: ['Facebook', 'Twitter', 'Instagram', 'Youtube'],
  },
];

export const products = [
  { 
    id: 1, 
    name: 'DJI Mavic 3 Pro Combo', 
    images: [
      'src/images/products/DJI_MavicPro_1.webp',
      'src/images/products/DJI_MavicPro_2.webp',
      'src/images/products/DJI_MavicPro_3.webp',
      'src/images/products/DJI_MavicPro_4.webp'
    ], 
    category: 'Drone', 
    price: 4199, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0.10, 
    newArrival: true
  },
  { 
    id: 2, 
    name: 'GoPro Hero12 Black 5.3K', 
    images: [
      'src/images/products/GoPro_Hero12_Black_1.webp',
      'src/images/products/GoPro_Hero12_Black_2.webp',
      'src/images/products/GoPro_Hero12_Black_3.webp',
      'src/images/products/GoPro_Hero12_Black_4.webp'
    ], 
    category: 'Action Camera', 
    price: 649, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0, 
    newArrival: true
  },
  { 
    id: 3, 
    name: 'DJI Mini 2 SE Combo', 
    images: [
      'src/images/products/DJI_Mini2SE_1.webp',
      'src/images/products/DJI_Mini2SE_2.webp',
      'src/images/products/DJI_Mini2SE_3.webp',
      'src/images/products/DJI_Mini2SE_4.webp'
    ],  
    category: 'Drone', 
    price: 799, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0.15, 
    newArrival: true
  },
  { 
    id: 4, 
    name: 'DJI Osmo Action 4', 
    images: [
      'src/images/products/DJI_OsmoAction4_1.webp',
      'src/images/products/DJI_OsmoAction4_2.webp',
      'src/images/products/DJI_OsmoAction4_3.webp',
      'src/images/products/DJI_OsmoAction4_4.webp'
    ], 
    category: 'Action Camera', 
    price: 625, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0, 
    newArrival: true
  },
  
  { 
    id: 5, 
    name: 'DJI Mini 4 Pro Combo Plus', 
    images: [
      'src/images/products/DJI_Mini4Pro_1.webp',
      'src/images/products/DJI_Mini4Pro_2.webp',
      'src/images/products/DJI_Mini4Pro_3.webp',
      'src/images/products/DJI_Mini4Pro_4.webp'
    ], 
    category: 'Drone', 
    price: 1799, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0, 
    newArrival: true
  },
  { 
    id: 6, 
    name: 'Insta 360 one RS 4K', 
    images: [
      'src/images/products/Insta_360_1.webp',
      'src/images/products/Insta_360_2.webp',
      'src/images/products/Insta_360_3.webp',
      'src/images/products/Insta_360_4.webp'
    ], 
    category: 'Action Camera', 
    price: 419, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0.15, 
    newArrival: false
  },
  { 
    id: 7, 
    name: 'Ryze Tello Drone', 
    images: [
      'src/images/products/RYZE_Tello_1.webp',
      'src/images/products/RYZE_Tello_2.webp',
      'src/images/products/RYZE_Tello_3.webp',
      'src/images/products/RYZE_Tello_4.webp'
    ], 
    category: 'Drone', 
    price: 169, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0.10, 
    newArrival: false
  },
  { 
    id: 8, 
    name: 'DJI Air 3 4K Combo', 
    images: [
      'src/images/products/DJI_Air3_1.webp',
      'src/images/products/DJI_Air3_2.webp',
      'src/images/products/DJI_Air3_3.webp',
      'src/images/products/DJI_Air3_4.webp'
    ],  
    category: 'Drone', 
    price: 2349, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0, 
    newArrival: false
  },
  { 
    id: 9, 
    name: 'Zero-X Vega Foldable', 
    images: [
      'src/images/products/ZERO_X_VEGA_1.webp',
      'src/images/products/ZERO_X_VEGA_2.webp',
      'src/images/products/ZERO_X_VEGA_3.webp',
      'src/images/products/ZERO_X_VEGA_4.webp'
    ], 
    category: 'Drone', 
    price: 219, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0.10, 
    newArrival: false
  },
  { 
    id: 10, 
    name: 'Zero-X ZX-60 4K', 
    images: [
      'src/images/products/Zero_X_ZX60_1.webp',
      'src/images/products/Zero_X_ZX60_2.webp',
      'src/images/products/Zero_X_ZX60_3.webp',
      'src/images/products/Zero_X_ZX60_4.webp'
    ], 
    category: 'Action Camera', 
    price: 349, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0.05, 
    newArrival: false
  },
  { 
    id: 11, 
    name: 'Autel EVO II Pro 6K', 
    images: [
      'src/images/products/Autel_EVO_1.webp',
      'src/images/products/Autel_EVO_2.webp',
      'src/images/products/Autel_EVO_3.webp',
      'src/images/products/Autel_EVO_4.webp'
    ],  
    category: 'Drone', 
    price: 3099, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0.10, 
    newArrival: false
  },
  { 
    id: 12, 
    name: 'GoPro MAX 360', 
    images: [
      'src/images/products/GoPro_Max_360_1.webp',
      'src/images/products/GoPro_Max_360_2.webp',
      'src/images/products/GoPro_Max_360_3.webp',
      'src/images/products/GoPro_Max_360_4.webp'
    ],  
    category: 'Action Camera', 
    price: 799, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est cupiditate ea impedit placeat quasi necessitatibus facere. Nostrum explicabo eos quo non beatae repellendus similique id! Facilis praesentium assumenda vero.', 
    discount: 0, 
    newArrival: false
  }
]

