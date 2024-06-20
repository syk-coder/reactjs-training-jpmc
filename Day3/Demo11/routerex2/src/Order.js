import { Link } from "react-router-dom";

export const Order = () => {
    const orderIds = ["1001", "1002", "1003", "1004"];

    return (
        <>
            <h1>All Orders</h1>
            <ul>
                {
                    orderIds.map(oId => {
                        return (
                            <li key={oId} >
                                <Link to={`/order/details/${oId}`}>
                                    View Order {oId}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )

}