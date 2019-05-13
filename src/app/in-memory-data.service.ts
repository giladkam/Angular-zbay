import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 1,
        name: 'Bathroom Toilet Seat',
        title: 'Bathroom Toilet Seat Cushion Closestool Washable',
        description: `Warm,comfortable,Material mild,does not irritate the skin.
        Suitable for most toilet.
        Thickened and washable
        Made from durable material and nice design.
        It's healthy for you, warm your skin and easy to clean
        Stylish simple exterior design,Create a better environment and mood.
        Fine workmanship: it reflects its practicability and durability is more excellent.`,
        price: 3,
        location: 'israel',
        category: 'home',
        publishDate: new Date('2019/20/03'), 
        imageUrl: 'https://i.ebayimg.com/images/g/3GYAAOSwcttcJ3Jm/s-l1600.jpg'
      },
      {
        id: 2,
        name: 'Old Hand Made Traditional Persian Rug',
        title: 'Old Hand Made Traditional Persian Rug Oriental Wool',
        description: `very clean. overall uneven faded and low piles or wear.,
         with colour-run on white colour. faded and colours changed in some part, 
         it has worn patches areas Please study the photos Photos.\
         The Rug is not perfectly rectangular or evenly straight due to being handmade`,
        price: 100,
        location: 'Iran',
        category: 'home',
        publishDate: new Date('2019/26/03'), 
        imageUrl: 'https://i.ebayimg.com/images/g/mSkAAOSwCtJcoRW7/s-l1600.jpg'
      },
      {
        id: 3,
        name: 'Spread hummus not hate',
        title: 'Spread hummus not hate t-shirt',
        description: `Spread hummus not hate, t-shirt peace love heart vegetarian vegan food pun`,
        price: 6,
        location: 'israel',
        category: 'clothing',
        publishDate: new Date('2019/05/01'), 
        imageUrl: 'https://i.ebayimg.com/images/g/Af0AAOSwFMdajCv~/s-l1600.jpg'
      },
      {
        id: 4,
        name: "Game of Thrones Daenerys Targaryen mug",
        title: "Game of Thrones Daenerys Targaryen Mother of Dragons Coffee Mugs Stainless Steel",
        price: "73",
        location: "moscow",
        category: "home",
        description: "ifics Condition:	 New: A brand-new, unused, unopened, undamaged item in its original packaging (where packaging is applicable). Packaging should be the same as what is found in a retail store, unless the item is handmade or was packaged by the manufacturer in non-retail packaging, such as an unprinted box or plastic bag",
        publishDate: "2019-05-07T20:33:27.163Z",
        imageUrl: "https://i.ebayimg.com/images/g/z5wAAOSwYmZXKu5m/s-l1600.jpg"
      }
    ];
    return {products};
  }
}