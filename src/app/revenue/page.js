"use client";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { salesMockData } from "@/constants/constants";
import BarChartComponent from "@/components/Chart/Chart";
import Header from "@/components/Header/Header";
const Revenue = () => {
  return (
    <div className="flex bg-white min-h-screen">
      <Layout />
      <section className="overflow">
        <Header title={"Revenue Analysis"} />
        <div className="p-10">
          <div className="flex justify-start items-center gap-10">
            <h1 className="text-[30px] text-gray-500">
              Total Orders: {salesMockData.total_order}
            </h1>
            <h1 className="text-[30px] text-gray-500">
              Total Sales: $ {salesMockData.total_sales}
            </h1>
          </div>
          <h2 className="text-[20px] text-gray-500 mt-10 underline font-semibold">
            Inventory
          </h2>
          <div className="flex flex-wrap w-full">
            <BarChartComponent
              data={[
                { name: "Mon", inventory: 4000 },
                { name: "Tues", inventory: 3000 },
                { name: "Wed", inventory: 2000 },
                { name: "Thu", inventory: 5000 },
                { name: "Fri", inventory: 5000 },
                { name: "Sat", inventory: 5000 },
                { name: "Sun", inventory: 5000 },
              ]}
              dataKey="inventory"
              label="Daily Inventory"
            />
            <BarChartComponent
              data={[
                { name: "Week 1", inventory: 4000 },
                { name: "Week 2", inventory: 3000 },
                { name: "Week 3", inventory: 2000 },
                { name: "Week 4", inventory: 5000 },
              ]}
              dataKey="inventory"
              label="Weekly Inventory"
            />
            <BarChartComponent
              data={[
                { name: "2023", inventory: 4000 },
                { name: "2022", inventory: 3000 },
                { name: "2021", inventory: 2000 },
                { name: "2020", inventory: 5000 },
                { name: "2019", inventory: 5000 },
              ]}
              dataKey="inventory"
              label="Annual Inventory (5 Years)"
            />
            <BarChartComponent
              data={[
                { name: "Jan", inventory: 4000 },
                { name: "Feb", inventory: 3000 },
                { name: "Mar", inventory: 2000 },
                { name: "Apr", inventory: 5000 },
                { name: "May", inventory: 5000 },
                { name: "Jun", inventory: 5000 },
                { name: "Jul", inventory: 5000 },
                { name: "Aug", inventory: 5000 },
                { name: "Sep", inventory: 5000 },
                { name: "Oct", inventory: 5000 },
                { name: "Nov", inventory: 5000 },
                { name: "Dec", inventory: 5000 },
              ]}
              dataKey="inventory"
              label="Monthly Inventory"
              width={550}
            />
          </div>
          <h2 className="text-[20px] text-gray-500 mt-10 underline font-semibold">
            Orders
          </h2>
          <div className="flex flex-wrap w-full">
            <BarChartComponent
              data={[
                { name: "Mon", orders: 4000 },
                { name: "Tues", orders: 3000 },
                { name: "Wed", orders: 2000 },
                { name: "Thu", orders: 5000 },
                { name: "Fri", orders: 5000 },
                { name: "Sat", orders: 5000 },
                { name: "Sun", orders: 5000 },
              ]}
              dataKey="orders"
              label="Daily Orders"
            />
            <BarChartComponent
              data={[
                { name: "Week 1", orders: 4000 },
                { name: "Week 2", orders: 3000 },
                { name: "Week 3", orders: 2000 },
                { name: "Week 4", orders: 5000 },
              ]}
              dataKey="orders"
              label="Weekly Orders"
            />
            <BarChartComponent
              data={[
                { name: "2023", orders: 4000 },
                { name: "2022", orders: 3000 },
                { name: "2021", orders: 2000 },
                { name: "2020", orders: 5000 },
                { name: "2019", orders: 5000 },
              ]}
              dataKey="orders"
              label="Annual Orders (5 Years)"
            />
            <BarChartComponent
              data={[
                { name: "Jan", orders: 4000 },
                { name: "Feb", orders: 3000 },
                { name: "Mar", orders: 2000 },
                { name: "Apr", orders: 5000 },
                { name: "May", orders: 5000 },
                { name: "Jun", orders: 5000 },
                { name: "Jul", orders: 5000 },
                { name: "Aug", orders: 5000 },
                { name: "Sep", orders: 5000 },
                { name: "Oct", orders: 5000 },
                { name: "Nov", orders: 5000 },
                { name: "Dec", orders: 5000 },
              ]}
              dataKey="orders"
              label="Monthly Orders"
              width={550}
            />
          </div>
          <h2 className="text-[20px] text-gray-500 mt-10 underline font-semibold">
            Revenue
          </h2>
          <div className="flex flex-wrap w-full">
            <BarChartComponent
              data={[
                { name: "Mon", revenue: 4000 },
                { name: "Tues", revenue: 3000 },
                { name: "Wed", revenue: 2000 },
                { name: "Thu", revenue: 5000 },
                { name: "Fri", revenue: 5000 },
                { name: "Sat", revenue: 5000 },
                { name: "Sun", revenue: 5000 },
              ]}
              dataKey="revenue"
              label="Daily Revenue"
            />
            <BarChartComponent
              data={[
                { name: "Week 1", revenue: 4000 },
                { name: "Week 2", revenue: 3000 },
                { name: "Week 3", revenue: 2000 },
                { name: "Week 4", revenue: 5000 },
              ]}
              dataKey="revenue"
              label="Weekly Revenue"
            />
            <BarChartComponent
              data={[
                { name: "2023", revenue: 4000 },
                { name: "2022", revenue: 3000 },
                { name: "2021", revenue: 2000 },
                { name: "2020", revenue: 5000 },
                { name: "2019", revenue: 5000 },
              ]}
              dataKey="revenue"
              label="Annual Revenue (5 Years)"
            />
            <BarChartComponent
              data={[
                { name: "Jan", revenue: 4000 },
                { name: "Feb", revenue: 3000 },
                { name: "Mar", revenue: 2000 },
                { name: "Apr", revenue: 5000 },
                { name: "May", revenue: 5000 },
                { name: "Jun", revenue: 5000 },
                { name: "Jul", revenue: 5000 },
                { name: "Aug", revenue: 5000 },
                { name: "Sep", revenue: 5000 },
                { name: "Oct", revenue: 5000 },
                { name: "Nov", revenue: 5000 },
                { name: "Dec", revenue: 5000 },
              ]}
              dataKey="revenue"
              label="Monthly Revenue"
              width={550}
            />
            <BarChartComponent
              data={[
                { name: "Vehicles", revenue: 4000 },
                { name: "Clothes", revenue: 3000 },
                { name: "Cutlery", revenue: 2000 },
              ]}
              dataKey="revenue"
              label="Revenue By Category"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Revenue;
