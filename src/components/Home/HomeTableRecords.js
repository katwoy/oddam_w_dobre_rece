import React from 'react';

const HomeTableRecords = ({records}) => {
  return (
    <>
    {records.map(record => (
      <tr key={record.name}>
        <td><span>{record.name}</span><br/>{record.mission}</td>
        <td>{record.needs}</td>
      </tr>
    ))}
    </>
  );
};

export default HomeTableRecords;