function SoalTf({data,answer}){
    if(typeof data=='undefined' || data==null){
        return (<></>)
    }

    const jenis=data.jenis
    if(jenis.indexOf(2)<0){
        return (<></>)
    }
    

    return(
        <>
        <div className='card'>
            <div className="card-header">
                True/False
            </div>
                                <div className="card-body">
                                    <div className="col-lg-12">
                                        <ol className="list-group list-group-numbered mt-3">
                                           <SoalIsiTf data={data} getData={answer}/>
                                        </ol>
                                    </div>
                                </div>
                            </div>
        </>
    )
}

export default SoalTf

function SoalIsiTf({data,getData}){
    if(data==null){
        return null
    }
    const s=data.data
    let soal=[]
    s.forEach(e => {
        if(e.jenis===2){
            soal.push(e)
        }
    });
    const i=soal.map((val)=>
        <li key={val.idSoalIsi} className="list-group-item">{val.soal}
                                            <div className="col-sm-10">
                                                { val.choice.map((cho)=>
                                                    <div key={cho.id} className="form-check">
                                                    <input className="form-check-input" type="radio" onChange={getData} jenis='2' name={val.idSoalIsi} value={cho.value}/>
                                                    <label className="form-check-label">
                                                        {cho.value}
                                                    </label>
                                                    </div>
                                                )
                                                }
                                            </div>
                                        </li>
       
    )

    return (
        <>
       {i}
        </>
    )
}