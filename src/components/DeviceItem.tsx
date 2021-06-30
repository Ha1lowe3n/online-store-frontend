import React from "react";
import { useHistory } from "react-router-dom";

import { Card, Col, Image } from "react-bootstrap";

import star from "../assets/star.svg";
import { PathRoutes } from "../routes";

type DeviceItemPropsType = {
    img: string;
    name: string;
    rating: number;
    id: number;
};

const DeviceItem: React.FC<DeviceItemPropsType> = ({
    img,
    name,
    rating,
    id,
}) => {
    const history = useHistory();

    return (
        <Col
            md={3}
            className={"mt-5"}
            onClick={() => history.push(`${PathRoutes.DEVICE_ROUTE}/${id}`)}
        >
            <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
                <Image width={150} height={150} src={img} />
                <div
                    className={
                        "d-flex justify-content-between align-items-center"
                    }
                >
                    <span style={{ opacity: 0.7 }}>Samsung...</span>
                    <div className={"d-flex align-items-center"}>
                        <span className={"mr-1"}>{rating}</span>
                        <img
                            src={star}
                            alt="rating icon"
                            height={15}
                            width={15}
                        />
                    </div>
                </div>
                <span className={"mt-1"} style={{ textAlign: "start" }}>
                    {name}
                </span>
            </Card>
        </Col>
    );
};

export default DeviceItem;
