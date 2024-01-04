import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
export function Productpage(){
    const[product,setProduct]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products?limit=5")
        .then(data=>data.json())
        .then(putproduct=>setProduct(putproduct))
    }) 
    return(
        <>
            <h1>Products</h1>
            <div className="row">
            {
                product.map((value,index)=>(
  <>
  
  <div className="card col-4 d-flex">
  <img src={value.image} className="card-img-top w-25" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{value.title}</h5>
  <p className="card-text">{value.description}</p>
  <Link to={`/Exampro/${value.id}`}>view</Link>
  <p><StarRatings
                     rating={value.rating.rate}
                    starDimension="40px"
                   starSpacing="15px"
                    /></p>
 </div>
</div>

                    </>
                ))
                
                
            }
            </div>
            
        </>
    );
}