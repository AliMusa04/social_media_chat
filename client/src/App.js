import Leftsidebar from "./components/LeftSidebar/Leftsidebar";
import Mainsidebar from "./components/MainSidebar/Mainsidebar";
import Navbar from "./components/Navbar/Navbar";
import Rightsidebar from "./components/RightSidebar/Rightsidebar";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import style from "./components/RightSidebar/rightSide.module.css";

function App() {
  return (
    <>
      <>
        <Navbar />
      </>
      <div className={style.home_contanier}>
        <Leftsidebar />
        {/* <div className={style.home_contanier_right}> */}
        <Mainsidebar />
        <Rightsidebar />
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
