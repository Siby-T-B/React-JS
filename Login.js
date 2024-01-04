import React from "react";
import '../task6/Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
export function Login(){
    return(
        <>
        <div className=" main  align-items-center p-5">
            <div className="submain bg-light d-flex justify-content-center row mx-auto">
                <div className="col-12 col-md-6 p-5">
                    <img className=""src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GLBzJSNaDAJ7BFdEpCIG4hfWmwGnum1tN4A1gcKaApyrBIiTP3z5k5bU6rP9i7VHP1M&usqp=CAU"/>
                </div>
                <div className="m-5 col-gap">
                    <h1>Member Login</h1>
                    <div className="d-flex">
                    <FontAwesomeIcon icon={faEnvelope} className="p-2"/>
                    <input type="text" name="text" value="" placeholder="Email" className="w-100 input1"/>
                    </div>
                    <div className="d-flex">
                    <FontAwesomeIcon icon={faLock} className="p-2" />   
                    <input type="password" name="pwd" value="" placeholder="password" className="w-100 input2"/><br></br>
                    </div>
                    <div className="text-center">
                    <input type="button" name="button" value="button" className=" btn1 bg-success btn-block mt-3"/><br></br><br></br>
                    <a className="text-success "><span className="text-dark">forgot</span> Username / Password</a><br></br><br></br>
                    <a className="text-success text-">Create your account</a>
                    </div>

                </div>

            </div>
            
        </div>
        </>
    );
}
