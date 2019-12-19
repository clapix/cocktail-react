import { connect } from 'react-redux';
import Archive from './Archive';
import { getList } from "../../data/actions/api";

const mapStateToProps = ({cocktails, submitted}) => {
    return {
        cocktails: cocktails,
        submitted: submitted,
    }
}

export default connect(mapStateToProps)(Archive);