import React, { useMemo } from "react";
import { COLUMNS } from "./Column";
import { useTable, useGlobalFilter } from "react-table";
import "./table.css";
import Gloable from "./Gloable";
function Tabless(props) {
  var { arr } = props;
  console.log("arr", arr);
  const columns = useMemo(() => COLUMNS, []);

  const datas = useMemo(() => arr, []);
  const tableinstance = useTable(
    {
      columns: columns,
      data: datas,
    },
    useGlobalFilter
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableinstance;

  const { globalFilter } = state;

  return (
    <>
      <Gloable filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Headers")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Tabless;
