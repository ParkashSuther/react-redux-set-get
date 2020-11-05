import React from 'react'
import {connect} from 'react-redux'
import {setData} from '../../store/action'
// connect method is use for fetch and updata data
// any data if wanted to get from redux then we must connect that components and redux.
// import connect form react radux.
// connect take two parameter one
// 1. mapStateToProps
// 2.


class Home extends React.Component{
    render(){
        let user={
            name:"user name",
            email:"username@mgiald"
        }
        return(
            <div>
                <h1 className="">home</h1>
                <button onClick={()=>this.props.setData(user)}>Set data</button>
            </div>
        )
    }
}

const mapStateToProps =(state)=>({
    users: state.users
})

const mapDispatchToProp =(dispatch)=>({
    setData: (data) => dispatch(setData(data))
})
export default connect(mapStateToProps,mapDispatchToProp)(Home);
