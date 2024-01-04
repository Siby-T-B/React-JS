import React from "react";
import '../task4/Social.css';
import { Button } from "bootstrap";
export function Social(){
    return(
        <>
        <div className=" bg text-center p-5">
        <div className="row mt-5 pt-5">
            <h1 className="text-light col-12">Social Buttons</h1>
            <div className="col-6 grid gap-0 column-gap-2 mx-auto">
            <input type="button" name="Button" value="Like" className="btn btn-warning g-col-1 m-3"/>
            <input type="button" name="Comment" value="Comment" className="btn btn-light g-col-3 m-3"/>
            <input type="button" name="Share" value="Share" className="btn btn-primary g-col-2 m-3"/>
            </div> 
        </div>
        </div>

        </>
    );
        
      
}