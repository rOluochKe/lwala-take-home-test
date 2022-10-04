import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { createCommodity } from '../service/commoditiesapicalls';

const AccordionCommodity = () => {
  const [values, setValues] = useState({
    malariaDrugs: "",
    familyPlanning: "",
    zincTablets: "",
    error: "",
    success: false,
  });

  const { malariaDrugs, familyPlanning, zincTablets, error, success } = values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    createCommodity({ malariaDrugs, familyPlanning, zincTablets })
      .then((data) => {
        if (data) {
          setValues({
            ...values,
            malariaDrugs: "",
            familyPlanning: "",
            zincTablets: "",
            error: "",
            success: true,
          });
        } else {
          setValues({
            ...values,
            error: true,
            success: false,
          });
        }
      })
      .catch((e) => console.log(e));
  };
  
  const successMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New request created successfully. 
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        Check all fields again
      </div>
    );
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Add Commodity</Accordion.Header>
        <Accordion.Body>
        <form>
          <div className='row mb-3'>
            <div className="col-12 form-group">
              {errorMessage()}
              {successMessage()}
            </div>
          </div>
          <div className='row mb-3'>
            <div className="col-4 form-group">
              <label htmlffor="malariaFormControlInput">Malaria Drugs</label>
              <input 
                type="number" 
                className="form-control" 
                id="malariaFormControlInput"
                value={malariaDrugs}
                onChange={handleChange("malariaDrugs")}
              />
            </div>

            <div className="col-4 form-group">
              <label htmlffor="familyPlanningFormControlInput">Family Planning</label>
              <input 
                type="number" 
                className="form-control" 
                id="familyPlanningFormControlInput"
                value={familyPlanning}
                onChange={handleChange("familyPlanning")}
              />
            </div>

            <div className="col-4 form-group">
              <label htmlffor="zincTabletFormControlInput">Zinc Tablets</label>
              <input 
                type="number" 
                className="form-control" 
                id="zincTabletFormControlInput"
                value={zincTablets}
                onChange={handleChange("zincTablets")}
              />
            </div>
          </div>
          <div>
            <button 
              type="submit" 
              className="btn btn-primary"
              onClick={onSubmit} 
              >Save Commodity</button>
          </div>
        </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AccordionCommodity