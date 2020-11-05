const INITIAL_STATE={
    users:
    [{
        name:"Parkash",
        email:"parkashsuther@gmail.com"
    },{
        name:"NAme 2",
        email:"name@gmail.com"
    }
    ]
}
export default (state=INITIAL_STATE,action)=>{
    console.log("State===>",state)
    switch(action.type){
        
        case 'SETDATA':
            return ({
                ...state,
                users:[...state.users,action.data]
            })
    }
    return state
}
