// src/data/mockPerfumes.js
// Données mock basées sur la structure de ton API

export const mockPerfumes = [
  {
    id: 1,
    Name: "Eau Sauvage",
    Brand: "Christian Dior",
    Year: "1966",
    rating: "4.5",
    Country: "France",
    "Image URL": "https://fimgs.net/mdimg/perfume/375x500.19196.jpg",
    Gender: "men",
    Price: "152.99",
    Longevity: "Moderate",
    Sillage: "Moderate",
    OilType: "Eau de Parfum",
    "General Notes": ["Hedione", "Galbanum", "Petitgrain", "Vetiver", "Pink Pepper"],
    "Main Accords": ["aromatic", "citrus", "fresh spicy", "woody", "earthy"],
    Notes: {
      Top: [
        { name: "Lemon", imageUrl: "https://fimgs.net/mdimg/note/375x500.1.jpg" },
        { name: "Bergamot", imageUrl: "https://fimgs.net/mdimg/note/375x500.2.jpg" }
      ],
      Middle: [
        { name: "Jasmine", imageUrl: "https://fimgs.net/mdimg/note/375x500.3.jpg" },
        { name: "Vetiver", imageUrl: "https://fimgs.net/mdimg/note/375x500.4.jpg" }
      ],
      Base: [
        { name: "Oakmoss", imageUrl: "https://fimgs.net/mdimg/note/375x500.5.jpg" },
        { name: "Musk", imageUrl: "https://fimgs.net/mdimg/note/375x500.6.jpg" }
      ]
    },
    isFeatured: true
  },
  {
    id: 2,
    Name: "Bleu de Chanel",
    Brand: "Chanel",
    Year: "2010",
    rating: "4.2",
    Country: "France",
    "Image URL": "https://fimgs.net/mdimg/perfume/375x500.25967.jpg",
    Gender: "men",
    Price: "142.00",
    Longevity: "Long lasting",
    Sillage: "Heavy",
    OilType: "Eau de Parfum",
    "General Notes": ["Mint", "Grapefruit", "Incense", "Cedar"],
    "Main Accords": ["woody", "aromatic", "fresh spicy", "citrus"],
    Notes: {
      Top: [
        { name: "Grapefruit", imageUrl: "" },
        { name: "Mint", imageUrl: "" }
      ],
      Middle: [
        { name: "Ginger", imageUrl: "" },
        { name: "Nutmeg", imageUrl: "" }
      ],
      Base: [
        { name: "Incense", imageUrl: "" },
        { name: "Cedar", imageUrl: "" }
      ]
    },
    isFeatured: true
  },
  {
    id: 3,
    Name: "La Vie Est Belle",
    Brand: "Lancôme",
    Year: "2012",
    rating: "4.0",
    Country: "France",
    "Image URL": "https://fimgs.net/mdimg/perfume/375x500.17624.jpg",
    Gender: "women",
    Price: "135.00",
    Longevity: "Long lasting",
    Sillage: "Moderate",
    OilType: "Eau de Parfum",
    "General Notes": ["Iris", "Praline", "Vanilla", "Patchouli"],
    "Main Accords": ["sweet", "powdery", "gourmand", "warm spicy"],
    Notes: {
      Top: [
        { name: "Blackcurrant", imageUrl: "" },
        { name: "Pear", imageUrl: "" }
      ],
      Middle: [
        { name: "Iris", imageUrl: "" },
        { name: "Jasmine", imageUrl: "" }
      ],
      Base: [
        { name: "Praline", imageUrl: "" },
        { name: "Vanilla", imageUrl: "" }
      ]
    },
    isFeatured: true
  },
  {
    id: 4,
    Name: "Aventus",
    Brand: "Creed",
    Year: "2010",
    rating: "4.7",
    Country: "France",
    "Image URL": "https://fimgs.net/mdimg/perfume/375x500.9828.jpg",
    Gender: "men",
    Price: "445.00",
    Longevity: "Long lasting",
    Sillage: "Heavy",
    OilType: "Eau de Parfum",
    "General Notes": ["Pineapple", "Birch", "Musk", "Oakmoss"],
    "Main Accords": ["fruity", "smoky", "woody", "fresh"],
    Notes: {
      Top: [
        { name: "Pineapple", imageUrl: "" },
        { name: "Bergamot", imageUrl: "" }
      ],
      Middle: [
        { name: "Birch", imageUrl: "" },
        { name: "Rose", imageUrl: "" }
      ],
      Base: [
        { name: "Musk", imageUrl: "" },
        { name: "Oakmoss", imageUrl: "" }
      ]
    },
    isFeatured: false
  },
  {
    id: 5,
    Name: "Black Opium",
    Brand: "Yves Saint Laurent",
    Year: "2014",
    rating: "4.3",
    Country: "France",
    "Image URL": "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
    Gender: "women",
    Price: "162.00",
    Longevity: "Long lasting",
    Sillage: "Heavy",
    OilType: "Eau de Parfum",
    "General Notes": ["Coffee", "Vanilla", "White Flowers"],
    "Main Accords": ["sweet", "warm spicy", "vanilla", "coffee"],
    Notes: {
      Top: [
        { name: "Pink Pepper", imageUrl: "" },
        { name: "Orange Blossom", imageUrl: "" }
      ],
      Middle: [
        { name: "Coffee", imageUrl: "" },
        { name: "Jasmine", imageUrl: "" }
      ],
      Base: [
        { name: "Vanilla", imageUrl: "" },
        { name: "Cedar", imageUrl: "" }
      ]
    },
    isFeatured: true
  }
];

// Fonction utilitaire pour récupérer les parfums "featured" (pour le carrousel)
export const getFeaturedPerfumes = () => {
  return mockPerfumes.filter(perfume => perfume.isFeatured);
};

// Fonction pour récupérer un parfum par son ID
export const getPerfumeById = (id) => {
  return mockPerfumes.find(perfume => perfume.id === Number(id));
};