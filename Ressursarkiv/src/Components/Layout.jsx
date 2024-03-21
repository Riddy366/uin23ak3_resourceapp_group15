import { Link } from "react-router-dom";

export default function Layout({ resources }) {
  function selectResource(index) {
    const resource = resources[index];
    const resourceContent = document.getElementById('resourceContent');
    resourceContent.innerHTML = `
      <h2>${resource.category}</h2>
      <p>${resource.text}</p>
      ${resource.sources.map(source => `<a href="${source.url}" target="_blank">${source.title}</a>`).join("<br/>")}
    `;
  }
    return (
      <div className="center">
        <nav>
          <ul id="resourceList">
            {resources.map((resource, index) => (
              <li key={index}>
                <Link to={resource.category}><button onClick={() => selectResource(index)}>{resource.category}</button></Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <article id="resourceContent">
  
        </article>
      </div>
    );
  
    
  }
  