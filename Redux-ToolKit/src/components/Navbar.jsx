import {useSelector} from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () =>{
    const amount = useSelector((store)=>store.cart.amount)
    return (
        <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <FaShoppingCart size={32}/>
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;