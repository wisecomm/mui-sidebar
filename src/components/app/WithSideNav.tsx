import { Outlet } from "react-router-dom"
import SideNavBar from "./SideNavBar"
import Layout from "./Layout"

function WithSideNav() {
    return (
      <div style={{display: "flex"}}>
        <SideNavBar />
        <Layout>
          <Outlet />
        </Layout>
      </div>
    )
  }

  export default WithSideNav