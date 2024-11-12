import "./App.css";
// import { Button } from "@mui/material";
import BarGraph from "./assets/componenets/graphs/BarGraph";
import RoundedLineGraph from "./assets/componenets/graphs/RoundedLIneGraph";
import PopulationGraph from "./assets/componenets/graphs/PopulationGraph ";
function App() {
  // const handleOnClick=()=>{
  //   console.log("button clicked")
  // }
  return (
    <>
      {/* <Button onClick={handleOnClick} variant="text">Text</Button>
      <Button onClick={handleOnClick} variant="contained">Contained</Button>
      <Button onClick={handleOnClick} variant="outlined">Outlined</Button> */}
     <BarGraph/>
     <RoundedLineGraph/>
     <PopulationGraph/>
    </>
  );
}

export default App;
