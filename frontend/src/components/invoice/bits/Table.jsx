import React from "react";

const Table = (props) => {
  return (
    <table className="bg-[#252945] w-full text-left rounded-xl">
      <thead className="table-header-group w-full text-sm">
        <tr className="font-[100]">
          <th className="p-5 font-[100]">Item Name</th>
          <th className="font-[100]">QTY.</th>
          <th className="font-[100]">Price</th>
          <th className="font-[100]">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-5">pie</td>
          <td>2</td>
          <td>$2</td>
          <td>$4</td>
        </tr>
        <tr>
          <td className="p-5">apple</td>
          <td>2</td>
          <td>$2</td>
          <td>$4</td>
        </tr>
      </tbody>
      <tfoot className="bg-[#0C0E16] h-20 ">
        <tr>
          <td className="p-10">
            <h1>Amount due</h1>
          </td>
          <td></td>
          <td></td>
          <td>
            <h1>$4</h1>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
