import React, { useState } from 'react'
import { createRequest } from '../service/requestsapicalls';

const Form = () => {
  const [values, setValues] = useState({
    chw: "",
    cha: "",
    malariaDrugs: "",
    familyPlanning: "",
    zincTablets: "",
    error: "",
    success: false,
  });

  const { chw, cha, malariaDrugs, familyPlanning, zincTablets, error, success } = values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    createRequest({ chw, cha, malariaDrugs, familyPlanning, zincTablets })
      .then((data) => {
        if (data.chw === chw) {
          setValues({
            ...values,
            chw: "",
            cha: "",
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

  const chws = [
    {
      id: 1,
      value: 'Micheal Otieno',
      chwname: 'Micheal Otieno'
    },
    {
      id: 2,
      value: 'James Moro',
      chwname: 'James Moro'
    },
    {
      id: 3,
      value: 'Nancy Baraza',
      chwname: 'Nancy Baraza'
    },
    {
      id: 4,
      value: 'Lucy Smith',
      chwname: 'Lucy Smith'
    }
  ]

  const chas = [
    {
      id: 1,
      value: 'Luke Kieno',
      chwname: 'Luke Kieno'
    },
    {
      id: 2,
      value: 'John Doe',
      chwname: 'John Doe'
    },
    {
      id: 3,
      value: 'Mary Wambua',
      chwname: 'Mary Wambua'
    },
    {
      id: 4,
      value: 'Kevin Otea',
      chwname: 'Kevin Otea'
    }
  ]

  return (
    <div>
      <form>
        <div className='row mb-3'>
          <div className="col-12 form-group">
            {errorMessage()}
            {successMessage()}
          </div>
        </div>
        <div className='row mb-3'>
          <div className="col-6 form-group">
            <label htmlffor="chwFormControlSelect">CHW</label>
              <select 
                className="form-control" 
                id="chwFormControlSelect"
                onChange={handleChange("chw")}
                value={chw}
              >
                <option>Select CHW</option>
                {chws.map((data) => <option key={data.id} value={data.value}>{data.chwname}</option>)}
              </select>
          </div>

          <div className="col-6 form-group">
            <label htmlffor="chaFormControlSelect">CHA</label>
            <select 
              className="form-control" 
              id="chaFormControlSelect"
              onChange={handleChange("cha")}
              value={cha}
            >
              <option>Select CHA</option>
              {chas.map((data) => <option key={data.id} value={data.value}>{data.chwname}</option>)}
            </select>
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
          >Send Request</button>
        </div>
      </form>
    </div>
  )
}

export default Form