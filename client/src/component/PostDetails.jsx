import {Container, Row, Col} from 'react-bootstrap'
import Comments from './Comments'
import CommentForms from './CommentForms'
import React, { useEffect, useState, useContext } from "react"
import { AuthContext } from "../helpers/AuthContext";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {FaHeart} from 'react-icons/fa'


function PostDetails() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const { authState } = useContext(AuthContext);
    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
          setPostObject(response.data);
          console.log(postObject)
        });
    }, []);
    const likeAPost = (postId) => {

    }

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
                            <img src={postObject.imgsrc} alt="stay" className="img-fluid" />
                        </p>
                        <p className='text-muted'>
                            {postObject.postText}
                        </p>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        {/* <label> {postObject.Likes.length} </label> */}
                        <button class="btn btn-block btn-outline-dark" onClick={likeAPost}><FaHeart className="me-2" />Like</button>
                    </div>
                    <Comments id = {id} /> 
                    <CommentForms id = {id} />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default PostDetails