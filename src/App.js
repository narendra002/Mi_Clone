
import './App.css';
import PreNavbar from './Component/PreNavbar.js'
import Navbar from './Component/Navbar.js'
import Slider from './Component/Slider.js'
import data from "./data/data.json"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Offers from "./Component/Offers.js"
import Heading from "./Component/Heading.js"
import StarProduct from "./Component/StarProduct.js"
import HotAccessoriesMenu from "./Component/HotAccessoriesMenu.js"
import HotAccessories from "./Component/HotAccessories.js"
import ProductReviews from "./Component/ProductReviews.js"
import Videos from "./Component/Videos.js"
import Banner from "./Component/Banner.js"
import Footer from "./Component/Footer.js"
import NavOptios from "./Component/NavOptios"
// import NavOptios from "./Component/NavOptios"


function App() {
  return (
    <Router>

      <PreNavbar />
      <Navbar />
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>


      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="Hot Accessories" />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}>

        </Route>

        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
        }>
        </Route>

        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
        } >
        </Route>

        <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />
        }>
        </Route>
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
        }>

        </Route>
      </Routes>




      <Heading text="Product Reviews" />

      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />
      <Heading  text="IN THE PRESS"/>
   
       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
