import {Container, Row, Col} from 'react-bootstrap'
import Comments from './Comments'
import CommentForms from './CommentForms'
import React, { useEffect, useState, useContext } from "react"
import { AuthContext } from "../helpers/AuthContext";
import axios from 'axios';
import { useParams } from 'react-router-dom';


function PostDetails() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const { authState } = useContext(AuthContext);
    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
          setPostObject(response.data);
        });
    }, []);
  return (
    <section>
        <Container fluid className="px-0">
            <Row>
                <Col xl={11} lg={12} className="mr-auto">
                    <h1 className="py-3 mb-2 fw-dark">{postObject.title}</h1>
                    <p className="py-3 mb-3 text-muted fw-light">
                        <a href="#">
                            <img src="https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg" alt="people" className="avatar p-1 me-2" />
                        </a>
                        Written by
                        <a href="#" className="fw-bold"> {postObject.username}</a>
                        <span className="mx-1"> | </span>
                        {postObject.createdAt} in 
                        <a href="#"> Stay</a>
                        <span className="mx-1"> | </span>
                        <a href="#" className="text-muted">3 comments</a>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xl={11} lg={12} className="mr-auto">
                    <div className="text-content">
                        <p>
                            <img src="https://images.unsplash.com/photo-1601972888880-3ad2df3ee0a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHx2aWV0bmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="stay" className="img-fluid" />
                        </p>
                        <p className='text-muted'>
                            {postObject.postText}
                        </p>
                    </div>
                    <hr/>
                    <Comments />
                    <CommentForms />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default PostDetails