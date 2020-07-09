import React from 'react';
import {User} from './User'
import {Main} from './Main'
import { connect } from 'react-redux';
class App extends React.Component{
    render(){
        return (
            <div className="container">
             <h1 style={{textAlign:'center'}}>React Redux</h1>
             <Main changeUsername ={()=>this.props.setName("AMAR")} />
             <User username={this.props.user.name}/>
             <div>{this.props.user.age}</div>
             <div>{this.props.math.lastValues.map((val)=>(<div>{val}</div>))}</div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        user:state.userReducer,
        math:state.mathReducer
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        setName:(name)=>{
            dispatch({
                type:"SET_NAME",
                payload:name
            });
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);