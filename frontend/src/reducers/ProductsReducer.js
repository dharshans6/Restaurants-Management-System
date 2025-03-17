export const getAllProductReducer =(state={},action)=>{
    switch(action.type){
        case 'Get_product_Request':return{
            ...state
        }
        case 'Get_product_Success':return{
            products:action.payload
        }
        case 'Get_product_Error':return{
            error:action.payload
        }
        default: return state
    }
}