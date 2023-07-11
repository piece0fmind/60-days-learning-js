import {people} from './data.js';
import {getImageUrl} from './utils.js';

export default function List(){
  const listItems = people.map(person => 
    <li key ={person.id}>
      <img src = {getImageUrl(person)}
      alt = {person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
      </li>);
      return(
        <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
      );
}

// This creates inconsistency in output
export default function StoryTray({ stories }) {
  stories.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
// removing the push operation inside the component fixes the problem
export default function StoryTray({ stories }) {
  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
      <li>Create Story</li>
    </ul>
  );
}
