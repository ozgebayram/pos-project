import React from "react";
import { Modal, Form, Input, Select, Button, Card, message } from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form: " , values);
  };

  return (
    <div>
      <Modal
        title="Print Invoice"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
        
      >
        Invoice
      </Modal>
    </div>
  );
};

export default PrintBill;

