import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TableItem = ({
  filteredProducts,
  handleDeleteProduct,
  handleOnEdit,
  handleShow,
}) => {
  return (
    <>
      <div style={{ height: "calc(100vh - 90px)", overflow: "auto" }} className="p-[0]  lg:p-[100px] py-2 ">
        <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Desscription
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts?.map((item, index) => {
              return (
                <>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white truncate"
                      style={{maxWidth:"260px"}}
                    >
                      {item?.title}
                    </th>
                    <td className="px-6 py-4">${item?.price}</td>
                    <td className="px-6 py-4">{item?.category}</td>

                    <td className="px-6 py-4">
                      {item.description && item.description.length > 5
                        ? `${item.description.substring(0, 25)}...`
                        : item.description}
                    </td>
                    <td className="px-6 py-4 flex items-center justify-center gap-3">
                      <div
                        onClick={() => handleShow(item.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </div>
                      <div
                        onClick={() => handleOnEdit(item.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </div>
                      <div
                        onClick={() => handleDeleteProduct(item.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableItem;
