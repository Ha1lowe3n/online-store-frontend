import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import star from "../assets/star.svg";
import { getOneDevice } from "../http/deviceAPI";
import { DeviceType } from "../store/DeviceStore";

const DevicePage: React.FC = () => {
    const [device, setDevice] = useState({} as DeviceType);
    // @ts-ignore
    const { id } = useParams();

    useEffect(() => {
        getOneDevice(id).then((data) => setDevice(data));
    }, []);

    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4}>
                    <Image
                        src={process.env.REACT_APP_API_URL + device.img}
                        width={300}
                        height={300}
                    />
                </Col>
                <Col md={4}>
                    <Row
                        className={
                            "d-flex justify-content-center align-items-center"
                        }
                    >
                        <h2>{device.name}</h2>

                        <div
                            className={
                                "d-flex justify-content-center align-items-center"
                            }
                            style={{
                                background: `url(${star}) no-repeat center center`,
                                width: 120,
                                height: 120,
                                backgroundSize: "cover",
                                fontSize: 24,
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className={
                            "d-flex flex-column align-items-center justify-content-between"
                        }
                        style={{ width: 150, height: 120 }}
                    >
                        <h3>{device.price}</h3>
                        <Button variant={"outline-dark"}>
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row
                className={"d-flex flex-column justify-content-center ml-0 m-3"}
            >
                <h2
                    style={{
                        textAlign: "start",
                        marginLeft: 30,
                        marginBottom: 15,
                    }}
                >
                    Характеристики
                </h2>
                {device.info?.map((desc, i) => (
                    <Row
                        key={desc.id}
                        className={"ml-3"}
                        style={{
                            background:
                                i % 2 === 0 ? "lightgray" : "transparent",
                            padding: 10,
                        }}
                    >
                        {desc.title}: {desc.description}
                    </Row>
                ))}
            </Row>
        </Container>
    );
};

export default DevicePage;
