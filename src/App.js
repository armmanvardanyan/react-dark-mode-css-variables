import { useEffect, useState } from 'react';
import './App.scss';
import useDarkMode from './hooks/use-dark-mode';
import SwitchBtn from './Ui/SwitchBtn';

function App() {


  const [enabledState, setEnabled] = useDarkMode();

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false)



  const fetchData = () => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setPosts(data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const switchTheme = e => {
    setEnabled(e.target.checked ? 'dark-theme' : '')
  }

  useEffect(() => {
    document.documentElement.className = enabledState;
  }, [enabledState])


  let result = null;

  if (loading) {
    result = <div> Loading...</div>
  }

  if (posts?.length) {
    result = posts.map(post => {
      return <div key={post.id} className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    })
  }



  return (
    <div className="App">
      <h1>Posts</h1>
      <SwitchBtn switchTheme={ switchTheme } checked={ enabledState && 'checked' } />
      {result}
    </div>
  );
}

export default App;
