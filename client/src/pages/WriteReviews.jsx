import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import React,{useState} from 'react'
import axios from 'axios';

function WriteReviews() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveFile = (e) => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
  };
  const uploadFile = async (e) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", fileName);
      formData.append("title",title)
      formData.append("content",content)
      axios.post("http://localhost:3001/posts/upload",formData,{headers: {
          accessToken : localStorage.getItem("accessToken")
      }}).then(res =>{
        alert(res)
      });
    };
  return (
    <div className="bg-image-form bg-image-write-reviews">
      <Container className="py-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8}>
            <Form className="form-1">
              <div className="mb-5">
                <h2 className="text-primary">Write a Review</h2>
              </div>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Post Title</Form.Label>
                  <Form.Control type="text" name="title" onChange = {(e) => {setTitle(e.target.value);}}/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Post Image</Form.Label>
                  <Form.Control type="file" name="image" onChange = {saveFile}/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Post Content</Form.Label>
                  <textarea name="post_content" id="summernote" cols="30" rows="10" class="form-control" style={{resize:"none"}} onChange = {(e) => {setContent(e.target.value);}}></textarea>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Button type="submit" className="primary btn-primary" onClick={uploadFile}>Publish Post</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default WriteReviews