import React, { useState, useEffect } from "react";
import { getRequests } from '../service/requestsapicalls'

const Table = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(false);

  const loadAllRequests = () => {
    getRequests()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setRequests(data);
        }
      });
  };

  useEffect(() => {
    loadAllRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">CHW</th>
          <th scope="col">CHA</th>
          <th scope="col">Malaria Drus</th>
          <th scope="col">Family Planning Items</th>
          <th scope="col">Zinc Tablets</th>
        </tr>
      </thead>
      <tbody>
        {requests?.length > 0 ? (
          requests.map((data) => (
            <tr key={data.id}>
              <td>{data.chw}</td>
              <td>{data.cha}</td>
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
  )
}

export default Table