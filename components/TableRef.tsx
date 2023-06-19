"use-client";
import Link from "next/link";
import React from "react";

type Props = {
  data: {
    title: string;
    id: string;
  }[];
};

const TableRef = (props: Props) => {
  const numColumns = props.data.length;
  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded my-6">
        <div className="table-responsive">
          <table className="table-auto w-full">
            <tbody>
              {[...Array(7)].map((_, i) => (
                <tr key={i}>
                  {[...Array(numColumns)].map((_, j) => (
                    <td
                      key={j}
                      className="border hover:bg-emphasis cursor-pointer px-4 py-2"
                    >
                      <Link key={i} href={`/companies/${props.data[i].id}`}>
                        {props.data[j]?.title}
                      </Link>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableRef;
