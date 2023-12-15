import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'
import { useEffect, useState } from 'react'
import api1 from '../config/api1'
import SoalMc from '../Components/soalMc'
import SoalTf from '../Components/soalTf'
import SoalMatch from '../Components/soalMatch'
import ModalWarning from '../Components/modalConfirm'
function Soal(){
    const[biod,setBiod]=useState({nama:'Paijo',jabatan:'Macul',perusahaan:'PT. XXX'})
    const[soal,setSoal]=useState(null)
    const[showModal,setShowModal]=useState(false)
    const[allAns, setAllAns]=useState([])

    function answersMcTf(e){
        let ans=allAns
        const data=e.target
        let duplicate=-1
        ans.forEach((e,i) => {
            if(e.idSoalIsi===data.name){
                duplicate=i
            }
        });
        if(duplicate>-1){
            ans[duplicate]={
                jenis:parseInt(data.attributes.jenis.value),
                idSoalIsi:data.name,
                value:data.value
            }
        }else{
            ans.push({
                jenis:parseInt(data.attributes.jenis.value),
                idSoalIsi:data.name,
                value:data.value
            })
        }
        setAllAns(ans)
    }

    function answerMatch(e){
        let ans=allAns
        const takeChoice=(d)=>{
            const s=soal.data
            const idSoalIsi=d.attributes.id.value
            let ret=null
            if(d.attributes.tipe.value==='1'){
                s.forEach(e => {
                    if(e.idSoalIsi===idSoalIsi){
                        e.choice.forEach((f,i) => {
                            if((i+10).toString(36).toUpperCase()===d.value.toUpperCase()){
                                ret=f.choice
                            }
                        });
                    }            
                });
            }else{
                ret=d.value.toUpperCase()
            }
    
            return ret
        }
        const data=e.target
        let dup=-1
        ans.forEach((e,i) => {
            if(e.subSoalId===parseInt(data.attributes.soal.value)){
                dup=i
            }
        });
        if(dup>-1){
            ans[dup]={
                jenis:3,
                idSoalIsi:data.attributes.id.value,
                subSoalId:parseInt(data.attributes.soal.value),
                value:takeChoice(data)
            }
        }else{
            ans.push({
                jenis:3,
                idSoalIsi:data.attributes.id.value,
                subSoalId:parseInt(data.attributes.soal.value),
                value:takeChoice(data)
            })
        }

        setAllAns(ans)
    }

    const handleSubmit=()=>{
        const data={
            ans:allAns,
            soal:soal
        }
        const xx=JSON.parse(localStorage.getItem('bbwIsHot'))
        api1.post('/ansSubmit',{
            data:data
        },{
            headers:{
                'singspro':localStorage.getItem('SingsPro'),
                'tokenPeserta':xx.data.tokenPeserta
              },
              validateStatus:false
        }).then((res)=>{
            console.log(res)
            setShowModal(false)
        }
        )
    }
    
    useEffect(()=>{
        const xx=JSON.parse(localStorage.getItem('bbwIsHot'))
        api1.get('/mpTest',{
            headers:{
                'singspro':localStorage.getItem('SingsPro'),
                'tokenPeserta':xx.data.tokenPeserta
              },
              validateStatus:false
        })
        .then((res)=>{
            // console.log(res)
            setBiod({
                nama:res.data.data.nama,
                jabatan:res.data.data.jabatan,
                perusahaan:res.data.data.perusahaan,
            })
            // console.log(res.data.data.soal)
            setSoal(res.data.data.soal)
        })
        .catch((e)=>{
            setBiod({
                nama:'error Server',
                jabatan:'error Server',
                perusahaan:'error Server',
            })
        })
        
    },[])
return(
    <>
                              <div className='card'>
                                <div className="card-body">
                                    <div className="col-lg-12">
                                        <h5 className="card-title">Data Peserta</h5>
                                    
                                        <form className="row g-3">
                                            <div className="col-md-12">
                                                <label className="form-label">Nama</label>
                                                <h4>{biod.nama}</h4>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Jabatan</label>
                                                <h4>{biod.jabatan}</h4>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Perusahaan</label>
                                                <h4>{biod.perusahaan}</h4>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <SoalMc data={soal} answer={(e)=>answersMcTf(e)}/>
                            <SoalTf data={soal} answer={(e)=>answersMcTf(e)}/>
                            <SoalMatch data={soal} answer={(e)=>answerMatch(e)}/>
                            <div className='card'>
                                <div className="card-body">
                                    <div className='mt-3'>
                                        <button className='btn btn-primary' onClick={()=>setShowModal(true)}>Submit</button>
                                        <ModalWarning btnText={'submit'} handleClose={()=>setShowModal(false)} handleSubmit={handleSubmit} show={showModal} message={'Apakah anda sudah yakin dengan jawaban anda ...?'}/>
                                    </div>
                                </div>
                            </div>
                            

    </>
)
}

export default Soal

