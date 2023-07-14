import {people} from './data.js';
import {getImageUrl} from './utils.js';

// export default function List(){
//   const listItems = people.map(person => 
//     <li key ={person.id}>
//       <img src = {getImageUrl(person)}
//       alt = {person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//       </li>);
//       return(
//         <article>
//       <h1>Scientists</h1>
//       <ul>{listItems}</ul>
//     </article>
//       );
// }

// This creates inconsistency in output
// export default function StoryTray({ stories }) {
//   stories.push({
//     id: 'create',
//     label: 'Create Story'
//   });

//   return (
//     <ul>
//       {stories.map(story => (
//         <li key={story.id}>
//           {story.label}
//         </li>
//       ))}
//     </ul>
//   );
// }
// removing the push operation inside the component fixes the problem
// export default function StoryTray({ stories }) {
//   return (
//     <ul>
//       {stories.map(story => (
//         <li key={story.id}>
//           {story.label}
//         </li>
//       ))}
//       <li>Create Story</li>
//     </ul>
//   );
// }

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome to the Home page!</p>
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
    <p>This is the About page.</p>
  </div>
);

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </BrowserRouter>
);

export default App;
