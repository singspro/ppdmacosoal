import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import api1 from "../config/api1"

function LoadingPage2(){
    const p=useLoaderData()
    useEffect(()=>{
      api1.post(`/soalLogin?sings=${p}`)
    .then((res)=>{
      if(res.status!==200 && res.data.status!=='ok'){
        window.location.replace('/error')
      }else{
        localStorage.setItem('SingsPro',res.data.data.token);
        window.location.replace ('/q')
      }
    })
    .catch((e)=>{
      window.location.replace('/error')
    })
    },[])

    return (
        <>
             <main>
    <div className="container">

      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="#" className="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt=""/>
                  <span className="d-none d-lg-block">WELCOME TO PPD MACO</span>
                </a>
              </div>

              <div className="card mb-3">
                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Loading...</h5>
                    <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>
                    <p className="text-center small">Validating your link. Please wait... </p>
                  </div>
                </div>
              </div>

              <div className="credits">
                 Designed by PPD Maco
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  </main>
        </>
    )
}
export default LoadingPage2