import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Col, Container, Row } from "react-bootstrap";

import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { Context } from "../index";
import { getBrands, getDevices, getTypes } from "../http/deviceAPI";

const Shop: React.FC = observer(() => {
    const { device } = useContext(Context);

    useEffect(() => {
        getTypes().then((data) => device.setTypes(data));
        getBrands().then((data) => device.setBrands(data));
        getDevices().then((data) => device.setDevices(data.rows));
    }, []);

    return (
        <Container>
            <Row className={"mt-4"}>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
