import React, { useContext, useState } from "react";

import { Button, Dropdown, Form, Modal, Row } from "react-bootstrap";

import { Context } from "../../index";

type CreateDevicePropsType = {
    show: boolean;
    onHide: () => void;
};

const CreateDevice: React.FC<CreateDevicePropsType> = ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState<
        Array<{ title: string; description: string; number: number }>
    >([]);

    const addInfo = () => {
        setInfo([...info, { title: "", description: "", number: Date.now() }]);
    };

    const removeInfo = (number: number) => {
        setInfo(info.filter((i) => i.number !== number));
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className={"m-0"}>
                        <Dropdown className={"mr-2 mb-3"}>
                            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map((type) => (
                                    <Dropdown.Item key={type.id}>
                                        {type.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className={"mr-2 mb-3"}>
                            <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map((brand) => (
                                    <Dropdown.Item key={brand.id}>
                                        {brand.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            className={"mb-3"}
                            placeholder={"Введите название устройства"}
                        />
                        <Form.Control
                            className={"mb-3"}
                            placeholder={"Введите стоимость устройства"}
                            type={"number"}
                        />
                        <Form.Control
                            placeholder={"Введите название устройства"}
                            type={"file"}
                        />
                    </Row>
                    <hr />
                    <Button
                        variant={"outline-dark"}
                        className={"mb-4"}
                        onClick={addInfo}
                    >
                        Добавить новое устройство
                    </Button>
                    {info.map((i) => (
                        <>
                            <Form.Control
                                className={"mb-2"}
                                placeholder={"Введите название свойства"}
                            />
                            <Form.Control
                                className={"mb-2"}
                                placeholder={"Введите описание свойства"}
                            />
                            <Button
                                className={"mb-4"}
                                variant={"outline-danger"}
                                onClick={() => removeInfo(i.number)}
                            >
                                Удалить
                            </Button>
                        </>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant={"outline-success"} onClick={onHide}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
