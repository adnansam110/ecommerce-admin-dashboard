import Header from "@/components/Header/Header";
import { Layout } from "@/components/Layout/Layout";
import Table from "@/components/Table/Table";
import React from "react";

const Inventory = () => {
  return (
    <div className="flex bg-white">
      <Layout />
      <section className="w-full">
        <Header title={"Inventory"} />
        <Table />
      </section>
    </div>
  );
};

export default Inventory;
