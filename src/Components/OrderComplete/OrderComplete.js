import React, { useState } from 'react';
import MapImg from '../../resources/bg/ordercomplete.png';
import Rider from '../../resources/Image/rider.png';
import Helmet from '../../resources/Image/helmet.png';
import { useEffect } from 'react';
import './OrderComplete.css';

const OrderComplete = (props) => {

    const [orderId, setOrderId] = useState();
    useEffect(() => {
        setOrderId(props.orderId)
        window.scrollTo(0, 0)
    }, [props])

    return (
        <div className="container pt-5 my-5">
            <div className="row">
                <div className="col-md-8">
                    <img className="img-fluid" src={MapImg} alt="" />
                </div>
                <div className="col-md-4 pl-md-5">
                    <div className="bg-light p-3 rounded">
                        <img className="w-25 ml-5" src={Rider} alt="" />
                        <div className="bg-white  rounded p-3 my-3">
                            <div>
                                {
                                    orderId ?
                                        <div>
                                            <h6>Your Order Placed Successfully & Order Id is:</h6>
                                            <p className="order-id">{props.orderId}</p>
                                        </div>
                                        :
                                        <h6>Fetching Order Id...</h6>
                                }
                                <h5>Your Location:</h5>
                                {
                                    props.deliveryDetails ?
                                        <p>{props.deliveryDetails.flat}, {props.deliveryDetails.road}</p>
                                        : 
                                        <p>Loading data...</p>
                                }
                            </div>
                            <div>
                                <h5>Shop Address</h5>
                                <p>Kashbon Rastaurent and Kabab</p>
                            </div>
                        </div>
                        <h1>09:00</h1>
                        <p>Estimated Delivery</p>

                        <div className="bg-white rounded p-3 d-flex">
                            <img className="w-25 mr-2" src={Helmet} alt="" />
                            <div>
                                <h6>Jubair</h6>
                                <p>Your Rider</p>
                            </div>
                        </div>

                        <button className="btn btn-block my-3 btn-danger">Contact</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;