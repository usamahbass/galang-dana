import React from "react";
import { Modal, Input, Form } from "antd";
import { Consumer } from "../../context/context";

const Donasi = ({ onOk, onCancel, title, visible, handleDonasi }) => {
  return (
    <Modal onOk={onOk} onCancel={onCancel} title={title} visible={visible}>
      <Consumer>
        {({ valuedonasi, valuejumlah }) => (
          <Form>
            <Form.Item>
              <Input
                name="valuedonasi"
                placeholder="Pendonasi"
                onChange={handleDonasi}
                value={valuedonasi}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="number"
                name="valuejumlah"
                placeholder="Jumlah"
                onChange={handleDonasi}
                value={valuejumlah}
              />
            </Form.Item>
          </Form>
        )}
      </Consumer>
    </Modal>
  );
};

export default Donasi;
