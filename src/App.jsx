//stylesheets
import "./App.css";

//components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ToDos from "./components/ToDos/ToDos";
import Categories from "./components/Categories/Categories";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import AuthProvider from "./contexts/AuthContext";
import Login from './components/Auth/Login'
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { Snowfall } from "react-snowfall";
import Image1 from './assets/greenleaf.png'
import Image2 from './assets/redleaf.png'
import Image3 from './assets/orangeleaf.png'
import Image4 from './assets/yellowleaf.png'

export default function App() {
const snowflake1 = document.createElement('img')
snowflake1.src = Image1
const snowflake2 = document.createElement('img')
snowflake2.src = Image2
const snowflake3 = document.createElement('img')
snowflake3.src = Image3
const snowflake4 = document.createElement('img')
snowflake4.src = Image4

const images = [snowflake1, snowflake2, snowflake3, snowflake4]


    return (
        <div className="App">
            <Snowfall style={{position: 'fixed',width: '100vw',height: '100vh'}} images={images} radius={[10, 20]} snowflakeCount={150} />
            <AuthProvider>
                <Router>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<ProtectedRoute><ToDos /></ProtectedRoute>} />
                        <Route path="/todos" element={<ProtectedRoute><ToDos /></ProtectedRoute>} />
                        <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                <Footer />
                </Router>
            </AuthProvider>
            
        </div>
    );
}
