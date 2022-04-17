 import  "./register.css"
 
 export default function Register() {
     return (
         <div className="login">
             <div className="loginWrapper">
                  <div className="loginLeft">
                     <h3 className="loginLogo">Coresocial</h3>
                     <span className="loginDesc">
                         Connect with friends  and the world around you on CoreSocial
                     </span>
                  </div>
                  <div className="loginRight">
                    <div className="registerBox">
                        <input placeholder="Email"  type="Email" className="loginInput"/>
                        <input placeholder="User name" type="text/number" className="loginInput"/>
                        <input placeholder="Password" type="password" className="loginInput"/>
                        <input placeholder="Password Again" type="password" className="loginInput"/>

                        <button className="loginButton">Sign Up</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                  </div>
             </div>
             
         </div>
     )
 }
 