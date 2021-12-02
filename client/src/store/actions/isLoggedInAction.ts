interface Iuser{
    user:{
        email:string
    }
    PRIVATE_TOKEN:string
}
export const isLoggedinAction = (data:Iuser)=>{
    return {
        type:'SUCCESS_LOGGED_IN',
        currentUser:data.user.email,
        privateToken:data.PRIVATE_TOKEN
    }
}

export const logOut = ()=>{
    return {
        type:'LOG_OUT'
    }
}