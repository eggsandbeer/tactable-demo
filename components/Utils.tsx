import {
  WiDayCloudy,
  WiDayFog,
  WiDayRain,
  WiDaySnow,
  WiDaySunny,
  WiDayThunderstorm,
  WiNightClear,
  WiNightCloudy,
  WiNightFog,
  WiNightRain,
  WiNightSnow,
  WiNightThunderstorm,
} from 'react-icons/wi';

import React from 'react';
import { RiDrizzleLine } from 'react-icons/ri';

// conditions based on: https://openweathermap.org/weather-conditions
export const determineIcon = (
  idOfWeather: number,
  day: boolean,
  classes?: string
) => {
  const firstDigit = (idOfWeather + '')[0];

  if (idOfWeather === 800) {
    return day ? (
      <WiDaySunny className={classes} />
    ) : (
      <WiNightClear className={classes} />
    );
  }

  switch (firstDigit) {
    case '2':
      return day ? (
        <WiDayThunderstorm className={classes} />
      ) : (
        <WiNightThunderstorm className={classes} />
      );
    case '3':
      return <RiDrizzleLine className={classes} />;
    case '5':
      return day ? (
        <WiDayRain className={classes} />
      ) : (
        <WiNightRain className={classes} />
      );
    case '6':
      return day ? (
        <WiDaySnow className={classes} />
      ) : (
        <WiNightSnow className={classes} />
      );
    case '7':
      return day ? (
        <WiDayFog className={classes} />
      ) : (
        <WiNightFog className={classes} />
      );
    case '8':
      return day ? (
        <WiDayCloudy className={classes} />
      ) : (
        <WiNightCloudy className={classes} />
      );
  }
};

export const determineGif = (idOfWeather: number) => {
  const firstDigit = (idOfWeather + '')[0];

  if (idOfWeather === 800) {
    return ['', './images/clear.gif'];
  }

  switch (firstDigit) {
    case '2':
      return ['', './images/thunderstorm.gif'];
    case '3':
      return ['', './images/drizzle.gif'];
    case '5':
      return ['bg-left-bottom', './images/rain.gif'];
    case '6':
      return ['', './public/images/snow.gif'];
    case '7':
      return ['', './images/fog.gif'];
    case '8':
      return ['', './images/clouds.gif'];
    default:
      return ['', './images/clear.gif'];
  }
};
