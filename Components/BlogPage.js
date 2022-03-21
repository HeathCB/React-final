import React from 'react'
import { Card, } from 'react-bootstrap'
import Comments from './BlogComments';

function BlogPage( props ) {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Learning Front-End Development</Card.Title>
            <Card.Text>
              18 weeks ago I started a journey to learn front end web development.
            </Card.Text>
          </Card.ImgOverlay>
      </Card>
      <Comments 
      commentsUrl="https://crudcrud.com/api/64eda217cb3247d6bcaa853a927a707d/comments"
      currentUserId="1"
      />
    </div>
  )
}

export default BlogPage;