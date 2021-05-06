import React from 'react';
import './Motobike.css';
import { Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

function Motobike(props) {
    const qty=1;
    const { product } = props;//constn product =props.product
    let history = useHistory();
    const handleAddToCart = (id) => {
        history.push('/cart/'+id+'?qty=' +qty);    
        console.log(history);   
    };
    return (
        <div>
                <li key={product.id} class="list-item">
                    <div className=" box-in-moto" >
                        <div className=" grid_box">		
                            <Link to={'/MotoDetail/'+product.id+'?userId='+product.userId}> <img src={product.image}  className="img-responsive" alt="" />
                                <div className="zoom-icon">
                                <ul className="in-by">
                                    <li><h5>{product.name}</h5></li>                     
                                </ul>
                                </div> </Link> 	
                            </div>
                            {/**/}
                            <div onClick={ () => handleAddToCart(product.id)} className="grid_1 simpleCart_shelfItem">
                                <a href="" className="cup item_add"><span className=" item_price-moto">{product.price*1000}VNĐ <i class="fas fa-cart-arrow-down"> </i> </span></a>					
                            </div>
                            {/**/}
                    </div>
                </li>   
        </div>    
    )
}

export default Motobike
