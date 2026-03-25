const servicePhotoDirectory = "/200202%20St%20Johns%20Service%20%28web%20size%29";

function servicePhoto(fileName) {
  return `${servicePhotoDirectory}/${encodeURIComponent(fileName)}`;
}

export const siteImages = {
  homeHero: servicePhoto("_X3A7242 web.jpg"),
  homeWelcome: servicePhoto("_X3A7339 web.jpg"),
  homeGalleryTall: servicePhoto("_X3A7258 web.jpg"),
  homeGalleryWide: servicePhoto("_X3A7335 web.jpg"),
  homeGalleryLowerLeft: servicePhoto("_X3A7378 web.jpg"),
  homeGalleryLowerRight: servicePhoto("_X3A7249 web.jpg"),
  aboutHero: servicePhoto("_X3A7251 web.jpg"),
  aboutStory: servicePhoto("_X3A7347 web.jpg"),
  communityHero: servicePhoto("_X3A7224 web.jpg"),
  communityShared: servicePhoto("_X3A7246 web.jpg"),
  contactHero: servicePhoto("_X3A7388 web.jpg"),
  lifeEventsHero: servicePhoto("_X3A7239 web.jpg"),
  lifeEventsWedding: servicePhoto("_X3A7371 web.jpg"),
  newsEventsHero: servicePhoto("_X3A7208 web.jpg"),
  safeguardingHero: servicePhoto("_X3A7219 web.jpg"),
  worshipHero: servicePhoto("_X3A7244 web.jpg"),
  worshipWelcome: servicePhoto("_X3A7253 web.jpg")
};

export const featureStripImagesByRoute = {
  home: [
    servicePhoto("_X3A7220 web.jpg"),
    servicePhoto("_X3A7292 web.jpg"),
    servicePhoto("_X3A7332 web.jpg")
  ],
  about: [
    servicePhoto("_X3A7241 web.jpg"),
    servicePhoto("_X3A7270 web.jpg"),
    servicePhoto("_X3A7317 web.jpg")
  ],
  community: [
    servicePhoto("_X3A7202 web.jpg"),
    servicePhoto("_X3A7293 web.jpg"),
    servicePhoto("_X3A7338 web.jpg")
  ],
  contact: [
    servicePhoto("_X3A7170 web.jpg"),
    servicePhoto("_X3A7282 web.jpg"),
    servicePhoto("_X3A7388 web.jpg")
  ],
  "life-events": [
    servicePhoto("_X3A7205 web.jpg"),
    servicePhoto("_X3A7318 web.jpg"),
    servicePhoto("_X3A7340 web.jpg")
  ],
  "news-events": [
    servicePhoto("_X3A7223 web.jpg"),
    servicePhoto("_X3A7325 web.jpg"),
    servicePhoto("_X3A7378 web.jpg")
  ],
  safeguarding: [
    servicePhoto("_X3A7178 web.jpg"),
    servicePhoto("_X3A7249 web.jpg"),
    servicePhoto("_X3A7335 web.jpg")
  ],
  worship: [
    servicePhoto("_X3A7208 web.jpg"),
    servicePhoto("_X3A7326 web.jpg"),
    servicePhoto("_X3A7333 web.jpg")
  ]
};

export const sourcePageMediaReplacements = {
  "": [
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/eeeded803_friern_barnet_st_john231211_1.jpg",
      siteImages.homeHero
    ],
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/661f9671a_friern_barnet_st_john231211_.jpg",
      siteImages.homeWelcome
    ]
  ],
  about: [
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/43e2591fd_friern_barnet_st_john021217_8026.png",
      siteImages.aboutHero
    ],
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/bb83d17ec_friern_barnet_st_john021217_41144.png",
      siteImages.aboutStory
    ]
  ],
  community: [
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/d395558b6_st-johns-img-019-eef005.png",
      siteImages.communityHero
    ],
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/5e85d32fe_st-johns-img-003-st-johns.png",
      siteImages.communityShared
    ]
  ],
  contact: [
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/eeeded803_friern_barnet_st_john231211_1.jpg",
      siteImages.contactHero
    ]
  ],
  "life-events": [
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/2d9fed3f4_st-johns-img-011-eef005.png",
      siteImages.lifeEventsHero
    ],
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/43e2591fd_friern_barnet_st_john021217_8026.png",
      siteImages.lifeEventsWedding
    ]
  ],
  "news-events": [
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/661f9671a_friern_barnet_st_john231211_.jpg",
      siteImages.newsEventsHero
    ]
  ],
  safeguarding: [
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/f1f2cf791_st-johns-img-010-eef005.png",
      siteImages.safeguardingHero
    ]
  ],
  worship: [
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/d06105457_st-johns-img-010-eef005.png",
      siteImages.worshipHero
    ],
    [
      "https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/d395558b6_st-johns-img-019-eef005.png",
      siteImages.worshipWelcome
    ]
  ]
};
