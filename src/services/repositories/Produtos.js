import Api from '../../services/FakeStoreApi';

const implementations = {
    async listProducts(){
       try{
          const response = await Api.get('/products');
          return response.data
       } catch(err){
         console.error(err);
          return {
            error:true,
            details:err.message,
          }
       }
    },
    async creat (product){
        try{
            const response = await Api.post('/products', product);
            return response.data;
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