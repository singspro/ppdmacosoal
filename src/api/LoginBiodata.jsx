import { redirect } from "react-router-dom"
import api1 from "../config/api1"

function LoginBiodata(){
    return( api1.get('/getParam',{
        headers:{
            'singspro':localStorage.getItem('SingsPro')
        },
        validateStatus:false
    })
    .then((res)=>{
        if(res.status===200 && res.data.status==='ok'){
            if(res.data.data.soalUmum===1){
                return redirect('idu')
            }
            
            return redirect('idi')
        }
    })
    .catch((e)=>{
        return redirect('/error')
    })) 
}
export default LoginBiodata