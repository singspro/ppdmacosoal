import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'
function Header(){
    return(
        <>
        <header  className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
            <a href="#" className="logo d-flex align-items-center">
                <img src="assets/img/logo.png" alt=""></img>
                <span className="d-none d-lg-block">PPD MACO</span>
            </a>
            </div>  
        </header>
        </>
    )
}

export default Header