import {
  DashboardContainer
} from "./StyledDashboard"

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Feed from "../../components/Feed"
import Rightbar from "../../components/Rightbar"

type Props = {}

function Home({ }: Props) {
  return (
    <>
      <Header />

      <DashboardContainer>
        <Sidebar />
        <Feed />
        <Rightbar />
      </DashboardContainer>
    </>
  )
}

export default Home