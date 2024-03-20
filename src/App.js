import AppLayout from "./Layout/AppLayout";
import './Assets/Css/Style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <AppLayout />
  )
}

export default App;
