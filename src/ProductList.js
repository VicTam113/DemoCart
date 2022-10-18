import {Link} from "react-router-dom"
import React, {useState, useEffect} from "react"  //React Hook
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"

export default function ProductList() {

    let [productList, setProductList] = useState([])

    //useEffect hook
    useEffect(()=>{
        fetch('https://victam113.github.io/demoapi/react-basic-product.json')
            .then(response => response.json())
            .then(data => setProductList(data))

    },[]) 

    return (
        <>
            <Title mainTitle="三文治店(應用React.js實作) " />

            <div className="container">
                {
                    productList.map(product=>(
                        <React.Fragment key={product.id}>

                            <div className="containerItem">
                                <Link to={'/product/'+product.id}>
                                    <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name}  />
                                </Link>
                                
                                <div className="productName">
                                 {product.name}
                                 <p>{product.price}元/件</p>
                                </div>
                                
                                <QuantityBtn productInfo={product} />
                            </div>

                        </React.Fragment>
                    ))
                }
            </div>


        </>
    )
}
