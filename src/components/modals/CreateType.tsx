import React, { useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/deviceAPI";

type CreateTypePropsType = {
    show: boolean;
    onHide: () => void;
};

const CreateType: React.FC<CreateTypePropsType> = ({ show, onHide }) => {
    const [value, setValue] = useState("");

    const addType = () => {
        createType(value).then((data) => setValue(""));
        onHide();
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
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={(e) => setValue(e.currentTarget.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>
                    Закрыть
                </Button>
                <Button onClick={addType} variant={"outline-success"}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
