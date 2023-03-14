import React from "react";

const Table = (props) => {
  return (
    <table className="bg-[#252945] w-full text-left rounded-xl">
      <thead className="table-header-group w-full text-sm">
        <tr className="font-[100]">
          <th className="p-5 font-[100]">Item Name</th>
          <th className="font-[100]">QTY.</th>
          <th className="font-[100]">Price</th>
          <th className="font-[100] text-center">Total</th>
        </tr>
      </thead>
      <tbody>
        {props.items?.map((item, index) => {
          return (
            <tr key={index}>
              <td className="p-5">{item.item_name}</td>
              <td>{item.qty}</td>
              <td>${parseInt(item?.price)?.toFixed(2)}</td>
              <td className="text-center">
                ${parseInt(item?.total)?.toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot className="bg-[#0C0E16] h-20">
        <tr>
          <td className="p-5">
            <h1>Amount due :</h1>
          </td>
          <td></td>
          <td></td>
          <td>
            <h1 className="text-3xl text-center">${props.total?.toFixed(2)}</h1>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
