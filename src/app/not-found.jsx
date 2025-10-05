import React from "react";
import Breadcrumb from "@/component/common/Breadcrumb";
import ErrorCom from "@/component/Error/ErrorCom";
import Layout from "@/component/common/Layout";

function Error() {
  return (
    <Layout>
      <Breadcrumb title="Error" />
      <ErrorCom />
    </Layout>
  );
}

export default Error;
