import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import Navbar from "./components/Navbar/Navbar";
import Status from "./components/Status/Status";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const ticketsPromise = fetch("./tickets.json").then((response) =>
  response.json(),
);

function App() {
  const [addedTickets, setAddedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <Banner
        addedTickets={addedTickets}
        setAddedTickets={setAddedTickets}
        resolvedTickets={resolvedTickets}
      ></Banner>
      <div className="max-w-7xl mx-auto my-16 flex gap-6">
        <Suspense fallback={<Loader></Loader>}>
          <CustomerTickets
            ticketsPromise={ticketsPromise}
            addedTickets={addedTickets}
            setAddedTickets={setAddedTickets}
          ></CustomerTickets>
        </Suspense>
        <Status
          addedTickets={addedTickets}
          setAddedTickets={setAddedTickets}
          resolvedTickets={resolvedTickets}
          setResolvedTickets={setResolvedTickets}
        ></Status>
      </div>

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
