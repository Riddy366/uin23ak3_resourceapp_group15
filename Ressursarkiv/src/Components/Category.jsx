import '../assets/ressurser'
export default function Category() {
  
    return (
      <div>
        {resources.map((resource, index) => (
          <div key={index}>
            <h2>{resource.category}</h2>
            <p>{resource.text}</p>
          </div>
        ))}
      </div>
    );
}
