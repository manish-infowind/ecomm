"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import TitleHeader from "@/app/(admin)/_components/title-header";

// Mock data
const mockProducts = [
  {
    id: "1",
    title: "Sample T-Shirt",
    description: "A comfortable cotton t-shirt",
    price: 29.99,
    featured: true,
    imageURLs: ["/logo.png"],
    category: "clothing",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    title: "Running Shoes",
    description: "High-performance running shoes",
    price: 89.99,
    featured: false,
    imageURLs: ["/logo.png"],
    category: "footwear",
    createdAt: "2024-01-14T15:45:00Z",
  },
  {
    id: "3",
    title: "Wireless Headphones",
    description: "Premium wireless headphones",
    price: 149.99,
    featured: true,
    imageURLs: ["/logo.png"],
    category: "electronics",
    createdAt: "2024-01-13T09:20:00Z",
  },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};

export default function ProductTable() {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 5;

  const data = mockProducts;

  const deleteTask = (id: string) => {
    console.log("Delete product:", id);
    // Mock delete action
  };

  const offset = currentPage * productsPerPage;
  const currentProducts = data?.slice(offset, offset + productsPerPage);

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <TitleHeader
        title="Products"
        count={data?.length}
        description="Manage products for your store"
        url="/admin/products/new"
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width={5}>
                <p className="text-gray-700">Image</p>
              </TableCell>
              <TableCell>
                <p className="text-gray-700">Name</p>
              </TableCell>
              <TableCell align="center">
                <p className="text-gray-700">Categories</p>
              </TableCell>
              <TableCell align="center">
                <p className="text-gray-700">Featured</p>
              </TableCell>
              <TableCell align="center">
                <p className="text-gray-700">Price</p>
              </TableCell>
              <TableCell align="center">
                <p className="text-gray-700">Description</p>
              </TableCell>
              <TableCell align="center">
                <p className="text-gray-700">Date</p>
              </TableCell>
              <TableCell align="center">
                <p className="text-gray-700">Actions</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentProducts?.map((product: any) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Image
                    src={product.imageURLs[0]}
                    alt="Product Image"
                    className="border rounded-sm"
                    width={60}
                    height={60}
                  />
                </TableCell>
                <TableCell align="left">{product.title}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">
                  {product.featured.toString()}
                </TableCell>
                <TableCell align="center">${product.price}</TableCell>
                <TableCell align="center">
                  {product.description.slice(0, 11)}
                  {product.description.length > 12 && "..."}
                </TableCell>
                <TableCell align="center">
                  <p>{formatDate(product.createdAt)}</p>
                </TableCell>
                <TableCell align="center">
                  <button>
                    <DeleteIcon
                      onClick={() => deleteTask(product.id)}
                      className="text-red-600"
                    />
                  </button>
                  <Link href={`/admin/products/${product.id}`}>
                    <EditIcon />
                  </Link>
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
          breakLabel={"..."}
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
}