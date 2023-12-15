import { redirect } from "react-router-dom"
import api1 from "../config/api1"

async function Auth(){
  return(
      api1.get('/getParam',{
          headers:{
              'singspro':localStorage.getItem('SingsPro')
            },
            validateStatus:false
        })
        .then((res)=>{
            if(res.status!=200){
                return redirect('/error')
            }
            return null
        })
        .catch((e)=>{
            return redirect('/error')
        }) 
        )     
    
    
}

export default Auth