import React from 'react'

// defining the type for the props
interface TourItemProps {
    name: string,
    image: string,
    description: string,
    price: number
}

// apply the type to the component props
const TourItem: React.FC<TourItemProps> = ({name, image, price, description}) => {
  return (
    <div className='cadii hover:scale-110 duration-700'>
        <img className='imagee cursor-pointer' src={image} alt='name'/>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>{name}</h3>
        <p className='text-center font-light'>{description}</p>
        <p className='text-center p-2 font-extrabold'>Kshs: {price}</p>
        <br></br>
        <button className='more'>View</button>
    </div>
  )
}

export default TourItem