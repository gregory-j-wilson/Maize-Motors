import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function OurCars() {

    const [cars, setCars] = useState([])

    useEffect( () => {

        axios
        .get('https://maize-motors-data.herokuapp.com/cars')
        .then(res => {
            setCars(res.data)
        })

    })

    return (
        <div style={{height: 100 + '%', paddingBottom: 20 + 'px'}}>
            <h2>Our Cars</h2>
            
            {cars.map(car => {
                return (
                <div id="car">
                <h3>{car.year} {car.make} {car.model}</h3>
                <p>{car.mileage} miles</p>
                <p>{car.condition}</p>
                </div>
                )
            })}

        </div>
    )
}