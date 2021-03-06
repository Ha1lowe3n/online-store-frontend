import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Row } from "react-bootstrap";

import { Context } from "../index";
import DeviceItem from "./DeviceItem";

const DeviceList: React.FC = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row>
            {device.devices.map((device) => (
                <DeviceItem
                    key={device.id}
                    img={device.img}
                    name={device.name}
                    rating={device.rating}
                    id={device.id}
                />
            ))}
        </Row>
    );
});

export default DeviceList;
