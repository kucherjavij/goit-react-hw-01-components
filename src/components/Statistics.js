import PropTypes from "prop-types";

import {StatisticsContainerList,StatisticsContainerItem} from '../styled_components/Statistics.styled'

const Statistics = ({stats}) => {return(
<StatisticsContainerList>{stats.map( stat => {return(<StatisticsContainerItem key={stat.id}>
    <span>{stat.label} </span>
    <span>{stat.percentage}%</span>
  </StatisticsContainerItem>)})}
</StatisticsContainerList>)}

Statistics.propTypes={
  stats: PropTypes.arrayOf(PropTypes.object)
}

export default Statistics