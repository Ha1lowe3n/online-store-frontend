import React from "react";

import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import star from "../assets/star.svg";

const DevicePage: React.FC = () => {
    const device = {
        id: 1,
        name: "Iphone 12 pro",
        price: 10000,
        rating: 5,
        img: "https://www.ixbt.com/img/n1/news/2019/10/4/EJ2JsTuX0AAEmWm_large.jpg",
    };
    const info = [
        { id: 1, title: "Оперативная память", description: "5 гб" },
        { id: 2, title: "Камера", description: "12 мп" },
        { id: 3, title: "Процессор", description: "М1" },
    ];

    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4}>
                    <Image src={device.img} width={300} height={300} />
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
                {info.map((desc, i) => (
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
