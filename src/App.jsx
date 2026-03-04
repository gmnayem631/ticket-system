import "./App.css";
import Banner from "./components/Banner/Banner";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import Navbar from "./components/Navbar/Navbar";
import Status from "./components/Status/Status";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto my-10 flex gap-6">
        <CustomerTickets></CustomerTickets>
        <Status></Status>
      </div>
    </>
  );
}

export default App;
