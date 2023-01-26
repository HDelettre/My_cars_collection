import React, {useState, useEffect} from 'react';

// IMPORT DATA
import teamsData from "../../bdd/teamCollection";

const TeamsCards = ({data, setTeamSelect}) => {
  const [logoTeam, setLogoTeam] = useState("");

  const selectTeamHandle = (e) => {};

  useEffect(() => {
    const logoSearch = teamsData.find((e) => e.team === data);
    setLogoTeam(`${process.env.REACT_APP_PICTURES}/logoTeams/${logoSearch.logo}`);
  }, []);

  return (
    <div className='teamsBox_card' onClick={(e) => setTeamSelect(e.target.id)}>
      <img src={logoTeam} alt={data} id={data} />
      <h3>{data}</h3>
    </div>
  );
}

export default TeamsCards;
