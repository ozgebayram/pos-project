import React from "react";
import { Modal, Form, Input, Select } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div>
      <Modal
        title="Fatura Oluştur"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form layout={"vertical"}>
          <Form.Item label="Müşteri Adı" rules={[{ required: true }]}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Müşteri Adı" rules={[{ required: true }]}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Ödeme Yöntemi" rules={[{ required: true }]}>
            <Select placeholder="Ödeme Yöntemi Seçiniz">
              <Select.Option value="Nakit"></Select.Option>
              <Select.Option value="Kredi Kartı"></Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateBill;
