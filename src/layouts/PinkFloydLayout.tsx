import { Outlet } from "react-router-dom"
import PinkFloydHeader from "../components/pink floyd/PinkFloydHeader"
import PinkFloydFooter from "../components/pink floyd/PinkFloydFooter"

function PinkFloydLayout() {
    return (
        <div className="pink-floyd-theme">
            <PinkFloydHeader />
            <main className="pink-floyd-main">
                <Outlet />
            </main>
            <PinkFloydFooter />
        </div>
    )
}

export default PinkFloydLayout