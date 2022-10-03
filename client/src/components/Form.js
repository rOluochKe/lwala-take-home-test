import React from 'react'

const Form = () => {
  return (
    <div>
      <form>
        <div className='row mb-3'>
          <div className="col-6 form-group">
            <label htmlffor="chwFormControlSelect">CHW</label>
            <select className="form-control" id="chwFormControlSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div className="col-6 form-group">
            <label htmlffor="chaFormControlSelect">CHA</label>
            <select className="form-control" id="chaFormControlSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
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
          <button type="submit" className="btn btn-primary">Send Request</button>
        </div>
      </form>
    </div>
  )
}

export default Form