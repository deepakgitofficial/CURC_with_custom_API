import { NavLink } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";

const ProductCard = ({porduct}) => {
    const myCard=porduct;   
  return ( 
        <div className="mycard gap-4 mb-6">
            
            <li className='text-left'>
                <p>{myCard.id}</p> 
                <img src={myCard.image} alt={myCard.id}  />
                <p className='card-title'>{myCard.title}</p>
                <p className='card-title- pt-4'>${myCard.price}</p>

                <NavLink to={`/service/${myCard.id}`}>View <GrFormNext style={{display:'inline'}}/></NavLink>
            </li>   
            
        </div> 
  )
} 
export default ProductCard