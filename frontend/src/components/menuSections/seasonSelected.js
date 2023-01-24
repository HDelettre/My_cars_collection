import React, {useEffect} from 'react';

const SeasonSelected = ({seasonSelect}) => {

  useEffect(() => {
    if (seasonSelect) {
      (async () => {
        const reponse = await fetch(`${process.env.REACT_APP_API_CARS}/season/${seasonSelect}`, {
          method: "GET",
        });
        const reponseJSON = await reponse.json();
        console.log("REPONSE SEASON SELECT: ", reponseJSON);
      })();
    }
  }, [seasonSelect]);



  return (
    <div>
      Affiche les modèles de la saison {seasonSelect}
    </div>
  );
}

export default SeasonSelected;
