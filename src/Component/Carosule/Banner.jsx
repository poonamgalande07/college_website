import React from 'react'
import './style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


//   teachers data

const categories = [
    {
       id:1,
       img:"https://t3.ftcdn.net/jpg/02/65/18/30/240_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
       Name:"Kale I.S",
       Education:"b.ed & d.ed",
    },

    {
        id:2,
        img:"https://t3.ftcdn.net/jpg/02/65/18/30/240_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
        Name:"Jadhav N.R",
        Education:"b.ed & d.ed",
     }, {
        id:3,
        img:"https://t3.ftcdn.net/jpg/02/65/18/30/240_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
        Name:"kulkarni A.S ",
        Education:"b.ed & d.ed",
     }, {
        id:4,
        img:"https://t3.ftcdn.net/jpg/02/65/18/30/240_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
        Name:"Kamble M.V",
        Education:"b.ed & d.ed",
     }, {
        id:5,
        img:"https://t3.ftcdn.net/jpg/02/65/18/30/240_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
        Name:"Seema Mam",
        Education:"b.ed & d.ed",
     }, {
        id:6,
        img:"https://t3.ftcdn.net/jpg/02/65/18/30/240_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
        Name:"Bhosle sir",
        Education:"b.ed & d.ed",
     },
     
];

const Banner = () => {
    return (
        <Carousel responsive={responsive} className='banner'>
            {categories.map((item)=>(
              <div className="banner_box" key={item.id}>
                 <img src={item.img}  />
                 <div className="info">
                 <div className="name">{item.Name}</div>
                 <div className="education">{item.Education}</div>
                 </div>
              </div>
            ))}
        </Carousel>
    )
}

export default Banner