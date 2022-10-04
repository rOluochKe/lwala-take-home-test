import React from 'react'

const Commodities = () => {
  const tableData = [
    {
      id: 1,
      malariaDrugs: 25,
      familyPlanning: 45,
      zincTablets: 63
    },
    {
      id: 2,
      malariaDrugs: 65,
      familyPlanning: 95,
      zincTablets: 33
    },
  ]

  return (
    <div className='section-commodities p-4'>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item breadcrumb-active" aria-current="page">Commodities</li>
        </ol>
      </nav>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Malaria Drus</th>
          <th scope="col">Family Planning Items</th>
          <th scope="col">Zinc Tablets</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.malariaDrugs}</td>
              <td>{data.familyPlanning}</td>
              <td>{data.zincTablets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Commodities