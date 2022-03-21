import React from 'react'
import { Container, Card, CardGroup } from 'react-bootstrap'

function About() {
  return (
    <div>
        <Container className='cardContainer'>
            <CardGroup>
                <Card border='dark' style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/2977514/pexels-photo-2977514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                    <Card.Title>Passionate Chef</Card.Title>
                    <Card.Text>
                        Before leaping into the world of full-stack development I was a chef. After attending culinary school I worked in many restaurants.
                        From food prep to working on a line I have done it all. Searching for all things tasty in my spare time you can find me making my own
                        sauces, spices, and marinades.
                    </Card.Text>
                    </Card.Body>
    
                </Card>
                <Card border='dark' style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                    <Card.Title>Searching for the next best nation park</Card.Title>
                    <Card.Text>
                        Traveling to see national parks and the journey of exploring them has always been an important part of my life. Theres something
                        incredible about discovering new places, what they hold, and the people you'll meet along the way.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card border='dark' style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/344029/pexels-photo-344029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                    <Card.Title>Bowling</Card.Title>
                    <Card.Text>
                        Tuesday nights are for bowling league! 
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
            </CardGroup>
        </Container>
    </div>
  )
}

export default About;
