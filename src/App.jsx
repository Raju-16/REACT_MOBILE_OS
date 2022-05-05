import "./App.css";

function App() {
  const cnames = ["Android", "Blckberry", "iPhone", "Windows iPhone"];
  const manf = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="mainbox">
      <div>
        <h1>Mobile Operating System</h1>
        <ul>
          {cnames.map((name) => (
            <li style={{ listStyle: "disc" }}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="nd">
        <h1>Mobile Manufacturers</h1>
        <ul>
          {manf.map((name) => (
            <li>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  // return (
  //   <div>
  {
    /* <h1>Mobile Operating System</h1> */
  }
  {
    /* <ul>
       <li>Android</li>
       <li>Blackberry</li>
       <li>iPhone</li>
       <li>Windows iPhone</li>
     </ul> */
  }

  {
    /* <h1>Mobile Manufacturers</h1> */
  }
  {
    /* <ul>
       <li>Samsung</li>
       <li>HTC</li>
       <li>Micromax</li>
       <li>Apple</li>
     </ul> */
  }

  //   </div>

  // );
}

export default App;
