export const initialSeatingLayout = [
  {
    section: 'Left Lower Foyer',
    rows: {
      A: Array.from({ length: 8 }, (_, i) => ({ number: 36 + (8 - 1 - i), status: 'available' })),
      B: Array.from({ length: 9 }, (_, i) => ({ number: 36 + (9 - 1 - i), status: 'available' })),
      C: Array.from({ length: 11 }, (_, i) => ({ number: 36 + (11 - 1 - i), status: 'available' })),
      D: Array.from({ length: 12 }, (_, i) => ({ number: 36 + (12 - 1 - i), status: 'available' })),
      E: Array.from({ length: 12 }, (_, i) => ({ number: 36 + (12 - 1 - i), status: 'available' })),
      F: Array.from({ length: 12 }, (_, i) => ({ number: 36 + (12 - 1 - i), status: 'available' })),
      G: Array.from({ length: 12 }, (_, i) => ({ number: 36 + (12 - 1 - i), status: 'available' })),
      H: Array.from({ length: 11 }, (_, i) => ({ number: 36 + (11 - 1 - i), status: 'available' })),
      J: Array.from({ length: 10 }, (_, i) => ({ number: 36 + (10 - 1 - i), status: 'available' })),
      K: Array.from({ length: 8 }, (_, i) => ({ number: 36 + (8 - 1 - i), status: 'available' })),
      L: Array.from({ length: 5 }, (_, i) => ({ number: 36 + (5 - 1 - i), status: 'available' })),
    },
    style: {
      marginTop: '20px',
      marginRight: 'md:10px',
    },
  },
  {
    section: 'Center Lower Foyer',
    rows: {
      A: Array.from({ length: 19 }, (_, i) => ({ number: 15 + (19 - 1 - i), status: 'available' })),
      B: Array.from({ length: 20 }, (_, i) => ({ number: 15 + (20 - 1 - i), status: 'available' })),
      C: Array.from({ length: 19 }, (_, i) => ({ number: 15 + (19 - 1 - i), status: 'available' })),
      D: Array.from({ length: 20 }, (_, i) => ({ number: 15 + (20 - 1 - i), status: 'available' })),
      E: Array.from({ length: 17 }, (_, i) => ({ number: 15 + (17 - 1 - i), status: 'available' })),
      F: Array.from({ length: 18 }, (_, i) => ({ number: 15 + (18 - 1 - i), status: 'available' })),
      G: Array.from({ length: 17 }, (_, i) => ({ number: 15 + (17 - 1 - i), status: 'available' })),
      H: Array.from({ length: 18 }, (_, i) => ({ number: 15 + (18 - 1 - i), status: 'available' })),
      J: Array.from({ length: 15 }, (_, i) => ({ number: 15 + (15 - 1 - i), status: 'available' })),
      K: Array.from({ length: 16 }, (_, i) => ({ number: 15 + (16 - 1 - i), status: 'available' })),
    },
    style: {
      marginTop: '20px',
    },
  },
  {
    section: 'Right Lower Foyer',
    rows: {
      A: Array.from({ length: 8 }, (_, i) => ({ number: 1 + (8 - 1 - i), status: 'available' })),
      B: Array.from({ length: 10 }, (_, i) => ({ number: 1 + (10 - 1 - i), status: 'available' })),
      C: Array.from({ length: 11 }, (_, i) => ({ number: 1 + (11 - 1 - i), status: 'available' })),
      D: Array.from({ length: 12 }, (_, i) => ({ number: 1 + (12 - 1 - i), status: 'available' })),
      E: Array.from({ length: 12 }, (_, i) => ({ number: 1 + (12 - 1 - i), status: 'available' })),
      F: Array.from({ length: 12 }, (_, i) => ({ number: 1 + (12 - 1 - i), status: 'available' })),
      G: Array.from({ length: 12 }, (_, i) => ({ number: 1 + (12 - 1 - i), status: 'available' })),
      H: Array.from({ length: 11 }, (_, i) => ({ number: 1 + (11 - 1 - i), status: 'available' })),
      J: Array.from({ length: 10 }, (_, i) => ({ number: 1 + (10 - 1 - i), status: 'available' })),
      K: Array.from({ length: 8 }, (_, i) => ({ number: 1 + (8 - 1 - i), status: 'available' })),
      L: Array.from({ length: 5 }, (_, i) => ({ number: 1 + (5 - 1 - i), status: 'available' })),
    },
    style: {
      marginTop: '20px',
      marginLeft: 'md:10px',
    },
  },
  {
    section: 'Left Balcony',
    rows: {
      AA: Array.from({ length: 14 }, (_, i) => ({ number: 50 - i, status: 'available' })),
      BB: Array.from({ length: 14 }, (_, i) => ({ number: 50 - i, status: 'available' })),
      CC: Array.from({ length: 14 }, (_, i) => ({ number: 50 - i, status: 'available' })),
      DD: Array.from({ length: 13 }, (_, i) => ({ number: 49 - i, status: 'available' })),
      EE: Array.from({ length: 12 }, (_, i) => ({ number: 48 - i, status: 'available' })),
    },
    style: { marginRight: 'md:10px' },
  },
  {
    section: 'Center Balcony',
    rows: {
      AA: Array.from({ length: 22 }, (_, i) => ({ number: 36 - i, status: 'available' })),
      BB: Array.from({ length: 22 }, (_, i) => ({ number: 36 - i, status: 'available' })),
      CC: Array.from({ length: 22 }, (_, i) => ({ number: 36 - i, status: 'available' })),
      DD: Array.from({ length: 21 }, (_, i) => ({ number: 35 - i, status: 'available' })),
    },
    style: { },
  },
  {
    section: 'Right Balcony',
    rows: {
      AA: Array.from({ length: 13 }, (_, i) => ({ number: 13 - i, status: 'available' })),
      BB: Array.from({ length: 13 }, (_, i) => ({ number: 13 - i, status: 'available' })),
      CC: Array.from({ length: 13 }, (_, i) => ({ number: 13 - i, status: 'available' })),
      DD: Array.from({ length: 13 }, (_, i) => ({ number: 13 - i, status: 'available' })),
      EE: Array.from({ length: 12 }, (_, i) => ({ number: 12 - i, status: 'available' })),
    },
    style: { marginLeft: 'md:10px' },
  },
];