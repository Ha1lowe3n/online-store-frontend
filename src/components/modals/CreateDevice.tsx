import React from "react";

import { Button, Form, Modal } from "react-bootstrap";

type CreateDevicePropsType = {
    show: boolean;
    onHide: () => void;
};

const CreateDevice: React.FC<CreateDevicePropsType> = ({ show, onHide }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Введите название бренда"} />
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
