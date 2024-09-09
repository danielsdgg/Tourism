import React from 'react'
import { Link } from 'react-router-dom'

// defining the type for the props
interface TourItemProps {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number
}

// apply the type to the component props
const TourItem: React.FC<TourItemProps> = ({id,name, image, price, description}) => {
  return (
    <div className='cadii bg-gray-400  mb-3 '>
        <img className='imagee cursor-pointer' src={image} alt='name'/>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>{name}</h3>
        {/* <p className='text-center font-light'>{description}</p> */}
        <p className='text-center p-2 font-extrabold'>Kshs: {price}</p>
        <br></br>
        <Link to={`/details/${id}`}><button className='more'>Read More</button></Link><br></br><br></br>
        <button className='upd'>Update</button><br></br><br></br>
        <button className='dell'>Delete</button>
    </div>
  )
}

export default TourItem