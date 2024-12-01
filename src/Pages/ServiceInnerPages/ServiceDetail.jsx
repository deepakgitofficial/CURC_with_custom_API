import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom'

const ServiceDetail = () => {
  const navigate = useNavigate();
const handleGoBack= ()=>{
    navigate(-1);
    // console.log(navigate);
}
  return (
    <div>
        <div className="bg-light"> 
            <h3>service detail page</h3> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ducimus debitis, ad nemo laborum blanditiis. Illo laboriosam, quidem cupiditate soluta corporis nam dolorum animi accusamus, commodi tenetur at, doloribus obcaecati?</p>
            <button className='btn mt-4' onClick={handleGoBack}>Back to previous</button> 
         </div>
    </div>
  )
}

export default ServiceDetail