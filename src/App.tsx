import {Footer, Header} from "./components";
import './styles/normalize.scss';
import './styles/app.scss'
import {Home} from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import {Cart} from "./pages/Cart/Cart";
import {NotFound} from "./pages/NotFound/NotFound";
import {Privacy} from "./pages/Privacy/Privacy";


function App() {
    return (
        <>
            <Header/>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}

export default App
