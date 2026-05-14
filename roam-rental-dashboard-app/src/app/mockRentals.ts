import { Rental } from './sharedTypes/rental'

export interface MockRental extends Rental {
  categories: string[]
}

export const mockRentals: MockRental[] = [
  {
    id: 101,
    name: 'Summit Trail Camper',
    description: 'Compact towable camper with solar charging and a fold-out galley.',
    categories: ['utility-trailer', 'camper', 'compact'],
    images: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 102,
    name: 'Lakeside Tow Rig',
    description: 'Tow vehicle configured for weekend trips and light adventure gear.',
    categories: ['tow-vehicle', 'truck', 'weekend'],
    images: [
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 103,
    name: 'Desert Gear Trailer',
    description: 'Utility trailer with storage for bikes, boards, and camping equipment.',
    categories: ['utility-trailer', 'gear', 'storage'],
    images: [
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 104,
    name: 'Family Road Suite',
    description: 'Roomy travel setup for family routes, remote work, and long weekends.',
    categories: ['other', 'family', 'travel'],
    images: [],
  },
]
