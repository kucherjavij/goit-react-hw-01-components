const Statistics = ({stats}) => {return(
<ul>{stats.map( stat => {return(<li key={stat.id}>
    <span>{stat.label} </span>
    <span>{stat.percentage}</span>
  </li>)})}
</ul>)}


export default Statistics