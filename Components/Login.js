import React ,{Component} from 'react';
 

class Login extends Component{
    login()
    {
        alert ("login successfull")

    }
    submitted()
    {
        alert("Data submitted")
    }
    render(){
        return(
            <div>
                <div>
                    <input type="text" placeholder="EMAIL ID" /><br/><br/>
                    <input type="text" placeholder="PASSWORD"/><br/><br/>
                    <button onClick={()=>this.login()}>Login</button>
                    <button onClick={()=>this.submitted()}>Submit</button>
                    
                </div>

            </div>
        )
    }
}

export default Login;