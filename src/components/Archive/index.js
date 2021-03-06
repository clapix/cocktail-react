import { connect } from 'react-redux';
import Archive from './Archive';

const mapStateToProps = ({cocktails, submitted}) => {
    return {
        cocktails,
        submitted,
    }
}

export default connect(mapStateToProps)(Archive);