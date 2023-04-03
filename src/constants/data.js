import images from './images';

const wines = [
  {
    title: 'Heineken',
    price: '1201 FCFA',
    tags: 'AU | Bottle',
  },
  {
    title: 'Beninoise',
    price: '604 FCFA',
    tags: 'AU | Bottle',
  },
  {
    title: 'flags',
    price: '802 FCFA',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Beaufort / Castel',
    price: '601 FCFA',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Guiness / Pils',
    price: '799 FCFA',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '3054 FCFA',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '4510FCFA',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '3508FCFA',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '4504FCFA',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '4810FCFA',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Des équipements de qualité',
    subtitle: "Nos équipements nous ont permis d'être le meilleur motel en matière d'équipement ",
  },
  {
    imgUrl: images.award01,
    title: 'Le meilleur des conforts',
    subtitle: 'une bonne aération et des sièges confortables.',
  },
  {
    imgUrl: images.award05,
    title: 'Meilleur ambience',
    subtitle: "L'ambience des serveurs et l'accueil chaleureux est l'une des meilleure qualité du motel",
  },
  {
    imgUrl: images.award03,
    title: 'Meilleur cadre',
    subtitle: "GBOKOUNTCHAN respecte est l'un des motel ayant un meilleur cadre",
  },
];

export default { wines, cocktails, awards };
