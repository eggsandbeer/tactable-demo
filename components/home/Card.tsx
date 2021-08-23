import WeatherIcon from './WeatherIcon';
import React from 'react';
import { RiMapPinLine } from 'react-icons/ri';
import MoreInfo from './MoreInfo';
import Tomorrow from './Tomorrow';
import { determineGif } from '../Utils';

interface FormProps {
  city: string;
  weather: any;
}

function Card({ city, weather }: FormProps) {
  // find min. and max. temperatures from all timestamps from today
  const findMinAndMaxTemps = (list: any[]): [number, number] => {
    const d = new Date();

    const today = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    let min: number[] = [],
      max: number[] = [];

    list.forEach((e) => {
      if (`${e.dt_txt[8]}${e.dt_txt[9]}` === today.toString()) {
        min.push(e.main.temp_min);
        max.push(e.main.temp_max);
      }
    });

    if (min.length === 0 && max.length === 0) {
      min.push(list[0].main.temp_min);
      max.push(list[0].main.temp_max);
    }

    return [
      Math.round(Math.min(...min) - 273.15),
      Math.round(Math.max(...max) - 273.15),
    ];
  };

  let temperature = 0,
    minTemperature = 0,
    maxTemperature = 0,
    stateOfWeather = '',
    feelsLike = 0,
    speed = 0,
    deg = 0,
    idOfWeather = 0,
    day = true,
    list = [];

  if (weather?.list) {
    temperature = Math.round(weather.list[0].main.temp - 273.15);
    [minTemperature, maxTemperature] = findMinAndMaxTemps(weather.list);
    stateOfWeather = weather.list[0].weather[0].main;
    feelsLike = Math.round(weather.list[0].main.temp - 273.15);
    speed = weather.list[0].wind.speed;
    deg = weather.list[0].wind.deg;
    idOfWeather = weather.list[0].weather[0].id;
    day = weather.list[0].sys.pod === 'd';
    list = weather.list;
  }

  const [classes, url] = determineGif(idOfWeather);

  return (
    <div className="h-40 w-full sm:w-410px">
      <div className="flex h-40 w-full sm:w-410px">
        <div
          className={`text-white m-2 rounded-lg flex-grow bg-left-bottom ${classes}`}
          style={{
            backgroundImage: `url(${url})`,
          }}
        >
          <div className="flex w-full h-full divide-x divide-gray-400 ">
            <div className="w-9/12">
              <div
                className="mt-2 ml-2 p-2 rounded-lg inline-block text-xs"
                style={{
                  boxShadow: '0 0 15px 1px rgba(0, 0, 0, 0.75)',
                  backdropFilter: 'blur(2px)',
                }}
              >
                <div className="flex items-center">
                  <RiMapPinLine />
                  <div className="ml-2">{city}</div>
                </div>
              </div>
              <div className="w-full flex justify-around items-center">
                <WeatherIcon
                  stateOfWeather={stateOfWeather}
                  idOfWeather={idOfWeather}
                  day={day}
                />
                <div className="flex flex-col text-center">
                  <div className="text-5xl">{temperature}°</div>
                  <div className="text-lg">
                    {minTemperature}/{maxTemperature}°
                  </div>
                </div>
                <MoreInfo speed={speed} deg={deg} feelsLike={feelsLike} />
              </div>
            </div>
            <Tomorrow idOfWeather={idOfWeather} day={day} list={list} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
