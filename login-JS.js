
const e = React.createElement;

class HelloMessage extends React.Component{
    render(){
        return e(
            "div",
            null,
            e(
                "form",
                { onSubmit: this.handleLogin },
                e(
                    "label",
                    { htmlFor: "username" },
                    "Username: ",
                    e(
                        "input",
                        { id: "username" } 
                    )
                ),
                e("br"),
                e(
                    "label",
                    { htmlFor: "password" },
                    "Password: ",
                    e(
                        "input",
                        { id: "password" } 
                    )
                ),
                e("br"),
                e(
                    "button",
                    null,
                    "Login"
                )
                
            )
        );
    }
    
    handleLogin(event){
        event.preventDefault();
        
    }
}

ReactDOM.render(
  e(HelloMessage, { name: "Xtian" }),
  document.getElementById('login')  
);