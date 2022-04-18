import {
  DashboardContainer
} from "./StyledDashboard"

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Feed from "../../components/Feed"
import Rightbar from "../../components/Rightbar"
import { useContext } from "react"
import { AuthConetext } from "context/auth/context"

type Props = {}

function Home({ }: Props) {

  const { state } = useContext(AuthConetext as any);
  const userData = state.user?.userData;

  return (
    <>
      <Header />

      <DashboardContainer>
        <Sidebar />
        <Feed
          userId={userData?.id}
        />
        <Rightbar />
      </DashboardContainer>
    </>
  )
}

export default Home