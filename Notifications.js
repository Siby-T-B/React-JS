import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import{faUser} from '@fortawesome/free-solid-svg-icons'
import{faCircleCheck,faBell,faXmarkCircle}from "@fortawesome/free-regular-svg-icons"
import '../task5/Notifications.css';
export function Notifications(){
 return(
    <>
    {/* <h1><FontAwesomeIcon icon={faUser} />hi</h1>
    <h2>siby</h2> */}
    <h1 className="text-center">Notifications</h1>
    <div className="container-fluid row text-light text-center ">
    <h2 className="bg-primary p-4  col-lg-8 mx-auto"><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>Information Message</h2>
    <h2 className="bg-success p-4  col-lg-8 mx-auto"><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>Sucess Meassage</h2>
    <h2 className="bg-warning p-4  col-lg-8 mx-auto"><FontAwesomeIcon icon={faBell}></FontAwesomeIcon>Warning Message</h2>
    <h2 className="bg-danger p-4  col-lg-8 mx-auto"><FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>Error Message</h2>
    </div>
    </>
 );
}