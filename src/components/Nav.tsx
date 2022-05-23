import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
    const [cartItems] = useSelector((store) => store.cart);
    return (
        <div className="nav">
            <span>
                <h3>
                    <Link to={"/"}>Shopper</Link>
                </h3>
            </span>
            {/* Show follwing div only if we are not on /checkout page */}
            <div className="navCartStatus">
                Cart:{" "}
                <span className="navCartCount">
                    {cartItems}
                </span>
                <button className="navCartCheckout">Checkout</button>
                {/* on this button click user goes to checkout page */}
            </div>
        </div>
    );
}

export { Nav };
