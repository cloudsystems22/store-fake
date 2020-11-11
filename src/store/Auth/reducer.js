const INITIAL_STATE = {
    id:'',
    name:'',
    token:''
}
export default function auth(state = INITIAL_STATE, action){
    switch(action.type){
        case "SAVE_LOGIN":
            return {
                ...state, token: action.data,
            }
        case "LOGOUT":
            return {
                ...state, token:"",
            }
        default:
            return state;
    }

}

