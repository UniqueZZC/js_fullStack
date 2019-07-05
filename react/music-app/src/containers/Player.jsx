
import { connect } from 'react-redux'
import Player from '../components/player/Player'
import { showplayer} from '../redux/action'

const mapStateToProps = (state) => {
  return {
    showStatus: state.showStatus,
    currentSong: state.song
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return {
    showMusicPlayer: (status) => {
      dispatch(showplayer(status))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player)