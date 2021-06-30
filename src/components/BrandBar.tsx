import React, { useContext } from "react";

import { Card, Row } from "react-bootstrap";

import { Context } from "../index";
import { observer } from "mobx-react-lite";

const BrandBar: React.FC = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row className={"d-flex"}>
            {device.brands.map((brand) => (
                <Card
                    key={brand.id}
                    style={{ cursor: "pointer", padding: 12 }}
                    onClick={() => device.setSelectedBrand(brand)}
                    bg={
                        brand.id === device.selectedBrand.id
                            ? "success"
                            : "light"
                    }
                    text={
                        brand.id === device.selectedBrand.id ? "white" : "dark"
                    }
                >
                    {brand.name}
                </Card>
            ))}
        </Row>
    );
});

export default BrandBar;
