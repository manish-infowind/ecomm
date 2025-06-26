"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import TitleHeader from "@/app/(admin)/_components/title-header";

// Mock data
const mockOrders = [
  {
    id: "1",
    isPaid: true,
    phone: "+1234567890",
    address: "123 Main St, City, State 12345",
    createdAt: "2024-01-15T10:30:00Z",
    orderItems: [{ id: "1", orderId: "1", productName: "Sample T-Shirt" }],
  },
  {
    id: "2",
    isPaid: false,
    phone: "+0987654321",
    address: "456 Oak Ave, Town, State 67890",
    createdAt: "2024-01-14T15:45:00Z",
    orderItems: [{ id: "2", orderId: "2", productName: "Running Shoes" }],
  },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};

const TableOrders = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 5;

  const data = mockOrders;

  const offset = currentPage * productsPerPage;
  const currentProducts = data?.slice(offset, offset + productsPerPage);

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <TitleHeader
        title="Orders"
        count={data?.length}
        description="Manage orders for your store"
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="text-gray-700">Products</p>
              </TableCell>
              <TableCell>
                <p className="text-gray-700">Phone</p>
              </TableCell>
              <TableCell align="center">
                <p className="text-gray-700">Address</p>
              </TableCell>
              <TableCell align="center">
                <p className="text-gray-700">Paid</p>
              </TableCell>
              <TableCell align="center">
                <p className="text-gray-700">Date</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentProducts?.map((order) => (
              <TableRow
                key={order.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.orderItems[0]?.productName || ""}
                </TableCell>
                <TableCell align="left">{order.phone}</TableCell>
                <TableCell align="center">{order.address}</TableCell>
                <TableCell align="center">{order.isPaid.toString()}</TableCell>
                <TableCell align="center">
                  {formatDate(order.createdAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={Math.ceil(data?.length / productsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex space-x-2 justify-end mt-4"}
          previousLinkClassName={"bg-neutral-800 px-4 py-2 rounded text-white"}
          nextLinkClassName={"bg-neutral-800 px-4 py-2 rounded text-white"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
          activeClassName={"bg-blue-700"}
          pageClassName="hidden"
        />
      )}
    </>
  );
};

export default TableOrders;