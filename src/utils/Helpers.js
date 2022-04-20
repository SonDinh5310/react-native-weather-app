const axios = require('axios');

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const dateToWeekdays = (date) => {
    return weekdays[new Date(date * 1000).getDay()];
};

export const decimalFormat = (value, number) => {
    return value.toFixed(number);
};

export const callApi = async (location, key) => {
    const resToday = await axios.get(
        `https://pro.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`
    );
    const resForecast = await axios.get(
        `https://pro.openweathermap.org/data/2.5/forecast/daily?q=${location}&units=metric&cnt=6&appid=${key}`
    );
    return { resToday, resForecast };
};
