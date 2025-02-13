```javascript
import { BrowserRouter, useRoutes } from 'react-router-dom';

function App() {
  let element = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/about', element: <About/>},
    {path: '*', element: <NoMatch/>}
  ]);
  return (
    <BrowserRouter>
      {element}
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function NoMatch() {
  return <h1>No Match</h1>;
}

export default App;
```