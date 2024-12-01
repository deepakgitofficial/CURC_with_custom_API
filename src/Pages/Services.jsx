import { useLoaderData } from "react-router-dom"
import ProductCard from "../Components/UI/ProductCard";

const Service = () => {
  const porductData = useLoaderData();
  // console.log(porductData, 'porduct-data');

  return (
    <div className="grid justify-items-center">
      <h1>Product page</h1>
      <div className="container py-6">
        <ul className="grid grid-cols-5 place-items-center"> 
          {porductData.map((currEle) => { 
            return (   
              <ProductCard key={currEle.id} porduct={currEle} />    
            )
          })}
        </ul>
      </div> 
     
    </div>
  )
}
export default Service;