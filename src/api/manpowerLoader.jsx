import api1 from "../config/api1";

async function ManpowerListLoader(){
const q=await api1.get('/mp',{
    headers:{
        'singspro':localStorage.getItem('SingsPro')
    },
    validateStatus:false
})
return q
}

export default ManpowerListLoader