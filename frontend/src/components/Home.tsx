import React,{useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; 
import { Link } from "react-router-dom";
import MarqSection from "./MarqSection";
import { useSwipeable } from "react-swipeable";
import Mostvisited from "./Mostvisited";

const Home = () => {
  const testimonials = [
    {
      image: "https://cdn.mos.cms.futurecdn.net/DMLwZCcWy25RhSYoszqsjN.jpg",
      name: "Daniel Muiruri",
      title: "Software developer",
      testimonial: "Working with Harold-Adventures has been significantly more cost effective for us than building out our own internal SOC. ."
    },
    {
      image: 'https://c02.purpledshub.com/uploads/sites/41/2024/05/Earths-second-moon.jpg?w=1029&webp=1',
      name: 'Owen Ngare',
      title: 'Apple CEO',
      testimonial: 'Harold-Adventures helped us consolidate our agencies under one uniform tours and travel instrumentation for ease of use and increased response.',
    },
    {
      image: 'https://science.nasa.gov/wp-content/uploads/2024/01/preview-supermoons.jpg?w=4096&format=jpeg',
      name: 'Cynthia ochieng',
      title: 'Head of WCK',
      testimonial: 'With the constant fear of wondering how to address a marketing strategy for attracting tourists, Harold-Adventures exceeded our expectations in solutions.',
    },

  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index : any) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToSlide((currentIndex + 1) % testimonials.length),
    onSwipedRight: () => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
    <Navbar />
    <div>
      {/* new */}
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-3 justify-between '>
            <div className='flex flex-col justify-center text-black'>
            <img className='w-[120px] mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png' alt='/'/>
            <h2 className='font-bold'> Holistic solutions</h2>
                <p>
                We go beyond a simple patch-up but develop lasting solutions through holistic design.      
                </p>
            </div>
            <div className='flex flex-col justify-center text-black'>
                <img className='w-[120px] mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png' alt='/'/>
                <h2 className='font-bold'>Impact</h2>
                <p>
                    Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.      
                </p>
            </div>
            <div className='flex flex-col justify-center text-black'>
                <img className='w-[120px] mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png' alt='/'/>
                <h2 className='font-bold'>Open data</h2>
                <p>
                    Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.     
                </p>
            </div>
        </div>
    </div>
      {/* part 1 */}
      <div className="relative bg-gray-900 text-white py-16">
      <div className="absolute inset-0 z-0 opacity-50">
        <img src="https://wallpapers.com/images/hd/dark-animals-i26v28w3cmbgk9bj.jpg" alt="Cyber Defense" className="w-full h-[500px] object-cover" />
      </div> 
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Empowering Your Tours Strategy</h1>
          <p>Welcome to your no:1 site for tours and travels exciting adventures. Here we got all you need to make your trips great and memorable.
                  We are a tours and travel company that thrives in delivering top-notch services to our tourists.
                   Great and exciting adventures awaits, You can now book a tour with us <Link to="/tours" className="text-blue-500 font-extrabold">Here</Link> and get started.
          </p> <br></br>
          <Link to={'/tours'}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button></Link>
        </div>
        <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
          {/* Additional content can go here if needed */}
        </div>
      </div>
    </div>
      {/* part 2 */}
      <div className='w-full bg-black py-16 px-12'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center text-white'>
            <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Effortless Search</h2>
            <p>
            Explore a curated selection of tours and travels adventure and services offered to our clients. Our intuitive interface makes finding your ideal taste a breeze.
            </p>
          </div>
          <img className='w-[800px] rounded-3xl mx-auto my-4' src='https://www.oneworldtravel.rw/wp-content/uploads/2018/02/Tours-and-travel.jpg' alt='imagery'/>
        </div>
      </div>

      {/* part 3 (client reviews)*/}
      <div className="bg-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Committed to Excellence</h2>
            <p className="text-lg lg:text-xl mb-8">
              Our mission is to provide outstanding tours solutions to our clients and ensure they feel satisfied.We have a variety of fascinating sites ready for bookings now at affordable prices.
              Remember, The world is a book and those who do not travel read only one page.
            </p>
            <h3 className="text-2xl font-bold mb-4">Hear Our Clients</h3>
            <p className="text-lg lg:text-xl mb-8">“See the world. It’s more fantastic than any dream.”</p>
          </div>

          {/* Right Column: Slider */}
          <div className="w-full lg:w-1/2">
            <div className="relative" {...handlers}>
              <div className="overflow-hidden relative h-64">
                <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full h-full flex items-center justify-center bg-slate-200 shadow-lg p-6"
                    >
                      <div className="text-center">
                        <p className="text-lg mb-4">{testimonial.testimonial}</p>
                        <div className="flex items-center justify-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-2.5 mx-1 rounded-full cursor-pointer ${
                      index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    onClick={() => goToSlide(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* most visited */}
    <Mostvisited />

      {/* part 4 (ceo message) */}
      <div className='w-full bg-gray-300 py-16 px-16'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Message from our CEO:</h2>
                <p>
                    Harold-Adventures has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves.
                    <p>Internally, but also within the larger communities in which we are active. I am excited to be launching this website since it will connect us more to our clients. We are here to serve you. Enjoy..!</p>
                </p>
            </div>
            <img className='w-[500px] mx-auto rounded-3xl my-4' src='https://res.cloudinary.com/ddei3mzex/image/upload/v1716552809/1000045233_ywrlv5.jpg' alt='mind'/>

        </div>
    </div>

    {/* part 5 (motion images section) */}
    <MarqSection />

    {/* part 6 */}
    <div className='w-full bg-violet-200 text-black py-16 px-4 text-center md:text-6xl sm:text-3xl text-3xl'>
        <p>Friends that travel together, stay <b>together.</b></p>
    </div>

    </div>
    <Footer />    
    </>
  )
}

export default Home