import { HYEventStore } from "hy-event-store"
import { getRanking } from "../service/api_music"

const rankingStore = new HYEventStore({
  state: {
    hotRanking: []
  },
  actions: {
    getRankingActions(cxt) {
      getRanking(15).then(res => {
        cxt.hotRanking = res.playlists;
      })
    }
  }
})

export {
  rankingStore
}