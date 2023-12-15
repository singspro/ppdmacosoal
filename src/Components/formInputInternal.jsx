import Select from "react-select"
import ManpowerListLoader from "../api/manpowerLoader"
import { useEffect, useState } from "react"
import api1 from "../config/api1"
import BtnLoading from "./buttonLoading"
import BtnAja from "./btnAja"

function DataInternal(){
    const[select,setSelect]=useState({value:'',label:'No Data'})
    const[alert,setAlert]=useState({status:false,message:null})
    const[btnSbmt,setSbmt]=useState(true)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setSbmt(false)
        api1.post('/submitInternal',{
            nrp:select.value
        },{
            headers:{
                'singspro':localStorage.getItem('SingsPro')
            },
            validateStatus:false
        }).then((res)=>{
            if(res.data.status==='error'){
              setAlert({status:true,message:res.data.message})
              setSbmt(true)
            }else{
                setAlert({status:false,message:null})
                localStorage.setItem('bbwIsHot',JSON.stringify(res.data));
                window.location.replace('/asem')
            }
        })
    }

    const[mp,setMp]=useState([{value:'-',label:'No Data'}])
    useEffect(()=>{
        api1.get('/mp',{
            headers:{
                'singspro':localStorage.getItem('SingsPro')
            },
            validateStatus:false
        }).then((q)=>{
            let a=[]
            let w=q.data.data
            w.forEach(e => {
                a.push({
                    value:e.nrp,
                    label:`${e.nrp}||${e.nama}||${e.perusahaan}||${e.jabatanFn}`
                })                
            });
            setMp(a)
        })
    },[])
   
    return(
        <>
            <form onSubmit={(e)=>handleSubmit(e)}>
                            <div className='card'>
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-lg-12">
                                        <h5 className="card-title">Data Peserta</h5>
                                        <p>Soal ini hanya untuk karyawan yang sudah terdaftar di sistem ppdmaco.com. jika nama anda tidak ditemukan silahkan hubungi team PPD Maco</p>
                                    
                                        <div className="row g-3">
                                            <div className="col-md-12">
                                                <label className="form-label">Nama</label>
                                                <Select
                                                placeholder='pilih nama anda'
                                                defaultValue={select}
                                                isSearchable
                                                options={mp}
                                                onChange={setSelect}
                                                />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    </div>
                                    {(alert.status)?<Alert message={alert.message}/>:''}
                                </div>
                            </div>

                            <div className='card'>
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-lg-12 mt-3">
                                        {(btnSbmt)?<BtnAja text={'Next'}/>:<BtnLoading/>}
                                    </div>
                                    </div>
                                </div>
                            </div>
            </form>
            
        </>
    )

}
export default DataInternal


function Alert(props){
    return(
        <>
        <div className="alert alert-danger mt-3" role="alert">
            {props.message}
        </div>
        </>
    )
}