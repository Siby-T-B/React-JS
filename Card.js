import React from "react";
import '../task7/Card.css';
export function Card(){
return(
        <>   
        <h1 className="text-center">Learn 4.0 Technologies</h1>
        <p className="text-center para fw-bolder">Industry 4.0 can be defined as the integration of intelligent digital technologies into manufacturing and industrial processes. It encompasses a set of technologies that include industrial IoT networks, AI, Big Data, robotics, and automation.</p>
        <div className="row row-cols-1 row-cols-md-2 g-4 p-5">
        
  <div className="row " >
    
    <div className="card col-5" >
     <div className="">
    <div className="card-body box1" >
        <h5 className="card-title">Data Scientist</h5>
        <p className="card-text">Data scientists develop algorithms (sets of instructions that tell computers what to do) and models to support programs for machine learning. </p>
        <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/01/archetypes-banner.png" alt="data" className="w-50" />
      </div>
    </div>
  </div>
  <div class="col-5">
    <div class="card border-5 ">
     
      <div class="card-body box2">
        <h5 class="card-title">IOT Developer</h5>
        <p class="card-text">An article on career options in IoT: The Internet of Things (IoT) is rapidly transforming the world around us, and with it, the job market.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGH_EUuSUmSSvqO2fAPVyTsThyv-qC1SrVA&usqp=CAU " className=" w-50" alt="..."/>
      </div>
    </div>
  </div></div>
  <div class="col-6">
    <div class="card border">
      
      <div class="card-body box3 ">
        <h5 class="card-title">VR Developer</h5>
        <p class="card-text">Virtual reality and augmented reality developers are the creative minds behind extended reality programs.</p>
        <img src="https://www.nevinainfotech.com/new-ni-images/hire-pages-images/hire-virtual-reality-developers-img-3.svg " className="w-50" alt="..."/>
      </div>
    </div>
  </div>
  <div className="col-5">
    <div className="card  box4">
      
      <div class="card-body ">
        <h5 class="card-title">ML Engineer</h5>
        <p class="card-text">A machine learning engineer (ML engineer) is a programmer who designs and builds software that can</p>
        <img src="https://cdn.sanity.io/images/oaglaatp/production/2d215fdc3d854217b402e9816af925ebde110ebb-1200x800.png?w=1200&h=800&auto=format" class=" w-50 rounded" alt="..."/>
      </div>
    </div>
  </div>
</div>
        </>
    );
}
       