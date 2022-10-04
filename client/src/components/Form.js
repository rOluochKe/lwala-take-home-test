import React, { useState } from 'react'
import { createRequest } from '../service/requestsapicalls';

const Form = () => {
  const [values, setValues] = useState({
    chw: "",
    cha: "",
    malariaDrugs: "",
    familyPlanning: "",
    zincTablets: "",
    success: false,
  });
  const [formError, setFormError] = useState(false)

  const { chw, cha, malariaDrugs, familyPlanning, zincTablets, success } = values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values, [name]: event.target.value });
    };

  const onSubmit = (event) => {
    event.preventDefault();

    if ((chw.length === 0) || (cha.length === 0) || (malariaDrugs >= 100) || (familyPlanning >= 100) || (zincTablets >= 100)) {
      setFormError(true)
    }

    setValues({ ...values });

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
            success: true,
          });
        } else {
          setValues({
            ...values,
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
            { formError && chw.length <= 0 ?
              <label className='form-error'>Please select CHW</label> : "" }
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

            { formError && cha.length <= 0 ?
              <label className='form-error'>Please select CHA</label> : "" }
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
            { formError && malariaDrugs >= 100 ?
              <label className='form-error'>Enter a number not more than 100 per request!</label> : "" }
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
            { formError && familyPlanning >= 100 ?
              <label className='form-error'>Enter a number not more than 100 per request!</label> : "" }
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
            { formError && zincTablets >= 100 ?
              <label className='form-error'>Enter a number not more than 100 per request!</label> : "" }
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