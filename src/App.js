import Travel from "./Components/Travel";
import data from "./data";
import Nav from "./Components/Nav";
function App() {

  const ele = data.map(function(item){
    return <Travel
            image = {item.imageUrl}
            title={item.title}
            location={item.location}
            maps={item.googleMapsUrl}
            startDate= {item.startDate}
            endDate = {item.endDate}
            description={item.description}
    />
  })

  return (
    <div className="App">
      <Nav/>
      {ele}
    </div>
  );
}

export default App;
