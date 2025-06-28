export const mockSpaces = [
    {
        id: 1,
        title: "Modern Gallery Space",
        category: "Gallery/Exhibition",
        location: "Auckland CBD",
        address: "123 Queen Street, Auckland CBD, Auckland 1010, New Zealand",
        price: 150,
        capacity: 50,
        images: [
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1519167758481-83f29d8ae8e2?w=600&h=400&fit=crop"
        ],
        amenities: ["WiFi", "AV Equipment", "Climate Control", "Security System", "Parking"],
        rating: 4.8
    },
    {
        id: 2,
        title: "Industrial Workshop Space",
        category: "Workshop/Class Space",
        location: "Ponsonby",
        address: "456 Ponsonby Road, Ponsonby, Auckland 1011, New Zealand",
        price: 80,
        capacity: 20,
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop"
        ],
        amenities: ["WiFi", "Parking", "Tools", "Loading Dock", "Natural Light"],
        rating: 4.6
    },
    {
        id: 3,
        title: "Boutique Retail Pop-up",
        category: "Retail Pop-Up",
        location: "Newmarket",
        address: "789 Broadway, Newmarket, Auckland 1023, New Zealand",
        price: 200,
        capacity: 30,
        images: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop"
        ],
        amenities: ["WiFi", "Security System", "Display Units", "Storage", "Street Frontage"],
        rating: 4.9
    },
    {
        id: 4,
        title: "Creative Studio Space",
        category: "Workshop/Class Space",
        location: "Parnell",
        address: "321 Parnell Road, Parnell, Auckland 1052, New Zealand",
        price: 120,
        capacity: 25,
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop"
        ],
        amenities: ["WiFi", "Natural Light", "Parking", "Art Supplies Storage", "Easels"],
        rating: 4.7
    },
    {
        id: 5,
        title: "Event Hall",
        category: "Event Hall",
        location: "Auckland CBD",
        address: "100 Federal Street, Auckland CBD, Auckland 1010, New Zealand",
        price: 300,
        capacity: 100,
        images: [
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
        ],
        amenities: ["WiFi", "AV Equipment", "Catering Kitchen", "Stage", "Green Room"],
        rating: 4.8
    },
    {
        id: 6,
        title: "Yoga Studio",
        category: "Yoga/Wellness Studio",
        location: "Grey Lynn",
        address: "555 Great North Road, Grey Lynn, Auckland 1021, New Zealand",
        price: 90,
        capacity: 15,
        images: [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
        ],
        amenities: ["Sound System", "Mirrors", "Mats", "Changing Rooms", "Storage"],
        rating: 4.5
    },
    {
        id: 7,
        title: "Co-working Hub",
        category: "Co-working",
        location: "Viaduct Harbour",
        address: "200 Quay Street, Viaduct Harbour, Auckland 1010, New Zealand",
        price: 180,
        capacity: 40,
        images: [
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop"
        ],
        amenities: ["WiFi", "Meeting Rooms", "Printing", "Coffee Bar", "Harbour Views"],
        rating: 4.9
    },
    {
        id: 8,
        title: "Pop-up Restaurant",
        category: "Pop-up Restaurant",
        location: "Wynyard Quarter",
        address: "150 Halsey Street, Wynyard Quarter, Auckland 1010, New Zealand",
        price: 250,
        capacity: 60,
        images: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=400&fit=crop"
        ],
        amenities: ["Commercial Kitchen", "Dining Area", "Liquor License", "Outdoor Seating"],
        rating: 4.6
    }
];

export const featuredSpaces = mockSpaces.slice(0, 3);