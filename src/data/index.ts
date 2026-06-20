import queenData from "./queenData.json"
import pinkFloydData from "./pinkFloydData.json"
import type { Album } from "../types/types"

const dataMap: Record<string, Album[]> = {
    queen: queenData as Album[],
    "pink-floyd": pinkFloydData as Album[]
}
export default dataMap