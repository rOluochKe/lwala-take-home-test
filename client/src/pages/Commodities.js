import React, { useState, useEffect } from "react";
import { getCommodities } from "../service/commoditiesapicalls";

const Commodities = () => {
  const [commodities, setCommodities] = useState([]);
  const [error, setError] = useState(false);

  const loadAllCommodities = () => {
    getCommodities()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setCommodities(data);
        }
      });
  };

  useEffect(() => {
    loadAllCommodities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <th scope="col">Malaria Drus</th>
            <th scope="col">Family Planning Items</th>
            <th scope="col">Zinc Tablets</th>
          </tr>
        </thead>
        <tbody>
          {commodities?.length > 0 ? (
            commodities.map((data) => (
              <tr key={data.id}>
                <td>{data.malariaDrugs}</td>
                <td>{data.familyPlanning}</td>
                <td>{data.zincTablets}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data available at this time, try again later</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Commodities