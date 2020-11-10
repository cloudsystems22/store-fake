import Api from '../../services/FakeStoreApi';

const implementations = {
    async storeUser(user){
       try{
          const response = await Api.post('/users', user);
          if(response.status !== 201){
            throw new Error('Não foi possivel cadastrar o usuário')
          }
          return response.data
       } catch(err){
         console.error(err);
          return {
            error:true,
            details:err.message,
          }
       }
    },
  }

  export default implementations