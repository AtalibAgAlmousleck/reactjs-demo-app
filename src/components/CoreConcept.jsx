import './CoreConcept.css'

function CoreConcept({title, description, image}) { // {} object destructuring
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
