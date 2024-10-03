import PayPal  from '../assets/Paypal.png'
import VisaDebit from '../assets/visa.png'
import MasterCard from '../assets/mastercard.png'
import  Amex  from '../assets/amex.png'

const Checkout = ({catsInBasket}) => {

    return (
    <div>
        <h1>Checkout</h1>
        {catsInBasket.map((cat, index) => {
            return (
                <div key={index}> 
                <h2>{cat.name}</h2>
                <h2>£{cat.price}</h2>
                </div>
            )
        })}
        <h2>Total Price: £{catsInBasket.reduce((total, cat) => total+cat.price, 0)}</h2>
        <img id='payPal' src={PayPal} />
        <img id='masterCard' src={MasterCard} />
        <img id='visa' src={VisaDebit} />
        <img id='amex' src={Amex} />
    </div>
)}

export default Checkout