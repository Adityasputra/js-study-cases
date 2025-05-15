/**
 * Groups laptop items by category, computing total and average prices per category.
 *
 * @param {Array<{
 *   brand: string,
 *   laptopCode: string,
 *   price: number,
 *   category: string
 * }>} array - Array of laptop items.
 * @returns {{
 *   [category: string]: {
 *     totalPrice: number,
 *     averagePrice: number,
 *     laptop: string[]
 *   }
 * }} Object grouped by category with summary data.
 */
const groupByCategory = function (array) {
  const result = {};

  for (const item of array) {
    const { category, price, brand, laptopCode } = item;

    if (!result[category]) {
      result[category] = {
        totalPrice: 0,
        averagePrice: 0,
        laptop: [],
      };
    }

    result[category].totalPrice += price;
    result[category].laptop.push(`${brand} ${laptopCode}`);
  }

  for (const category in result) {
    const count = result[category].laptop.length;
    result[category].averagePrice = result[category].totalPrice / count;
  }

  return result;
};

/**
 * Groups laptop items by category using Array.prototype.reduce,
 * computing total and average prices per category.
 *
 * @param {Array<{
 *   brand: string,
 *   laptopCode: string,
 *   price: number,
 *   category: string
 * }>} array - Array of laptop items.
 * @returns {{
 *   [category: string]: {
 *     totalPrice: number,
 *     averagePrice: number,
 *     laptop: string[]
 *   }
 * }} Object grouped by category with summary data.
 */
const groupByCategoryWithReduce = (array) => {
  const result = array.reduce((acc, item) => {
    const { category, price, brand, laptopCode } = item;

    if (!acc[category]) {
      acc[category] = {
        totalPrice: 0,
        averagePrice: 0,
        laptop: [],
      };
    }

    acc[category].totalPrice += price;
    acc[category].laptop.push(`${brand} ${laptopCode}`);

    return acc;
  }, {});

  for (const category in result) {
    const count = result[category].laptop.length;
    result[category].averagePrice = result[category].totalPrice / count;
  }

  return result;
};

let items = [
  {
    brand: "SNSV",
    laptopCode: "G501JX",
    price: 20000000,
    category: "gaming",
  },
  {
    brand: "SNSV",
    laptopCode: "GL752VW",
    price: 25000000,
    category: "gaming",
  },
  {
    brand: "LoveMe",
    laptopCode: "Legion 4",
    price: 15000000,
    category: "gaming",
  },
  {
    brand: "LoveMe",
    laptopCode: "Legion 6",
    price: 23000000,
    category: "gaming",
  },
  {
    brand: "SNSV",
    laptopCode: "jenbuk ux421",
    price: 12000000,
    category: "business",
  },
  {
    brand: "Pear",
    laptopCode: "mekbuk pro m99",
    price: 38000000,
    category: "business",
  },
  {
    brand: "LoveMe",
    laptopCode: "gaya 9i",
    price: 28000000,
    category: "business",
  },
  {
    brand: "nyangsang",
    laptopCode: "Galaksi book",
    price: 30000000,
    category: "business",
  },
];

console.log(groupByCategory(items));
console.log(groupByCategoryWithReduce(items));
/*
  totalPrice = number
  average price = number
  laptop = contoh [SNSV pipobuk k521, PH papiliun dk14xxx]
  expected output
  {
    gaming: {
      totalPrice: 83000000,
      averagePrice: 20750000,
      laptop: [
        'SNSV G501JX',
        'SNSV GL752VW',
        'LoveMe Legion 4',
        'LoveMe Legion 6'
      ]
    },
    business: {
      totalPrice: 108000000,
      averagePrice: 27000000,
      laptop: [
        'SNSV jenbuk ux421',
        'Pear mekbuk pro m99',
        'LoveMe gaya 9i',
        'nyangsang Galaksi book'
      ]
    }
  }
*/
