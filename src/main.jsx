import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Landingpage } from './LandingPageTeacher'
import App from './App'
import { Navbar } from './navbar'
 



createRoot(document.getElementById("root")).render(
  <>
   
      <Navbar />

      <Landingpage />
      <App />
  
  </>
);
