import Header from "./components/Header";
import { useContext, useState } from "react";
import CoronaForCountry from "./components/CoronaForCountry";
import RecordedCorona from "./components/RecordedCorona";
import CoronaForContinent from "./components/CoronaForContinent";
import { context1 } from "./contextApi/Store";

function App() {
  const [key] = useContext(context1);

  return (
    <>
      <Header />

      <div className="md:container md:mx-auto p-8  page-content  ">
        {key === 1 && <CoronaForCountry></CoronaForCountry>}
        {key === 2 && <RecordedCorona></RecordedCorona>}
        {key === 3 && <CoronaForContinent></CoronaForContinent>}
      </div>
    </>
  );
}

export default App;
