import React from 'react'
import { useSelector } from "react-redux"
import { Card, Row, Col } from "react-bootstrap"
import moment from 'moment';
import "./review.css"


function Review() {
    const isReadMore = true
    const review = useSelector(state => state.movieReviews.results)

  const reviewData = review ?review:[] 
  console.log(reviewData)
  
  const handleFullReview = (data)=>{
      console.log(data)
  }
    return (
        <div className ="review-container">
            <div>
                <h3> Review</h3>
            </div>
            <div style={{margin:"20px"}}>
            {
                reviewData.map((data, index) => {
                  if (index === 0) {
                        const avatar = data.author_details.avatar_path.substring(1)
                        const date = data.created_at

                        const content = data.content
                        return (
                            <Card body>
                                <Row>
                                    <Col sm={3}>
                                        <img src={avatar} alt="avatar"/>
                                    </Col>
                                    <Col sm={9}>
                                        <h6>Review By {data.author}</h6>
                                        <p>written by {data.author} on {moment(date).format('ll')}</p>
                                        <span>
                                            {isReadMore?content.slice(0,250):content}
                                            <span onClick ={handleFullReview}>{isReadMore?".....Read More":""}</span>
                                        </span>
                                    </Col>
                                </Row>
                            </Card>
                        )
                    }
                    return null
                })
            }
            </div>
            
            <div >
                <h5>Read All Reviews</h5>
            </div>

        </div>
    )
}

export default Review;
