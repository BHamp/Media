/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable no-console */
const faker = require("faker");
const db = require("./config.js");

let counter = 1;

const options = [
  "Overwhelmingly Positive",
  "Very Positive",
  "Positive",
  "Mostly Positive",
  "Mixed",
  "Mostly Negative",
  "Negative",
  "Very Negative",
  "Overwhelmingly Negative",
];

const imgOptions = [
  "https://steamcdn-a.akamaihd.net/steam/apps/976730/ss_db713bb61d75d218885c7eb0ae2ef8a9c32d486b.600x338.jpg?t=1594746021",
  "https://steamcdn-a.akamaihd.net/steam/apps/1174180/ss_d1a8f5a69155c3186c65d1da90491fcfd43663d9.600x338.jpg?t=1595367144",
  "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1590646979",
  "https://steamcdn-a.akamaihd.net/steam/apps/367520/ss_1552562bd322fb94fd8c5a6595e75f1e6808db41.1920x1080.jpg?t=1589274477",
  "https://steamcdn-a.akamaihd.net/steam/apps/413150/ss_a3ddf22cda3bd722df77dbdd58dbec393906b654.600x338.jpg?t=1595525376",
  "https://steamcdn-a.akamaihd.net/steam/apps/1091500/ss_9beef14102f164fa1163536d0fb3a51d0a2e4a3f.600x338.jpg?t=1593186553",
  "https://steamcdn-a.akamaihd.net/steam/apps/447150/ss_4328510337873fd9cddf7c342a7154e4e12c7f10.600x338.jpg?t=1568597976",
  "https://steamcdn-a.akamaihd.net/steam/apps/736260/ss_9eadb1cdc09f574d49d32a722d7bda5813c96a64.600x338.jpg?t=1593335145",
  "https://steamcdn-a.akamaihd.net/steam/apps/504230/ss_e0159d08620e917e632788c960d9593e5e7f431c.600x338.jpg?t=1580863858",
  "https://steamcdn-a.akamaihd.net/steam/apps/813780/ss_b42dec99b197fea9882abc333e2cfb0a77dd3ed2.600x338.jpg?t=1587593881",
  "https://steamcdn-a.akamaihd.net/steam/apps/22380/ss_e430a2c8a841d4bc32bd8207223a91e3dbe0cdea.600x338.jpg?t=1586905021",
  "https://steamcdn-a.akamaihd.net/steam/apps/846870/ss_5e54a75c0002b4a4b38d83a5eeb9b0ec48d3401e.600x338.jpg?t=1587033653",
  "https://steamcdn-a.akamaihd.net/steam/apps/1057090/ss_d3fd9f0084f168d94931c77fa2327295d15a1d78.600x338.jpg?t=1591117157",
  "https://steamcdn-a.akamaihd.net/steam/apps/629820/ss_d602af6556dd9fd7e8809e8265bf63f467d59098.600x338.jpg?t=1586468865",
  "https://steamcdn-a.akamaihd.net/steam/apps/250320/ss_c8c2cf0603f6a956fa4a514a051b0ace5081bed8.600x338.jpg?t=1593722673",
];

const vidOptions = [
  {
    video:
      "https://steamcdn-a.akamaihd.net/steam/apps/2028243/movie480.webm?t=1554408553",
    thumbnail:
      "https://steamcdn-a.akamaihd.net/steam/apps/2028243/movie.184x123.jpg?t=1554408553",
  },
  {
    video:
      "https://steamcdn-a.akamaihd.net/steam/apps/256659154/movie480.webm?t=1511366817",
    thumbnail:
      "https://steamcdn-a.akamaihd.net/steam/apps/256659154/movie.184x123.jpg?t=1511366817",
  },
  {
    video:
      "https://steamcdn-a.akamaihd.net/steam/apps/256785187/movie480_vp9.webm?t=1589339181",
    thumbnail:
      "https://steamcdn-a.akamaihd.net/steam/apps/256785187/movie.184x123.jpg?t=1589339181",
  },
  {
    video:
      "https://steamcdn-a.akamaihd.net/steam/apps/256679401/movie480.webm?t=1497589417",
    thumbnail:
      "https://steamcdn-a.akamaihd.net/steam/apps/256679401/movie.184x123.jpg?t=1497589417",
  },
  {
    video:
      "https://steamcdn-a.akamaihd.net/steam/apps/256776898/movie480.webm?t=1583434862",
    thumbnail:
      "https://steamcdn-a.akamaihd.net/steam/apps/256776898/movie.184x123.jpg?t=1583434862",
  },
  {
    video:
      "https://steamcdn-a.akamaihd.net/steam/apps/256660296/movie480.webm?t=1454099186",
    thumbnail:
      "https://steamcdn-a.akamaihd.net/steam/apps/256660296/movie.184x123.jpg?t=1454099186",
  },
  {
    video:
      "https://steamcdn-a.akamaihd.net/steam/apps/256724514/movie480.webm?t=1581426984",
    thumbnail:
      "https://steamcdn-a.akamaihd.net/steam/apps/256724514/movie.184x123.jpg?t=1581426984",
  },
];

