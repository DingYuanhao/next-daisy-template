export interface CustomTableColumnProps {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: string, record: any) => React.ReactNode;
  width?: number;
  align?: "left" | "right" | "center";
}

export interface CustomTableProps {
  dataSource: any[];
  columns: CustomTableColumnProps[];
}

export const CustomTable = (params: CustomTableProps) => {
  const { dataSource, columns } = params;

  return (
    <>
      <div className="w-full overflow-x-auto max-w-screen-xl">
        <table className="table w-full">
          <thead>
            <tr>
              {columns.map((column) => (
                <th className="p-4 font-bold text-center" key={column.key}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((record) => (
              <tr className="hover" key={record.key}>
                {params.columns.map((column) => (
                  <td key={column.key} className="p-4 text-center">
                    {column.render
                      ? column.render(record[column.dataIndex], record)
                      : record[column.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
