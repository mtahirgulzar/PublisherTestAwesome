import './App.css';
import { Profile } from './components/profile';
import { ImageCarousal } from './components/carousal';
import { Comment } from './components/comment';

function App() {
  return (
    <div className="p_post-detail">
       <Profile/>
       <ImageCarousal/>
       <Comment/>
    </div>
  );
}

export default App;
