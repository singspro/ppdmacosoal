function NotFound(){

    return (
        <>
        <main>
    <div className="container">

      <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <img src="https://source.unsplash.com/720x350/?animals" className="img-fluid py-5" alt="Page Not Found"/>
        <div className="credits">
          Designed by PPD Maco
        </div>
      </section>

    </div>
  </main>
        </>
    )
}

export default NotFound