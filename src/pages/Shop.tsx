import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";

const Shop: React.FC = () => {
    return (
        <Container>
            <Row className={"mt-4"}>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;
