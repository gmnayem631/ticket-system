import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import Navbar from "./components/Navbar/Navbar";
import Status from "./components/Status/Status";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

const ticketsPromise = fetch("./tickets.json").then((response) =>
  response.json(),
);

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto my-16 flex gap-6">
        <Suspense fallback={<Loader></Loader>}>
          <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
        </Suspense>
        <Status></Status>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
