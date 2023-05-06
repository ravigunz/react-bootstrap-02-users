import './App.css';
import CommentLayouts from './layouts/users/CommentLayouts';
import PostLayouts from './layouts/users/PostLayouts';
import UserLayouts from './layouts/users/UserLayouts';
// import UserLayouts from './layouts/users/UserLayouts';

function App() {
  return (
    <div className="App" style={{ display: 'flex', alignContent: 'center', marginRight: '20px' }}>
    <div style={{ marginRight: '10px'}}>
    <UserLayouts />
    </div>
    <div>
    <PostLayouts />
    </div>
    <div>
    <CommentLayouts />
    </div>
    </div>
  );
}

export default App;
