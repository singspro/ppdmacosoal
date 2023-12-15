import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'
import { Outlet } from 'react-router-dom'
import Header from '../Components/header'
import Footer from '../Components/footer'
function HomeRoot(){
    return(
        <>
        <Header/>
        <main id="main" className="main">
            <section className="section dashboard">
            <Outlet/>      
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default HomeRoot