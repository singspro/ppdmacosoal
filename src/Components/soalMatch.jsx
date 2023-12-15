function SoalMatch({data,answer}){
    if(typeof data=='undefined' || data==null){
        return (<></>)
    }

    const jenis=data.jenis
    if(jenis.indexOf(3)<0){
        return (<></>)
    }
    

    return(
        <>
        <div className='card'>
            <div className="card-header">
                Matching
            </div>
                                <div className="card-body">
                                    <div className="col-lg-12">
                                        <ol className="list-group list-group-numbered mt-3">
                                           <SoalIsiMatch data={data} getData={answer}/>
                                        </ol>
                                    </div>
                                </div>
                            </div>
        </>
    )
}

export default SoalMatch

function SoalIsiMatch({data,getData}){
    if(data==null){
        return null
    }
    const s=data.data
    let soal=[]
    s.forEach(e => {
        if(e.jenis===3){
            soal.push(e)
        }
    });
    return (
        soal.map((val,u)=>(val.fileStatus===true)?<SoalIsiMatchTipe2 key={u} data={val} getData={getData}/>:<SoalIsiMatchTipe1 key={u} data={val} getData={getData}/>)
        )
  
    
}
function SoalIsiMatchTipe1({data,getData}){
    const soal=data.soal
    const choice=data.choice
    return(
        <>
        <li className="list-group-item">
            <strong>{data.soalMain}</strong>
            <div className="row mt-3">
                <div className="col-lg-6 mb-3">
                <p className="fw-bolder">Pertanyaan :</p>
                    <table className="table table-bordered border-primary">
                        <tbody>
                            {soal.map((val2,u2)=>
                                <tr key={u2}>
                                    <td style={{width:2+'em'}} className="align-top">{u2+1}</td>
                                    <td>{val2.soal}</td>
                                    <td style={{width:5+'em'}} ><input id={data.idSoalIsi} tipe='1' soal={val2.id} style={{width:5+'em'}} onChange={getData} type="text" /></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="col-lg-6">
                    <p className="fw-bolder">Pilihan Jawaban :</p>
                    <div className="table-responsive">
                        <table className="table table-info">
                            <tbody>
                                {choice.map((val3,u3)=>
                                <tr key={u3}>
                                    <td style={{width:2+'em'}}>{(u3+10).toString(36).toUpperCase()}</td>
                                    <td>{val3.choice}</td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </li>
        </>
    )
}
function SoalIsiMatchTipe2({data,getData}){
    const soal=data.soal
    const choice=data.choice
    return(
        <>
        <li className="list-group-item">
            <strong>{data.soalMain}</strong>
            <div className="row mt-3">
                <div className="col-lg-6 mb-3">
                <p className="fw-bolder">Gambar :</p>
                    <table className="table table-bordered border-primary">
                        <tbody>
                            {soal.map((val2,u2)=>
                                <tr key={u2}>
                                    <td style={{width:2+'em'}} className="align-top">{u2+1}</td>
                                    <td>{val2.soal}</td>
                                    <td style={{width:5+'em'}} ><input id={data.idSoalIsi} tipe='2' soal={val2.id} style={{width:5+'em'}} onChange={getData} type="text" /></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-6">
                    <p className="fw-bolder">Pilihan Jawaban :</p>
                    <img src={data.filePath} className="img-thumbnail" alt="..."/>
                </div>
            </div>
        </li>
        </>
    )
}