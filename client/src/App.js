import Posts from './pages/Posts/Posts'
import {Routes, Route} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';
import Container from './components/Container'
import data from './data.post.js'
import Popup from './pages/Popup/Popup'
import PopupAddPost from './pages/Popup/PopupAddPost'
import NewAddPost from './components/NewAddPost'
import { useSelector, useDispatch } from 'react-redux'
import {fetchPosts} from './redux/slices/posts'
import axios from './axios';

function App() {
  const [selectedPost, setSelectedPost] = useState(null)
  const dispatch = useDispatch()

  const posts = useSelector(state => state.posts.posts);
  const status = useSelector(state => state.posts.status);

  useEffect(() =>{
    dispatch(fetchPosts())
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  function chosenPost(post){
    setSelectedPost(post)
  }
  return <div className="App">
    <Container>
      <Routes>
        <Route path='/' element={<Posts posts={posts} chosenPost={chosenPost}/>}></Route>
        <Route path='/popup/:id' element={<Popup/>}></Route>
        <Route path='/post' element={<PopupAddPost/>}></Route>
      </Routes>
    </Container>
  </div>
}

export default App;
