import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

import Table from '../components/Table'
import BreadCrumb from '../components/BreadCrumb'
import Form from '../components/Form';
import AccordionCommodity from '../components/AccordionCommodity';

const Requests = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='section-requests p-4'>
      <div className='d-flex justify-content-between'>
        <div><BreadCrumb /></div>

        <div className='p-3'>
          <Button variant="outline-primary" onClick={handleShow}>
            Add Request
          </Button>

          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Request Commodity</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='mb-4'>
                <Form />
              </div>

              <div className='horizontal-line'></div>
              
              <div className='mt-3 mb-3'>
                <AccordionCommodity />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      
      <Table />
    </div>
  )
}

export default Requests