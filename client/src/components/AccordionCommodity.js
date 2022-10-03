import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const AccordionCommodity = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Add Commodity</Accordion.Header>
        <Accordion.Body>
        <form>
          <div className='row mb-3'>
            <div className="col-4 form-group">
              <label htmlffor="malariaFormControlInput">Malaria Drugs</label>
              <input type="number" className="form-control" id="malariaFormControlInput" />
            </div>

            <div className="col-4 form-group">
              <label htmlffor="familyPlanningFormControlInput">Family Planning</label>
              <input type="number" className="form-control" id="familyPlanningFormControlInput" />
            </div>

            <div className="col-4 form-group">
              <label htmlffor="zincTabletFormControlInput">Zinc Tablets</label>
              <input type="number" className="form-control" id="zincTabletFormControlInput" />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Save Commodity</button>
          </div>
        </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AccordionCommodity