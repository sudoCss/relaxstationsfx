import rainOgg from "./assets/sounds/nature/rain.ogg";
import rainMp3 from "./assets/sounds/nature/rain.mp3";
import birdsOgg from "./assets/sounds/nature/birds.ogg";
import birdsMp3 from "./assets/sounds/nature/birds.mp3";
import stormOgg from "./assets/sounds/nature/storm.ogg";
import stormMp3 from "./assets/sounds/nature/storm.mp3";
import streamOgg from "./assets/sounds/nature/stream.ogg";
import streamMp3 from "./assets/sounds/nature/stream.mp3";
import summerNightOgg from "./assets/sounds/nature/summer-night.ogg";
import summerNightMp3 from "./assets/sounds/nature/summer-night.mp3";
import wavesOgg from "./assets/sounds/nature/waves.ogg";
import wavesMp3 from "./assets/sounds/nature/waves.mp3";
import windOgg from "./assets/sounds/nature/wind.ogg";
import windMp3 from "./assets/sounds/nature/wind.mp3";

import boatOgg from "./assets/sounds/travel/boat.ogg";
import boatMp3 from "./assets/sounds/travel/boat.mp3";
import cityOgg from "./assets/sounds/travel/city.ogg";
import cityMp3 from "./assets/sounds/travel/city.mp3";
import trainOgg from "./assets/sounds/travel/train.ogg";
import trainMp3 from "./assets/sounds/travel/train.mp3";

import coffeeShopOgg from "./assets/sounds/interiors/coffee-shop.ogg";
import coffeeShopMp3 from "./assets/sounds/interiors/coffee-shop.mp3";
import fireplaceOgg from "./assets/sounds/interiors/fireplace.ogg";
import fireplaceMp3 from "./assets/sounds/interiors/fireplace.mp3";

import pinkNoiseOgg from "./assets/sounds/noise/pink-noise.ogg";
import pinkNoiseMp3 from "./assets/sounds/noise/pink-noise.mp3";
import whiteNoiseOgg from "./assets/sounds/noise/white-noise.ogg";
import whiteNoiseMp3 from "./assets/sounds/noise/white-noise.mp3";

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
        soundSource: { ogg: rainOgg, mp3: rainMp3 },
      },
      {
        soundId: 12,
        soundName: {
          ar: "عاصفة",
          en: "Storm",
        },
        soundSymbol: stormSymbol,
        soundSource: { ogg: stormOgg, mp3: stormMp3 },
      },
      {
        soundId: 13,
        soundName: {
          ar: "رياح",
          en: "Wind",
        },
        soundSymbol: windSymbol,
        soundSource: { ogg: windOgg, mp3: windMp3 },
      },
      {
        soundId: 14,
        soundName: {
          ar: "أمواج",
          en: "Waves",
        },
        soundSymbol: wavesSymbol,
        soundSource: { ogg: wavesOgg, mp3: wavesMp3 },
      },
      {
        soundId: 15,
        soundName: {
          ar: "مجرى",
          en: "Stream",
        },
        soundSymbol: streamSymbol,
        soundSource: { ogg: streamOgg, mp3: streamMp3 },
      },
      {
        soundId: 16,
        soundName: {
          ar: "عصافير",
          en: "Birds",
        },
        soundSymbol: birdsSymbol,
        soundSource: { ogg: birdsOgg, mp3: birdsMp3 },
      },
      {
        soundId: 17,
        soundName: {
          ar: "ليلة صيفية",
          en: "Summer Night",
        },
        soundSymbol: summerNightSymbol,
        soundSource: { ogg: summerNightOgg, mp3: summerNightMp3 },
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
        soundSource: { ogg: boatOgg, mp3: boatMp3 },
      },
      {
        soundId: 19,
        soundName: {
          ar: "مدينة",
          en: "City",
        },
        soundSymbol: citySymbol,
        soundSource: { ogg: cityOgg, mp3: cityMp3 },
      },
      {
        soundId: 20,
        soundName: {
          ar: "قطار",
          en: "Train",
        },
        soundSymbol: trainSymbol,
        soundSource: { ogg: trainOgg, mp3: trainMp3 },
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
        soundSource: { ogg: coffeeShopOgg, mp3: coffeeShopMp3 },
      },
      {
        soundId: 22,
        soundName: {
          ar: "مدفأة",
          en: "Fireplace",
        },
        soundSymbol: fireplaceSymbol,
        soundSource: { ogg: fireplaceOgg, mp3: fireplaceMp3 },
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
        soundSource: { ogg: pinkNoiseOgg, mp3: pinkNoiseMp3 },
      },
      {
        soundId: 24,
        soundName: {
          ar: "ضجيج أبيض",
          en: "White Noise",
        },
        soundSymbol: whiteNoiseSymbol,
        soundSource: { ogg: whiteNoiseOgg, mp3: whiteNoiseMp3 },
      },
    ],
  },
];
