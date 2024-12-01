import React from 'react'
import { useLoaderData, useNavigate, } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";

export const ProductDetail = () => {
    const mySingleItem = useLoaderData();
    // const parameter= useParams();

    const navitatehook = useNavigate()

    const goBackFun = () => {
        navitatehook(-1);
    }

    console.log(mySingleItem, 'single item page')
    return (
        <div className='singl-item-parent p-7'>
            <h2>product detail page </h2>
            <div className='back-btn'>
                <button className='btn btn-primary bg-teal-600 text-white custom-btn mt-5' onClick={goBackFun}><IoMdArrowBack /> back</button>
            </div>
            <div className='single-item'>
                <div className='single-img'>
                    <img src={mySingleItem.image} alt={mySingleItem.id} />
                </div>

                <p className='card-title'>{mySingleItem.title}</p>
                <p className='card-price pt-4'>${mySingleItem.price}</p>
                <hr />
                <p className='dsc'>description:{mySingleItem.description}</p>
                <p className='category'>category:{mySingleItem.category}</p>
                <p className='rating'>rating:{mySingleItem.rating.rate}</p>
            </div>


        </div>
    )
}

