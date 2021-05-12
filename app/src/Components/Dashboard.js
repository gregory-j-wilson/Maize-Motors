import React, {useEffect, useState} from 'react';
import axios from 'axios';


const initialCar = {
    year: '',
    make: '',
    model: '',
    mileage: '',
    condition: ''
}


export default function Dashboard() {

    const [cars, setCars] = useState([])

    useEffect( () => {

        axios
        .get('https://maize-motors-data.herokuapp.com/cars')
        .then(res => {
            setCars(res.data)
        })

    })

    

    const [newCar, setNewCar] = useState(initialCar)

    



    function handleChange(e) {

        setNewCar({
            ...newCar,
            [e.target.name]: e.target.value,
        })
    }


    const postCar = (e) => {
        e.preventDefault();
        axios
            .post("https://maize-motors-data.herokuapp.com/cars/", newCar)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err.response.data));

            setNewCar({
                year: '',
                make: '',
                model: '',
                mileage: '',
                condition: ''
            })
            
        };



    return (
        <div>
        <h1>Admin Dashboard</h1>
        <h3>Add Car</h3>
        <form onSubmit={postCar} id="postcar">
                <input
                    required
                    id="year"
                    name="year"
                    type="text"
                    placeholder="Year"
                    value={newCar.year}
                    onChange={handleChange}
                    />
                    <br></br>
                <input
                    required
                    id="make"
                    name="make"
                    type="text"
                    placeholder="Make"
                    value={newCar.make}
                    onChange={handleChange}
                    />
                    <br></br>
                <input
                    required
                    id="model"
                    name="model"
                    type="text"
                    placeholder="Model"
                    value={newCar.model}
                    onChange={handleChange}
                    />
                <br></br>
                <input
                    required
                    id="mileage"
                    name="mileage"
                    type="number"
                    placeholder="Mileage"
                    value={newCar.mileage}
                    onChange={handleChange}
                    />
                <br></br>
                <textarea className="textbox"
                    name="condition" 
                    placeholder="Condition & Description"
                    form="postcar" 
                    value={newCar.condition}
                    onChange={handleChange}>
                </textarea>
                <br></br>
                <button id="button" type="submit">Post Car</button>
            </form>
            <br></br><br></br>
            {cars.map(car => {
                return (
                <div>
                <h3>{car.year} {car.make} {car.model}</h3>
                <p>{car.mileage} miles</p>
                <p>{car.condition}</p>
                </div>
                )
            })}
            </div>
    )
}