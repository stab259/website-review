import React, { useEffect, useState } from 'react'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import WriteReviews from './pages/WriteReviews';
import ResetPassword from './pages/ResetPassword';
// import AllPost from './pages/AllPost';
// import PostByID from './pages/PostByID';
// import NewDetails from './pages/NewDetails';
// import WriteReview from './pages/WriteReview';
// import MiddlePage from './pages/MiddlePage';
// import Test from './component/Test';
import { AuthContext } from './helpers/AuthContext';
import axios from 'axios';

import Post from './pages/Post'

// import Admin from './pages/admin/Admin';

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false
  })

  useEffect(() => {
    axios.get("http://localhost:3001/users/auth", {
      headers: {
        accessToken: localStorage.getItem("accessToken")
      }
    }).then((response) => {
      if (response.data.error) {
        setAuthState({ ...authState, status: false });
      } else {
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true
        });
      }
    })
  })
  return (
    <div>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Home" exact element={<Home />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="/Signup" exact element={<Registration />} />
            <Route path="/Post" exact element={<Post />} />
            <Route path="/WriteReviews" exact element={<WriteReviews />} />
            <Route path="/ResetPassword" exact element={<ResetPassword />} />
            {/* <Route path="/Posts" exact element={<AllPost />} />
            <Route path="/Middle" exact element={<MiddlePage />} />
            <Route path="/Posts/:id" exact element={<PostByID />} />
            <Route path="/Details" exact element={<NewDetails />} />
            <Route path="/WriteReviews" exact element={<WriteReviews />} /> */}
            {/* <Route path="/Admin" exact element={<Admin />} /> */}
          </Routes>
          <Footer />
        </Router>
      </AuthContext.Provider>
    </div>

  );
}

export default App;