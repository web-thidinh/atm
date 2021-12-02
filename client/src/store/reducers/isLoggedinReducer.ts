interface initialState {
    isLoggedin: boolean,
    currentUser:string,
    token:string
}
interface Action{
    type:string,
    currentUser:string,
    privateToken:string

}

const initialValues = {
    isLoggedin: false,
    currentUser: "",
    token:''

}

export default function isLoggedin(state:initialState = initialValues,action:Action){
    switch(action.type){
        case 'SUCCESS_LOGGED_IN':
            return {
                    ...state,
                    isLoggedin:true,
                    currentUser:action.currentUser,
                    token:action.privateToken
                }
        case 'LOG_OUT':
            return{
                ...state,
                isLoggedin:false,
                currentUser:'',
                token:''
            }
        default:
            return state
    }
}