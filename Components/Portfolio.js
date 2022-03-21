import React from 'react'
import{ Card, Button, Container, CardGroup } from 'react-bootstrap'

function Portfolio() {
  return (
    <div>
    <Container>
        <CardGroup>
        <Card>
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/tic-tac-toe-game-with-cross-circle-mini-game-vector-illustration_199784-546.jpg" />
            <Card.Body>
                <Card.Title>Tic-Tac-Toe with css</Card.Title>
                    <Card.Text>
                    A simple but fun game of Tic-Tac-Toe
                    </Card.Text>
                <Button variant="primary" href='https://github.com/HeathCB/TicTacToeWithCSS'>Github</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src="https://ninjaessays.us/wp-content/uploads/2018/05/movie-review-1.jpg" />
            <Card.Body>
                <Card.Title>Movie Review App</Card.Title>
                    <Card.Text>
                    This was a homework assingment during my boot camp to design a single page site to review movies.
                </Card.Text>
                <Button variant='primary'  href='https://github.com/HeathCB/Movie-Rating-App'>Github</Button> 
            </Card.Body>
        </Card>
    
        <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--PHvvmnw8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/91ovedmu4grqhjh434rq.png" />
            <Card.Body>
                <Card.Title>Building APIs with Java & SpringBoot</Card.Title>
                    <Card.Text>
                    For this project I created a backend service for a food ordering service. Restaurants Can join in add their menu and people could order from it or set a reservation.
                </Card.Text>
                <Button variant="primary" href='https://github.com/HeathCB/SpringFinal/tree/Master/src/main/java/com/promineotech/restaurantManagement'>Github</Button>
            </Card.Body>
        </Card>
        </CardGroup>
    </Container>
    </div>
  )
}

export default Portfolio