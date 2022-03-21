import React from 'react'
import { Carousel } from 'react-bootstrap'

function CarouselBackground() {
  return (
    <div>
        <Carousel variant="dark" className="align-content-lg-center">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/full-stack-developer.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>FullStack Development</h5>
                <p>Fewer things are more satisfying than solving a problem and creating value. Through my development I learn not only about myself 
                  but the world around me. 
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://miro.medium.com/max/1400/1*tVckSLYoe4_DUwxfHxLKbg.png"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>UI/UX Design</h5>
                <p>Creating a more beautiful world one design at a time.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </div>
  )
}

export default CarouselBackground