<script>

    
   import {getWeatherFrom} from '../services/weather.js';
   const weatherPromise = getWeatherFrom();
</script>



{#await weatherPromise then weather}
    <h1>{weather.locationName} </h1>
    <h2>{weather.temperature}º</h2>
    <h3>{weather.conditionText}</h3>
    <h4>{weather.windSpeed}</h4>
{/await}


<style>
    
    
    h1 {
     font-weight: 300;
     color: #333;
     text-transform: uppercase;
    }

    h2{
        font-weight: 400;
        transform: rotate(-90deg);
        position: absolute;
        top: 12px;
        right: 12px;
    }
    

    
 </style>



