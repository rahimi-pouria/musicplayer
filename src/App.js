import "./App.css";
import QuickAccessMenu from "./components/QuickAccessMenu";
import MainBodyMusic from "./components/MainBodyMusic";
function App() {
  return (
    <div className="container">
      <div className="row MusicPlayer w-100 shadow-sm mt-5">
        <div className="col-xl-3 col-lg-3 bg-white border-right shadow-sm col-md-4 col-sm-12">
          <QuickAccessMenu />
        </div>
        <div className="MainBodyMusic col-xl-9 col-lg-9 col-md-8 col-sm-12">
          <MainBodyMusic />
        </div>
      </div>
    </div>
  );
}

export default App;
