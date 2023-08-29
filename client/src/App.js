import Posts from './pages/Posts/Posts'
import {Routes, Route} from 'react-router-dom';
import Container from './components/Container'
import Popup from './pages/Popup/Popup'
import PopupAddPost from './pages/Popup/PopupAddPost'

function App() {
  return <div className="App">
    <Container>
      <Routes>
        <Route path='/' element={<Posts/>}></Route>
        <Route path='/popup/:id' element={<Popup/>}></Route>
        <Route path='/post' element={<PopupAddPost/>}></Route>
      </Routes>
    </Container>
  </div>
}

export default App;
