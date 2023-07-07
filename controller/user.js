const axios = require('axios');

module.exports.userLogin=(req,res)=>{
    try{
        console.log(req.body)
        axios.post('http://20.163.238.153/api/method/login', {
            usr: req.body.userName,
            pwd:req.body.password
        },{  headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },})
          .then(response => {
            // console.log(response.json());
            res.status(200).json(response.data)
          })
          .catch(error => {
            res.status(500).json({error:error})
           
          });
        
      }
    catch(error){
res.status(500).json({error:error})
    }
}
