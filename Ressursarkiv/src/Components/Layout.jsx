export default function Layout({ resources }) {
    return (
      <div className="center">
        <nav>
          <ul id="resourceList">
            {resources.map((resource, index) => (
              <li key={index}>
                <button onClick={() => selectResource(index)}>{resource.category}</button>
              </li>
            ))}
          </ul>
        </nav>
        
        <article id="resourceContent">

        </article>
      </div>
    );
  
    function selectResource(index) {
      const resource = resources[index];
      const resourceContent = document.getElementById('resourceContent');
      resourceContent.innerHTML = `
        <h2>${resource.category}</h2>
        <p>${resource.text}</p>
        ${resource.sources.map(source => `<a href="${source.url}" target="_blank">${source.title}</a>`).join("<br/>")}
      `;
    }
  }
  