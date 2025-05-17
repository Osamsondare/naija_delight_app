
export interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  category: 'Rice' | 'Soups' | 'Swallows' | 'Snacks' | 'Proteins';
  price: number;
}

export const categories = ['All', 'Rice', 'Soups', 'Swallows', 'Snacks', 'Proteins'];

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Jollof Rice",
    description: "A flavorful one-pot rice dish made with tomatoes, peppers, spices, and meat or vegetables.",
    image: "jollof rice.JPG",
    category: "Rice",
    price: 1500.00
  },
  {
    id: 2,
    name: "Egusi Soup",
    description: "A rich, protein-packed soup made from ground melon seeds, leafy vegetables, and assorted meats.",
    image: "egusi.JPG",
    category: "Soups",
    price: 1000.00
  },
  {
    id: 3,
    name: "Pounded Yam",
    description: "A smooth, stretchy dough made from boiled yams, perfect for dipping into soups.",
    image: "pound yam.JPG",
    category: "Swallows",
    price: 1800.00
  },
  {
    id: 4,
    name: "Suya",
    description: "Spicy skewered meat kebabs coated with a peanut and spice mix, grilled to perfection.",
    image: "suya.JPG",
    category: "Proteins",
    price: 500.00
  },
  {
    id: 5,
    name: "Moi Moi",
    description: "A steamed bean pudding made from peeled beans, onions, and peppers with various fillings.",
    image: "moimoi.JPG",
    category: "Snacks",
    price: 300.00
  },
  {
    id: 6,
    name: "Afang Soup",
    description: "A delicious vegetable soup made with Afang leaves and water leaves, enriched with seafood and meat.",
    image: "afang soup.JPG",
    category: "Soups",
    price: 1000.00
  },
  {
    id: 7,
    name: "Akara",
    description: "Deep-fried bean cakes made from peeled black-eyed peas, a popular breakfast food.",
    image: "akara.JPG",
    category: "Snacks",
    price: 1000.00
  },
  {
    id: 8,
    name: "Amala",
    description: "A smooth swallow made from yam flour, often served with various Nigerian soups.",
    image: "amala.JPG",
    category: "Swallows",
    price: 1200.00
  },
  {
    id: 9,
    name: "Nkwobi",
    description: "A spicy cow foot delicacy cooked in a sauce made with palm oil and ugba (oil bean seed).",
    image: "nkwobi.JPG",
    category: "Proteins",
    price: 1000.00
  },
  {
    id: 10,
    name: "Ofada Rice",
    description: "Local Nigerian rice variety cooked and served with a spicy sauce made from peppers and locust beans.",
    image: "ofada rice.JPG",
    category: "Rice",
    price: 1400.00
  },
  {
    id: 11,
    name: "Efo Riro",
    description: "A rich vegetable soup made with a variety of leafy greens, palm oil, and assorted meats.",
    image: "efo riro.JPG",
    category: "Soups",
    price: 500.00
  },
  {
    id: 13,
    name: "Beefs",
    description: "A soft  cow meat.",
    image: "beef.JPG",
    category: "Proteins",
    price: 500.00
  },
  {
    id: 14,
    name: "Chicken (Drum stick)",
    description: "A soft, dough-like swallow made from fermented cassava, often enjoyed with various soups.",
    image: "drum stick.JPG",
    category: "Proteins",
    price: 1500.00
  },
  {
    id: 15,
    name: "Ogufe",
    description: "Goat Meat.",
    image: "ogufe.JPG",
    category: "Proteins",
    price: 1500.00
  },
  {
    id: 16,
    name: "Ponmo",
    description: "Cow skin.",
    image: "ponmo.JPG",
    category: "Proteins",
    price: 400.00
  }
];
