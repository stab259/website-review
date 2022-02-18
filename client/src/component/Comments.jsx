import {Container, Row, Col} from 'react-bootstrap'
import {FaRegClock, FaReply} from 'react-icons/fa'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Comments(id) {
    const [commentObject, setCommentObject] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
          setCommentObject(response.data);
            console.log(response.data)
        });
    }, []);
  return (
    <div className="mt-5">
        <h6 className="text-uppercase text-muted mb-4">2 comments</h6>
        {commentObject.map((value)=>{
            return(
                <div className="d-flex mb-4">
                    <img src="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?size=626&ext=jpg&ga=GA1.2.2136114630.1641081600" alt="people" className="avatar avatar-lg p-1 flex-shrink-0 me-4" />
                    <div>
                        <h5>{value.username}</h5>
                        <p className="text-uppercase text-sm text-muted">
                            <FaRegClock className='me-2'/>
                            September 25, 2022 at 13:00 pm
                        </p>
                        <p className="text-muted">
                            {value.commentBody}
                        </p>
                    </div>
                </div>
            )
        })}
        
        <div className="d-flex mb-4">
            <img src="https://about.fb.com/wp-content/uploads/2018/04/bringingpeopleclosertogether_articleheader_v3.jpg?w=1200" alt="people" className="avatar avatar-lg p-1 flex-shrink-0 me-4" />
            <div>
                <h5>Two People</h5>
                <p className="text-uppercase text-sm text-muted">
                    <FaRegClock className='me-2'/>
                    June 19, 2022 at 11:00 pm
                </p>
                <p className="text-muted">
                    In lacus risus, lacinia eget fringilla at, consequat et dolor. 
                    Phasellus venenatis condimentum sapien, in semper quam dictum ac. 
                    Nulla ac nisl nec mauris maximus porttitor eget nec quam.
                </p>
                <p>
                    <a href="#" className="btn btn-link text-primary">
                        <FaReply className='me-2'/>
                        Reply
                    </a>
                </p>
            </div>
        </div>
    </div>
  )
}
export default Comments