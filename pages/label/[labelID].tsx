import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

interface Props {}

const label = (props: Props) => {
  const router = useRouter();
  const { labelID } = router.query;
  return <Layout> label {labelID}</Layout>;
};

export default label;