const splashOptions = [
  "https://steamcdn-a.akamaihd.net/steam/apps/413150/header.jpg?t=1595525376",
  "https://steamcdn-a.akamaihd.net/steam/apps/374320/header.jpg?t=1588788422",
  "https://steamcdn-a.akamaihd.net/steam/apps/367520/header.jpg?t=1589274477",
  "https://steamcdn-a.akamaihd.net/steam/apps/1240440/header.jpg?t=1595603868",
];

const alyx = {
  proxyId: 237,
  summary: {
    title: "Half-Life: Alyx",
    splash:
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg?t=1594314571",
    description:
      "Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity’s only chance for survival.",
    reviews: { general: "Overwhelmingly Positive", total: 25219 },
    releaseDate: new Date("March 23, 2020"),
    developer: "Valve",
    publisher: "Valve",
    tags: [
      "Action",
      "Masterpiece",
      "Adventure",
      "VR",
      "Story Rich",
      "Atmospheric",
      "Singleplayer",
      "FPS",
      "Horror",
      "Sci-fi",
      "First-Person",
      "Shooter",
      "Aliens",
      "Beautiful",
      "Zombies",
      "Futuristic",
      "Great Soundtrack",
      "Psychological Horror",
      "Memes",
    ],
    percentage: 98,
  },
  media: {
    video: [
      {
        video:
          "https://steamcdn-a.akamaihd.net/steam/apps/256767815/movie480.webm?t=1583175736",
        thumbnail:
          "https://steamcdn-a.akamaihd.net/steam/apps/256767815/movie.184x123.jpg?t=1583175736",
      },
      {
        video:
          "https://steamcdn-a.akamaihd.net/steam/apps/256776744/movie480.webm?t=1583175743",
        thumbnail:
          "https://steamcdn-a.akamaihd.net/steam/apps/256776744/movie.184x123.jpg?t=1583175743",
      },
      {
        video:
          "https://steamcdn-a.akamaihd.net/steam/apps/256776745/movie480.webm?t=1583175752",
        thumbnail:
          "https://steamcdn-a.akamaihd.net/steam/apps/256776745/movie.184x123.jpg?t=1583175752",
      },
      {
        video:
          "https://steamcdn-a.akamaihd.net/steam/apps/256776746/movie480.webm?t=1583175759",
        thumbnail:
          "https://steamcdn-a.akamaihd.net/steam/apps/256776746/movie.184x123.jpg?t=1583175759",
      },
    ],

    images: [
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_d61365e93f20ceb5a94a1e5b2811cf504cbfa303.1920x1080.jpg?t=1594314571",
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_fe7066404a704aa20f7c6f251facb7aef2606bda.600x338.jpg?t=1594314571",
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_6868ae1644628f857e7df4b72a00fdf506f79c7f.600x338.jpg?t=1594314571",
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_4236773ab28112613bd7d4c6282331c861bc222a.600x338.jpg?t=1594314571",
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_5d228b092e93ff148e6a998c33e751fb968cc956.600x338.jpg?t=1594314571",
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_70fce3236bf252d3814f793744f648cbe35164e4.600x338.jpg?t=1594314571",
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_fcc7a64234b8b26cac3d69dfc4779dd438582f15.600x338.jpg?t=1594314571",
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_0360004603a7861cf6781d5449e641f916f1ee07.600x338.jpg?t=1594314571",
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_e5152f19710aaa91c4a4ab161785af3e1f8d850d.600x338.jpg?t=1594314571",
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_ac80dfaacaade35a1da835dadd52ab420607603b.600x338.jpg?t=1594314571",
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_ddc667aa2687543c0baa1a63c6bdb5fa59e0617e.600x338.jpg?t=1594314571",
      "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_4912f4c3d259a472e9898f0a7b1f819a533d2c1e.600x338.jpg?t=1594314571",
    ],
  },
};

const seeder = () => {
  while (counter < 101) {
    const pics = [];
    for (let i = 0; i < Math.ceil(Math.random() * 10); i += 1) {
      pics.push(imgOptions[Math.floor(Math.random() * 15)]);
    }

    const tagList = [];
    for (let i = 0; i < 20; i += 1) {
      tagList.push(faker.company.bsAdjective());
    }

    const vids = [];
    for (let i = 0; i < Math.ceil(Math.random() * 3); i += 1) {
      vids.push(vidOptions[Math.floor(Math.random() * 7)]);
    }

    const data = {
      proxyId: counter,
      summary: {
        title: faker.commerce.productName(),
        splash: splashOptions[Math.floor(Math.random() * 4)],
        description: faker.lorem.paragraph(),
        reviews: {
          general: options[Math.floor(Math.random() * 9)],
          total: faker.random.number(),
        },
        releaseDate: faker.date.past(),
        developer: faker.company.companyName(),
        publisher: faker.company.companyName(),
        tags: tagList,
        percentage: Math.ceil(Math.random() * 100),
      },
      media: {
        video: vids,
        images: pics,
      },
    };
    db.addNewGame(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`successfully inserted ${counter}`);
      }
    });
    counter += 1;
  }

  db.addNewGame(alyx, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`successfully inserted ${counter}`);
    }
  });
};

seeder();
