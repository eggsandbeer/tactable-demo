import { FETCH_WEATHER } from './types';

export const fetchWeather = () => async (dispatch) => {
  const ids = {
    Squamish: 5907106,
    Vancouver: 6173331,
    Toronto: 6167865,
  };

  // Need err handling
  const fetches = await Promise.all(
    Object.values(ids).map((e) =>
      fetch(
        // key should be env variable.
        `https://api.openweathermap.org/data/2.5/forecast?id=${e}&appid=1d505a9886d02c8a796771bec089b0e5`
      ).then((e) => e.json())
    )
  );

  dispatch({
    type: FETCH_WEATHER,
    payload: {
      // iterating through object does not guarantee order, so I chose manually
      Squamish: fetches[0],
      Vancouver: fetches[1],
      Toronto: fetches[2],
    },
  });
};
