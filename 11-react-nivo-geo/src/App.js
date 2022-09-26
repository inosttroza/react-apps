import { MyResponsiveChoropleth, MyResponsiveGeoMap, MyResponsiveChoroplethCanvas, MyResponsiveGeoMapCanvas } from "./maps/MapsTypes";
//import { data } from "./shared/data.js";
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>@nivo/geo - Choropleth</h1>
      <div style={{ height: "400px" }}>
        <MyResponsiveChoropleth />
      </div>
      <hr />
      <h1>@nivo/geo - GeoMap</h1>
      <div style={{ height: "400px" }}>
        <MyResponsiveGeoMap />
      </div>
      <hr />
      <h1>@nivo/geo - ChoroplethCanvas</h1>
      <div style={{ height: "400px" }}>
        <MyResponsiveChoroplethCanvas />
      </div>
      <h1>@nivo/geo - GeoMapCanvas</h1>
      <div style={{ height: "400px" }}>
        <MyResponsiveGeoMapCanvas />
      </div>
    </div>
  );
}

export default App;
