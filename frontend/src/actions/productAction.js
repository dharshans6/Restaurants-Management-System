import axios from 'axios'
export const getAllProducts=()=>async dispatch=>{
    dispatch({type:'Get_product_Request'})
    try{
        const response = await axios.get('/api/products/getProducts');
        console.log(response);
        
        dispatch({ type: 'Get_product_Success', payload: response.data });
        

    }catch(err){
        dispatch({type:'Get_product_Error',payload:err})
         
    }
}