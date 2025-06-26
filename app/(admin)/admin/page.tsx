"use client";

import React from "react";
import TitleHeader from "../_components/title-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Package } from "lucide-react";
import { Overview } from "@/components/overview";

// Mock data for UI display
const mockGraphData = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 1800 },
  { name: "Mar", total: 2400 },
  { name: "Apr", total: 1600 },
  { name: "May", total: 2800 },
  { name: "Jun", total: 3200 },
  { name: "Jul", total: 2900 },
  { name: "Aug", total: 3500 },
  { name: "Sep", total: 3100 },
  { name: "Oct", total: 4200 },
  { name: "Nov", total: 3800 },
  { name: "Dec", total: 4500 },
];

const AdminPage = () => {
  // Mock data
  const salesCount = 156;
  const productsInStock = 89;

  return (
    <div className="p-4 mt-2 w-3/4 max-md:w-full mx-auto">
      <TitleHeader title="Dashboard" description="Overview of your store" />
      <div className="grid gap-4 grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pl-6 pb-3">
            <div className="text-2xl font-bold">+{salesCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Products In Stock
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pl-6 pb-3">
            <div className="text-2xl font-bold">{productsInStock}</div>
          </CardContent>
        </Card>
      </div>
      <Card className="col-span-4 mt-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Overview data={mockGraphData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;