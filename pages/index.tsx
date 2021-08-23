import React, { useEffect } from 'react';

import Card from '../components/home/Card';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/fetchActions';

interface FormProps {
  fetchWeather: Function;
  weather: Record<string, any>;
}

const Home = ({ fetchWeather, weather }: FormProps) => {
  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(./images/kurt-cotoaga-cqbLg3lZEpk-unsplash.jpg)`,
      }}
    >
      <div
        className="flex flex-col justify-center items-center w-screen"
        style={{ height: '95%' }}
      >
        {Object.keys(weather).map((e, i) => {
          return <Card city={e} key={i} weather={weather[e]} />;
        })}
      </div>
    </div>
  );
};

const mstp = (state: { weatherReducer: { weather: {} } }) => ({
  weather: state.weatherReducer.weather,
});

export default connect(mstp, { fetchWeather })(Home);
