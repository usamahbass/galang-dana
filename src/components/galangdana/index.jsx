import React from "react";
import { Modal, Input, Form } from "antd";

const GalangDana = ({ onOk, onCancel, title, visible, onChange }) => {
  return (
    <Modal onOk={onOk} onCancel={onCancel} title={title} visible={visible}>
      <Form>
        <Form.Item>
          <Input name="title" placeholder="Title" onChange={onChange} />
        </Form.Item>
        <Form.Item>
          <Input
            type="number"
            name="target"
            placeholder="Target"
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item>
          <Input name="text" placeholder="Deskripsi" onChange={onChange} />
        </Form.Item>
        <Form.Item>
          <Input name="img" placeholder="URL Image" onChange={onChange} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default GalangDana;
