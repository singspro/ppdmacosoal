import { redirect } from "react-router-dom";
import api1 from "../config/api1"

function LoginApi(param,successLink, failLink){
  return(
    api1.post(`/soalLogin?sings=${param}`)
    .then((res)=>{
      if(res.status===200 && res.data.status==='ok'){
        localStorage.setItem('SingsPro',res.data.data.token);
        return redirect (successLink)
      }
      return redirect(failLink)
    })
    .catch((e)=>{
      return redirect(failLink)
    })
    )  
    
}

export default LoginApi

