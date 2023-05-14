import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import Infos from "./Components/Infos";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Body />
        <Sidebar />
      </div>
     <p className=" text-start font-normal text-xl px-64 mt-20">
     EHR system – (electronic health record) is a software that allows doctors to view patients’ data in digital form – website or app. His or her medical history, personal information, previous visits, test results and other medical indicators and health conditions.
     </p>
     <p className=" text-start font-normal text-xl px-64 mt-6">
     This industry has its origins in the 1970s when The United States Department of Veterans Affairs has launched the Decentralized Hospital Computer Program (DHCP). Prototypes of similar systems were developed earlier. Still, only this system has received access to federal resources, which allowed it to grow and evolve. It was a massive step for EHR system development and healthcare software.
     </p>
      <img src="/ProjectPictures/Intel.jpg" alt="IntelImg" className=" mt-20 container " />
      <Infos />
    </div>
  );
}

export default App;
