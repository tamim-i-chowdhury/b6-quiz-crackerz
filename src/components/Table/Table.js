import React from "react";

const Table = ({ question }) => {
  const { name, total } = question;
  return (
    <tr>
      <td>{name}</td>
      <td>{total}</td>
    </tr>
  );
};

export default Table;
