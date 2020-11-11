import Api from '../ApiExpress';

const implementations = {
    async Login(user){
        try{
            const response = await Api.post('/login', user)
            console.log(response)
            if(response.status !==200){
                return 
            }
            return response.data.token;
        } catch(err){
            console.error(err);
            return {
              error:true,
              details:err.message,
            }
        }
    }

}

export default implementations

