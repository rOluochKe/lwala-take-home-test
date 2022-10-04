import React from 'react'

const Table = () => {
  const tableData = [
    {
      id: 1,
      chw: "Micheal Otieno",
      cha: "Nancy Omolo",
      malariaDrugs: 25,
      familyPlanning: 45,
      zincTablets: 63
    },
    {
      id: 2,
      chw: "Lucy Obonyo",
      cha: "Jared Kwach",
      malariaDrugs: 65,
      familyPlanning: 95,
      zincTablets: 33
    },
  ]

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">CHW</th>
          <th scope="col">CHA</th>
          <th scope="col">Malaria Drus</th>
          <th scope="col">Family Planning Items</th>
          <th scope="col">Zinc Tablets</th>
        </tr>
      </thead>
      <tbody>

        {tableData.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.chw}</td>
            <td>{data.cha}</td>
            <td>{data.malariaDrugs}</td>
            <td>{data.familyPlanning}</td>
            <td>{data.zincTablets}</td>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default Table