const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '531c9a98f9mshcc6e98a92c630ecp1ef2d5jsn7ba723486b82',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export async function getWeatherFrom (query = 'Caracas') { 
    const response = await fetch ('https://weatherapi-com.p.rapidapi.com/current.json?q=${query}', 
    FETCH_OPTIONS)
    const data = await response.json()
    
    const {location, current} = data;
    const {country, localtime, name} = location;
    const {condition, humidity, feelslike_c, temp_c, wind_kph, wind_dir, is_day} = current;
    const {code, text} = condition; 

    return {
        conditionCode: code,
        conditionText: text,
        country,
        localtime,
        locationName: name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir,
    }; 
}

