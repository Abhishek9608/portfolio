import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw" }}>
      time teaching assistants to support full-time staff. After graduation, I
      took a 6-week position working ~35 hours/week and helped roll out new
      curriculum, conducted independent research, lectured job-seeking alumni on
      my findings, and interviewed incoming Hack Reactor candidates.
    </p>
  </Layout>
);

export default withRouter(Post);
