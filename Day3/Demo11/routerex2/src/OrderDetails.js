import { useParams, useNavigate } from "react-router"

const OrderDetails = () => {
    let { id } = useParams();
    const navigate = useNavigate();

    const onBackHandler = e => {
        e.preventDefault();
        //navigate(-1);
        navigate("/order");
    }

    return (
        <>
            <h2>Details of Order {id}</h2>
            <a href="javascript:void(0)" onClick={onBackHandler} >Back To Orders</a>
        </>
    )
}

export default OrderDetails;