import { useEffect, useState } from 'react';
import './App.scss';
import SwitchBtn from './Ui/SwitchBtn';

function App() {

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false)

  const [theme, setTheme] = useState('light-theme')


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

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const switchTheme = e => {
    setTheme(e.target.checked ? 'dark-theme' : 'light-theme');
  }


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
      <SwitchBtn switchTheme={switchTheme} />
      {result}
    </div>
  );
}

export default App;
