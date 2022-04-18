import rain from "./assets/sounds/nature/rain.ogg";
import birds from "./assets/sounds/nature/birds.ogg";
import storm from "./assets/sounds/nature/storm.ogg";
import stream from "./assets/sounds/nature/stream.ogg";
import summerNight from "./assets/sounds/nature/summer-night.ogg";
import waves from "./assets/sounds/nature/waves.ogg";
import wind from "./assets/sounds/nature/wind.ogg";

import boat from "./assets/sounds/travel/boat.ogg";
import city from "./assets/sounds/travel/city.ogg";
import train from "./assets/sounds/travel/train.ogg";

import coffeeShop from "./assets/sounds/interiors/coffee-shop.ogg";
import fireplace from "./assets/sounds/interiors/fireplace.ogg";

import pinkNoise from "./assets/sounds/noise/pink-noise.ogg";
import whiteNoise from "./assets/sounds/noise/white-noise.ogg";

// ===================================== \\
import rainSymbol from "./assets/icons/nature/rain-symbolic.svg";
import birdsSymbol from "./assets/icons/nature/birds-symbolic.svg";
import stormSymbol from "./assets/icons/nature/storm-symbolic.svg";
import streamSymbol from "./assets/icons/nature/stream-symbolic.svg";
import summerNightSymbol from "./assets/icons/nature/summer-night-symbolic.svg";
import wavesSymbol from "./assets/icons/nature/waves-symbolic.svg";
import windSymbol from "./assets/icons/nature/wind-symbolic.svg";

import boatSymbol from "./assets/icons/travel/boat-symbolic.svg";
import citySymbol from "./assets/icons/travel/city-symbolic.svg";
import trainSymbol from "./assets/icons/travel/train-symbolic.svg";

import coffeeShopSymbol from "./assets/icons/interiors/coffee-shop-symbolic.svg";
import fireplaceSymbol from "./assets/icons/interiors/fireplace-symbolic.svg";

import pinkNoiseSymbol from "./assets/icons/noise/pink-noise-symbolic.svg";
import whiteNoiseSymbol from "./assets/icons/noise/white-noise-symbolic.svg";

export default [
  {
    id: 1,
    name: {
      ar: "طبيعة",
      en: "Nature",
    },
    sounds: [
      {
        soundId: 11,
        soundName: {
          ar: "مطر",
          en: "Rain",
        },
        soundSymbol: rainSymbol,
        soundSource: rain,
      },
      {
        soundId: 12,
        soundName: {
          ar: "عاصفة",
          en: "Storm",
        },
        soundSymbol: stormSymbol,
        soundSource: storm,
      },
      {
        soundId: 13,
        soundName: {
          ar: "رياح",
          en: "Wind",
        },
        soundSymbol: windSymbol,
        soundSource: wind,
      },
      {
        soundId: 14,
        soundName: {
          ar: "أمواج",
          en: "Waves",
        },
        soundSymbol: wavesSymbol,
        soundSource: waves,
      },
      {
        soundId: 15,
        soundName: {
          ar: "مجرى",
          en: "Stream",
        },
        soundSymbol: streamSymbol,
        soundSource: stream,
      },
      {
        soundId: 16,
        soundName: {
          ar: "عصافير",
          en: "Birds",
        },
        soundSymbol: birdsSymbol,
        soundSource: birds,
      },
      {
        soundId: 17,
        soundName: {
          ar: "ليلة صيفية",
          en: "Summer Night",
        },
        soundSymbol: summerNightSymbol,
        soundSource: summerNight,
      },
    ],
  },
  {
    id: 2,
    name: {
      ar: "سفر",
      en: "Travel",
    },
    sounds: [
      {
        soundId: 18,
        soundName: {
          ar: "قارب",
          en: "Boat",
        },
        soundSymbol: boatSymbol,
        soundSource: boat,
      },
      {
        soundId: 19,
        soundName: {
          ar: "مدينة",
          en: "City",
        },
        soundSymbol: citySymbol,
        soundSource: city,
      },
      {
        soundId: 20,
        soundName: {
          ar: "قطار",
          en: "Train",
        },
        soundSymbol: trainSymbol,
        soundSource: train,
      },
    ],
  },
  {
    id: 3,
    name: {
      ar: "داخلي",
      en: "Interiors",
    },
    sounds: [
      {
        soundId: 21,
        soundName: {
          ar: "مقهى",
          en: "Coffee Shop",
        },
        soundSymbol: coffeeShopSymbol,
        soundSource: coffeeShop,
      },
      {
        soundId: 22,
        soundName: {
          ar: "مدفأة",
          en: "Fireplace",
        },
        soundSymbol: fireplaceSymbol,
        soundSource: fireplace,
      },
    ],
  },
  {
    id: 4,
    name: {
      ar: "ضجيج",
      en: "Noise",
    },
    sounds: [
      {
        soundId: 23,
        soundName: {
          ar: "ضجيج زهري",
          en: "Pink Noise",
        },
        soundSymbol: pinkNoiseSymbol,
        soundSource: pinkNoise,
      },
      {
        soundId: 24,
        soundName: {
          ar: "ضجيج أبيض",
          en: "White Noise",
        },
        soundSymbol: whiteNoiseSymbol,
        soundSource: whiteNoise,
      },
    ],
  },
];
