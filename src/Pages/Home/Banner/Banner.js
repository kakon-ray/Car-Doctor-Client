import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height:"500px"}}
                    src="https://img.freepik.com/free-photo/auto-car-repair-service-center-mechanic-examining-car-suspension_136930-6.jpg?w=996"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                     style={{height:"500px"}}
                    src="https://img.freepik.com/free-photo/young-woman-service-employee-lifting-car_23-2148327529.jpg?size=626&ext=jpg&ga=GA1.2.1999783953.1647233430"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                     style={{height:"500px"}}
                    src="https://img.freepik.com/free-photo/smiling-mechanic-with-arms-crossed-spanner_1170-1699.jpg?size=626&ext=jpg&ga=GA1.2.1999783953.1647233430"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;