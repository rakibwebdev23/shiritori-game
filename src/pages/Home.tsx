import CommonWrapper from "@/common/CommonWrapper"
import AiModal from "@/components/AiModal"
import GameForm from "@/components/GameForm"
import { useLocation } from "react-router-dom"

const Home = () => {
  const location = useLocation()
  const isAiModalRoute = location.pathname === "/aimodal"

  return (
    <CommonWrapper>
      <div className="min-h-screen flex justify-center items-center">
        {!isAiModalRoute && <GameForm />}
        {/* Only show AiModal on the aimodal route */}
        {isAiModalRoute && <AiModal/>}
      </div>
    </CommonWrapper>
  )
}

export default Home