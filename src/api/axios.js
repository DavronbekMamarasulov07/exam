const instance = axios.create({ 
    baseURL: "https://blogpost-server-production-d92d.up.railway.app/api/v1",
    headers:{   
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        "Content-Type" : "application/json"
    },
    timeout: 10000, //malumot 10 sekund ichida kelmasa back and dan "error" beradi 
})
export default instance