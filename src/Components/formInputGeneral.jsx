
function DataUmum(){
    const handleSubmit=(e)=>{
        // e.preventDefault()
        
        // let url='https://fakestoreapi.com/products/1'
        // fetch(url)
        // .then((res)=>console.log(res.status))
        // // .then(res=>res.json())
        // // .then(json=>console.log(json))
        
    }
    return(
        <>
            <form onSubmit={(e)=>handleSubmit(e)}>
                            <div className='card'>
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-lg-12">
                                        <h5 className="card-title">Data Peserta</h5>
                                        <p>Silahkan isi data diri anda dengan mengisi isian form dibawah ini.</p>
                                    
                                        <div className="row g-3">
                                            <div className="col-md-12">
                                                <label className="form-label">Nama</label>
                                                <input type="text" placeholder='isi dengan nama lengkap' className="form-control" id="inputName5"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Jabatan</label>
                                                <input type="text" className="form-control" id="inputEmail5"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Perusahaan</label>
                                                <input type="text" placeholder='isi nama perusahaan lengkap' className="form-control" id="inputEmail5"/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='card'>
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-lg-12 mt-3">
                                        <button type='submit' className='btn btn-primary'>Next</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
            </form>
        </>
    )
}

export default DataUmum