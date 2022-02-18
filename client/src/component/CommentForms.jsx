import {Container, Row, Col, Button, Form, Fade} from 'react-bootstrap'
import {useState} from 'react'
import axios from 'axios';

function CommentForms(id) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("")
  const Comment = () =>{
    const data = {comment : comment}
    axios.post(`http://localhost:3001/comments/${id}`,data,{headers: {
      accessToken : localStorage.getItem("accessToken")
  }}).then((response)=>{
        
    })
  }
  return (
    <div className="mb-5">
      <Button onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="leaveComment">
        Leave a comment
      </Button>
      <Fade in={open}>
        <div className="mt-4" id="leaveComment">
          <h5 className="mb-4">Leave a comment</h5>
          <form className="form" id="comment-form">
            <Form.Group className='mb-4'>
              <Form.Label>Comment</Form.Label>
              <textarea name="comment" className="form-control" rows="4" onChange= {(e) => setComment(e.target.value)}></textarea>
            </Form.Group>
            <Button type="submit" onClick={Comment}>Comment</Button>
          </form>
        </div>
      </Fade>
    </div>
  )
}
export default CommentForms