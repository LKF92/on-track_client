import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

interface Props {}

const artist = (props: Props) => {
  const router = useRouter();
  const { artistID } = router.query;
  return (
    <Layout>
      <div>TEST artist {artistID}</div>
    </Layout>
  );
};

export default artist;
