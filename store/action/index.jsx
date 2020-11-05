

const setData=(data)=>{
    
    return (dispatch)=>{
        dispatch({ type:"SETDATA", data :data })
        console.log("State===>",data)
    }   
}

export {
    setData
}
