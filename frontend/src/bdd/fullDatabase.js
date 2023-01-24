const fullDatabase = [
  {
    season: "1950",
    calendar: [
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Giuseppe Farina",
            car: "Alfa Romeo 158",
            time: "1'50''8",
            moyenne: "151,051 km/h",
          },
        ],
        winner: [
          {
            driver: "Giuseppe Farina",
            car: "Alfa Romeo 158",
            time: "2h 13' 23''6",
            moyenne: "146,378 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Giuseppe Farina",
            car: "Alfa Romeo 158",
            time: "1'50''6",
            moyenne: "151,324 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 158",
            time: "1'50''2",
            moyenne: "103,884 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 158",
            time: "3h 13' 18''7",
            moyenne: " 98.701 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 158",
            time: "1'51''0",
            moyenne: "103,135 km/h",
          },
        ],
      },
      {
        race: "Suisse",
        track: "Bremgarten",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 158",
            time: "2'42''1",
            moyenne: "161,678 km/h",
          },
        ],
        winner: [
          {
            driver: "Giuseppe Farina",
            car: "Alfa Romeo 158",
            time: "2h 02' 53''7",
            moyenne: "149.279 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Giuseppe Farina",
            car: "Alfa Romeo 158",
            time: "2'41''6",
            moyenne: "162,178 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Giuseppe Farina",
            car: "Alfa Romeo 158",
            time: "4'37",
            moyenne: "183,509 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 158",
            time: "2h 47' 26s ",
            moyenne: "177.097 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Giuseppe Farina",
            car: "Alfa Romeo 158",
            time: "4'34''1",
            moyenne: "185,451 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Reims-Gueux",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 158",
            time: "2'30''6",
            moyenne: "186,837 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 158",
            time: "2h 57' 52''8s ",
            moyenne: "168.729 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 158",
            time: "2'35''6",
            moyenne: "180,833 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 158",
            time: "1'58''3",
            moyenne: "191,716 km/h",
          },
        ],
        winner: [
          {
            driver: "Giuseppe Farina",
            car: "Alfa Romeo 158",
            time: "2h 51' 17''4s ",
            moyenne: "176.543 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 158",
            time: "2'00''0",
            moyenne: "189,000 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Alfa Romeo 158",
        team: "Alfa Romeo",
        drivers: [
          "Juan-Manuel Fangio",
          "Giuseppe Farina",
          "Luigi Fagioli",
          "Gianbattista Guidotti",
          "Reg Parnell",
          "Consalvo Sanesi",
          "Piero Taruffi",
        ],
      },
      {
        model: "Maserati 4CLT/48",
        team: "Maserati",
        drivers: [
          "David Murray",
          "David Hampshire",
          "Louis Chiron",
          "Emmanuel de Graffenried",
          "Prince Bira",
          "José-Froilãn Gonzalèz",
          "Alfredo Pian",
          "Franco Rol",
          "Nello Pagani",
          "Reg Parnell",
          "Gianfranco Comotti",
          "Luigi de Filippis",
          "Paul Pietsch",
        ],
      },
      {
        model: "ERA E",
        team: "ERA",
        drivers: ["Leslie Johnson", "Peter Walker", "Tony Rolt"],
      },
      {
        model: "Maserati 4CL",
        team: "Maserati",
        drivers: ["Joe Fry", "Brian Shawe-Taylor", "Toni Branca"],
      },
      { model: "ERA B", team: "ERA", drivers: ["Cuth Harrison"] },
      { model: "ERA B/C", team: "ERA", drivers: ["Bob Gerard"] },
      {
        model: "Talbot Lago T26C-DA",
        team: "Talbot Lago",
        drivers: [
          "Yves Giraud-Cabantous",
          "Eugène Martin",
          "Louis Rosier",
          "Philippe Etancelin",
          "Eugène Chaboud",
        ],
      },
      {
        model: "Talbot Lago T26C",
        team: "Talbot Lago",
        drivers: [
          "Louis Rosier",
          "Philippe Etancelin",
          "Johnny Claes",
          "Charles Pozzi",
          "Yves Giraud-Cabantous",
          "Pierre Levegh",
          "Harry Schell",
          "Raymond Sommer",
          "Eugène Chaboud",
          "Guy Mairesse",
        ],
      },
      {
        model: "Maserati Milano 4CLT/50",
        team: "Maserati Milano",
        drivers: ["Felice Bonetto", "Clemente Biondetti", "Gianfranco Comotti"],
      },
      {
        model: "Alta GP",
        team: "Alta",
        drivers: ["Joe Kelly", "Geoff Crossley"],
      },
      { model: "ERA D", team: "ERA", drivers: ["Raymond Mays"] },
      { model: "Cooper T12", team: "Cooper", drivers: ["Harry Schell"] },
      {
        model: "Simca Gordini T15",
        team: "Simca Gordini",
        drivers: ["Robert Manzon", "Maurice Trintignant", "André Simon"],
      },
      { model: "ERA A", team: "ERA", drivers: ["Bob Gerard"] },
      {
        model: "Ferrari 125",
        team: "Ferrari",
        drivers: [
          "Peter Whitehead",
          "Luigi Villoresi",
          "Alberto Ascari",
          "Raymond Sommer",
          "Giovanni Bracco",
        ],
      },
      { model: "Ferrari 166", team: "Ferrari", drivers: ["Raymond Sommer"] },
      { model: "SVA 1500", team: "SVA", drivers: ["Rudi Fischer"] },
      {
        model: "Ferrari 275",
        team: "Ferrari",
        drivers: ["Alberto Ascari", "Luigi Villoresi"],
      },
      {
        model: "Talbot Lago T26C-GS",
        team: "Talbot Lago",
        drivers: ["Raymond Sommer", "Henri Louveau"],
      },
      {
        model: "Ferrari 375",
        team: "Ferrari",
        drivers: ["Alberto Ascari", "Dorino Serafini"],
      },
      {
        model: "Ferrari 166S",
        team: "Ferrari",
        drivers: ["Clemente Biondetti"],
      },
      {
        model: "Talbot-Darracq 700",
        team: "Talbot-Darracq",
        drivers: ["Luigi Plate", "Franco Bordoni"],
      },
    ],
  },

  {
    season: "1951",
    calendar: [
      {
        race: "Suisse",
        track: "Bremgarten",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 159",
            time: "2'35''9",
            moyenne: "168,108 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 159",
            time: "2h 07' 53''64s ",
            moyenne: "143.444 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 159",
            time: "2'51''1",
            moyenne: "153,174 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 159",
            time: "4'25",
            moyenne: "191,819 km/h",
          },
        ],
        winner: [
          {
            driver: "Giuseppe Farina",
            car: "Alfa Romeo 159",
            time: "2h 45' 46''2s ",
            moyenne: "183.985 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 159",
            time: "4'22''1",
            moyenne: "193,941 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Reims-Gueux",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 159",
            time: "2'25''7",
            moyenne: "193,120 km/h",
          },
        ],
        winner: [
          {
            driver: "Luigi Fagioli",
            car: "Alfa Romeo 159",
            time: "3h 22' 11''0s ",
            moyenne: "178.600 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 159",
            time: "2'27''8",
            moyenne: "190,376 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "José-Froilãn Gonzalèz",
            car: "Ferrari 375",
            time: "1'43''4",
            moyenne: "161,861 km/h",
          },
        ],
        winner: [
          {
            driver: "José-Froilãn Gonzalèz",
            car: "Ferrari 375",
            time: "2h 42' 18''2s ",
            moyenne: "154.677 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Giuseppe Farina",
            car: "Alfa Romeo 159",
            time: "1'44''0",
            moyenne: "160,927 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 375",
            time: "9'55''8",
            moyenne: "137,825 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 375",
            time: "3h 23' 03''3s ",
            moyenne: "134.801 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 159",
            time: "9'55''8",
            moyenne: "137,825 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 159",
            time: "1'53''2",
            moyenne: "200,353 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 375",
            time: "2h 42' 39''3s ",
            moyenne: "185.915 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Giuseppe Farina",
            car: "Alfa Romeo 159",
            time: "1'56''5",
            moyenne: "194,678 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Pedralbes",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 375",
            time: "2'10''59",
            moyenne: "174,114 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 159",
            time: "2h 46' 54''10s ",
            moyenne: "158.939 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Alfa Romeo 159",
            time: "2'16''93",
            moyenne: "166,053 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Talbot Lago T26C-DA",
        team: "Talbot Lago",
        drivers: [
          "Johnny Claes",
          "Philippe Etancelin",
          "Louis Rosier",
          "Georges Grignard",
        ],
      },
      {
        model: "Talbot Lago T26C",
        team: "Talbot Lago",
        drivers: [
          "Yves Giraud-Cabantous",
          "Henri Louveau",
          "Guy Mairesse",
          "Louis Chiron",
          "André Pilette",
          "Pierre Levegh",
          "Duncan Hamilton",
          "Jacques Swaters",
        ],
      },
      {
        model: "HWM 51",
        team: "HWM",
        drivers: ["George Abecassis", "Stirling Moss"],
      },
      { model: "Ferrari 125", team: "Ferrari", drivers: ["Peter Whitehead"] },
      {
        model: "Ferrari 375",
        team: "Ferrari",
        drivers: [
          "Luigi Villoresi",
          "Alberto Ascari",
          "Piero Taruffi",
          "José-Froilãn Gonzalèz",
          "Gianni Marzotto",
          "Chico Landi",
          "Peter Whitehead",
        ],
      },
      {
        model: "Alfa Romeo 159",
        team: "Alfa Romeo",
        drivers: [
          "Giuseppe Farina",
          "Juan-Manuel Fangio",
          "Emmanuel de Graffenried",
          "Consalvo Sanesi",
          "Gianbattista Guidotti",
          "Luigi Fagioli",
          "Felice Bonetto",
          "Paul Pietsch",
        ],
      },
      {
        model: "Maserati 4CLT/48",
        team: "Maserati",
        drivers: [
          "Louis Chiron",
          "Harry Schell",
          "Prince Bira",
          "José-Froilãn Gonzalèz",
          "Noel Hillis",
          "Emmanuel de Graffenried",
          "David Murray",
          "John James",
          "Paul Pietsch",
          "Toni Branca",
          "Chico Landi",
          "Francisco Godia-Sales",
          "Juan Jover",
          "Joaquin Palacio",
        ],
      },
      { model: "Ferrari 212", team: "Ferrari", drivers: ["Rudi Fischer"] },
      {
        model: "Talbot Lago T26C-GS",
        team: "Talbot Lago",
        drivers: ["José-Froilãn Gonzalèz", "Eugène Chaboud", "Lucien Vincent"],
      },
      {
        model: "Simca Gordini T11",
        team: "Simca Gordini",
        drivers: ["Francis Rochat", "Aldo Gordini"],
      },
      {
        model: "Simca Gordini T15",
        team: "Simca Gordini",
        drivers: [
          "Robert Manzon",
          "Maurice Trintignant",
          "André Simon",
          "Jean Behra",
        ],
      },
      { model: "Ferrari 166", team: "Ferrari", drivers: ["Peter Stæchelin"] },
      { model: "Veritas Meteor", team: "Veritas", drivers: ["Peter Hirt"] },
      {
        model: "Ferrari 375 tw",
        team: "Ferrari",
        drivers: ["Reg Parnell", "Brian Shawe-Taylor", "Peter Whitehead"],
      },
      {
        model: "Maserati Milano 4CLT/50",
        team: "Maserati Milano",
        drivers: ["Onofre Marimón"],
      },
      { model: "Alta GP", team: "Alta", drivers: ["Joe Kelly"] },
      {
        model: "BRM P15",
        team: "BRM",
        drivers: [
          "Reg Parnell",
          "Peter Walker",
          "Ken Richardson",
          "Hans Stuck",
        ],
      },
      { model: "ERA B/C", team: "ERA", drivers: ["Bob Gerard"] },
      { model: "ERA B", team: "ERA", drivers: ["Brian Shawe-Taylor"] },
      {
        model: "Maserati 4CL",
        team: "Maserati",
        drivers: ["Philip Fotheringham-Parker"],
      },
      { model: "EL Special", team: "EL", drivers: ["Erik Lundgren"] },
      { model: "OSCA 4500G", team: "OSCA", drivers: ["Franco Rol"] },
    ],
  },
  {
    season: "1952",
    calendar: [
      {
        race: "Suisse",
        track: "Bremgarten",
        pole: [
          {
            driver: "Giuseppe Farina",
            car: "Ferrari 500",
            time: "2'47''5",
            moyenne: "156,466 km/h",
          },
        ],
        winner: [
          {
            driver: "Piero Taruffi",
            car: "Ferrari 500",
            time: "3h 01' 46''1s ",
            moyenne: "148.990 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Piero Taruffi",
            car: "Ferrari 500",
            time: "2'49''1",
            moyenne: "154,985 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "4'37''0",
            moyenne: "183,509 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "3h 03' 46''3s ",
            moyenne: "165.962 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "4'55",
            moyenne: "172,312 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Rouen-les-Essarts",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2'14''8",
            moyenne: "136,202 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "3h 00' 20''2s ",
            moyenne: "130.656 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2'17''3",
            moyenne: "133,722 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Giuseppe Farina",
            car: "Ferrari 500",
            time: "1'50",
            moyenne: "154,178 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2h 44' 11s ",
            moyenne: "146.337 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "1'52",
            moyenne: "151,425 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "10'04''4",
            moyenne: "135,864 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "3h 06' 13''3s ",
            moyenne: "132.288 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "10'05''1",
            moyenne: "135,706 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "1'46''5",
            moyenne: "141,735 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2h 53' 28''5s ",
            moyenne: "130.521 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "1'49''8",
            moyenne: "137,475 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2'05''7",
            moyenne: "180,430 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2h 50' 45''6s ",
            moyenne: "177.091 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2'06''1",
            moyenne: "179,857 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "AFM 6",
        team: "AFM",
        drivers: [
          "Hans Stuck",
          "Willi Heeks",
          "Helmut Niedermayr",
          "Ludwig Fischer",
          "Willi Krakau",
        ],
      },
      {
        model: "Veritas Meteor",
        team: "Veritas",
        drivers: [
          "Toni Ulmen",
          "Arthur Legat",
          "Adolf Brudes",
          "Paul Pietsch",
          "Hans Klenk",
        ],
      },
      {
        model: "Gordini T16",
        team: "Gordini",
        drivers: [
          "Jean Behra",
          "Robert Manzon",
          "Prince Bira",
          "Maurice Trintignant",
        ],
      },
      {
        model: "Simca Gordini T15",
        team: "Simca Gordini",
        drivers: [
          "Prince Bira",
          "Robert O'Brien",
          "Maurice Trintignant",
          "Johnny Claes",
          "Paul Frère",
        ],
      },
      {
        model: "Ferrari 500",
        team: "Ferrari",
        drivers: [
          "Louis Rosier",
          "Giuseppe Farina",
          "Piero Taruffi",
          "André Simon",
          "Rudi Fischer",
          "Alberto Ascari",
          "Charles de Tornaco",
          "Luigi Villoresi",
          "Roy Salvadori",
          "Bobby Baird",
          "Roger Laurent",
        ],
      },
      {
        model: "Ferrari 166",
        team: "Ferrari",
        drivers: [
          "Maurice Trintignant",
          "Gianfranco Comotti",
          "Vittorio Marzotto",
          "Piero Carini",
          "Sergio Sighinolfi",
        ],
      },
      {
        model: "HWM 52",
        team: "HWM",
        drivers: [
          "George Abecassis",
          "Peter Collins",
          "Lance Macklin",
          "Stirling Moss",
          "Paul Frère",
          "Roger Laurent",
          "Yves Giraud-Cabantous",
          "Tony Gaze",
          "Duncan Hamilton",
          "Johnny Claes",
          "Dries van der Lof",
        ],
      },
      {
        model: "Frazer Nash FN48",
        team: "Frazer Nash",
        drivers: ["Ken Wharton"],
      },
      {
        model: "Cooper T20",
        team: "Cooper",
        drivers: [
          "Eric Brandon",
          "Alan Brown",
          "Mike Hawthorn",
          "Reg Parnell",
          "David Murray",
          "Ken Wharton",
        ],
      },
      {
        model: "Maserati A6GCM",
        team: "Maserati",
        drivers: [
          "Juan-Manuel Fangio",
          "José-Froilãn Gonzalèz",
          "Philippe Etancelin",
          "Eitel Cantoni",
          "Chico Landi",
          "Gino Bianco",
          "Felice Bonetto",
          "Jan Flinterman",
          "Franco Rol",
        ],
      },
      {
        model: "Maserati 4CLT",
        team: "Maserati",
        drivers: ["Emmanuel de Graffenried", "Harry Schell", "Alberto Crespo"],
      },
      {
        model: "Ferrari 212",
        team: "Ferrari",
        drivers: [
          "Peter Hirt",
          "Rudolf Schoeller",
          "Rudi Fischer",
          "Hans Stuck",
        ],
      },
      {
        model: "Simca Gordini T11",
        team: "Simca Gordini",
        drivers: ["Max de Terra", "Alfred Dattner"],
      },
      { model: "Gordini T16S", team: "Gordini", drivers: ["Johnny Claes"] },
      { model: "ERA G", team: "ERA", drivers: ["Stirling Moss"] },
      {
        model: "Aston NB41",
        team: "Aston",
        drivers: ["Robin Montgomerie-Charrington", "Bill Aston"],
      },
      { model: "HWM 51", team: "HWM", drivers: ["Tony Gaze"] },
      {
        model: "Alta F2",
        team: "Alta",
        drivers: ["Peter Whitehead", "Graham Whitehead"],
      },
      {
        model: "Connaught A",
        team: "Connaught",
        drivers: [
          "Ken McAlpine",
          "Ken Downing",
          "Eric Thompson",
          "Dennis Poore",
          "Stirling Moss",
        ],
      },
      { model: "Ferrari 125", team: "Ferrari", drivers: ["Peter Whitehead"] },
      {
        model: "Frazer Nash 421",
        team: "Frazer Nash",
        drivers: ["Tony Crook", "Ken Wharton"],
      },
      { model: "BMW Speciale", team: "BMW", drivers: ["Marcel Balsa"] },
      {
        model: "Veritas RS",
        team: "Veritas",
        drivers: ["Fritz Riess", "Theo Helfrich", "Toni Ulmen", "Josef Peters"],
      },
      {
        model: "BMW Eigenbau",
        team: "BMW",
        drivers: ["Günther Bechem", "Harry Merkel"],
      },
      { model: "BMW Heck", team: "BMW", drivers: ["Ernst Klodwig"] },
      { model: "BMW Greifzu", team: "BMW", drivers: ["Rudolf Krause"] },
      { model: "OSCA 20", team: "OSCA", drivers: ["Elie Bayol"] },
      {
        model: "Cisitalia D46",
        team: "Cisitalia",
        drivers: ["Piero Dusio", "Carlo Dusio"],
      },
    ],
  },
  {
    season: "1953",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "1'55''4",
            moyenne: "122,038 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "3h 01' 04''6s ",
            moyenne: "125.736 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "1'48''4",
            moyenne: "129,919 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "1'51''1",
            moyenne: "135,867 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2h 53' 35''8s ",
            moyenne: "130.430 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Luigi Villoresi",
            car: "Ferrari 500",
            time: "1'52''8",
            moyenne: "133,819 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati A6GCM",
            time: "4'30",
            moyenne: "188,267 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2h 48' 30''3s ",
            moyenne: "180.999 km/h",
          },
        ],
        bestLap: [
          {
            driver: "José-Froilãn Gonzalèz",
            car: "Maserati A6GCM",
            time: "4'34",
            moyenne: "185,518 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Reims-Gueux",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2'41''2",
            moyenne: "186,409 km/h",
          },
        ],
        winner: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari 500",
            time: "2h 44' 18''6s ",
            moyenne: "182.881 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati A6GCM",
            time: "2'41''0",
            moyenne: "186,641 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "1'48''0",
            moyenne: "157,033 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2h 50' 00s ",
            moyenne: "149.644 km/h",
          },
        ],
        bestLap: [
          {
            driver: "José-Froilãn Gonzalèz",
            car: "Maserati A6GCM",
            time: "1'50",
            moyenne: "154,178 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "9'59''8",
            moyenne: "136,906 km/h",
          },
        ],
        winner: [
          {
            driver: "Giuseppe Farina",
            car: "Ferrari 500",
            time: "3h 02' 25''0s ",
            moyenne: "135.047 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "9'56",
            moyenne: "137,779 km/h",
          },
        ],
      },
      {
        race: "Suisse",
        track: "Bremgarten",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati A6GCM",
            time: "2'40''1",
            moyenne: "163,698 km/h",
          },
        ],
        winner: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "3h 01' 34''40s ",
            moyenne: "156.367 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2'41''3",
            moyenne: "162,480 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Ferrari 500",
            time: "2'02''7",
            moyenne: "184,841 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati A6GCM",
            time: "2h 49' 45''9s ",
            moyenne: "178.129 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati A6GCM",
            time: "2'04''5",
            moyenne: "182,169 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Maserati A6GCM",
        team: "Maserati",
        drivers: [
          "Juan-Manuel Fangio",
          "José-Froilãn Gonzalèz",
          "Felice Bonetto",
          "Oscar Galvez",
          "Emmanuel de Graffenried",
          "Johnny Claes",
          "Onofre Marimón",
          "Chico Landi",
          "Hermann Lang",
          "Prince Bira",
          "Sergio Mantovani",
          "Luigi Musso",
        ],
      },
      {
        model: "Ferrari 500",
        team: "Ferrari",
        drivers: [
          "Alberto Ascari",
          "Giuseppe Farina",
          "Luigi Villoresi",
          "Mike Hawthorn",
          "Louis Rosier",
          "Jacques Swaters",
          "Charles de Tornaco",
          "Peter Hirt",
        ],
      },
      {
        model: "Cooper T20",
        team: "Cooper",
        drivers: [
          "Alan Brown",
          "Adolfo Schwelm-Cruz",
          "Jimmy Stewart",
          "Ninian Sanderson",
          "Tony Crook",
        ],
      },
      {
        model: "Cooper T23",
        team: "Cooper",
        drivers: [
          "John Barber",
          "Ken Wharton",
          "Bob Gerard",
          "David Clarke",
          "Alan Brown",
          "Helmut Glockler",
          "Rodney Nuckey",
        ],
      },
      {
        model: "Gordini T16",
        team: "Gordini",
        drivers: [
          "Robert Manzon",
          "Maurice Trintignant",
          "Harry Schell",
          "Jean Behra",
          "Carlos Menditeguy",
          "Roberto Mieres",
          "Fred Wacker",
        ],
      },
      {
        model: "Simca Gordini T15",
        team: "Simca Gordini",
        drivers: ["Pablo Birger", "Georges Berger"],
      },
      {
        model: "Connaught A",
        team: "Connaught",
        drivers: [
          "Roy Salvadori",
          "Ken McAlpine",
          "Johnny Claes",
          "Stirling Moss",
          "André Pilette",
          "Prince Bira",
          "Tony Rolt",
          "Ian Stewart",
          "Jack Fairman",
        ],
      },
      {
        model: "HWM 53",
        team: "HWM",
        drivers: [
          "Peter Collins",
          "Lance Macklin",
          "Paul Frère",
          "Yves Giraud-Cabantous",
          "Duncan Hamilton",
          "Jack Fairman",
          "Albert Scherrer",
          "John Fitch",
        ],
      },
      {
        model: "Veritas Meteor",
        team: "Veritas",
        drivers: [
          "Arthur Legat",
          "Willi Heeks",
          "Hans Klenk",
          "Ernst Loof",
          "Hans Herrmann",
          "Erwin Bauer",
        ],
      },
      {
        model: "OSCA 20",
        team: "OSCA",
        drivers: ["Louis Chiron", "Elie Bayol"],
      },
      { model: "Cooper Special", team: "Cooper", drivers: ["Stirling Moss"] },
      {
        model: "Cooper T24",
        team: "Cooper",
        drivers: ["Peter Whitehead", "Stirling Moss"],
      },
      {
        model: "MSM Lancia",
        team: "MSM",
        drivers: [" Mauritz von Strachwitz"],
      },
      {
        model: "AFM 6",
        team: "AFM",
        drivers: [
          "Hans Stuck",
          "Hans Blees",
          "Theo Fitzau",
          "Adolf Lang",
          "Günther Bechem",
        ],
      },
      {
        model: "Veritas RS",
        team: "Veritas",
        drivers: [
          "Wolfgang Seidel",
          "Theo Helfrich",
          "Oswald Karch",
          "Adolf Lang",
        ],
      },
      {
        model: "Ferrari 166",
        team: "Ferrari",
        drivers: ["Kurt Adolff", "Max de Terra"],
      },
      { model: "EMW R2", team: "EMW", drivers: ["Edgar Barth"] },
      { model: "BMW Greifzu", team: "BMW", drivers: ["Rudolf Krause"] },
      { model: "BMW Heck", team: "BMW", drivers: ["Ernst Klodwig"] },
      {
        model: "Ferrari 553",
        team: "Ferrari",
        drivers: ["Umberto Maglioli", "Piero Carini"],
      },
    ],
  },
  {
    season: "1954",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Giuseppe Farina",
            car: "Ferrari 625",
            time: "1'44''8",
            moyenne: "134,382 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "3h 00' 55''8s ",
            moyenne: "et 52e tours",
          },
        ],
        bestLap: [
          {
            driver: "José-Froilãn Gonzalèz",
            car: "Ferrari 625",
            time: "1'48''2",
            moyenne: "130,159 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "4'22''1",
            moyenne: "193,941 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "2h 44' 42''4s ",
            moyenne: "185.173 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "4'25''5",
            moyenne: "191,458 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Reims-Gueux",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196s",
            time: "2'29''4",
            moyenne: "200,048 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196s",
            time: "2h 42' 47''9s ",
            moyenne: "186.644 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Hans Herrmann",
            car: "Mercedes W196s",
            time: "2'32''9",
            moyenne: "195,469 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196s",
            time: "1'45''0",
            moyenne: "161,520 km/h",
          },
        ],
        winner: [
          {
            driver: "José-Froilãn Gonzalèz",
            car: "Ferrari 625",
            time: "2h 56' 14s ",
            moyenne: " 7 (0.14 pt)",
          },
        ],
        bestLap: [
          {
            driver: "Alberto Ascari",
            car: "Maserati 250F",
            time: "1'50",
            moyenne: "154,178 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "9'50''1",
            moyenne: "139,156 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "3h 45' 45''8s ",
            moyenne: "133.366 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Karl Kling",
            car: "Mercedes W196",
            time: "9'55''1",
            moyenne: "137,987 km/h",
          },
        ],
      },
      {
        race: "Suisse",
        track: "Bremgarten",
        pole: [
          {
            driver: "José-Froilãn Gonzalèz",
            car: "Ferrari 625",
            time: "2'39''5",
            moyenne: "164,313 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "3h 00' 34''5s ",
            moyenne: "159.650 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "2'39''7",
            moyenne: "164,108 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196s",
            time: "1'59''0",
            moyenne: "190,588 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196s",
            time: "2h 47' 47''9s ",
            moyenne: "180.216 km/h",
          },
        ],
        bestLap: [
          {
            driver: "José-Froilãn Gonzalèz",
            car: "Ferrari 553",
            time: "2'00''8",
            moyenne: "187,748 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Pedralbes",
        pole: [
          {
            driver: "Alberto Ascari",
            car: "Lancia D50",
            time: "2'18''1",
            moyenne: "164,646 km/h",
          },
        ],
        winner: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari 553",
            time: "3h 13' 52''1s ",
            moyenne: "156.378 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alberto Ascari",
            car: "Lancia D50",
            time: "2'20''4",
            moyenne: "161,949 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Maserati 250F",
        team: "Maserati",
        drivers: [
          "Juan-Manuel Fangio",
          "Onofre Marimón",
          "Prince Bira",
          "Stirling Moss",
          "Sergio Mantovani",
          "Alberto Ascari",
          "Luigi Villoresi",
          "Ken Wharton",
          "Roy Salvadori",
          "Ron Flockhart",
          "Roberto Mieres",
          "Harry Schell",
          "Emmanuel de Graffenried",
          "Luigi Musso",
          "Louis Rosier",
          "Francisco Godia-Sales",
          "Guerino Bertocchi",
        ],
      },
      {
        model: "Maserati A6GCM",
        team: "Maserati",
        drivers: [
          "Luigi Musso",
          "Prince Bira",
          "Harry Schell",
          "Emmanuel de Graffenried",
          "Roberto Mieres",
          "Jorge Daponte",
          "Carlos Menditeguy",
          "Giovanni de Riu",
          "Ottorino Volonterio",
        ],
      },
      {
        model: "Ferrari 625",
        team: "Ferrari",
        drivers: [
          "Giuseppe Farina",
          "José-Froilãn Gonzalèz",
          "Mike Hawthorn",
          "Umberto Maglioli",
          "Maurice Trintignant",
          "Robert Manzon",
          "Piero Taruffi",
          "Alberto Ascari",
        ],
      },
      {
        model: "Gordini T16",
        team: "Gordini",
        drivers: [
          "Jean Behra",
          "Elie Bayol",
          "Roger Loyer",
          "André Simon",
          "Paul Frère",
          "André Pilette",
          "Jacques Pollet",
          "Georges Berger",
          "Clemar Bucci",
          "Fred Wacker",
        ],
      },
      {
        model: "Ferrari 500/625",
        team: "Ferrari",
        drivers: ["Louis Rosier", "Jacques Swaters", "Reg Parnell"],
      },
      {
        model: "Ferrari 553",
        team: "Ferrari",
        drivers: [
          "Giuseppe Farina",
          "José-Froilãn Gonzalèz",
          "Mike Hawthorn",
          "Umberto Maglioli",
          "Robert Manzon",
        ],
      },
      {
        model: "Mercedes W196s",
        team: "Mercedes",
        drivers: ["Juan-Manuel Fangio", "Karl Kling", "Hans Herrmann"],
      },
      { model: "HWM 53", team: "HWM", drivers: ["Lance Macklin"] },
      { model: "Vanwall Special", team: "Vanwall", drivers: ["Peter Collins"] },
      { model: "Cooper T24", team: "Cooper", drivers: ["Peter Whitehead"] },
      {
        model: "Connaught A",
        team: "Connaught",
        drivers: [
          "Bill Whitehouse",
          "Leslie Marr",
          "John Riseley-Prichard",
          "Don Beauman",
          "Leslie Thorne",
        ],
      },
      {
        model: "Cooper T23",
        team: "Cooper",
        drivers: [
          "Alan Brown",
          "Horace Gould",
          "Bob Gerard",
          "Eric Brandon",
          "Rodney Nuckey",
        ],
      },
      {
        model: "Mercedes W196",
        team: "Mercedes",
        drivers: [
          "Juan-Manuel Fangio",
          "Karl Kling",
          "Hermann Lang",
          "Hans Herrmann",
        ],
      },
      { model: "Klenk Meteor", team: "Klenk", drivers: ["Theo Helfrich"] },
      {
        model: "Lancia D50",
        team: "Lancia",
        drivers: ["Alberto Ascari", "Luigi Villoresi"],
      },
    ],
  },
  {
    season: "1955",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "José-Froilãn Gonzalèz",
            car: "Ferrari 625",
            time: "1'43''1",
            moyenne: "136,597 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "3h 00' 38''6s ",
            moyenne: "124.738 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "1'48''3",
            moyenne: "130,039 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "1'41''1",
            moyenne: "111,988 km/h",
          },
        ],
        winner: [
          {
            driver: "Maurice Trintignant",
            car: "Ferrari 625",
            time: "2h 58' 09''7s ",
            moyenne: "105.915 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "1'42''4",
            moyenne: "110,566 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Eugenio Castellotti",
            car: "Lancia D50",
            time: "4'18''1",
            moyenne: "196,947 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "2h 39' 29''0s ",
            moyenne: "191.238 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "4'20''6",
            moyenne: "195,058 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "1'40''0",
            moyenne: "150,948 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196",
            time: "2h 54' 23''8s ",
            moyenne: "144.257 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Roberto Mieres",
            car: "Maserati 250F",
            time: "1'40''9",
            moyenne: "149,602 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Aintree",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Mercedes W196",
            time: "2'00''4",
            moyenne: "144,359 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Mercedes W196",
            time: "3h 07' 21''2s ",
            moyenne: "139.155 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Mercedes W196",
            time: "2'00''4",
            moyenne: "144,359 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196s",
            time: "2'46''5",
            moyenne: "216,216 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Mercedes W196s",
            time: "2h 25' 04''4s ",
            moyenne: "206.792 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Mercedes W196s",
            time: "2'46''9",
            moyenne: "215,698 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Mercedes W196",
        team: "Mercedes",
        drivers: [
          "Juan-Manuel Fangio",
          "Karl Kling",
          "Stirling Moss",
          "Hans Herrmann",
          "André Simon",
          "Piero Taruffi",
        ],
      },
      {
        model: "Ferrari 625",
        team: "Ferrari",
        drivers: [
          "Umberto Maglioli",
          "Giuseppe Farina",
          "José-Froilãn Gonzalèz",
          "Maurice Trintignant",
          "Olivier Gendebien",
          "Mike Hawthorn",
          "Eugenio Castellotti",
        ],
      },
      {
        model: "Maserati 250F",
        team: "Maserati",
        drivers: [
          "Jean Behra",
          "Roberto Mieres",
          "Sergio Mantovani",
          "Luigi Musso",
          "Carlos Menditeguy",
          "Clemar Bucci",
          "Harry Schell",
          "Louis Rosier",
          "André Simon",
          "Lance Macklin",
          "Cesare Perdisa",
          "Johnny Claes",
          "Prince Bira",
          "Peter Walker",
          "Horace Gould",
          "Peter Collins",
          "Roy Salvadori",
        ],
      },
      { model: "Maserati A6GCM", team: "Maserati", drivers: ["Alberto Uria"] },
      {
        model: "Lancia D50",
        team: "Lancia",
        drivers: [
          "Alberto Ascari",
          "Luigi Villoresi",
          "Eugenio Castellotti",
          "Louis Chiron",
          "Piero Valenzano",
          "Giuseppe Farina",
        ],
      },
      {
        model: "Gordini T16",
        team: "Gordini",
        drivers: [
          "Elie Bayol",
          "Pablo Birger",
          "Jesus Iglesias",
          "Pedro Llano",
          "Robert Manzon",
          "Jacques Pollet",
          "Jacques Swaters",
          "Hermano da Silva Ramos",
          "Mike Sparken",
        ],
      },
      {
        model: "Vanwall VW 55",
        team: "Vanwall",
        drivers: ["Mike Hawthorn", "Ken Wharton", "Harry Schell"],
      },
      { model: "HWM 53", team: "HWM", drivers: ["Ted Whiteaway"] },
      {
        model: "Ferrari 555",
        team: "Ferrari",
        drivers: [
          "Harry Schell",
          "Piero Taruffi",
          "Paul Frère",
          "Giuseppe Farina",
          "Maurice Trintignant",
          "Mike Hawthorn",
          "Eugenio Castellotti",
          "Umberto Maglioli",
        ],
      },
      { model: "Ferrari 500", team: "Ferrari", drivers: ["Johnny Claes"] },
      {
        model: "Connaught Bs",
        team: "Connaught",
        drivers: ["Ken McAlpine", "Jack Fairman", "Leslie Marr"],
      },
      {
        model: "Connaught B",
        team: "Connaught",
        drivers: ["Tony Rolt", "Peter Walker"],
      },
      { model: "Cooper T40", team: "Cooper", drivers: ["Jack Brabham"] },
      {
        model: "Mercedes W196s",
        team: "Mercedes",
        drivers: ["Stirling Moss", "Juan-Manuel Fangio"],
      },
      { model: "Gordini T32", team: "Gordini", drivers: ["Jean Lucas"] },
      { model: "Maserati 250Fs", team: "Maserati", drivers: ["Jean Behra"] },
      {
        model: "Arzani Volpini F1",
        team: "Arzani Volpini",
        drivers: ["Luigi Piotti"],
      },
    ],
  },
  {
    season: "1956",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "1'42''5",
            moyenne: "137,397 km/h",
          },
        ],
        winner: [
          {
            driver: "Luigi Musso",
            car: "Ferrari D50",
            time: "3h 00' 03''7s ",
            moyenne: "re numéro 34",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "1'45''3",
            moyenne: "133,744 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "1'44''0",
            moyenne: "108,865 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Maserati 250F",
            time: "3h 00' 32''9s ",
            moyenne: " la 2e place",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "1'44''4",
            moyenne: "108,448 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "4'09''8",
            moyenne: "203,491 km/h",
          },
        ],
        winner: [
          {
            driver: "Peter Collins",
            car: "Ferrari D50",
            time: "2h 40' 00''3s ",
            moyenne: "190.614 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Maserati 250F",
            time: "4'14''7",
            moyenne: "199,576 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Reims-Gueux",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "2'23''3",
            moyenne: "208,564 km/h",
          },
        ],
        winner: [
          {
            driver: "Peter Collins",
            car: "Ferrari D50",
            time: "2h 34' 23''4s ",
            moyenne: "196.809 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "2'25''8",
            moyenne: "204,988 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Maserati 250F",
            time: "1'41",
            moyenne: "167,917 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "2h 59' 47s ",
            moyenne: "158.795 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Maserati 250F",
            time: "1'43''2",
            moyenne: "164,337 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "9'51''2",
            moyenne: "138,897 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "3h 38' 43''7s ",
            moyenne: "137.656 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "9'41''6",
            moyenne: "141,190 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Ferrari D50",
            time: "2'42''6",
            moyenne: "221,402 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Maserati 250F",
            time: "2h 23' 41''3s ",
            moyenne: "208.785 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Maserati 250F",
            time: "2'45''5",
            moyenne: "217,523 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Maserati 250F",
        team: "Maserati",
        drivers: [
          "Stirling Moss",
          "Jean Behra",
          "Carlos Menditeguy",
          "Luigi Piotti",
          "Chico Landi",
          "Gerino Gerini",
          "José-Froilãn Gonzalèz",
          "Mike Hawthorn",
          "Louis Rosier",
          "Horace Gould",
          "Cesare Perdisa",
          "Louis Chiron",
          "Luigi Villoresi",
          "Francisco Godia-Sales",
          "Piero Taruffi",
          "André Simon",
          "Ottorino Volonterio",
        ],
      },
      {
        model: "Maserati A6GCM",
        team: "Maserati",
        drivers: ["Alberto Uria", "Oscar Gonzalez", "Ottorino Volonterio"],
      },
      {
        model: "Gordini T16",
        team: "Gordini",
        drivers: [
          "Robert Manzon",
          "Hermano da Silva Ramos",
          "André Pilette",
          "André Simon",
        ],
      },
      {
        model: "Gordini T32",
        team: "Gordini",
        drivers: [
          "Elie Bayol",
          "André Pilette",
          "Robert Manzon",
          "Hermano da Silva Ramos",
          "André Milhoux",
        ],
      },
      {
        model: "Ferrari D50",
        team: "Ferrari",
        drivers: [
          "Juan-Manuel Fangio",
          "Eugenio Castellotti",
          "Luigi Musso",
          "Peter Collins",
          "Paul Frère",
          "André Pilette",
          "Alfonso de Portago",
          "Olivier Gendebien",
          "Wolfgang von Trips",
        ],
      },
      {
        model: "Ferrari 555",
        team: "Ferrari",
        drivers: ["Peter Collins", "Olivier Gendebien"],
      },
      {
        model: "BRM P25",
        team: "BRM",
        drivers: ["Mike Hawthorn", "Tony Brooks", "Ron Flockhart"],
      },
      {
        model: "Vanwall VW 2",
        team: "Vanwall",
        drivers: [
          "Maurice Trintignant",
          "Harry Schell",
          "Mike Hawthorn",
          "Colin Chapman",
          "José-Froilãn Gonzalèz",
          "Piero Taruffi",
        ],
      },
      { model: "Ferrari 500", team: "Ferrari", drivers: ["Giorgio Scarlatti"] },
      {
        model: "Connaught B",
        team: "Connaught",
        drivers: [
          "Piero Scotti",
          "Archie Scott-Brown",
          "Desmond Titterington",
          "Jack Fairman",
          "Mike Oliver",
          "Les Leston",
          "Ron Flockhart",
        ],
      },
      {
        model: "Bugatti T251",
        team: "Bugatti",
        drivers: ["Maurice Trintignant"],
      },
      { model: "Connaught Bs", team: "Connaught", drivers: ["Piero Scotti"] },
      { model: "Cooper T23", team: "Cooper", drivers: ["Bob Gerard"] },
      { model: "Emeryson 56", team: "Emeryson", drivers: ["Paul Emery"] },
    ],
  },
  {
    season: "1957",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Maserati 250F",
            time: "1'42''6",
            moyenne: "137,263 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "3h 00' 55''9s ",
            moyenne: "129.729 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Maserati 250F",
            time: "1'44''7",
            moyenne: "134,510 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "1'42''7",
            moyenne: "110,243 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "3h 10' 12''8s ",
            moyenne: "104.165 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "1'45''6",
            moyenne: "107,216 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Rouen-les-Essarts",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "2'21''5",
            moyenne: "166,440 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "3h 07' 46''4s ",
            moyenne: "160.960 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Luigi Musso",
            car: "Ferrari 801",
            time: "2'22''4",
            moyenne: "165,388 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Aintree",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "2'00''2",
            moyenne: "144,599 km/h",
          },
        ],
        winner: [
          {
            driver: "Tony Brooks",
            car: "Vanwall VW 5",
            time: "3h 06' 37''8s ",
            moyenne: "sez de tours",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "1'59''2",
            moyenne: "145,812 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "9'25''6",
            moyenne: "145,184 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "3h 30' 38''8s ",
            moyenne: "* : Formule ",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "9'17''4",
            moyenne: "147,320 km/h",
          },
        ],
      },
      {
        race: "Pescara",
        track: "Pescara",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "9'44''6",
            moyenne: "157,517 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "2h 59' 22''7s ",
            moyenne: "154.006 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "9'44''6",
            moyenne: "157,517 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Stuart Lewis-Evans",
            car: "Vanwall VW 5",
            time: "1'42''4",
            moyenne: "202,148 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "2h 35' 03''9s ",
            moyenne: "193.564 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Tony Brooks",
            car: "Vanwall VW 5",
            time: "1'43''7",
            moyenne: "199,614 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Maserati 250F",
        team: "Maserati",
        drivers: [
          "Juan-Manuel Fangio",
          "Stirling Moss",
          "Jean Behra",
          "Carlos Menditeguy",
          "Harry Schell",
          "Joakim Bonnier",
          "Luigi Piotti",
          "Masten Gregory",
          "André Simon",
          "Horace Gould",
          "Giorgio Scarlatti",
          "Hans Herrmann",
          "Gerino Gerini",
          "Ivor Bueb",
          "Bruce Halford",
          "Francisco Godia-Sales",
          "Ottorino Volonterio",
        ],
      },
      {
        model: "Ferrari 801",
        team: "Ferrari",
        drivers: [
          "Peter Collins",
          "Luigi Musso",
          "Eugenio Castellotti",
          "Mike Hawthorn",
          "Wolfgang von Trips",
          "Cesare Perdisa",
          "Alfonso de Portago",
          "José-Froilãn Gonzalèz",
          "Maurice Trintignant",
        ],
      },
      {
        model: "Ferrari 500",
        team: "Ferrari",
        drivers: ["Alessandro de Tomaso"],
      },
      {
        model: "BRM P25",
        team: "BRM",
        drivers: [
          "Ron Flockhart",
          "Roy Salvadori",
          "Herbert Mackay-Fraser",
          "Jack Fairman",
          "Les Leston",
        ],
      },
      {
        model: "Connaught B",
        team: "Connaught",
        drivers: ["Stuart Lewis-Evans", "Ivor Bueb"],
      },
      {
        model: "Cooper T43",
        team: "Cooper",
        drivers: [
          "Jack Brabham",
          "Les Leston",
          "Mike McDowel",
          "Roy Salvadori",
        ],
      },
      {
        model: "Vanwall VW 5",
        team: "Vanwall",
        drivers: [
          "Stirling Moss",
          "Tony Brooks",
          "Stuart Lewis-Evans",
          "Roy Salvadori",
        ],
      },
      { model: "Ferrari D50", team: "Ferrari", drivers: ["Mike Hawthorn"] },
      { model: "Cooper T44", team: "Cooper", drivers: ["Bob Gerard"] },
      {
        model: "Porsche RS550 (F2)",
        team: "Porsche",
        drivers: ["Umberto Maglioli", "Edgar Barth", "Carel Godin de Beaufort"],
      },
      {
        model: "Cooper T43 (F2)",
        team: "Cooper",
        drivers: [
          "Roy Salvadori",
          "Jack Brabham",
          "Tony Marsh",
          "Brian Naylor",
          "Dick Gibson",
        ],
      },
      { model: "Cooper T41 (F2)", team: "Cooper", drivers: ["Paul England"] },
    ],
  },
  {
    season: "1958",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "1'42''0",
            moyenne: "138,071 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Cooper T43",
            time: "2h 19' 33''7s ",
            moyenne: "134.547 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Manuel Fangio",
            car: "Maserati 250F",
            time: "1'41''8",
            moyenne: "138,342 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Tony Brooks",
            car: "Vanwall VW 5",
            time: "1'39''8",
            moyenne: "113,447 km/h",
          },
        ],
        winner: [
          {
            driver: "Maurice Trintignant",
            car: "Cooper T45",
            time: "2h 52' 27''9s ",
            moyenne: "109.414 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari D246",
            time: "1'40''6",
            moyenne: "112,545 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Stuart Lewis-Evans",
            car: "Vanwall VW 5",
            time: "1'37''1",
            moyenne: "155,456 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "2h 04' 49''2s ",
            moyenne: "151.166 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "1'37''6",
            moyenne: "154,660 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari D246",
            time: "3'57''1",
            moyenne: "214,087 km/h",
          },
        ],
        winner: [
          {
            driver: "Tony Brooks",
            car: "Vanwall VW 5",
            time: "1h 37' 06''3s ",
            moyenne: "209.093 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari D246",
            time: "3'58''3",
            moyenne: "213,009 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Reims-Gueux",
        pole: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari D246",
            time: "2'21''7",
            moyenne: "210,919 km/h",
          },
        ],
        winner: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari D246",
            time: "2h 03' 21''3s ",
            moyenne: "201.905 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari D246",
            time: "2'24''9",
            moyenne: "206,261 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "1'39''4",
            moyenne: "170,620 km/h",
          },
        ],
        winner: [
          {
            driver: "Peter Collins",
            car: "Ferrari D246",
            time: "2h 09' 04''2s ",
            moyenne: "164.248 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari D246",
            time: "1'40''8",
            moyenne: "168,250 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari D246",
            time: "9'14''0",
            moyenne: "148,224 km/h",
          },
        ],
        winner: [
          {
            driver: "Tony Brooks",
            car: "Vanwall VW 5",
            time: "2h 21' 15''0s ",
            moyenne: "* Formule 2",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "9'09''2",
            moyenne: "149,519 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Porto",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "2'34''21",
            moyenne: "172,915 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "2h 11' 27''80s ",
            moyenne: "169.028 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari D246",
            time: "2'32''37",
            moyenne: "175,003 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "1'40''5",
            moyenne: "205,970 km/h",
          },
        ],
        winner: [
          {
            driver: "Tony Brooks",
            car: "Vanwall VW 5",
            time: "2h 03' 47''8s ",
            moyenne: "195.078 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Phil Hill",
            car: "Ferrari D246",
            time: "1'42''9",
            moyenne: "201,166 km/h",
          },
        ],
      },
      {
        race: "Maroc",
        track: "Ain-Diab",
        pole: [
          {
            driver: "Mike Hawthorn",
            car: "Ferrari D246",
            time: "2'23''1",
            moyenne: "191,648 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "2h 09' 15''1s ",
            moyenne: ": * Formule ",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Vanwall VW 5",
            time: "2'22''5",
            moyenne: "192,455 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Maserati 250F",
        team: "Maserati",
        drivers: [
          "Juan-Manuel Fangio",
          "Jean Behra",
          "Carlos Menditeguy",
          "Harry Schell",
          "Francisco Godia-Sales",
          "Horace Gould",
          "Masten Gregory",
          "Joakim Bonnier",
          "José-Froilãn Gonzalèz",
          "Roberto Mieres",
          "Luigi Piotti",
          "Keith Campbell",
          "Maria-Teresa de Filippis",
          "Giorgio Scarlatti",
          "Gerino Gerini",
          "Luigi Taramazzo",
          "Ken Kavanagh",
        ],
      },
      {
        model: "Cooper T43",
        team: "Cooper",
        drivers: ["Stirling Moss", "Ron Flockhart", "Maurice Trintignant"],
      },
      {
        model: "Ferrari D246",
        team: "Ferrari",
        drivers: [
          "Luigi Musso",
          "Peter Collins",
          "Mike Hawthorn",
          "Wolfgang von Trips",
          "Olivier Gendebien",
          "Phil Hill",
        ],
      },
      {
        model: "OSCA F2",
        team: "OSCA",
        drivers: ["Colin Davis", "Giulio Cabianca", "Luigi Piotti"],
      },
      {
        model: "BRM P25",
        team: "BRM",
        drivers: [
          "Jean Behra",
          "Harry Schell",
          "Ron Flockhart",
          "Maurice Trintignant",
          "Masten Gregory",
          "Joakim Bonnier",
        ],
      },
      {
        model: "Connaught B",
        team: "Connaught",
        drivers: [
          "Bernie Ecclestone",
          "Bruce Kessler",
          "Paul Emery",
          "Jack Fairman",
          "Ivor Bueb",
        ],
      },
      {
        model: "Cooper T45",
        team: "Cooper",
        drivers: [
          "Jack Brabham",
          "Roy Salvadori",
          "Maurice Trintignant",
          "Ian Burgess",
          "Jack Fairman",
        ],
      },
      {
        model: "Lotus 12",
        team: "Lotus",
        drivers: ["Cliff Allison", "Graham Hill"],
      },
      {
        model: "Vanwall VW 5",
        team: "Vanwall",
        drivers: ["Stirling Moss", "Tony Brooks", "Stuart Lewis-Evans"],
      },
      {
        model: "Porsche RSK",
        team: "Porsche",
        drivers: ["Carel Godin de Beaufort"],
      },
      {
        model: "Lotus 16",
        team: "Lotus",
        drivers: ["Graham Hill", "Alan Stacey", "Cliff Allison"],
      },
      {
        model: "Porsche RS550 (F2)",
        team: "Porsche",
        drivers: ["Carel Godin de Beaufort", "Jean Kerguen"],
      },
      {
        model: "Cooper T43 (F2)",
        team: "Cooper",
        drivers: [
          "Dick Gibson",
          "Wolfgang Seidel",
          "Ian Burgess",
          "Christian Goethals",
          "François Picard",
        ],
      },
      {
        model: "Cooper T45 (F2)",
        team: "Cooper",
        drivers: [
          "Bruce McLaren",
          "Jack Brabham",
          "Brian Naylor",
          "Tony Marsh",
          "Jean-Claude Vidilles",
          "André Guelfi",
          "Tom Bridger",
          "Robert La Caze",
        ],
      },
      { model: "Porsche RSK (F2)", team: "Porsche", drivers: ["Edgar Barth"] },
      { model: "Ferrari D156 (F2)", team: "Ferrari", drivers: ["Phil Hill"] },
      { model: "Lotus 16 (F2)", team: "Lotus", drivers: ["Graham Hill"] },
      {
        model: "Lotus 12 (F2)",
        team: "Lotus",
        drivers: ["Ivor Bueb", "Keith Hall"],
      },
      { model: "Tojeiro F2 (F2)", team: "Tojeiro", drivers: ["Richard Utley"] },
      { model: "Emeryson 56", team: "Emeryson", drivers: ["Paul Emery"] },
    ],
  },
  {
    season: "1959",
    calendar: [
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Cooper T51",
            time: "1'39''6",
            moyenne: "113,675 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Cooper T51",
            time: "2h 55' 51''3s ",
            moyenne: "107.304 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jack Brabham",
            car: "Cooper T51",
            time: "1'40''4",
            moyenne: "112,769 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Joakim Bonnier",
            car: "BRM P25",
            time: "1'36''0",
            moyenne: "157,237 km/h",
          },
        ],
        winner: [
          {
            driver: "Joakim Bonnier",
            car: "BRM P25",
            time: "2h 05' 26''8s ",
            moyenne: "150.411 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Cooper T51",
            time: "1'36''6",
            moyenne: "156,261 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Reims-Gueux",
        pole: [
          {
            driver: "Tony Brooks",
            car: "Ferrari D246",
            time: "2'19''4",
            moyenne: "214,399 km/h",
          },
        ],
        winner: [
          {
            driver: "Tony Brooks",
            car: "Ferrari D246",
            time: "2h 01' 26''5s ",
            moyenne: "205.086 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "BRM P25",
            time: "2'22''8",
            moyenne: "209,294 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Aintree",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Cooper T51",
            time: "1'58''0",
            moyenne: "147,295 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Cooper T51",
            time: "2h 30' 11''6s ",
            moyenne: "144.654 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "BRM P25",
            time: "1'57''0",
            moyenne: "148,554 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Avus",
        pole: [
          {
            driver: "Tony Brooks",
            car: "Ferrari D246",
            time: "2'05''9",
            moyenne: "237,331 km/h",
          },
        ],
        winner: [
          {
            driver: "Tony Brooks",
            car: "Ferrari D246",
            time: "2h 09' 31''6s ",
            moyenne: "230.686 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Tony Brooks",
            car: "Ferrari D246",
            time: "2'04''5",
            moyenne: "240,000 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Monsanto",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Cooper T51",
            time: "2'02''9",
            moyenne: "159,349 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Cooper T51",
            time: "2h 11' 55''41s ",
            moyenne: "153.398 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Cooper T51",
            time: "2'05''07",
            moyenne: "156,584 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Cooper T51",
            time: "1'39''7",
            moyenne: "207,623 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Cooper T51",
            time: "2h 04' 05''4s ",
            moyenne: "200.177 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Phil Hill",
            car: "Ferrari D246",
            time: "1'40''4",
            moyenne: "206,175 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Sebring",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Cooper T51",
            time: "3'00''0",
            moyenne: "167,380 km/h",
          },
        ],
        winner: [
          {
            driver: "Bruce McLaren",
            car: "Cooper T51",
            time: "2h 12' 35''7s ",
            moyenne: "159.055 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Maurice Trintignant",
            car: "Cooper T51",
            time: "3'05",
            moyenne: "162,856 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Porsche 718",
        team: "Porsche",
        drivers: ["Wolfgang Seidel", "Wolfgang von Trips"],
      },
      {
        model: "Porsche Behra",
        team: "Porsche",
        drivers: ["Maria-Teresa de Filippis", "José Behra", "Jean Behra"],
      },
      {
        model: "Maserati 250F",
        team: "Maserati",
        drivers: [
          "Fritz d'Orey",
          "Giorgio Scarlatti",
          "André Testut",
          "Ken Kavanagh",
          "Azdrùbal Bayardo",
          "Carel Godin de Beaufort",
          "Giulio Cabianca",
          "Ettore Chimeri",
          "Phil Cade",
        ],
      },
      {
        model: "Cooper T51",
        team: "Cooper",
        drivers: [
          "Lucien Bianchi",
          "Alain de Changy",
          "Bruce McLaren",
          "Jack Brabham",
          "Masten Gregory",
          "Stirling Moss",
          "Maurice Trintignant",
          "Ivor Bueb",
          "Paul Emery",
          "Ian Burgess",
          "Colin Davis",
          "Hans Herrmann",
          "Trevor Taylor",
          "Chris Bristow",
          "Bill Moss",
          "Henry Taylor",
          "Mario Araujo de Cabral",
        ],
      },
      {
        model: "Cooper T45",
        team: "Cooper",
        drivers: [
          "Jean Lucienbonnet",
          "Roy Salvadori",
          "Jack Fairman",
          "Mike Taylor",
          "Peter Ashdown",
          "Keith Greene",
          "Tim Parnell",
        ],
      },
      {
        model: "BRM P25",
        team: "BRM",
        drivers: [
          "Harry Schell",
          "Joakim Bonnier",
          "Ron Flockhart",
          "Stirling Moss",
          "Hans Herrmann",
        ],
      },
      {
        model: "Cooper T43",
        team: "Cooper",
        drivers: ["Brian Whitehouse", "Alessandro de Tomaso"],
      },
      {
        model: "Lotus 16",
        team: "Lotus",
        drivers: [
          "Graham Hill",
          "Pete Lovely",
          "Bruce Halford",
          "Innes Ireland",
          "Alan Stacey",
          "David Piper",
        ],
      },
      {
        model: "Ferrari D246",
        team: "Ferrari",
        drivers: [
          "Jean Behra",
          "Phil Hill",
          "Tony Brooks",
          "Cliff Allison",
          "Olivier Gendebien",
          "Dan Gurney",
          "Wolfgang von Trips",
        ],
      },
      { model: "Ferrari D156", team: "Ferrari", drivers: ["Cliff Allison"] },
      {
        model: "Aston Martin DBR4",
        team: "Aston Martin",
        drivers: ["Roy Salvadori", "Carroll Shelby"],
      },
      {
        model: "Porsche RSK",
        team: "Porsche",
        drivers: ["Carel Godin de Beaufort", "Harry Blanchard"],
      },
      { model: "Vanwall VW 59", team: "Vanwall", drivers: ["Tony Brooks"] },
      { model: "Connaught B", team: "Connaught", drivers: ["Bruce Halford"] },
      { model: "JBW 59", team: "JBW", drivers: ["Brian Naylor"] },
      { model: "Fry F2", team: "Fry", drivers: ["Mike Parkes"] },
      { model: "Lotus 12", team: "Lotus", drivers: ["Dennis Taylor"] },
      {
        model: "Kurtis Kraft Midget",
        team: "Kurtis Kraft",
        drivers: ["Rodger Ward"],
      },
      { model: "Tec Mec F415", team: "Tec Mec", drivers: ["Fritz d'Orey"] },
      { model: "Connaught C", team: "Connaught", drivers: ["Bob Said"] },
    ],
  },
  {
    season: "1960",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Cooper T51",
            time: "1'36''9",
            moyenne: "145,337 km/h",
          },
        ],
        winner: [
          {
            driver: "Bruce McLaren",
            car: "Cooper T51",
            time: "2h 17' 49''5s ",
            moyenne: "136.242 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Cooper T51",
            time: "1'38''9",
            moyenne: "142,398 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Lotus 18",
            time: "1'36''3",
            moyenne: "117,570 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Lotus 18",
            time: "2h 53' 45''5s ",
            moyenne: "108.599 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Bruce McLaren",
            car: "Cooper T53",
            time: "1'36''2",
            moyenne: "117,692 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Lotus 18",
            time: "1'33''2",
            moyenne: "161,961 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Cooper T53",
            time: "2h 01' 47''2s ",
            moyenne: "154.931 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Stirling Moss",
            car: "Lotus 18",
            time: "1'33''8",
            moyenne: "160,925 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Cooper T53",
            time: "3'50''0",
            moyenne: "220,696 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Cooper T53",
            time: "2h 21' 37''3s ",
            moyenne: "215.052 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Innes Ireland",
            car: "Lotus 18",
            time: "3'51''9",
            moyenne: "218,887 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Reims-Gueux",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Cooper T53",
            time: "2'16''8",
            moyenne: "218,474 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Cooper T53",
            time: "1h 57' 24''9s ",
            moyenne: "212.119 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jack Brabham",
            car: "Cooper T53",
            time: "2'17''5",
            moyenne: "217,361 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Cooper T53",
            time: "1'34''6",
            moyenne: "179,277 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Cooper T53",
            time: "2h 04' 24''6s ",
            moyenne: "174.944 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Graham Hill",
            car: "BRM P48",
            time: "1'34''4",
            moyenne: "179,657 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Porto",
        pole: [
          {
            driver: "John Surtees",
            car: "Lotus 18",
            time: "2'25''56",
            moyenne: "183,190 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Cooper T53",
            time: "2h 19' 00''03s ",
            moyenne: "175.849 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Surtees",
            car: "Lotus 18",
            time: "2'27''53",
            moyenne: "180,744 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Phil Hill",
            car: "Ferrari D246",
            time: "2'41''4",
            moyenne: "223,048 km/h",
          },
        ],
        winner: [
          {
            driver: "Phil Hill",
            car: "Ferrari D246",
            time: "2h 21' 09''2s ",
            moyenne: "212.535 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Phil Hill",
            car: "Ferrari D246",
            time: "2'43''6",
            moyenne: "220,049 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Riverside",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Lotus 18",
            time: "1'54''4",
            moyenne: "165,871 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Lotus 18",
            time: "2h 28' 52''2s ",
            moyenne: "159.330 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jack Brabham",
            car: "Cooper T53",
            time: "1'56''3",
            moyenne: "163,161 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Porsche Behra",
        team: "Porsche",
        drivers: ["Masten Gregory", "Fred Gamble"],
      },
      {
        model: "Cooper T51",
        team: "Cooper",
        drivers: [
          "Roberto Bonomi",
          "Carlos Menditeguy",
          "Bruce McLaren",
          "Jack Brabham",
          "Harry Schell",
          "Stirling Moss",
          "Maurice Trintignant",
          "Bruce Halford",
          "Roy Salvadori",
          "Chris Bristow",
          "Tony Brooks",
          "Gino Munaron",
          "Giorgio Scarlatti",
          "Masten Gregory",
          "Ian Burgess",
          "Henry Taylor",
          "Carel Godin de Beaufort",
        ],
      },
      {
        model: "Maserati 250F",
        team: "Maserati",
        drivers: [
          "Giorgio Scarlatti",
          "Nasif Estefano",
          "Pedro Llano",
          "Oscar Cabalén",
          "Antonio Creus",
          "Gino Munaron",
          "Ettore Chimeri",
          "Julio GonzalezMpola",
          "Horace Gould",
          "Bob Drake",
        ],
      },
      {
        model: "Lotus 18",
        team: "Lotus",
        drivers: [
          "Innes Ireland",
          "John Surtees",
          "Stirling Moss",
          "Alan Stacey",
          "Jim Clark",
          "Mike Taylor",
          "Ron Flockhart",
          "Walt Hansgen",
          "Jim Hall",
        ],
      },
      {
        model: "Lotus 16",
        team: "Lotus",
        drivers: ["Alan Stacey", "Alberto Rodriguez-Larreta", "David Piper"],
      },
      {
        model: "Ferrari D246",
        team: "Ferrari",
        drivers: [
          "Cliff Allison",
          "Phil Hill",
          "Olivier Gendebien",
          "Wolfgang von Trips",
          "José-Froilãn Gonzalèz",
          "Richie Ginther",
          "Willy Mairesse",
        ],
      },
      {
        model: "BRM P25",
        team: "BRM",
        drivers: ["Joakim Bonnier", "Graham Hill"],
      },
      {
        model: "Scarab F1",
        team: "Scarab",
        drivers: ["Chuck Daigh", "Lance Reventlow", "Richie Ginther"],
      },
      {
        model: "BRM P48",
        team: "BRM",
        drivers: ["Joakim Bonnier", "Dan Gurney", "Graham Hill"],
      },
      {
        model: "Cooper T53",
        team: "Cooper",
        drivers: ["Jack Brabham", "Bruce McLaren"],
      },
      { model: "JBW 59", team: "JBW", drivers: ["Brian Naylor"] },
      { model: "Ferrari 246P", team: "Ferrari", drivers: ["Richie Ginther"] },
      {
        model: "Aston Martin DBR4",
        team: "Aston Martin",
        drivers: ["Roy Salvadori"],
      },
      {
        model: "Cooper T45",
        team: "Cooper",
        drivers: [
          "Lucien Bianchi",
          "Keith Greene",
          "Arthur Owen",
          "Wolfgang Seidel",
        ],
      },
      { model: "Vanwall VW 11", team: "Vanwall", drivers: ["Tony Brooks"] },
      {
        model: "Aston Martin DBR5",
        team: "Aston Martin",
        drivers: ["Roy Salvadori", "Maurice Trintignant"],
      },
      {
        model: "Cooper T43",
        team: "Cooper",
        drivers: ["Piero Drogo", "Vic Wilson"],
      },
      {
        model: "Ferrari 156P",
        team: "Ferrari",
        drivers: ["Wolfgang von Trips"],
      },
      {
        model: "Porsche 718",
        team: "Porsche",
        drivers: ["Edgar Barth", "Hans Herrmann"],
      },
    ],
  },
  {
    season: "1961",
    calendar: [
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Stirling Moss",
            car: "Lotus 18",
            time: "1'39''1",
            moyenne: "114,248 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Lotus 18",
            time: "2h 45' 50''1s ",
            moyenne: "113.788 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Richie Ginther",
            car: "Ferrari 156",
            time: "1'36''3",
            moyenne: "117,570 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Phil Hill",
            car: "Ferrari 156",
            time: "1'35''7",
            moyenne: "157,730 km/h",
          },
        ],
        winner: [
          {
            driver: "Wolfgang von Trips",
            car: "Ferrari 156",
            time: "2h 01' 52''1s ",
            moyenne: "154.827 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 21",
            time: "1'35''5",
            moyenne: "158,061 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Phil Hill",
            car: "Ferrari 156",
            time: "3'59''3",
            moyenne: "212,119 km/h",
          },
        ],
        winner: [
          {
            driver: "Phil Hill",
            car: "Ferrari 156",
            time: "2h 03' 03''8s ",
            moyenne: "206.235 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Richie Ginther",
            car: "Ferrari 156",
            time: "3'59''8",
            moyenne: "211,676 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Reims-Gueux",
        pole: [
          {
            driver: "Phil Hill",
            car: "Ferrari 156",
            time: "2'24''9",
            moyenne: "206,261 km/h",
          },
        ],
        winner: [
          {
            driver: "Giancarlo Baghetti",
            car: "Ferrari 156",
            time: "2h 14' 17''5s ",
            moyenne: "192.880 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Phil Hill",
            car: "Ferrari 156",
            time: "2'27''1",
            moyenne: "203,176 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Aintree",
        pole: [
          {
            driver: "Phil Hill",
            car: "Ferrari 156",
            time: "1'58''8",
            moyenne: "146,303 km/h",
          },
        ],
        winner: [
          {
            driver: "Wolfgang von Trips",
            car: "Ferrari 156",
            time: "2h 40' 53''6s ",
            moyenne: "135.034 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Tony Brooks",
            car: "BRM P48/57",
            time: "1'57''8",
            moyenne: "147,545 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Phil Hill",
            car: "Ferrari 156",
            time: "8'55''2",
            moyenne: "153,430 km/h",
          },
        ],
        winner: [
          {
            driver: "Stirling Moss",
            car: "Lotus 18/21",
            time: "2h 18' 12''4s ",
            moyenne: "148.538 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Phil Hill",
            car: "Ferrari 156",
            time: "8'57''8",
            moyenne: "152,689 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Wolfgang von Trips",
            car: "Ferrari 156",
            time: "2'46''3",
            moyenne: "216,476 km/h",
          },
        ],
        winner: [
          {
            driver: "Phil Hill",
            car: "Ferrari 156",
            time: "2h 03' 13''0s ",
            moyenne: "209.387 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Giancarlo Baghetti",
            car: "Ferrari 156",
            time: "2'48''4",
            moyenne: "213,777 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Cooper T58",
            time: "1'17''0",
            moyenne: "173,034 km/h",
          },
        ],
        winner: [
          {
            driver: "Innes Ireland",
            car: "Lotus 21",
            time: "2h 13' 45''8s ",
            moyenne: "166.010 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jack Brabham",
            car: "Cooper T58",
            time: "1'18''2",
            moyenne: "170,379 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Porsche 787",
        team: "Porsche",
        drivers: ["Joakim Bonnier", "Dan Gurney", "Edgar Barth"],
      },
      {
        model: "Porsche 718",
        team: "Porsche",
        drivers: [
          "Dan Gurney",
          "Hans Herrmann",
          "Carel Godin de Beaufort",
          "Joakim Bonnier",
          "Edgar Barth",
        ],
      },
      {
        model: "Lotus 18",
        team: "Lotus",
        drivers: [
          "Michael May",
          "Stirling Moss",
          "Cliff Allison",
          "Henry Taylor",
          "Trevor Taylor",
          "Ian Burgess",
          "Willy Mairesse",
          "Lucien Bianchi",
          "Tony Marsh",
          "Wolfgang Seidel",
          "Tim Parnell",
          "Gerry Ashmore",
          "Tony Maggs",
          "Ernesto Prinoth",
          "Gaetano Starrabba",
          "Jim Hall",
          "Ken Miles",
        ],
      },
      {
        model: "Emeryson 61",
        team: "Emeryson",
        drivers: ["Lucien Bianchi", "Olivier Gendebien", "André Pilette"],
      },
      {
        model: "Cooper T53",
        team: "Cooper",
        drivers: [
          "Masten Gregory",
          "John Surtees",
          "Jackie Lewis",
          "Lorenzo Bandini",
          "Roy Salvadori",
          "Bernard Collomb",
          "Ian Burgess",
          "Hap Sharp",
          "Roger Penske",
          "Walt Hansgen",
        ],
      },
      {
        model: "BRM P48/57",
        team: "BRM",
        drivers: ["Tony Brooks", "Graham Hill"],
      },
      {
        model: "Cooper T55",
        team: "Cooper",
        drivers: ["Jack Brabham", "Bruce McLaren"],
      },
      {
        model: "Lotus 21",
        team: "Lotus",
        drivers: [
          "Jim Clark",
          "Innes Ireland",
          "Willy Mairesse",
          "Stirling Moss",
        ],
      },
      {
        model: "Ferrari 156",
        team: "Ferrari",
        drivers: [
          "Richie Ginther",
          "Phil Hill",
          "Wolfgang von Trips",
          "Olivier Gendebien",
          "Giancarlo Baghetti",
          "Willy Mairesse",
          "Ricardo Rodriguez",
          "Pedro Rodriguez",
        ],
      },
      {
        model: "Cooper T51",
        team: "Cooper",
        drivers: [
          "Maurice Trintignant",
          "Massimo Natili",
          "John Campbell-Jones",
          "Renato Pirocchi",
        ],
      },
      {
        model: "Lotus 18/21",
        team: "Lotus",
        drivers: [
          "Stirling Moss",
          "Lucien Bianchi",
          "Juan-Manuel Bordeu",
          "Henry Taylor",
          "Masten Gregory",
          "Innes Ireland",
          "Peter Ryan",
          "Olivier Gendebien",
        ],
      },
      {
        model: "De Tomaso F1",
        team: "De Tomaso",
        drivers: [
          "Giorgio Scarlatti",
          "Nino Vaccarella",
          "Roberto Lippi",
          "Roberto Bussinello",
        ],
      },
      { model: "JBW 59", team: "JBW", drivers: ["Brian Naylor"] },
      { model: "Ferguson P99", team: "Ferguson", drivers: ["Jack Fairman"] },
      { model: "Gilby 61", team: "Gilby", drivers: ["Keith Greene"] },
      { model: "Cooper T58", team: "Cooper", drivers: ["Jack Brabham"] },
      { model: "MBM FJ", team: "MBM", drivers: ["Peter Monteverdi"] },
      {
        model: "Cooper T45",
        team: "Cooper",
        drivers: [
          "Renato Pirocchi",
          "Geoff Duke",
          "Jack Fairman",
          "Alfonso Thiele",
          "Mennato Boffa",
        ],
      },
      { model: "JBW 61", team: "JBW", drivers: ["Brian Naylor"] },
    ],
  },
  {
    season: "1962",
    calendar: [
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "John Surtees",
            car: "Lola Mk 4",
            time: "1'32''5",
            moyenne: "163,187 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "2h 11' 02''1s ",
            moyenne: "153.596 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Bruce McLaren",
            car: "Cooper T60",
            time: "1'34''4",
            moyenne: "159,903 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'35''4",
            moyenne: "118,679 km/h",
          },
        ],
        winner: [
          {
            driver: "Bruce McLaren",
            car: "Cooper T60",
            time: "2h 46' 29''7s ",
            moyenne: "113.337 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'35''5",
            moyenne: "118,555 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "3'57''0",
            moyenne: "214,177 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 07' 32''3s ",
            moyenne: "212.266 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "3'55''6",
            moyenne: "215,450 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Rouen-les-Essarts",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2'14''8",
            moyenne: "174,712 km/h",
          },
        ],
        winner: [
          {
            driver: "Dan Gurney",
            car: "Porsche 804",
            time: "2h 07' 35''5s ",
            moyenne: "166.124 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "2'16''9",
            moyenne: "172,032 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Aintree",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'53''6",
            moyenne: "153,000 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 26' 20''8s ",
            moyenne: "148.456 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'55''0",
            moyenne: "151,137 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Dan Gurney",
            car: "Porsche 804",
            time: "8'47''2",
            moyenne: "155,759 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "2h 38' 45''3s ",
            moyenne: "129.312 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "10'12''2",
            moyenne: "134,133 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'40''35",
            moyenne: "206,278 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "2h 29' 08''4s ",
            moyenne: "198.941 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "1'42''3",
            moyenne: "202,346 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'15''8",
            moyenne: "175,773 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 07' 13''0s ",
            moyenne: "174.553 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'15''0",
            moyenne: "177,648 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "East London",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'29''3",
            moyenne: "158,029 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "2h 08' 03''3s ",
            moyenne: "150.610 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'31''0",
            moyenne: "155,077 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari 156",
        team: "Ferrari",
        drivers: [
          "Phil Hill",
          "Giancarlo Baghetti",
          "Ricardo Rodriguez",
          "Lorenzo Bandini",
          "Willy Mairesse",
        ],
      },
      {
        model: "Lotus 25",
        team: "Lotus",
        drivers: ["Jim Clark", "Trevor Taylor", "Peter Arundell"],
      },
      {
        model: "Lotus 24",
        team: "Lotus",
        drivers: [
          "Trevor Taylor",
          "Jack Brabham",
          "Innes Ireland",
          "Maurice Trintignant",
          "Masten Gregory",
          "Dan Gurney",
          "Joseph Siffert",
          "Wolfgang Seidel",
          "Heinz Schiller",
          "Gunther Seiffert",
          "Nino Vaccarella",
          "Tony Shelly",
          "Ricardo Rodriguez",
          "Roger Penske",
          "Rob Schroeder",
          "Gary Hocking",
          "Syd van der Vyver",
        ],
      },
      {
        model: "Cooper T60",
        team: "Cooper",
        drivers: ["Bruce McLaren", "Tony Maggs"],
      },
      {
        model: "Cooper T55",
        team: "Cooper",
        drivers: ["Tony Maggs", "John Love"],
      },
      {
        model: "Lotus 18/21",
        team: "Lotus",
        drivers: [
          "Masten Gregory",
          "Nino Vaccarella",
          "Lucien Bianchi",
          "Tony Shelly",
          "Carlo Abate",
          "Gerry Ashmore",
        ],
      },
      {
        model: "Porsche 804",
        team: "Porsche",
        drivers: ["Joakim Bonnier", "Dan Gurney", "Phil Hill"],
      },
      {
        model: "Porsche 718",
        team: "Porsche",
        drivers: [
          "Carel Godin de Beaufort",
          "Rob Slotemaker",
          "Joakim Bonnier",
          "Heinz Schiller",
          "Colin Davis",
          "Nino Vaccarella",
          "Heini Walter",
        ],
      },
      { model: "Porsche 787", team: "Porsche", drivers: ["Ben Pon"] },
      {
        model: "Emeryson 61",
        team: "Emeryson",
        drivers: ["Wolfgang Seidel", "John Campbell-Jones", "Tony Settember"],
      },
      {
        model: "BRM P57",
        team: "BRM",
        drivers: ["Graham Hill", "Richie Ginther"],
      },
      {
        model: "BRM P48/57",
        team: "BRM",
        drivers: [
          "Richie Ginther",
          "Tony Marsh",
          "Jackie Lewis",
          "Gerry Ashmore",
          "Bruce Johnstone",
        ],
      },
      {
        model: "Lola Mk 4",
        team: "Lola",
        drivers: ["John Surtees", "Roy Salvadori"],
      },
      {
        model: "Cooper T53",
        team: "Cooper",
        drivers: [
          "Jackie Lewis",
          "Bernard Collomb",
          "Tim Mayer",
          "Hap Sharp",
          "Mike Harris",
        ],
      },
      {
        model: "De Tomaso F1",
        team: "De Tomaso",
        drivers: ["Roberto Bussinello", "Roberto Lippi"],
      },
      {
        model: "Lotus 21",
        team: "Lotus",
        drivers: [
          "Joseph Siffert",
          "Jim Hall",
          "Ernie Pieterse",
          "Neville Lederle",
        ],
      },
      {
        model: "Lotus 18",
        team: "Lotus",
        drivers: [
          "John Campbell-Jones",
          "Carlo Abate",
          "Jay Chamberlain",
          "Ernesto Prinoth",
          "Kurt Kuhnke",
          "Sam Tingle",
        ],
      },
      { model: "Cooper T59 Aiden", team: "Cooper", drivers: ["Ian Burgess"] },
      { model: "Gilby 62", team: "Gilby", drivers: ["Keith Greene"] },
      { model: "Brabham BT3", team: "Brabham", drivers: ["Jack Brabham"] },
      { model: "ENB F1", team: "ENB", drivers: ["Lucien Bianchi"] },
      {
        model: "De Tomaso 801",
        team: "De Tomaso",
        drivers: ["Nasif Estefano"],
      },
      { model: "Lola Mk 4A", team: "Lola", drivers: ["John Surtees"] },
      { model: "LDS Mk 1", team: "LDS", drivers: ["Doug Serrurier"] },
    ],
  },
  {
    season: "1963",
    calendar: [
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'34''3",
            moyenne: "120,064 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "2h 41' 49''7s ",
            moyenne: "116.605 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Surtees",
            car: "Ferrari 156/63",
            time: "1'34''5",
            moyenne: "119,810 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "3'54''1",
            moyenne: "216,830 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 27' 47''6s ",
            moyenne: "183.175 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "3'58''1",
            moyenne: "213,188 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'31''6",
            moyenne: "164,790 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 08' 13''7s ",
            moyenne: "156.958 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'33''7",
            moyenne: "161,097 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Reims-Gueux",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2'20''2",
            moyenne: "213,175 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 10' 54''3s ",
            moyenne: "e extérieure",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2'21''6",
            moyenne: "211,068 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'34''4",
            moyenne: "179,657 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 14' 09''6s ",
            moyenne: "172.765 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Surtees",
            car: "Ferrari 156/63",
            time: "1'36",
            moyenne: "176,662 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "8'45''8",
            moyenne: "156,173 km/h",
          },
        ],
        winner: [
          {
            driver: "John Surtees",
            car: "Ferrari 156/63",
            time: "2h 13' 06''8s ",
            moyenne: "154.222 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Surtees",
            car: "Ferrari 156/63",
            time: "8'47",
            moyenne: "155,818 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "John Surtees",
            car: "Ferrari 156 Aero",
            time: "1'37''3",
            moyenne: "212,744 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 24' 19''6s ",
            moyenne: "205.575 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'38''9",
            moyenne: "209,302 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "1'13''4",
            moyenne: "181,520 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "BRM P57",
            time: "2h 19' 22''1s ",
            moyenne: "175.267 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'14''5",
            moyenne: "178,840 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'58''8",
            moyenne: "151,515 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 09' 52''1s ",
            moyenne: "150.152 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'58''1",
            moyenne: "152,413 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "East London",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'28''9",
            moyenne: "158,740 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 10' 36''9s ",
            moyenne: "153.061 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Dan Gurney",
            car: "Brabham BT7",
            time: "1'29''1",
            moyenne: "158,384 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "A-T-S 100",
        team: "A-T-S",
        drivers: ["Phil Hill", "Giancarlo Baghetti"],
      },
      {
        model: "Lotus 25",
        team: "Lotus",
        drivers: [
          "Jack Brabham",
          "Jim Clark",
          "Trevor Taylor",
          "Peter Arundell",
          "Mike Spence",
          "Pedro Rodriguez",
        ],
      },
      {
        model: "Brabham BT7",
        team: "Brabham",
        drivers: ["Dan Gurney", "Jack Brabham"],
      },
      {
        model: "BRM P57",
        team: "BRM",
        drivers: [
          "Richie Ginther",
          "Graham Hill",
          "Lorenzo Bandini",
          "Maurice Trintignant",
          "Moises Solana",
        ],
      },
      {
        model: "Cooper T66",
        team: "Cooper",
        drivers: ["Bruce McLaren", "Tony Maggs", "Joakim Bonnier"],
      },
      {
        model: "Cooper T60",
        team: "Cooper",
        drivers: ["Joakim Bonnier", "Mario Araujo de Cabral"],
      },
      {
        model: "Lotus 24",
        team: "Lotus",
        drivers: [
          "Jim Hall",
          "Innes Ireland",
          "John Campbell-Jones",
          "Bernard Collomb",
          "Joseph Siffert",
          "Maurice Trintignant",
          "Phil Hill",
          "Masten Gregory",
          "Mike Hailwood",
          "Gunther Seiffert",
          "Walt Hansgen",
          "Rodger Ward",
          "Hap Sharp",
          "Chris Amon",
          "Paddy Driver",
        ],
      },
      {
        model: "Lola Mk 4A",
        team: "Lola",
        drivers: ["Chris Amon", "Maurice Trintignant", "Masten Gregory"],
      },
      {
        model: "Scirocco SP",
        team: "Scirocco",
        drivers: ["Ian Burgess", "Tony Settember"],
      },
      {
        model: "Ferrari 156/63",
        team: "Ferrari",
        drivers: [
          "Willy Mairesse",
          "John Surtees",
          "Ludovico Scarfiotti",
          "Lorenzo Bandini",
        ],
      },
      {
        model: "De Tomaso 801",
        team: "De Tomaso",
        drivers: ["Nasif Estefano"],
      },
      { model: "BRP Mk 1", team: "BRP", drivers: ["Innes Ireland"] },
      { model: "Brabham BT3", team: "Brabham", drivers: ["Jack Brabham"] },
      {
        model: "Lola Mk 4",
        team: "Lola",
        drivers: [
          "Lucien Bianchi",
          "Bob Anderson",
          "John Campbell-Jones",
          "Mike Hailwood",
        ],
      },
      {
        model: "Porsche 718",
        team: "Porsche",
        drivers: ["Carel Godin de Beaufort", "Gerhard Mitter", "Carlo Abate"],
      },
      { model: "BRM P61", team: "BRM", drivers: ["Graham Hill"] },
      { model: "Gilby 62", team: "Gilby", drivers: ["Ian Raby"] },
      {
        model: "Lotus 18",
        team: "Lotus",
        drivers: ["Kurt Kuhnke", "Gaetano Starrabba", "Thomas Monarch"],
      },
      {
        model: "Lotus 18/21",
        team: "Lotus",
        drivers: ["André Pilette", "Tim Parnell"],
      },
      {
        model: "Ferrari 156 Aero",
        team: "Ferrari",
        drivers: ["John Surtees", "Lorenzo Bandini"],
      },
      { model: "De Tomaso F1", team: "De Tomaso", drivers: ["Roberto Lippi"] },
      { model: "Cooper T53", team: "Cooper", drivers: ["Tino Brambilla"] },
      {
        model: "Stebro Mk IV",
        team: "Stebro",
        drivers: ["Ernie DeVos", "Peter Broeker"],
      },
      {
        model: "Cooper T51",
        team: "Cooper",
        drivers: ["Frank Dochnal", "Trevor Blokdyk"],
      },
      { model: "Lotus 21", team: "Lotus", drivers: ["Ernie Pieterse"] },
      {
        model: "LDS Mk 1",
        team: "LDS",
        drivers: ["Doug Serrurier", "Sam Tingle"],
      },
      { model: "Alfa Special", team: "Alfa", drivers: ["Peter de Klerk"] },
      { model: "Cooper T55", team: "Cooper", drivers: ["John Love"] },
      { model: "Lotus 22", team: "Lotus", drivers: ["Brausch Niemann"] },
      { model: "Brabham BT6", team: "Brabham", drivers: ["David Prophet"] },
    ],
  },
  {
    season: "1964",
    calendar: [
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'34''0",
            moyenne: "120,447 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "2h 41' 19''5s ",
            moyenne: "116.969 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "1'33''9",
            moyenne: "120,575 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Dan Gurney",
            car: "Brabham BT7",
            time: "1'31''2",
            moyenne: "165,513 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 07' 35''4s ",
            moyenne: "157.743 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'32''8",
            moyenne: "162,659 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Dan Gurney",
            car: "Brabham BT7",
            time: "3'50''9",
            moyenne: "219,835 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 06' 40''5s ",
            moyenne: "213.712 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Dan Gurney",
            car: "Brabham BT7",
            time: "3'49''2",
            moyenne: "221,466 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Rouen-les-Essarts",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2'09''6",
            moyenne: "181,722 km/h",
          },
        ],
        winner: [
          {
            driver: "Dan Gurney",
            car: "Brabham BT7",
            time: "2h 07' 49''1s ",
            moyenne: "175.042 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT7",
            time: "2'11''4",
            moyenne: "179,233 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'38''1",
            moyenne: "156,514 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 15' 07''0s ",
            moyenne: "151.514 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'38''8",
            moyenne: "155,405 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "John Surtees",
            car: "Ferrari 158",
            time: "8'38''4",
            moyenne: "158,403 km/h",
          },
        ],
        winner: [
          {
            driver: "John Surtees",
            car: "Ferrari 158",
            time: "2h 12' 04''8s ",
            moyenne: "155.429 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Surtees",
            car: "Ferrari 158",
            time: "8'39''0",
            moyenne: "158,220 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Zeltweg",
        pole: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "1'09''84",
            moyenne: "164,948 km/h",
          },
        ],
        winner: [
          {
            driver: "Lorenzo Bandini",
            car: "Ferrari 156 Aero",
            time: "2h 06' 18''23s ",
            moyenne: "159.615 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Dan Gurney",
            car: "Brabham BT7",
            time: "1'10''56",
            moyenne: "163,265 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "John Surtees",
            car: "Ferrari 158",
            time: "1'37''4",
            moyenne: "212,526 km/h",
          },
        ],
        winner: [
          {
            driver: "John Surtees",
            car: "Ferrari 158",
            time: "2h 10' 51''8s ",
            moyenne: "205.634 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Surtees",
            car: "Ferrari 158",
            time: "1'38''8",
            moyenne: "209,514 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'12''65",
            moyenne: "183,394 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "2h 16' 38''0s ",
            moyenne: "178.775 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "1'12''7",
            moyenne: "183,268 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "1'57''24",
            moyenne: "153,531 km/h",
          },
        ],
        winner: [
          {
            driver: "Dan Gurney",
            car: "Brabham BT7",
            time: "2h 09' 50''32s ",
            moyenne: "150.186 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "1'58''37",
            moyenne: "152,066 km/h",
          },
        ],
      },
    ],
    cars: [
      { model: "Scirocco SP", team: "Scirocco", drivers: ["André Pilette"] },
      {
        model: "Lotus 24",
        team: "Lotus",
        drivers: [
          "Peter Revson",
          "Bernard Collomb",
          "Innes Ireland",
          "Joseph Siffert",
          "Trevor Taylor",
          "Brian Gubby",
        ],
      },
      {
        model: "BRM P57",
        team: "BRM",
        drivers: ["Maurice Trintignant", "Giancarlo Baghetti", "Tony Maggs"],
      },
      {
        model: "Brabham BT7",
        team: "Brabham",
        drivers: ["Jack Brabham", "Dan Gurney", "Joakim Bonnier"],
      },
      {
        model: "BRM P261",
        team: "BRM",
        drivers: ["Richie Ginther", "Graham Hill"],
      },
      {
        model: "Cooper T73",
        team: "Cooper",
        drivers: ["Phil Hill", "Bruce McLaren", "John Taylor", "John Love"],
      },
      {
        model: "Cooper T66",
        team: "Cooper",
        drivers: [
          "Bruce McLaren",
          "Joakim Bonnier",
          "Edgar Barth",
          "Phil Hill",
        ],
      },
      {
        model: "Lotus 25",
        team: "Lotus",
        drivers: [
          "Peter Arundell",
          "Jim Clark",
          "Chris Amon",
          "Mike Hailwood",
          "Peter Revson",
          "Mike Spence",
          "Gerhard Mitter",
        ],
      },
      {
        model: "BRP Mk 1",
        team: "BRP",
        drivers: ["Trevor Taylor", "Innes Ireland"],
      },
      {
        model: "Brabham BT11",
        team: "Brabham",
        drivers: [
          "Bob Anderson",
          "Joakim Bonnier",
          "Joseph Siffert",
          "Jack Brabham",
          "Jochen Rindt",
          "Giacomo « Geki » Russo",
          "Hap Sharp",
        ],
      },
      {
        model: "Ferrari 156 Aero",
        team: "Ferrari",
        drivers: ["Lorenzo Bandini", "Ludovico Scarfiotti", "Pedro Rodriguez"],
      },
      {
        model: "Ferrari 158",
        team: "Ferrari",
        drivers: ["John Surtees", "Lorenzo Bandini"],
      },
      {
        model: "Porsche 718",
        team: "Porsche",
        drivers: ["Carel Godin de Beaufort"],
      },
      {
        model: "BRP Mk 2",
        team: "BRP",
        drivers: ["Trevor Taylor", "Innes Ireland"],
      },
      { model: "Honda RA271", team: "Honda", drivers: ["Ronnie Bucknum"] },
      { model: "BRM P67", team: "BRM", drivers: ["Dick Attwood"] },
      { model: "Brabham BT3", team: "Brabham", drivers: ["Ian Raby"] },
      {
        model: "Brabham BT10",
        team: "Brabham",
        drivers: ["Frank Gardner", "Jochen Rindt"],
      },
      {
        model: "Lotus 33",
        team: "Lotus",
        drivers: ["Jim Clark", "Mike Spence", "Walt Hansgen", "Moises Solana"],
      },
      {
        model: "A-T-S D-F",
        team: "A-T-S",
        drivers: ["Mario Araujo de Cabral"],
      },
      {
        model: "Cooper T60",
        team: "Cooper",
        drivers: ["John Taylor", "Jean-Claude Rudaz"],
      },
      { model: "Ferrari 1512", team: "Ferrari", drivers: ["Lorenzo Bandini"] },
      { model: "BRM P61", team: "BRM", drivers: ["A.J. Foyt"] },
    ],
  },
  {
    season: "1965",
    calendar: [
      {
        race: "Afrique du sud",
        track: "East London",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "1'27''2",
            moyenne: "161,835 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "2h 06' 46''0s ",
            moyenne: "157.707 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "1'27''6",
            moyenne: "161,096 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "1'32''5",
            moyenne: "122,400 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "2h 37' 39''6s ",
            moyenne: "119.688 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "1'31''7",
            moyenne: "123,468 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "3'45''4",
            moyenne: "225,200 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "2h 23' 34''8s ",
            moyenne: "188.550 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "4'12''9",
            moyenne: "200,712 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Clermont-Ferrand",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "3'18''3",
            moyenne: "146,233 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "2h 14' 38''4s ",
            moyenne: "143.583 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 25",
            time: "3'18''9",
            moyenne: "145,792 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "1'30''8",
            moyenne: "186,780 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "2h 05' 25''4s ",
            moyenne: "180.292 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "1'32''2",
            moyenne: "183,944 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "1'30''7",
            moyenne: "166,426 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "2h 03' 59''1s ",
            moyenne: "162.329 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "1'30''6",
            moyenne: "166,609 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "8'22''7",
            moyenne: "163,350 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "2h 07' 52''4s ",
            moyenne: "160.542 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "8'24''1",
            moyenne: "162,896 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "1'35''9",
            moyenne: "215,850 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "BRM P261",
            time: "2h 04' 52''8s ",
            moyenne: "209.962 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "1'36''4",
            moyenne: "214,730 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "1'11''25",
            moyenne: "186,998 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "2h 20' 36''1s ",
            moyenne: "173.729 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Graham Hill",
            car: "BRM P261",
            time: "1'11''9",
            moyenne: "185,307 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "1'56''17",
            moyenne: "154,945 km/h",
          },
        ],
        winner: [
          {
            driver: "Richie Ginther",
            car: "Honda RA272",
            time: "2h 08' 32''10s ",
            moyenne: "151.710 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Dan Gurney",
            car: "Brabham BT11",
            time: "1'55''84",
            moyenne: "155,387 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari 158",
        team: "Ferrari",
        drivers: [
          "John Surtees",
          "Lorenzo Bandini",
          "Nino Vaccarella",
          "Bob Bondurant",
        ],
      },
      {
        model: "Ferrari 1512",
        team: "Ferrari",
        drivers: [
          "Lorenzo Bandini",
          "John Surtees",
          "Ludovico Scarfiotti",
          "Pedro Rodriguez",
        ],
      },
      {
        model: "BRM P261",
        team: "BRM",
        drivers: ["Graham Hill", "Jackie Stewart"],
      },
      {
        model: "Lotus 33",
        team: "Lotus",
        drivers: ["Jim Clark", "Mike Spence", "Paul Hawkins", "Bob Bondurant"],
      },
      {
        model: "Brabham BT11",
        team: "Brabham",
        drivers: [
          "Jack Brabham",
          "Dan Gurney",
          "Joseph Siffert",
          "Bob Anderson",
          "Frank Gardner",
          "Denny Hulme",
          "Chris Amon",
        ],
      },
      {
        model: "Cooper T77",
        team: "Cooper",
        drivers: ["Bruce McLaren", "Jochen Rindt"],
      },
      {
        model: "Cooper T73",
        team: "Cooper",
        drivers: ["Jochen Rindt", "Alan Rollinson"],
      },
      {
        model: "Brabham BT7",
        team: "Brabham",
        drivers: ["Joakim Bonnier", "Denny Hulme", "Giancarlo Baghetti"],
      },
      {
        model: "Lotus 25",
        team: "Lotus",
        drivers: [
          "Tony Maggs",
          "Pedro Rodriguez",
          "Dick Attwood",
          "Mike Hailwood",
          "Innes Ireland",
          "Jim Clark",
          "Chris Amon",
          "Mike Spence",
          "Gerhard Mitter",
          "Giacomo « Geki » Russo",
          "Moises Solana",
        ],
      },
      {
        model: "Cooper T55",
        team: "Cooper",
        drivers: ["John Love", "Alex Blignaut"],
      },
      {
        model: "Brabham BT10",
        team: "Brabham",
        drivers: ["Paul Hawkins", "David Prophet"],
      },
      { model: "Alfa Special", team: "Alfa", drivers: ["Peter de Klerk"] },
      { model: "LDS Mk 2", team: "LDS", drivers: ["Doug Serrurier"] },
      {
        model: "Lotus 21",
        team: "Lotus",
        drivers: ["Ernie Pieterse", "Neville Lederle"],
      },
      { model: "Lotus 18/21", team: "Lotus", drivers: ["Clive Puzey"] },
      {
        model: "LDS Mk 1",
        team: "LDS",
        drivers: ["Sam Tingle", "Jackie Pretorius"],
      },
      { model: "Realpha RE 1", team: "Realpha", drivers: ["Ray Reed"] },
      { model: "Lotus 22", team: "Lotus", drivers: ["Brausch Niemann"] },
      { model: "Cooper T59", team: "Cooper", drivers: ["Trevor Blokdyk"] },
      {
        model: "Lotus 20",
        team: "Lotus",
        drivers: ["Brian Raubenheimer", "Dave Charlton"],
      },
      { model: "Cooper T51", team: "Cooper", drivers: ["David Clapham"] },
      { model: "BRM P61", team: "BRM", drivers: ["Dick Attwood"] },
      {
        model: "Honda RA272",
        team: "Honda",
        drivers: ["Ronnie Bucknum", "Richie Ginther"],
      },
      {
        model: "BRM P57",
        team: "BRM",
        drivers: [
          "Lucien Bianchi",
          "Willy Mairesse",
          "Masten Gregory",
          "Jo Schlesser",
          "Roberto Bussinello",
          "Giorgio Bassi",
        ],
      },
      { model: "Cooper T60", team: "Cooper", drivers: ["John Rhodes"] },
      {
        model: "Brabham BT3",
        team: "Brabham",
        drivers: ["Chris Amon", "Ian Raby"],
      },
      { model: "Lotus 24", team: "Lotus", drivers: ["Brian Gubby"] },
    ],
  },
  {
    season: "1966",
    calendar: [
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "1'29''9",
            moyenne: "125,940 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "BRM P261",
            time: "2h 33' 10''5s ",
            moyenne: "123.192 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lorenzo Bandini",
            car: "Ferrari 246",
            time: "1'29''8",
            moyenne: "126,080 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "John Surtees",
            car: "Ferrari 312",
            time: "3'38''0",
            moyenne: "232,844 km/h",
          },
        ],
        winner: [
          {
            driver: "John Surtees",
            car: "Ferrari 312",
            time: "2h 09' 11''3s ",
            moyenne: "183.360 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Surtees",
            car: "Ferrari 312",
            time: "4'18''7",
            moyenne: "196,212 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Reims-Gueux",
        pole: [
          {
            driver: "Lorenzo Bandini",
            car: "Ferrari 312",
            time: "2'07''8",
            moyenne: "233,859 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT19",
            time: "1h 48' 31''3s ",
            moyenne: "220.322 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lorenzo Bandini",
            car: "Ferrari 312",
            time: "2'11''3",
            moyenne: "227,625 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT19",
            time: "1'34''5",
            moyenne: "162,476 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT19",
            time: "2h 13' 13''4s ",
            moyenne: "153.667 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT19",
            time: "1'37''0",
            moyenne: "158,289 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT19",
            time: "1'28''1",
            moyenne: "171,337 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT19",
            time: "2h 20' 32''5s ",
            moyenne: "161.107 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Denny Hulme",
            car: "Brabham BT20",
            time: "1'30''6",
            moyenne: "166,609 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "8'16''5",
            moyenne: "165,390 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT19",
            time: "2h 27' 03''0s ",
            moyenne: "139.606 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Surtees",
            car: "Cooper T81",
            time: "8'49",
            moyenne: "155,229 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Mike Parkes",
            car: "Ferrari 312",
            time: "1'31''3",
            moyenne: "226,725 km/h",
          },
        ],
        winner: [
          {
            driver: "Ludovico Scarfiotti",
            car: "Ferrari 312",
            time: "1h 47' 14''8s ",
            moyenne: "218.748 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ludovico Scarfiotti",
            car: "Ferrari 312",
            time: "1'32''4",
            moyenne: "224,026 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT20",
            time: "1'08''42",
            moyenne: "194,733 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 43",
            time: "2h 09' 40''1s ",
            moyenne: "184.952 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Surtees",
            car: "Cooper T81",
            time: "1'09''67",
            moyenne: "191,239 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "John Surtees",
            car: "Cooper T81",
            time: "1'53''18",
            moyenne: "159,039 km/h",
          },
        ],
        winner: [
          {
            driver: "John Surtees",
            car: "Cooper T81",
            time: "2h 06' 35''34s ",
            moyenne: "154.042 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Richie Ginther",
            car: "Honda RA273",
            time: "1'53''75",
            moyenne: "158,242 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren M2B",
        team: "McLaren",
        drivers: ["Chris Amon", "Bruce McLaren"],
      },
      {
        model: "Lotus 43",
        team: "Lotus",
        drivers: ["Peter Arundell", "Jim Clark"],
      },
      {
        model: "Lotus 33",
        team: "Lotus",
        drivers: [
          "Jim Clark",
          "Pedro Rodriguez",
          "Peter Arundell",
          "Giacomo « Geki » Russo",
        ],
      },
      { model: "BRM P61", team: "BRM", drivers: ["Dick Attwood"] },
      {
        model: "Lotus 25",
        team: "Lotus",
        drivers: ["Mike Spence", "Paul Hawkins"],
      },
      { model: "Brabham BT19", team: "Brabham", drivers: ["Jack Brabham"] },
      {
        model: "Brabham BT22",
        team: "Brabham",
        drivers: ["Denny Hulme", "Joakim Bonnier", "Chris Irwin"],
      },
      {
        model: "Cooper T81",
        team: "Cooper",
        drivers: [
          "Richie Ginther",
          "Jochen Rindt",
          "Joakim Bonnier",
          "Guy Ligier",
          "Joseph Siffert",
          "Chris Amon",
          "John Surtees",
          "Moises Solana",
        ],
      },
      {
        model: "BRM P261",
        team: "BRM",
        drivers: [
          "Graham Hill",
          "Jackie Stewart",
          "Bob Bondurant",
          "Vic Wilson",
          "Paul Hawkins",
          "Innes Ireland",
        ],
      },
      {
        model: "Brabham BT11",
        team: "Brabham",
        drivers: [
          "Joseph Siffert",
          "Bob Anderson",
          "John Taylor",
          "Chris Amon",
        ],
      },
      {
        model: "Ferrari 246",
        team: "Ferrari",
        drivers: [
          "Lorenzo Bandini",
          "Ludovico Scarfiotti",
          "Giancarlo Baghetti",
        ],
      },
      {
        model: "Ferrari 312",
        team: "Ferrari",
        drivers: [
          "John Surtees",
          "Lorenzo Bandini",
          "Mike Parkes",
          "Ludovico Scarfiotti",
        ],
      },
      {
        model: "Eagle T1F",
        team: "Eagle",
        drivers: ["Dan Gurney", "Phil Hill", "Bob Bondurant"],
      },
      {
        model: "Brabham BT20",
        team: "Brabham",
        drivers: ["Denny Hulme", "Jack Brabham"],
      },
      { model: "Brabham BT7", team: "Brabham", drivers: ["Joakim Bonnier"] },
      { model: "Shannon SH 1", team: "Shannon", drivers: ["Trevor Taylor"] },
      { model: "Cooper T73", team: "Cooper", drivers: ["Chris Lawrence"] },
      {
        model: "Brabham BT18 (F2)",
        team: "Brabham",
        drivers: ["Kurt Ahrens", "Hans Herrmann", "Alan Rees"],
      },
      {
        model: "Matra MS5 (F2)",
        team: "Matra",
        drivers: [
          "Hubert Hahne",
          "Jacky Ickx",
          "Jo Schlesser",
          "Jean-Pierre Beltoise",
        ],
      },
      {
        model: "Lotus 44 (F2)",
        team: "Lotus",
        drivers: ["Gerhard Mitter", "Pedro Rodriguez", "Piers Courage"],
      },
      {
        model: "Brabham BT16 (F2)",
        team: "Brabham",
        drivers: ["Silvio Moser"],
      },
      {
        model: "Cooper T82 (F2)",
        team: "Cooper",
        drivers: ["Giancarlo Baghetti"],
      },
      { model: "Lola T62 (F2)", team: "Lola", drivers: ["Dick Attwood"] },
      { model: "BRP Mk 2", team: "BRP", drivers: ["Frank Gardner"] },
      {
        model: "Honda RA273",
        team: "Honda",
        drivers: ["Richie Ginther", "Ronnie Bucknum"],
      },
      {
        model: "BRM P83",
        team: "BRM",
        drivers: ["Graham Hill", "Jackie Stewart"],
      },
      {
        model: "Eagle T1G",
        team: "Eagle",
        drivers: ["Dan Gurney", "Bob Bondurant"],
      },
    ],
  },
  {
    season: "1967",
    calendar: [
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT20",
            time: "1'28''3",
            moyenne: "166,913 km/h",
          },
        ],
        winner: [
          {
            driver: "Pedro Rodriguez",
            car: "Cooper T81",
            time: "2h 05' 45''9s ",
            moyenne: "156.253 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Denny Hulme",
            car: "Brabham BT20",
            time: "1'29''9",
            moyenne: "163,942 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT19",
            time: "1'27''6",
            moyenne: "129,247 km/h",
          },
        ],
        winner: [
          {
            driver: "Denny Hulme",
            car: "Brabham BT20",
            time: "2h 34' 34''3s ",
            moyenne: "122.079 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 33",
            time: "1'29''5",
            moyenne: "126,503 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Graham Hill",
            car: "Lotus 49",
            time: "1'24''60",
            moyenne: "178,426 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "2h 14' 45''1s ",
            moyenne: "168.029 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1'28''08",
            moyenne: "171,376 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "3'28''1",
            moyenne: "243,921 km/h",
          },
        ],
        winner: [
          {
            driver: "Dan Gurney",
            car: "Eagle T1G",
            time: "1h 40' 49''4s ",
            moyenne: "234.946 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Dan Gurney",
            car: "Eagle T1G",
            time: "3'31''9",
            moyenne: "239,547 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Graham Hill",
            car: "Lotus 49",
            time: "1'36''2",
            moyenne: "165,480 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT24",
            time: "2h 13' 21''3s ",
            moyenne: "159.166 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Graham Hill",
            car: "Lotus 49",
            time: "1'36''7",
            moyenne: "164,625 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1'25''3",
            moyenne: "198,823 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1h 59' 25''6s ",
            moyenne: "189.345 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Denny Hulme",
            car: "Brabham BT24",
            time: "1'27''0",
            moyenne: "194,938 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "8'04''1",
            moyenne: "169,812 km/h",
          },
        ],
        winner: [
          {
            driver: "Denny Hulme",
            car: "Brabham BT24",
            time: "2h 05' 55''7s ",
            moyenne: "163.200 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Dan Gurney",
            car: "Eagle T1G",
            time: "8'15''1",
            moyenne: "166,039 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Mosport Park",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1'22''4",
            moyenne: "172,879 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT24",
            time: "2h 40' 40''0s ",
            moyenne: "132.995 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1'23''1",
            moyenne: "171,422 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1'28''50",
            moyenne: "233,898 km/h",
          },
        ],
        winner: [
          {
            driver: "John Surtees",
            car: "Honda RA300",
            time: "1h 43' 45''0s ",
            moyenne: "226.120 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1'28''5",
            moyenne: "233,898 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Graham Hill",
            car: "Lotus 49",
            time: "1'05''48",
            moyenne: "203,476 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "2h 03' 13''2s ",
            moyenne: "194.631 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Graham Hill",
            car: "Lotus 49",
            time: "1'06''00",
            moyenne: "201,873 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1'47''56",
            moyenne: "167,348 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1h 59' 28''70s ",
            moyenne: "163.210 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1'48''13",
            moyenne: "166,466 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Brabham BT20",
        team: "Brabham",
        drivers: ["Jack Brabham", "Denny Hulme", "Guy Ligier"],
      },
      {
        model: "Cooper T81",
        team: "Cooper",
        drivers: [
          "Jochen Rindt",
          "Pedro Rodriguez",
          "Joseph Siffert",
          "Joakim Bonnier",
          "Guy Ligier",
          "Alan Rees",
          "Andrea de Adamich",
        ],
      },
      {
        model: "BRM P83",
        team: "BRM",
        drivers: [
          "Jackie Stewart",
          "Mike Spence",
          "Piers Courage",
          "Chris Irwin",
        ],
      },
      {
        model: "Lotus 43",
        team: "Lotus",
        drivers: ["Jim Clark", "Graham Hill"],
      },
      {
        model: "Eagle T1F",
        team: "Eagle",
        drivers: ["Dan Gurney", "Al Pease"],
      },
      {
        model: "Eagle T1G",
        team: "Eagle",
        drivers: [
          "Richie Ginther",
          "Dan Gurney",
          "Bob Bondurant",
          "A.J. Foyt",
          "Bruce McLaren",
          "Ludovico Scarfiotti",
        ],
      },
      { model: "Honda RA273", team: "Honda", drivers: ["John Surtees"] },
      {
        model: "Brabham BT11",
        team: "Brabham",
        drivers: ["Bob Anderson", "Dave Charlton", "Luki Botha"],
      },
      {
        model: "Lotus 25",
        team: "Lotus",
        drivers: ["Piers Courage", "Chris Irwin"],
      },
      { model: "Cooper T79", team: "Cooper", drivers: ["John Love"] },
      { model: "LDS Mk 3", team: "LDS", drivers: ["Sam Tingle"] },
      {
        model: "Matra MS5",
        team: "Matra",
        drivers: ["Jean-Pierre Beltoise", "Johnny Servoz-Gavin"],
      },
      {
        model: "BRM P261",
        team: "BRM",
        drivers: [
          "Jackie Stewart",
          "Piers Courage",
          "Chris Irwin",
          "David Hobbs",
        ],
      },
      {
        model: "Brabham BT19",
        team: "Brabham",
        drivers: ["Jack Brabham", "Denny Hulme"],
      },
      {
        model: "Lotus 33",
        team: "Lotus",
        drivers: ["Jim Clark", "Graham Hill", "Mike Fisher"],
      },
      { model: "McLaren M4B", team: "McLaren", drivers: ["Bruce McLaren"] },
      {
        model: "Ferrari 312/67",
        team: "Ferrari",
        drivers: [
          "Lorenzo Bandini",
          "Ludovico Scarfiotti",
          "Chris Amon",
          "Jonathan Williams",
        ],
      },
      { model: "Ferrari 312", team: "Ferrari", drivers: ["Mike Parkes"] },
      {
        model: "Lotus 49",
        team: "Lotus",
        drivers: [
          "Jim Clark",
          "Graham Hill",
          "Eppie Wietzes",
          "Giancarlo Baghetti",
          "Moises Solana",
        ],
      },
      {
        model: "Cooper T81B",
        team: "Cooper",
        drivers: [
          "Jochen Rindt",
          "Dick Attwood",
          "Jacky Ickx",
          "Pedro Rodriguez",
        ],
      },
      {
        model: "Brabham BT24",
        team: "Brabham",
        drivers: ["Jack Brabham", "Denny Hulme"],
      },
      {
        model: "Matra MS7",
        team: "Matra",
        drivers: ["Jean-Pierre Beltoise", "Johnny Servoz-Gavin"],
      },
      {
        model: "Cooper T86",
        team: "Cooper",
        drivers: ["Jochen Rindt", "Jacky Ickx"],
      },
      { model: "Cooper T77", team: "Cooper", drivers: ["Silvio Moser"] },
      { model: "BRM P115", team: "BRM", drivers: ["Jackie Stewart"] },
      { model: "Lola T100", team: "Lola", drivers: ["Hubert Hahne"] },
      {
        model: "Brabham BT23 (F2)",
        team: "Brabham",
        drivers: ["Gerhard Mitter", "Alan Rees"],
      },
      { model: "Matra MS5 (F2)", team: "Matra", drivers: ["Jo Schlesser"] },
      { model: "Lotus 48 (F2)", team: "Lotus", drivers: ["Jackie Oliver"] },
      {
        model: "Protos F2",
        team: "Protos",
        drivers: ["Brian Hart", "Kurt Ahrens"],
      },
      {
        model: "Lola T100 (F2)",
        team: "Lola",
        drivers: ["David Hobbs", "Brian Redman"],
      },
      { model: "Matra MS7 (F2)", team: "Matra", drivers: ["Jacky Ickx"] },
      { model: "McLaren M5A", team: "McLaren", drivers: ["Bruce McLaren"] },
      { model: "Cooper T82", team: "Cooper", drivers: ["Tom Jones"] },
      { model: "Honda RA300", team: "Honda", drivers: ["John Surtees"] },
      { model: "McLaren M2B", team: "McLaren", drivers: ["Trevor Taylor"] },
    ],
  },
  {
    season: "1968",
    calendar: [
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1'21''6",
            moyenne: "181,059 km/h",
          },
        ],
        winner: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1h 53' 56''6s ",
            moyenne: "172.886 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jim Clark",
            car: "Lotus 49",
            time: "1'23''7",
            moyenne: "176,516 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jarama",
        pole: [
          {
            driver: "Chris Amon",
            car: "Ferrari 312/67",
            time: "1'27''9",
            moyenne: "139,413 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "Lotus 49",
            time: "2h 15' 20''1s ",
            moyenne: "135.823 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jean-Pierre Beltoise",
            car: "Matra MS10",
            time: "1'28''3",
            moyenne: "138,781 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Graham Hill",
            car: "Lotus 49B",
            time: "1'28''2",
            moyenne: "128,367 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "Lotus 49B",
            time: "2h 00' 32''3s ",
            moyenne: "125.238 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Dick Attwood",
            car: "BRM P126",
            time: "1'28''1",
            moyenne: "128,513 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Chris Amon",
            car: "Ferrari 312/67",
            time: "3'28''6",
            moyenne: "243,337 km/h",
          },
        ],
        winner: [
          {
            driver: "Bruce McLaren",
            car: "McLaren M7A",
            time: "1h 40' 02''1s ",
            moyenne: "236.797 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Surtees",
            car: "Honda RA301",
            time: "3'30''5",
            moyenne: "241,140 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Chris Amon",
            car: "Ferrari 312/68",
            time: "1'23''54",
            moyenne: "180,689 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS10",
            time: "2h 46' 11''26s ",
            moyenne: "136.245 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jean-Pierre Beltoise",
            car: "Matra MS11",
            time: "1'45''91",
            moyenne: "142,525 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Rouen-les-Essarts",
        pole: [
          {
            driver: "Jochen Rindt",
            car: "Brabham BT26",
            time: "1'56''1",
            moyenne: "202,853 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312/68",
            time: "2h 25' 40''9s ",
            moyenne: "161.662 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Pedro Rodriguez",
            car: "BRM P133",
            time: "2'11''5",
            moyenne: "179,097 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Graham Hill",
            car: "Lotus 49B",
            time: "1'28''9",
            moyenne: "172,711 km/h",
          },
        ],
        winner: [
          {
            driver: "Joseph Siffert",
            car: "Lotus 49B",
            time: "2h 01' 20''3s ",
            moyenne: "168.718 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Joseph Siffert",
            car: "Lotus 49B",
            time: "1'29''7",
            moyenne: "171,171 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312/68",
            time: "9'04''0",
            moyenne: "151,114 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS10",
            time: "2h 19' 03''2s ",
            moyenne: "137.943 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS10",
            time: "9'36",
            moyenne: "142,719 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "John Surtees",
            car: "Honda RA301",
            time: "1'26''07",
            moyenne: "240,502 km/h",
          },
        ],
        winner: [
          {
            driver: "Denny Hulme",
            car: "McLaren M7A",
            time: "1h 40' 14''8s ",
            moyenne: "234.023 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Oliver",
            car: "Lotus 49B",
            time: "1'26''5",
            moyenne: "239,306 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Monsanto",
        pole: [
          {
            driver: "Jochen Rindt",
            car: "Brabham BT26",
            time: "1'33''8",
            moyenne: "163,689 km/h",
          },
        ],
        winner: [
          {
            driver: "Denny Hulme",
            car: "McLaren M7A",
            time: "2h 27' 11''2s ",
            moyenne: "156.475 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Joseph Siffert",
            car: "Lotus 49B",
            time: "1'35''1",
            moyenne: "161,451 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 49B",
            time: "1'04''20",
            moyenne: "207,533 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS10",
            time: "1h 59' 20''29s ",
            moyenne: "200.962 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS10",
            time: "1'05''22",
            moyenne: "204,287 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Joseph Siffert",
            car: "Lotus 49B",
            time: "1'45''22",
            moyenne: "171,070 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "Lotus 49B",
            time: "1h 56' 43''95s ",
            moyenne: "167.049 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Joseph Siffert",
            car: "Lotus 49B",
            time: "1'44''23",
            moyenne: "172,695 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren M5A",
        team: "McLaren",
        drivers: ["Denny Hulme", "Joakim Bonnier"],
      },
      {
        model: "Brabham BT24",
        team: "Brabham",
        drivers: ["Jack Brabham", "Jochen Rindt", "Dan Gurney", "Kurt Ahrens"],
      },
      {
        model: "Lotus 49",
        team: "Lotus",
        drivers: [
          "Jim Clark",
          "Graham Hill",
          "Jackie Oliver",
          "Joseph Siffert",
        ],
      },
      { model: "Eagle T1G", team: "Eagle", drivers: ["Dan Gurney"] },
      {
        model: "Honda RA300",
        team: "Honda",
        drivers: ["John Surtees", "Chris Irwin"],
      },
      {
        model: "Ferrari 312/67",
        team: "Ferrari",
        drivers: [
          "Chris Amon",
          "Jacky Ickx",
          "Andrea de Adamich",
          "Derek Bell",
        ],
      },
      {
        model: "BRM P126",
        team: "BRM",
        drivers: [
          "Pedro Rodriguez",
          "Piers Courage",
          "Mike Spence",
          "Chris Irwin",
          "Dick Attwood",
          "Tony Lanfranchi",
          "Bobby Unser",
        ],
      },
      { model: "BRM P115", team: "BRM", drivers: ["Mike Spence"] },
      { model: "Cooper T81B", team: "Cooper", drivers: ["Brian Redman"] },
      {
        model: "Cooper T86",
        team: "Cooper",
        drivers: ["Ludovico Scarfiotti", "Tom Jones"],
      },
      { model: "Matra MS9", team: "Matra", drivers: ["Jackie Stewart"] },
      {
        model: "Brabham BT20",
        team: "Brabham",
        drivers: ["John Love", "Silvio Moser"],
      },
      { model: "LDS Mk 3", team: "LDS", drivers: ["Sam Tingle"] },
      {
        model: "Cooper T81",
        team: "Cooper",
        drivers: ["Joseph Siffert", "Joakim Bonnier"],
      },
      { model: "Matra MS7", team: "Matra", drivers: ["Jean-Pierre Beltoise"] },
      {
        model: "Brabham BT11",
        team: "Brabham",
        drivers: ["Dave Charlton", "Jackie Pretorius"],
      },
      { model: "Cooper T55", team: "Cooper", drivers: ["Tony Jefferies"] },
      { model: "Cooper T79", team: "Cooper", drivers: ["Basil van Rooyen"] },
      {
        model: "McLaren M7A",
        team: "McLaren",
        drivers: ["Denny Hulme", "Bruce McLaren", "Dan Gurney"],
      },
      {
        model: "Brabham BT26",
        team: "Brabham",
        drivers: ["Jack Brabham", "Jochen Rindt"],
      },
      {
        model: "Matra MS10",
        team: "Matra",
        drivers: [
          "Jean-Pierre Beltoise",
          "Johnny Servoz-Gavin",
          "Jackie Stewart",
        ],
      },
      {
        model: "Honda RA301",
        team: "Honda",
        drivers: ["John Surtees", "David Hobbs", "Joakim Bonnier"],
      },
      { model: "BRM P133", team: "BRM", drivers: ["Pedro Rodriguez"] },
      {
        model: "Cooper T86B",
        team: "Cooper",
        drivers: [
          "Brian Redman",
          "Ludovico Scarfiotti",
          "Lucien Bianchi",
          "Vic Elford",
          "Johnny Servoz-Gavin",
          "Robin Widdows",
        ],
      },
      {
        model: "BRM P261",
        team: "BRM",
        drivers: ["David Hobbs", "Frank Gardner"],
      },
      {
        model: "Ferrari 312/68",
        team: "Ferrari",
        drivers: ["Jacky Ickx", "Chris Amon", "Derek Bell"],
      },
      { model: "Lola T100", team: "Lola", drivers: ["Jorge de Bagration"] },
      {
        model: "Matra MS11",
        team: "Matra",
        drivers: ["Jean-Pierre Beltoise", "Henri Pescarolo"],
      },
      {
        model: "Lotus 49B",
        team: "Lotus",
        drivers: [
          "Graham Hill",
          "Jackie Oliver",
          "Joseph Siffert",
          "Mario Andretti",
          "Bill Brack",
          "Moises Solana",
        ],
      },
      { model: "McLaren M2B", team: "McLaren", drivers: ["Keith St John"] },
      { model: "Honda RA302", team: "Honda", drivers: ["Jo Schlesser"] },
      { model: "Cooper T86C", team: "Cooper", drivers: ["Lucien Bianchi"] },
      { model: "Lola T102", team: "Lola", drivers: ["Hubert Hahne"] },
      {
        model: "BRM P138",
        team: "BRM",
        drivers: ["Pedro Rodriguez", "Bobby Unser"],
      },
      { model: "Eagle T1F", team: "Eagle", drivers: ["Al Pease"] },
    ],
  },
  {
    season: "1969",
    calendar: [
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT26A",
            time: "1'20''0",
            moyenne: "184,680 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS10",
            time: "1h 50' 39''1s ",
            moyenne: "178.029 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS10",
            time: "1'21''6",
            moyenne: "181,059 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Montjuïc Park",
        pole: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 49B",
            time: "1'25''7",
            moyenne: "159,249 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS80",
            time: "2h 16' 53''99s ",
            moyenne: "149.536 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 49B",
            time: "1'28''3",
            moyenne: "154,559 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS80",
            time: "1'24''6",
            moyenne: "133,830 km/h",
          },
        ],
        winner: [
          {
            driver: "Graham Hill",
            car: "Lotus 49B",
            time: "1h 56' 59''4s ",
            moyenne: "129.037 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS80",
            time: "1'25''1",
            moyenne: "133,043 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 49B",
            time: "1'20''85",
            moyenne: "186,701 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS80",
            time: "2h 06' 42''08s ",
            moyenne: "178.705 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS80",
            time: "1'22''94",
            moyenne: "181,997 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Clermont-Ferrand",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS80",
            time: "3'00''6",
            moyenne: "160,565 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS80",
            time: "1h 56' 47''4s ",
            moyenne: "157.251 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS80",
            time: "3'02''7",
            moyenne: "158,719 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 49B",
            time: "1'20''8",
            moyenne: "209,896 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS80",
            time: "1h 55' 55''6s ",
            moyenne: "204.814 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS80",
            time: "1'21''3",
            moyenne: "208,605 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Brabham BT26A",
            time: "7'42''1",
            moyenne: "177,897 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacky Ickx",
            car: "Brabham BT26A",
            time: "1h 49' 55''4s ",
            moyenne: "174.498 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Brabham BT26A",
            time: "7'43''8",
            moyenne: "177,245 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 49B",
            time: "1'25''48",
            moyenne: "242,162 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Matra MS80",
            time: "1h 39' 11''26s ",
            moyenne: "236.521 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jean-Pierre Beltoise",
            car: "Matra MS80",
            time: "1'25''2",
            moyenne: "242,958 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Mosport Park",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Brabham BT26A",
            time: "1'17''4",
            moyenne: "184,047 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacky Ickx",
            car: "Brabham BT26A",
            time: "1h 59' 25''7s ",
            moyenne: "178.917 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Brabham BT26A",
            time: "1'18''1",
            moyenne: "182,397 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 49B",
            time: "1'03''62",
            moyenne: "209,425 km/h",
          },
        ],
        winner: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 49B",
            time: "1h 57' 56''84s ",
            moyenne: "203.332 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 49B",
            time: "1'04''34",
            moyenne: "207,081 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT26A",
            time: "1'42''90",
            moyenne: "174,927 km/h",
          },
        ],
        winner: [
          {
            driver: "Denny Hulme",
            car: "McLaren M7A",
            time: "1h 54' 08''80s ",
            moyenne: "170.833 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Brabham BT26A",
            time: "1'43''05",
            moyenne: "174,672 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Lotus 49B",
        team: "Lotus",
        drivers: [
          "Graham Hill",
          "Jochen Rindt",
          "Mario Andretti",
          "Joseph Siffert",
          "Joakim Bonnier",
          "Pete Lovely",
        ],
      },
      {
        model: "McLaren M7A",
        team: "McLaren",
        drivers: [
          "Denny Hulme",
          "Bruce McLaren",
          "Basil van Rooyen",
          "Vic Elford",
        ],
      },
      {
        model: "Matra MS10",
        team: "Matra",
        drivers: ["Jackie Stewart", "Jean-Pierre Beltoise"],
      },
      {
        model: "Ferrari 312/69",
        team: "Ferrari",
        drivers: ["Chris Amon", "Pedro Rodriguez", "Tino Brambilla"],
      },
      {
        model: "BRM P138",
        team: "BRM",
        drivers: [
          "John Surtees",
          "Jackie Oliver",
          "Bill Brack",
          "George Eaton",
        ],
      },
      { model: "BRM P133", team: "BRM", drivers: ["Jackie Oliver"] },
      { model: "BRM P126", team: "BRM", drivers: ["Pedro Rodriguez"] },
      {
        model: "Brabham BT26A",
        team: "Brabham",
        drivers: ["Jack Brabham", "Jacky Ickx", "Piers Courage"],
      },
      {
        model: "Lotus 49",
        team: "Lotus",
        drivers: ["John Love", "Dick Attwood"],
      },
      {
        model: "Brabham BT24",
        team: "Brabham",
        drivers: ["Sam Tingle", "Silvio Moser"],
      },
      { model: "Brabham BT20", team: "Brabham", drivers: ["Peter de Klerk"] },
      {
        model: "Matra MS80",
        team: "Matra",
        drivers: ["Jackie Stewart", "Jean-Pierre Beltoise"],
      },
      { model: "McLaren M7C", team: "McLaren", drivers: ["Bruce McLaren"] },
      {
        model: "Cooper T86B",
        team: "Cooper",
        drivers: ["Vic Elford", "Tony Lanfranchi"],
      },
      {
        model: "Lotus 63",
        team: "Lotus",
        drivers: ["John Miles", "Joakim Bonnier", "Mario Andretti"],
      },
      {
        model: "Matra MS84",
        team: "Matra",
        drivers: ["Jean-Pierre Beltoise", "Johnny Servoz-Gavin"],
      },
      { model: "Brabham BT26", team: "Brabham", drivers: ["Dan Gurney"] },
      {
        model: "Ferrari 312/68",
        team: "Ferrari",
        drivers: ["Pedro Rodriguez"],
      },
      {
        model: "BRM P139",
        team: "BRM",
        drivers: ["John Surtees", "Jackie Oliver"],
      },
      { model: "Cosworth 1", team: "Cosworth", drivers: ["Trevor Taylor"] },
      { model: "McLaren M9A", team: "McLaren", drivers: ["Derek Bell"] },
      {
        model: "Brabham BT30 (F2)",
        team: "Brabham",
        drivers: ["Kurt Ahrens", "Dick Attwood", "Peter Westbury"],
      },
      {
        model: "Lotus 59B (F2)",
        team: "Lotus",
        drivers: ["Hans Herrmann", "Rolf Stommelen"],
      },
      {
        model: "BMW 269 (F2)",
        team: "BMW",
        drivers: ["Hubert Hahne", "Gerhard Mitter", "Dieter Quester"],
      },
      {
        model: "Matra MS7 (F2)",
        team: "Matra",
        drivers: ["Henri Pescarolo", "Johnny Servoz-Gavin"],
      },
      { model: "Tecno TF69 (F2)", team: "Tecno", drivers: ["François Cevert"] },
      {
        model: "Brabham BT23C (F2)",
        team: "Brabham",
        drivers: ["Xavier Perrot"],
      },
      { model: "Ferrari 312B", team: "Ferrari", drivers: ["Chris Amon"] },
      { model: "Brabham BT23B", team: "Brabham", drivers: ["John Cordts"] },
      { model: "Eagle T1F", team: "Eagle", drivers: ["Al Pease"] },
    ],
  },
  {
    season: "1970",
    calendar: [
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "March 701",
            time: "1'19''3",
            moyenne: "186,310 km/h",
          },
        ],
        winner: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT33",
            time: "1h 49' 34''6s ",
            moyenne: "179.775 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Surtees",
            car: "McLaren M7C",
            time: "1'20''8",
            moyenne: "182,851 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jarama",
        pole: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT33",
            time: "1'23''90",
            moyenne: "146,060 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "March 701",
            time: "2h 10' 58''2s ",
            moyenne: "140.350 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT33",
            time: "1'24''3",
            moyenne: "145,367 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "March 701",
            time: "1'24''0",
            moyenne: "134,786 km/h",
          },
        ],
        winner: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 49C",
            time: "1h 54' 36''6s ",
            moyenne: "131.716 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 49C",
            time: "1'23''2",
            moyenne: "136,082 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "March 701",
            time: "3'28''0",
            moyenne: "244,038 km/h",
          },
        ],
        winner: [
          {
            driver: "Pedro Rodriguez",
            car: "BRM P153",
            time: "1h 38' 09''9s ",
            moyenne: "241.308 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Chris Amon",
            car: "March 701",
            time: "3'27''4",
            moyenne: "244,744 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 72C",
            time: "1'18''30",
            moyenne: "192,782 km/h",
          },
        ],
        winner: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 72C",
            time: "1h 50' 43''41s ",
            moyenne: "181.772 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "1'19''23",
            moyenne: "190,519 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Clermont-Ferrand",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "2'58''22",
            moyenne: "162,709 km/h",
          },
        ],
        winner: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 72C",
            time: "1h 55' 57''00s ",
            moyenne: "158.391 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT33",
            time: "3'00''75",
            moyenne: "160,432 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 72C",
            time: "1'24''8",
            moyenne: "181,061 km/h",
          },
        ],
        winner: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 72C",
            time: "1h 57' 02''0s ",
            moyenne: "174.925 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jack Brabham",
            car: "Brabham BT33",
            time: "1'25''9",
            moyenne: "178,743 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "1'59''5",
            moyenne: "204,522 km/h",
          },
        ],
        winner: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 72C",
            time: "1h 42' 00''3s ",
            moyenne: "199.667 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "2'00''5",
            moyenne: "202,825 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Jochen Rindt",
            car: "Lotus 72C",
            time: "1'39''23",
            moyenne: "214,447 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "1h 42' 17''32s ",
            moyenne: "208.035 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312B",
            time: "1'40''40",
            moyenne: "211,948 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "1'24''14",
            moyenne: "246,019 km/h",
          },
        ],
        winner: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312B",
            time: "1h 39' 06''88s ",
            moyenne: "236.696 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312B",
            time: "1'25''2",
            moyenne: "242,958 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Monsanto",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 001",
            time: "1'31''5",
            moyenne: "167,803 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "2h 21' 18''4s ",
            moyenne: "162.986 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312B",
            time: "1'32''2",
            moyenne: "166,529 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "1'03''07",
            moyenne: "211,251 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72C",
            time: "1h 57' 32''97s ",
            moyenne: "204.020 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "1'02''74",
            moyenne: "212,362 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312B",
            time: "1'41''86",
            moyenne: "176,713 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "1h 53' 28''36s ",
            moyenne: "171.848 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "1'43''11",
            moyenne: "174,571 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "March 701",
        team: "March",
        drivers: [
          "Jackie Stewart",
          "Johnny Servoz-Gavin",
          "Mario Andretti",
          "Chris Amon",
          "Joseph Siffert",
          "Ronnie Peterson",
          "François Cevert",
          "Hubert Hahne",
        ],
      },
      {
        model: "Matra MS120",
        team: "Matra",
        drivers: ["Jean-Pierre Beltoise", "Henri Pescarolo"],
      },
      {
        model: "McLaren M14A",
        team: "McLaren",
        drivers: ["Bruce McLaren", "Denny Hulme", "Peter Gethin", "Dan Gurney"],
      },
      {
        model: "McLaren M7C",
        team: "McLaren",
        drivers: ["John Surtees", "Joakim Bonnier"],
      },
      {
        model: "Lotus 49C",
        team: "Lotus",
        drivers: [
          "Jochen Rindt",
          "John Miles",
          "Graham Hill",
          "Dave Charlton",
          "Alex Soler-Roig",
          "Emerson Fittipaldi",
        ],
      },
      {
        model: "Brabham BT33",
        team: "Brabham",
        drivers: ["Jack Brabham", "Rolf Stommelen", "Tim Schenken"],
      },
      {
        model: "Ferrari 312B",
        team: "Ferrari",
        drivers: ["Jacky Ickx", "Ignazio Giunti", "Clay Regazzoni"],
      },
      {
        model: "BRM P153",
        team: "BRM",
        drivers: [
          "Jackie Oliver",
          "Pedro Rodriguez",
          "George Eaton",
          "Peter Westbury",
        ],
      },
      {
        model: "BRM P139",
        team: "BRM",
        drivers: ["George Eaton", "Werner Bickel"],
      },
      {
        model: "De Tomaso 505",
        team: "De Tomaso",
        drivers: ["Piers Courage", "Brian Redman", "Tim Schenken"],
      },
      { model: "Lotus 49", team: "Lotus", drivers: ["John Love"] },
      {
        model: "Brabham BT26A",
        team: "Brabham",
        drivers: ["Peter de Klerk", "Derek Bell", "Gus Hutchison"],
      },
      {
        model: "Lotus 72A",
        team: "Lotus",
        drivers: [
          "Jochen Rindt",
          "John Miles",
          "Alex Soler-Roig",
          "Graham Hill",
        ],
      },
      {
        model: "McLaren M7D",
        team: "McLaren",
        drivers: ["Andrea de Adamich", "Nanni Galli"],
      },
      { model: "Lotus 49B", team: "Lotus", drivers: ["Pete Lovely"] },
      { model: "Bellasi F1 70", team: "Bellasi", drivers: ["Silvio Moser"] },
      { model: "Lotus 72B", team: "Lotus", drivers: ["John Miles"] },
      {
        model: "Lotus 72C",
        team: "Lotus",
        drivers: [
          "Jochen Rindt",
          "John Miles",
          "Emerson Fittipaldi",
          "Graham Hill",
          "Reine Wisell",
        ],
      },
      {
        model: "McLaren M14D",
        team: "McLaren",
        drivers: ["Andrea de Adamich", "Denny Hulme"],
      },
      {
        model: "McLaren M7A",
        team: "McLaren",
        drivers: ["Peter Gethin", "Trevor Taylor"],
      },
      {
        model: "Surtees TS7",
        team: "Surtees",
        drivers: ["John Surtees", "Derek Bell"],
      },
      { model: "Tyrrell 001", team: "Tyrrell", drivers: ["Jackie Stewart"] },
    ],
  },
  {
    season: "1971",
    calendar: [
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 001",
            time: "1'17''8",
            moyenne: "189,902 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Ferrari 312B",
            time: "1h 47' 35''5s ",
            moyenne: "180.804 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mario Andretti",
            car: "Ferrari 312B",
            time: "1'20''3",
            moyenne: "183,990 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Montjuïc Park",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "1'25''9",
            moyenne: "158,878 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1h 49' 03''4s ",
            moyenne: "156.428 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "1'25''1",
            moyenne: "160,371 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1'23''2",
            moyenne: "136,082 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1h 52' 21''3s ",
            moyenne: "134.360 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1'22''2",
            moyenne: "137,737 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B2",
            time: "1'17''42",
            moyenne: "194,973 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B2",
            time: "1h 56' 20''09s ",
            moyenne: "151.379 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B2",
            time: "1'34''95",
            moyenne: "158,976 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1'50''71",
            moyenne: "188,926 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1h 46' 41''68s ",
            moyenne: "179.700 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1'54''09",
            moyenne: "183,329 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312B2",
            time: "1'18''10",
            moyenne: "217,152 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1h 31' 31''5s ",
            moyenne: "210.007 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1'19''9",
            moyenne: "212,260 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "7'19''00",
            moyenne: "187,257 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1h 29' 15''7s ",
            moyenne: "184.191 km/h",
          },
        ],
        bestLap: [
          {
            driver: "François Cevert",
            car: "Tyrrell 002",
            time: "7'20''1",
            moyenne: "186,789 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Joseph Siffert",
            car: "BRM P160",
            time: "1'37''44",
            moyenne: "218,387 km/h",
          },
        ],
        winner: [
          {
            driver: "Joseph Siffert",
            car: "BRM P160",
            time: "1h 30' 23''91s ",
            moyenne: "211.858 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Joseph Siffert",
            car: "BRM P160",
            time: "1'38''47",
            moyenne: "216,102 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Chris Amon",
            car: "Matra MS120B",
            time: "1'22''40",
            moyenne: "251,214 km/h",
          },
        ],
        winner: [
          {
            driver: "Peter Gethin",
            car: "BRM P160",
            time: "1h 18' 12''60s ",
            moyenne: "242.616 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Henri Pescarolo",
            car: "March 711",
            time: "1'23''8",
            moyenne: "247,017 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Mosport Park",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1'15''3",
            moyenne: "189,179 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1h 55' 12''9s ",
            moyenne: "131.883 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Denny Hulme",
            car: "McLaren M19A",
            time: "1'43''5",
            moyenne: "137,635 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1'42''642",
            moyenne: "190,624 km/h",
          },
        ],
        winner: [
          {
            driver: "François Cevert",
            car: "Tyrrell 002",
            time: "1h 43' 51''991s ",
            moyenne: "185.237 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B",
            time: "1'43''474",
            moyenne: "189,091 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Lotus 72C",
        team: "Lotus",
        drivers: ["Emerson Fittipaldi", "Reine Wisell"],
      },
      {
        model: "Ferrari 312B",
        team: "Ferrari",
        drivers: ["Jacky Ickx", "Clay Regazzoni", "Mario Andretti"],
      },
      {
        model: "March 711",
        team: "March",
        drivers: [
          "Ronnie Peterson",
          "Andrea de Adamich",
          "Alex Soler-Roig",
          "Henri Pescarolo",
          "Nanni Galli",
          "Skip Barber",
          "Mike Beuttler",
          "Niki Lauda",
        ],
      },
      {
        model: "Tyrrell 001",
        team: "Tyrrell",
        drivers: ["Jackie Stewart", "Peter Revson"],
      },
      { model: "Tyrrell 002", team: "Tyrrell", drivers: ["François Cevert"] },
      {
        model: "McLaren M19A",
        team: "McLaren",
        drivers: ["Denny Hulme", "Peter Gethin", "Mark Donohue", "David Hobbs"],
      },
      {
        model: "McLaren M14A",
        team: "McLaren",
        drivers: ["Peter Gethin", "Jackie Oliver"],
      },
      {
        model: "Brabham BT33",
        team: "Brabham",
        drivers: [
          "Graham Hill",
          "Dave Charlton",
          "Tim Schenken",
          "Chris Craft",
        ],
      },
      {
        model: "BRM P160",
        team: "BRM",
        drivers: [
          "Pedro Rodriguez",
          "Joseph Siffert",
          "Vic Elford",
          "Howden Ganley",
          "Peter Gethin",
          "George Eaton",
          "Helmut Marko",
        ],
      },
      {
        model: "BRM P153",
        team: "BRM",
        drivers: [
          "Joseph Siffert",
          "Howden Ganley",
          "Helmut Marko",
          "John Cannon",
        ],
      },
      {
        model: "Matra MS120B",
        team: "Matra",
        drivers: ["Jean-Pierre Beltoise", "Chris Amon"],
      },
      {
        model: "Surtees TS9",
        team: "Surtees",
        drivers: [
          "John Surtees",
          "Rolf Stommelen",
          "Gérard Larrousse",
          "Derek Bell",
          "Mike Hailwood",
          "Sam Posey",
          "Gijs van Lennep",
        ],
      },
      {
        model: "Surtees TS7",
        team: "Surtees",
        drivers: [
          "Rolf Stommelen",
          "Brian Redman",
          "Gijs van Lennep",
          "Dieter Quester",
        ],
      },
      {
        model: "March 701",
        team: "March",
        drivers: [
          "Henri Pescarolo",
          "John Love",
          "Mike Beuttler",
          "Derek Bell",
          "Jean-Pierre Jarier",
          "Max Jean",
          "François Mazet",
          "Carlos Pace",
        ],
      },
      {
        model: "McLaren M7C",
        team: "McLaren",
        drivers: ["Joakim Bonnier", "Helmut Marko"],
      },
      {
        model: "Brabham BT26A",
        team: "Brabham",
        drivers: ["Jackie Pretorius"],
      },
      { model: "Brabham BT34", team: "Brabham", drivers: ["Graham Hill"] },
      { model: "Tyrrell 003", team: "Tyrrell", drivers: ["Jackie Stewart"] },
      {
        model: "Lotus 72D",
        team: "Lotus",
        drivers: ["Emerson Fittipaldi", "Dave Charlton", "Reine Wisell"],
      },
      {
        model: "Ferrari 312B2",
        team: "Ferrari",
        drivers: ["Jacky Ickx", "Clay Regazzoni", "Mario Andretti"],
      },
      {
        model: "Lotus 56B",
        team: "Lotus",
        drivers: ["Dave Walker", "Reine Wisell", "Emerson Fittipaldi"],
      },
      { model: "Lotus 72A", team: "Lotus", drivers: ["Herbert Muller"] },
      { model: "Bellasi F1 70", team: "Bellasi", drivers: ["Silvio Moser"] },
      { model: "Lotus 69", team: "Lotus", drivers: ["Pete Lovely"] },
    ],
  },
  {
    season: "1972",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Carlos Reutemann",
            car: "Brabham BT34",
            time: "1'12''46",
            moyenne: "166,188 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1h 57' 58''82s ",
            moyenne: "161.607 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1'13''66",
            moyenne: "163,481 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1'17''0",
            moyenne: "191,875 km/h",
          },
        ],
        winner: [
          {
            driver: "Denny Hulme",
            car: "McLaren M19A",
            time: "1h 45' 49''1s ",
            moyenne: "183.834 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mike Hailwood",
            car: "Surtees TS9B",
            time: "1'18''9",
            moyenne: "187,255 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jarama",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B2",
            time: "1'18''43",
            moyenne: "156,246 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "2h 03' 41''23s ",
            moyenne: "148.614 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B2",
            time: "1'21''01",
            moyenne: "151,270 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "1'21''4",
            moyenne: "139,091 km/h",
          },
        ],
        winner: [
          {
            driver: "Jean-Pierre Beltoise",
            car: "BRM P160B",
            time: "2h 26' 54''7s ",
            moyenne: "102.756 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jean-Pierre Beltoise",
            car: "BRM P160B",
            time: "1'40''0",
            moyenne: "113,220 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Nivelles",
        pole: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "1'11''43",
            moyenne: "187,686 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "1h 44' 06''7s ",
            moyenne: "182.423 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Chris Amon",
            car: "Matra MS120C",
            time: "1'12''12",
            moyenne: "185,890 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Clermont-Ferrand",
        pole: [
          {
            driver: "Chris Amon",
            car: "Matra MS120D",
            time: "2'53''4",
            moyenne: "167,232 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1h 52' 21''5s ",
            moyenne: "163.454 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Chris Amon",
            car: "Matra MS120D",
            time: "2'53''9",
            moyenne: "166,751 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B2",
            time: "1'22''2",
            moyenne: "186,788 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "1h 47' 50''2s ",
            moyenne: "180.351 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 003",
            time: "1'24''0",
            moyenne: "182,786 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B2",
            time: "7'07''0",
            moyenne: "192,520 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B2",
            time: "1h 42' 12''3s ",
            moyenne: "187.676 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B2",
            time: "7'13''6",
            moyenne: "189,589 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "1'35''97",
            moyenne: "221,732 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "1h 29' 16''66s ",
            moyenne: "214.518 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Denny Hulme",
            car: "McLaren M19C",
            time: "1'38''32",
            moyenne: "216,432 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B2",
            time: "1'35''65",
            moyenne: "217,355 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "1h 29' 58''4s ",
            moyenne: "211.813 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacky Ickx",
            car: "Ferrari 312B2",
            time: "1'36''3",
            moyenne: "215,888 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Mosport Park",
        pole: [
          {
            driver: "Peter Revson",
            car: "McLaren M19C",
            time: "1'13''6",
            moyenne: "193,549 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 005",
            time: "1h 43' 16''9s ",
            moyenne: "183.901 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 005",
            time: "1'15''7",
            moyenne: "188,180 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 005",
            time: "1'40''481",
            moyenne: "194,723 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 005",
            time: "1h 41' 45''354s ",
            moyenne: "189.079 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 005",
            time: "1'41''644",
            moyenne: "192,495 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Brabham BT33",
        team: "Brabham",
        drivers: ["Graham Hill", "Willie Ferguson", "Wilson Fittipaldi"],
      },
      {
        model: "Brabham BT34",
        team: "Brabham",
        drivers: ["Carlos Reutemann", "Wilson Fittipaldi"],
      },
      {
        model: "BRM P160B",
        team: "BRM",
        drivers: [
          "Howden Ganley",
          "Peter Gethin",
          "Alex Soler-Roig",
          "Jean-Pierre Beltoise",
          "Reine Wisell",
          "Helmut Marko",
          "Jackie Oliver",
        ],
      },
      {
        model: "BRM P153",
        team: "BRM",
        drivers: ["Reine Wisell", "Helmut Marko"],
      },
      {
        model: "Ferrari 312B2",
        team: "Ferrari",
        drivers: [
          "Jacky Ickx",
          "Clay Regazzoni",
          "Mario Andretti",
          "Nanni Galli",
          "Arturo Merzario",
        ],
      },
      {
        model: "Lotus 72D",
        team: "Lotus",
        drivers: [
          "Emerson Fittipaldi",
          "Dave Walker",
          "Dave Charlton",
          "Tony Trimmer",
          "Reine Wisell",
        ],
      },
      {
        model: "March 721",
        team: "March",
        drivers: ["Ronnie Peterson", "Niki Lauda", "Henri Pescarolo"],
      },
      { model: "Matra MS120C", team: "Matra", drivers: ["Chris Amon"] },
      {
        model: "McLaren M19A",
        team: "McLaren",
        drivers: [
          "Denny Hulme",
          "Peter Revson",
          "Brian Redman",
          "Jody Scheckter",
        ],
      },
      {
        model: "Surtees TS9B",
        team: "Surtees",
        drivers: [
          "Tim Schenken",
          "Andrea de Adamich",
          "Mike Hailwood",
          "Sam Posey",
        ],
      },
      { model: "Tyrrell 003", team: "Tyrrell", drivers: ["Jackie Stewart"] },
      { model: "Tyrrell 002", team: "Tyrrell", drivers: ["François Cevert"] },
      {
        model: "March 711",
        team: "March",
        drivers: ["Carlos Pace", "Ray Allen", "Skip Barber"],
      },
      {
        model: "Eifelland March E21",
        team: "Eifelland March",
        drivers: ["Rolf Stommelen"],
      },
      {
        model: "Surtees TS9",
        team: "Surtees",
        drivers: ["John Love", "John Surtees"],
      },
      {
        model: "March 721X",
        team: "March",
        drivers: ["Ronnie Peterson", "Niki Lauda"],
      },
      {
        model: "BRM P180",
        team: "BRM",
        drivers: [
          "Peter Gethin",
          "Howden Ganley",
          "Jean-Pierre Beltoise",
          "Bill Brack",
          "Brian Redman",
        ],
      },
      {
        model: "Brabham BT37",
        team: "Brabham",
        drivers: ["Graham Hill", "Carlos Reutemann"],
      },
      {
        model: "March 721G",
        team: "March",
        drivers: ["Mike Beuttler", "Ronnie Peterson", "Niki Lauda"],
      },
      {
        model: "Tecno PA123/3",
        team: "Tecno",
        drivers: ["Nanni Galli", "Derek Bell"],
      },
      {
        model: "Tyrrell 004",
        team: "Tyrrell",
        drivers: ["Jackie Stewart", "Patrick Depailler"],
      },
      {
        model: "McLaren M19C",
        team: "McLaren",
        drivers: ["Denny Hulme", "Peter Revson"],
      },
      {
        model: "BRM P153B",
        team: "BRM",
        drivers: ["Helmut Marko", "Vern Schuppan"],
      },
      { model: "Matra MS120D", team: "Matra", drivers: ["Chris Amon"] },
      {
        model: "BRM P160C",
        team: "BRM",
        drivers: [
          "Jean-Pierre Beltoise",
          "Howden Ganley",
          "Reine Wisell",
          "Peter Gethin",
        ],
      },
      {
        model: "Politoys FX3",
        team: "Politoys",
        drivers: ["Henri Pescarolo", "Giancarlo Gagliardi"],
      },
      { model: "Connew PC1", team: "Connew", drivers: ["François Migault"] },
      { model: "Tyrrell 005", team: "Tyrrell", drivers: ["Jackie Stewart"] },
      {
        model: "Surtees TS14",
        team: "Surtees",
        drivers: ["John Surtees", "Tim Schenken"],
      },
      { model: "Tecno PA123/4", team: "Tecno", drivers: ["Nanni Galli"] },
      { model: "Tyrrell 006", team: "Tyrrell", drivers: ["François Cevert"] },
    ],
  },
  {
    season: "1973",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Clay Regazzoni",
            car: "BRM P160D",
            time: "1'10''54",
            moyenne: "170,712 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "1h 56' 18''22s ",
            moyenne: "165.663 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "1'11''22",
            moyenne: "169,082 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72D",
            time: "2'30''5",
            moyenne: "190,405 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "1h 43' 55''6s ",
            moyenne: "183.822 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "2'35",
            moyenne: "184,877 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Denny Hulme",
            car: "McLaren M23",
            time: "1'16''28",
            moyenne: "193,686 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 006",
            time: "1h 43' 11''07s ",
            moyenne: "188.526 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72D",
            time: "1'17''10",
            moyenne: "191,626 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Montjuïc Park",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'21''8",
            moyenne: "166,841 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72E",
            time: "1h 48' 18''7s ",
            moyenne: "157.504 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'23''8",
            moyenne: "162,859 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Zolder",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'22''46",
            moyenne: "184,235 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 006",
            time: "1h 42' 13''43s ",
            moyenne: "173.384 km/h",
          },
        ],
        bestLap: [
          {
            driver: "François Cevert",
            car: "Tyrrell 006",
            time: "1'25''42",
            moyenne: "177,851 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 006",
            time: "1'27''5",
            moyenne: "134,866 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 006",
            time: "1h 57' 44''3s ",
            moyenne: "130.298 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72E",
            time: "1'28''1",
            moyenne: "133,948 km/h",
          },
        ],
      },
      {
        race: "Suède",
        track: "Anderstorp",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'23''810",
            moyenne: "172,590 km/h",
          },
        ],
        winner: [
          {
            driver: "Denny Hulme",
            car: "McLaren M23",
            time: "1h 56' 46''049s ",
            moyenne: "165.169 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Denny Hulme",
            car: "McLaren M23",
            time: "1'26''146",
            moyenne: "167,910 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 006",
            time: "1'48''37",
            moyenne: "193,005 km/h",
          },
        ],
        winner: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1h 41' 36''52s ",
            moyenne: "185.264 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Denny Hulme",
            car: "McLaren M23",
            time: "1'50''99",
            moyenne: "188,449 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'16''3",
            moyenne: "222,275 km/h",
          },
        ],
        winner: [
          {
            driver: "Peter Revson",
            car: "McLaren M23",
            time: "1h 29' 18''5s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "James Hunt",
            car: "March 731",
            time: "1'18''6",
            moyenne: "215,771 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'19''47",
            moyenne: "191,438 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 006",
            time: "1h 39' 12''45s ",
            moyenne: "184.022 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'20''31",
            moyenne: "189,436 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 006",
            time: "7'07''8",
            moyenne: "192,160 km/h",
          },
        ],
        winner: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 006",
            time: "1h 42' 03''0s ",
            moyenne: "187.961 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Pace",
            car: "Surtees TS14A",
            time: "7'11''4",
            moyenne: "190,556 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72E",
            time: "1'34''98",
            moyenne: "224,043 km/h",
          },
        ],
        winner: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1h 28' 48''78s ",
            moyenne: "215.640 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Pace",
            car: "Surtees TS14A",
            time: "1'37''29",
            moyenne: "218,723 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'34''80",
            moyenne: "219,304 km/h",
          },
        ],
        winner: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1h 29' 17''0s ",
            moyenne: "213.450 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jackie Stewart",
            car: "Tyrrell 006",
            time: "1'35''3",
            moyenne: "218,153 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Mosport Park",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'13''697",
            moyenne: "193,294 km/h",
          },
        ],
        winner: [
          {
            driver: "Peter Revson",
            car: "McLaren M23",
            time: "1h 59' 04''083s ",
            moyenne: "159.519 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Emerson Fittipaldi",
            car: "Lotus 72E",
            time: "1'15''496",
            moyenne: "188,688 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'39''657",
            moyenne: "196,333 km/h",
          },
        ],
        winner: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1h 41' 15''799s ",
            moyenne: "189.999 km/h",
          },
        ],
        bestLap: [
          {
            driver: "James Hunt",
            car: "March 731",
            time: "1'41''652",
            moyenne: "192,480 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Lotus 72D",
        team: "Lotus",
        drivers: ["Emerson Fittipaldi", "Ronnie Peterson", "Dave Charlton"],
      },
      {
        model: "Tyrrell 005",
        team: "Tyrrell",
        drivers: ["Jackie Stewart", "François Cevert", "Chris Amon"],
      },
      {
        model: "Tyrrell 006",
        team: "Tyrrell",
        drivers: ["François Cevert", "Jackie Stewart"],
      },
      {
        model: "Brabham BT37",
        team: "Brabham",
        drivers: [
          "Carlos Reutemann",
          "Wilson Fittipaldi",
          "Andrea de Adamich",
          "John Watson",
        ],
      },
      {
        model: "McLaren M19C",
        team: "McLaren",
        drivers: ["Denny Hulme", "Peter Revson", "Jody Scheckter"],
      },
      {
        model: "Ferrari 312B2",
        team: "Ferrari",
        drivers: ["Jacky Ickx", "Arturo Merzario"],
      },
      {
        model: "March 721G",
        team: "March",
        drivers: ["Mike Beuttler", "Jean-Pierre Jarier"],
      },
      {
        model: "Surtees TS14A",
        team: "Surtees",
        drivers: [
          "Mike Hailwood",
          "Carlos Pace",
          "John Surtees",
          "Jochen Mass",
        ],
      },
      {
        model: "BRM P160D",
        team: "BRM",
        drivers: ["Jean-Pierre Beltoise", "Clay Regazzoni", "Niki Lauda"],
      },
      { model: "BRM P160C", team: "BRM", drivers: ["Niki Lauda"] },
      {
        model: "Iso-Marlboro FX3B",
        team: "Iso-Marlboro",
        drivers: ["Nanni Galli", "Howden Ganley", "Jackie Pretorius"],
      },
      {
        model: "Shadow DN1",
        team: "Shadow",
        drivers: [
          "Jackie Oliver",
          "George Follmer",
          "Graham Hill",
          "Brian Redman",
        ],
      },
      {
        model: "Surtees TS9B",
        team: "Surtees",
        drivers: ["Luiz Bueno", "Andrea de Adamich"],
      },
      {
        model: "McLaren M23",
        team: "McLaren",
        drivers: [
          "Denny Hulme",
          "Peter Revson",
          "Jody Scheckter",
          "Jacky Ickx",
        ],
      },
      { model: "Tyrrell 004", team: "Tyrrell", drivers: ["Eddie Keizan"] },
      {
        model: "Lotus 72E",
        team: "Lotus",
        drivers: ["Emerson Fittipaldi", "Ronnie Peterson"],
      },
      {
        model: "Ferrari 312B3",
        team: "Ferrari",
        drivers: ["Jacky Ickx", "Arturo Merzario"],
      },
      {
        model: "March 731",
        team: "March",
        drivers: [
          "Henri Pescarolo",
          "Mike Beuttler",
          "Jean-Pierre Jarier",
          "David Purley",
          "James Hunt",
          "Reine Wisell",
          "Roger Williamson",
        ],
      },
      {
        model: "BRM P160E",
        team: "BRM",
        drivers: [
          "Clay Regazzoni",
          "Jean-Pierre Beltoise",
          "Niki Lauda",
          "Peter Gethin",
        ],
      },
      {
        model: "Brabham BT42",
        team: "Brabham",
        drivers: [
          "Wilson Fittipaldi",
          "Carlos Reutemann",
          "Andrea de Adamich",
          "Rolf Stommelen",
          "John Watson",
        ],
      },
      { model: "Ensign N173", team: "Ensign", drivers: ["Rikky von Opel"] },
      {
        model: "Iso-Marlboro IR",
        team: "Iso-Marlboro",
        drivers: [
          "Howden Ganley",
          "Nanni Galli",
          "Tom Belsø",
          "Henri Pescarolo",
          "Graham McRae",
          "Gijs van Lennep",
          "Tim Schenken",
          "Jacky Ickx",
        ],
      },
      { model: "Tecno PA123/6", team: "Tecno", drivers: ["Chris Amon"] },
    ],
  },
  {
    season: "1974",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'50''78",
            moyenne: "193,941 km/h",
          },
        ],
        winner: [
          {
            driver: "Denny Hulme",
            car: "McLaren M23",
            time: "1h 41' 02''01s ",
            moyenne: "187.841 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312B3-74",
            time: "1'52''10",
            moyenne: "191,657 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Emerson Fittipaldi",
            car: "McLaren M23",
            time: "2'32''97",
            moyenne: "187,331 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "McLaren M23",
            time: "1h 24' 37''06s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312B3-74",
            time: "2'36''05",
            moyenne: "183,633 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "1'16''58",
            moyenne: "192,928 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Brabham BT44",
            time: "1h 42' 40''96s ",
            moyenne: "187.049 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Reutemann",
            car: "Brabham BT44",
            time: "1'18''16",
            moyenne: "189,028 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jarama",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "1'18''44",
            moyenne: "156,226 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "2h 00' 29''56s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "1'20''83",
            moyenne: "151,607 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Nivelles",
        pole: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312B3-74",
            time: "1'09''82",
            moyenne: "192,014 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "McLaren M23",
            time: "1h 44' 20''57s ",
            moyenne: "182.019 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Denny Hulme",
            car: "McLaren M23",
            time: "1'11''31",
            moyenne: "188,002 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "1'26''3",
            moyenne: "136,742 km/h",
          },
        ],
        winner: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1h 58' 03''7s ",
            moyenne: "129.941 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'27''9",
            moyenne: "134,253 km/h",
          },
        ],
      },
      {
        race: "Suède",
        track: "Anderstorp",
        pole: [
          {
            driver: "Patrick Depailler",
            car: "Tyrrell 007",
            time: "1'24''758",
            moyenne: "170,660 km/h",
          },
        ],
        winner: [
          {
            driver: "Jody Scheckter",
            car: "Tyrrell 007",
            time: "1h 58' 31''391s ",
            moyenne: "162.723 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Patrick Depailler",
            car: "Tyrrell 007",
            time: "1'27''262",
            moyenne: "165,763 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "1'18''31",
            moyenne: "194,274 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "1h 43' 00''35s ",
            moyenne: "184.621 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1'21''44",
            moyenne: "186,807 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Dijon-Prenois",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "0'58''79",
            moyenne: "201,402 km/h",
          },
        ],
        winner: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1h 21' 55''02s ",
            moyenne: "192.722 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jody Scheckter",
            car: "Tyrrell 007",
            time: "1'00''00",
            moyenne: "197,340 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "1'19''7",
            moyenne: "192,647 km/h",
          },
        ],
        winner: [
          {
            driver: "Jody Scheckter",
            car: "Tyrrell 007",
            time: "1h 43' 02''2s ",
            moyenne: "e des stands",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "1'21''1",
            moyenne: "189,322 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "7'00''80",
            moyenne: "195,356 km/h",
          },
        ],
        winner: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312B3-74",
            time: "1h 41' 35''0s ",
            moyenne: "188.824 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jody Scheckter",
            car: "Tyrrell 007",
            time: "7'11''1",
            moyenne: "190,689 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "1'35''40",
            moyenne: "223,057 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Brabham BT44",
            time: "1h 28' 44''72s ",
            moyenne: "215.804 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312B3-74",
            time: "1'37''22",
            moyenne: "218,881 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "1'33''160",
            moyenne: "223,358 km/h",
          },
        ],
        winner: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 72E",
            time: "1h 22' 56''6s ",
            moyenne: "217.421 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Pace",
            car: "Brabham BT44",
            time: "1'34''2",
            moyenne: "220,892 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Mosport Park",
        pole: [
          {
            driver: "Emerson Fittipaldi",
            car: "McLaren M23",
            time: "1'13''188",
            moyenne: "194,638 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "McLaren M23",
            time: "1h 40' 26''136s ",
            moyenne: "189.112 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312B3-74",
            time: "1'13''659",
            moyenne: "193,394 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Carlos Reutemann",
            car: "Brabham BT44",
            time: "1'38''978",
            moyenne: "197,680 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Brabham BT44",
            time: "1h 40' 21''439s ",
            moyenne: "191.714 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Pace",
            car: "Brabham BT44",
            time: "1'40''608",
            moyenne: "194,478 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Lotus 72E",
        team: "Lotus",
        drivers: [
          "Ronnie Peterson",
          "Jacky Ickx",
          "Ian Scheckter",
          "Paddy Driver",
        ],
      },
      {
        model: "Tyrrell 006",
        team: "Tyrrell",
        drivers: ["Jody Scheckter", "Patrick Depailler"],
      },
      { model: "Tyrrell 005", team: "Tyrrell", drivers: ["Patrick Depailler"] },
      {
        model: "McLaren M23",
        team: "McLaren",
        drivers: [
          "Emerson Fittipaldi",
          "Denny Hulme",
          "Mike Hailwood",
          "Dave Charlton",
          "David Hobbs",
          "Jochen Mass",
        ],
      },
      {
        model: "Brabham BT44",
        team: "Brabham",
        drivers: [
          "Carlos Reutemann",
          "Richard Robarts",
          "Rikky von Opel",
          "Carlos Pace",
          "John Watson",
        ],
      },
      {
        model: "March 741",
        team: "March",
        drivers: [
          "Hans-Joachim Stuck",
          "Howden Ganley",
          "Vittorio Brambilla",
          "Reine Wisell",
        ],
      },
      {
        model: "Ferrari 312B3-74",
        team: "Ferrari",
        drivers: ["Clay Regazzoni", "Niki Lauda"],
      },
      {
        model: "BRM P160E",
        team: "BRM",
        drivers: [
          "Jean-Pierre Beltoise",
          "Henri Pescarolo",
          "François Migault",
        ],
      },
      {
        model: "Shadow DN3",
        team: "Shadow",
        drivers: [
          "Peter Revson",
          "Jean-Pierre Jarier",
          "Brian Redman",
          "Bertil Roos",
          "Tom Pryce",
        ],
      },
      { model: "Shadow DN1", team: "Shadow", drivers: ["Jean-Pierre Jarier"] },
      {
        model: "Surtees TS16",
        team: "Surtees",
        drivers: [
          "Carlos Pace",
          "Jochen Mass",
          "Jorge de Bagration",
          "Leo Kinnunen",
          "José Dolhem",
          "Derek Bell",
          "Jean-Pierre Jabouille",
          "Dieter Quester",
          "Helmuth Koinigg",
        ],
      },
      {
        model: "Iso-Marlboro FW",
        team: "Iso-Marlboro",
        drivers: [
          "Arturo Merzario",
          "Tom Belsø",
          "Gijs van Lennep",
          "Richard Robarts",
          "Jean-Pierre Jabouille",
          "Jacques Laffite",
        ],
      },
      {
        model: "Ensign N174",
        team: "Ensign",
        drivers: ["Rikky von Opel", "Vern Schuppan", "Mike Wilds"],
      },
      {
        model: "March 731",
        team: "March",
        drivers: ["James Hunt", "Mike Wilds"],
      },
      {
        model: "Lola T370",
        team: "Lola",
        drivers: [
          "Graham Hill",
          "Guy Edwards",
          "Peter Gethin",
          "Rolf Stommelen",
        ],
      },
      {
        model: "Brabham BT42",
        team: "Brabham",
        drivers: [
          "John Watson",
          "Silvio Moser",
          "Teddy Pilette",
          "Gérard Larrousse",
          "Carlos Pace",
          "Andy Sutcliffe",
          "Lella Lombardi",
          "Manfred Mohr",
          "Helmuth Koinigg",
          "Carlo Facetti",
          "Jean-Louis Lafosse",
          "Ian Ashley",
          "Eppie Wietzes",
        ],
      },
      {
        model: "Lotus 76",
        team: "Lotus",
        drivers: ["Ronnie Peterson", "Jacky Ickx", "Tim Schenken"],
      },
      {
        model: "BRM P201",
        team: "BRM",
        drivers: [
          "Jean-Pierre Beltoise",
          "Henri Pescarolo",
          "François Migault",
          "Chris Amon",
        ],
      },
      {
        model: "Hesketh 308",
        team: "Hesketh",
        drivers: ["James Hunt", "Ian Scheckter"],
      },
      { model: "Lotus 72A", team: "Lotus", drivers: ["John McNicol"] },
      { model: "Tyrrell 004", team: "Tyrrell", drivers: ["Eddie Keizan"] },
      {
        model: "Tyrrell 007",
        team: "Tyrrell",
        drivers: ["Jody Scheckter", "Patrick Depailler"],
      },
      { model: "Trojan T103", team: "Trojan", drivers: ["Tim Schenken"] },
      {
        model: "Amon AF101",
        team: "Amon",
        drivers: ["Chris Amon", "Larry Perkins"],
      },
      { model: "Lyncar 006", team: "Lyncar", drivers: ["John Nicholson"] },
      {
        model: "Token RJ02",
        team: "Token",
        drivers: ["Tom Pryce", "Jacques Laffite", "David Purley", "Ian Ashley"],
      },
      { model: "Maki F101", team: "Maki", drivers: ["Howden Ganley"] },
      { model: "Parnelli VPJ4", team: "Parnelli", drivers: ["Mario Andretti"] },
      { model: "Penske PC1", team: "Penske", drivers: ["Mark Donohue"] },
    ],
  },
  {
    season: "1975",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Jean-Pierre Jarier",
            car: "Shadow DN5",
            time: "1'49''21",
            moyenne: "196,729 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "McLaren M23",
            time: "1h 39' 26''29s ",
            moyenne: "190.855 km/h",
          },
        ],
        bestLap: [
          {
            driver: "James Hunt",
            car: "Hesketh 308",
            time: "1'50''91",
            moyenne: "193,714 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Jean-Pierre Jarier",
            car: "Shadow DN5",
            time: "2'29''88",
            moyenne: "191,193 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Pace",
            car: "Brabham BT44B",
            time: "1h 44' 41''17s ",
            moyenne: "182.488 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jean-Pierre Jarier",
            car: "Shadow DN5",
            time: "2'34''16",
            moyenne: "185,885 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Carlos Pace",
            car: "Brabham BT44B",
            time: "1'16''41",
            moyenne: "193,357 km/h",
          },
        ],
        winner: [
          {
            driver: "Jody Scheckter",
            car: "Tyrrell 007",
            time: "1h 43' 16''90s ",
            moyenne: "185.964 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Pace",
            car: "Brabham BT44B",
            time: "1'17''20",
            moyenne: "191,378 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Montjuïc Park",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1'23''4",
            moyenne: "163,640 km/h",
          },
        ],
        winner: [
          {
            driver: "Jochen Mass",
            car: "McLaren M23",
            time: "42'53''7 ",
            moyenne: "st attribuée",
          },
        ],
        bestLap: [
          {
            driver: "Mario Andretti",
            car: "Parnelli VPJ4",
            time: "1'25''1",
            moyenne: "160,371 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1'26''40",
            moyenne: "136,583 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "2h 01' 21''31s ",
            moyenne: " de 2 heures",
          },
        ],
        bestLap: [
          {
            driver: "Patrick Depailler",
            car: "Tyrrell 007",
            time: "1'28''67",
            moyenne: "133,087 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Zolder",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1'25''43",
            moyenne: "179,600 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1h 43' 53''98s ",
            moyenne: "172.285 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312T",
            time: "1'26''76",
            moyenne: "176,846 km/h",
          },
        ],
      },
      {
        race: "Suède",
        track: "Anderstorp",
        pole: [
          {
            driver: "Vittorio Brambilla",
            car: "March 751",
            time: "1'24''630",
            moyenne: "170,918 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1h 59' 18''319s ",
            moyenne: "161.656 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1'28''267",
            moyenne: "163,876 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1'20''29",
            moyenne: "189,483 km/h",
          },
        ],
        winner: [
          {
            driver: "James Hunt",
            car: "Hesketh 308",
            time: "1h 46' 57''40s ",
            moyenne: "177.801 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1'21''54",
            moyenne: "186,578 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1'47''82",
            moyenne: "193,990 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1h 40' 18''84s ",
            moyenne: "187.655 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jochen Mass",
            car: "McLaren M23",
            time: "1'50''60",
            moyenne: "189,114 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Tom Pryce",
            car: "Shadow DN5",
            time: "1'19''36",
            moyenne: "214,068 km/h",
          },
        ],
        winner: [
          {
            driver: "Emerson Fittipaldi",
            car: "McLaren M23",
            time: "1h 22' 05s ",
            moyenne: "193.168 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312T",
            time: "1'20''9",
            moyenne: "209,993 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "6'58''6",
            moyenne: "196,383 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Brabham BT44B",
            time: "1h 41' 14''1s ",
            moyenne: "189.474 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312T",
            time: "7'06''4",
            moyenne: "192,791 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1'34''85",
            moyenne: "224,350 km/h",
          },
        ],
        winner: [
          {
            driver: "Vittorio Brambilla",
            car: "March 751",
            time: "57'56''69 ",
            moyenne: "st attribuée",
          },
        ],
        bestLap: [
          {
            driver: "Vittorio Brambilla",
            car: "March 751",
            time: "1'53''9",
            moyenne: "186,827 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1'32''24",
            moyenne: "225,585 km/h",
          },
        ],
        winner: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312T",
            time: "1h 22' 42''6s ",
            moyenne: "218.034 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312T",
            time: "1'33''1",
            moyenne: "223,502 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1'42''003",
            moyenne: "191,818 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1h 42' 58''175s ",
            moyenne: "186.850 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Emerson Fittipaldi",
            car: "McLaren M23",
            time: "1'43''374",
            moyenne: "189,274 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren M23",
        team: "McLaren",
        drivers: ["Emerson Fittipaldi", "Jochen Mass", "Dave Charlton"],
      },
      {
        model: "Tyrrell 007",
        team: "Tyrrell",
        drivers: [
          "Jody Scheckter",
          "Patrick Depailler",
          "Ian Scheckter",
          "Jean-Pierre Jabouille",
          "Michel Leclère",
        ],
      },
      {
        model: "Lotus 72E",
        team: "Lotus",
        drivers: [
          "Ronnie Peterson",
          "Jacky Ickx",
          "Guy Tunmer",
          "Jim Crawford",
        ],
      },
      {
        model: "Brabham BT44B",
        team: "Brabham",
        drivers: ["Carlos Reutemann", "Carlos Pace"],
      },
      {
        model: "March 741",
        team: "March",
        drivers: ["Vittorio Brambilla", "Lella Lombardi"],
      },
      {
        model: "Ferrari 312B3-74",
        team: "Ferrari",
        drivers: ["Clay Regazzoni", "Niki Lauda"],
      },
      { model: "BRM P201", team: "BRM", drivers: ["Mike Wilds", "Bob Evans"] },
      { model: "Shadow DN3B", team: "Shadow", drivers: ["Tom Pryce"] },
      {
        model: "Shadow DN5",
        team: "Shadow",
        drivers: ["Jean-Pierre Jarier", "Tom Pryce"],
      },
      {
        model: "Surtees TS16",
        team: "Surtees",
        drivers: [
          "John Watson",
          "Henri Pescarolo",
          "Dave Morgan",
          "Ewald Boisitz",
        ],
      },
      {
        model: "Williams FW",
        team: "Williams",
        drivers: [
          "Arturo Merzario",
          "Jacques Laffite",
          "Tony Brise",
          "Damien Magee",
          "Ian Scheckter",
          "François Migault",
          "Ian Ashley",
          "Jo Vonlanthen",
          "Renzo Zorzi",
        ],
      },
      {
        model: "Lola T370",
        team: "Lola",
        drivers: ["Graham Hill", "Rolf Stommelen", "François Migault"],
      },
      {
        model: "Hesketh 308",
        team: "Hesketh",
        drivers: [
          "James Hunt",
          "Alan Jones",
          "Torsten Palm",
          "Harald Ertl",
          "Brett Lunger",
        ],
      },
      { model: "Parnelli VPJ4", team: "Parnelli", drivers: ["Mario Andretti"] },
      {
        model: "Penske PC1",
        team: "Penske",
        drivers: ["Mark Donohue", "John Watson"],
      },
      { model: "Berta 1", team: "Berta", drivers: ["Nestor Garcia-Veiga"] },
      {
        model: "Copersucar FD01",
        team: "Copersucar",
        drivers: ["Wilson Fittipaldi"],
      },
      {
        model: "Copersucar FD02",
        team: "Copersucar",
        drivers: ["Wilson Fittipaldi"],
      },
      {
        model: "March 751",
        team: "March",
        drivers: [
          "Vittorio Brambilla",
          "Lella Lombardi",
          "Hans-Joachim Stuck",
          "Mark Donohue",
        ],
      },
      {
        model: "Ferrari 312T",
        team: "Ferrari",
        drivers: ["Clay Regazzoni", "Niki Lauda"],
      },
      { model: "Lola T371", team: "Lola", drivers: ["Rolf Stommelen"] },
      { model: "Lotus 72A", team: "Lotus", drivers: ["Eddie Keizan"] },
      {
        model: "Williams FW04",
        team: "Williams",
        drivers: [
          "Arturo Merzario",
          "Jacques Laffite",
          "Ian Scheckter",
          "Lella Lombardi",
        ],
      },
      {
        model: "Hill GH1",
        team: "Hill",
        drivers: [
          "Rolf Stommelen",
          "François Migault",
          "Graham Hill",
          "Tony Brise",
          "Vern Schuppan",
          "Alan Jones",
        ],
      },
      {
        model: "Ensign N174",
        team: "Ensign",
        drivers: ["Roelof Wunderink", "Gijs van Lennep"],
      },
      {
        model: "Maki FC101C",
        team: "Maki",
        drivers: ["Dave Walker", "Hiroshi Fushida", "Tony Trimmer"],
      },
      {
        model: "Copersucar FD03",
        team: "Copersucar",
        drivers: ["Wilson Fittipaldi", "Arturo Merzario"],
      },
      {
        model: "Ensign N175",
        team: "Ensign",
        drivers: ["Gijs van Lennep", "Roelof Wunderink", "Chris Amon"],
      },
      {
        model: "Lotus 72F",
        team: "Lotus",
        drivers: ["Brian Henton", "John Watson", "Jim Crawford"],
      },
      { model: "Lyncar 006", team: "Lyncar", drivers: ["John Nicholson"] },
      { model: "Shadow DN7", team: "Shadow", drivers: ["Jean-Pierre Jarier"] },
      { model: "Hesketh 308C", team: "Hesketh", drivers: ["James Hunt"] },
    ],
  },
  {
    season: "1976",
    calendar: [
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "2'32''50",
            moyenne: "187,908 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1h 45' 16''78s ",
            moyenne: "181.460 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jean-Pierre Jarier",
            car: "Shadow DN5B",
            time: "2'35''07",
            moyenne: "184,794 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1'16''10",
            moyenne: "194,145 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1h 42' 18''4s ",
            moyenne: "187.737 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T",
            time: "1'17''97",
            moyenne: "189,488 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Ouest",
        track: "Long Beach",
        pole: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312T",
            time: "1'23''099",
            moyenne: "140,839 km/h",
          },
        ],
        winner: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312T",
            time: "1h 53' 18''471s ",
            moyenne: "137.720 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312T",
            time: "1'23''076",
            moyenne: "140,878 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jarama",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1'18''52",
            moyenne: "156,067 km/h",
          },
        ],
        winner: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1h 42' 20''43s ",
            moyenne: "le 5 juillet",
          },
        ],
        bestLap: [
          {
            driver: "Jochen Mass",
            car: "McLaren M23",
            time: "1'20''93",
            moyenne: "151,420 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Zolder",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1'26''55",
            moyenne: "177,276 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1h 42' 53''23s ",
            moyenne: "173.981 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1'25''98",
            moyenne: "178,451 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1'29''65",
            moyenne: "132,997 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1h 59' 51''47s ",
            moyenne: "129.321 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312T2",
            time: "1'30''28",
            moyenne: "132,069 km/h",
          },
        ],
      },
      {
        race: "Suède",
        track: "Anderstorp",
        pole: [
          {
            driver: "Jody Scheckter",
            car: "Tyrrell P34",
            time: "1'25''659",
            moyenne: "168,865 km/h",
          },
        ],
        winner: [
          {
            driver: "Jody Scheckter",
            car: "Tyrrell P34",
            time: "1h 46' 53''729s ",
            moyenne: "162.381 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mario Andretti",
            car: "Lotus 77",
            time: "1'28''002",
            moyenne: "164,369 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1'47''89",
            moyenne: "193,864 km/h",
          },
        ],
        winner: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1h 40' 58''60s ",
            moyenne: "24 septembre",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1'51''0",
            moyenne: "188,432 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1'19''35",
            moyenne: "190,866 km/h",
          },
        ],
        winner: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "à -22 Tour : 1h 43m 27.61s",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1'19''91",
            moyenne: "189,528 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "7'06''5",
            moyenne: "192,746 km/h",
          },
        ],
        winner: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1h 41' 42''7s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Jody Scheckter",
            car: "Tyrrell P34",
            time: "7'10''8",
            moyenne: "190,822 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1'35''02",
            moyenne: "223,911 km/h",
          },
        ],
        winner: [
          {
            driver: "John Watson",
            car: "Penske PC4",
            time: "1h 30' 07''86s ",
            moyenne: "212.451 km/h",
          },
        ],
        bestLap: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1'35''91",
            moyenne: "221,833 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "March 761",
            time: "1'21''31",
            moyenne: "187,106 km/h",
          },
        ],
        winner: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1h 44' 52''09s ",
            moyenne: "181.342 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Ferrari 312T2",
            time: "1'22''59",
            moyenne: "184,206 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS5",
            time: "1'41''35",
            moyenne: "206,019 km/h",
          },
        ],
        winner: [
          {
            driver: "Ronnie Peterson",
            car: "March 761",
            time: "1h 30' 35''6s ",
            moyenne: "199.750 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ronnie Peterson",
            car: "March 761",
            time: "1'41''3",
            moyenne: "206,120 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Mosport Park",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1'12''389",
            moyenne: "196,787 km/h",
          },
        ],
        winner: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1h 40' 09''626s ",
            moyenne: "189.632 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Patrick Depailler",
            car: "Tyrrell P34",
            time: "1'13''817",
            moyenne: "192,980 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Est",
        track: "Watkins Glen",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1'43''622",
            moyenne: "188,821 km/h",
          },
        ],
        winner: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1h 42' 40''741s ",
            moyenne: "187.379 km/h",
          },
        ],
        bestLap: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1'42''851",
            moyenne: "190,236 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Monsanto",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 77",
            time: "1'12''77",
            moyenne: "215,644 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Lotus 77",
            time: "1h 43' 58''86s ",
            moyenne: "ques Laffite",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS5",
            time: "1'19''97",
            moyenne: "196,229 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari 312T",
        team: "Ferrari",
        drivers: ["Niki Lauda", "Clay Regazzoni"],
      },
      {
        model: "Tyrrell 007",
        team: "Tyrrell",
        drivers: [
          "Jody Scheckter",
          "Patrick Depailler",
          "Ian Scheckter",
          "Alessandro Pesenti-Rossi",
          "Otto Stuppacher",
          "Kazuyoshi Hoshino",
        ],
      },
      {
        model: "Lotus 77",
        team: "Lotus",
        drivers: [
          "Ronnie Peterson",
          "Mario Andretti",
          "Bob Evans",
          "Gunnar Nilsson",
        ],
      },
      {
        model: "Brabham BT45",
        team: "Brabham",
        drivers: [
          "Carlos Reutemann",
          "Carlos Pace",
          "Rolf Stommelen",
          "Larry Perkins",
        ],
      },
      {
        model: "March 761",
        team: "March",
        drivers: [
          "Vittorio Brambilla",
          "Lella Lombardi",
          "Hans-Joachim Stuck",
          "Ronnie Peterson",
          "Arturo Merzario",
          "Karl Oppitzhauser",
        ],
      },
      {
        model: "McLaren M23",
        team: "McLaren",
        drivers: ["James Hunt", "Jochen Mass"],
      },
      { model: "BRM P201B", team: "BRM", drivers: ["Ian Ashley"] },
      {
        model: "Shadow DN5B",
        team: "Shadow",
        drivers: ["Tom Pryce", "Jean-Pierre Jarier"],
      },
      {
        model: "Williams FW05",
        team: "Williams",
        drivers: [
          "Jacky Ickx",
          "Michel Leclère",
          "Tom Belsø",
          "Arturo Merzario",
          "Chris Amon",
          "Warwick Brown",
          "Hans Binder",
          "Masami Kuwashima",
        ],
      },
      {
        model: "Williams FW04",
        team: "Williams",
        drivers: ["Renzo Zorzi", "Emilio Zapico"],
      },
      { model: "Ligier JS5", team: "Ligier", drivers: ["Jacques Laffite"] },
      {
        model: "Penske PC3",
        team: "Penske",
        drivers: ["John Watson", "Boy Hayje"],
      },
      {
        model: "Copersucar FD04",
        team: "Copersucar",
        drivers: ["Emerson Fittipaldi", "Ingo Hoffmann"],
      },
      {
        model: "Copersucar FD03",
        team: "Copersucar",
        drivers: ["Ingo Hoffmann"],
      },
      {
        model: "Surtees TS19",
        team: "Surtees",
        drivers: [
          "Brett Lunger",
          "Alan Jones",
          "Henri Pescarolo",
          "Conny Andersson",
          "Noritake Takahara",
        ],
      },
      {
        model: "Ensign N174",
        team: "Ensign",
        drivers: ["Chris Amon", "Antonio Bernardo"],
      },
      {
        model: "Hesketh 308D",
        team: "Hesketh",
        drivers: [
          "Harald Ertl",
          "Guy Edwards",
          "Rolf Stommelen",
          "Alex Ribeiro",
        ],
      },
      {
        model: "Parnelli VPJ4B",
        team: "Parnelli",
        drivers: ["Mario Andretti"],
      },
      {
        model: "Ferrari 312T2",
        team: "Ferrari",
        drivers: ["Niki Lauda", "Clay Regazzoni", "Carlos Reutemann"],
      },
      {
        model: "Tyrrell P34",
        team: "Tyrrell",
        drivers: ["Patrick Depailler", "Jody Scheckter"],
      },
      {
        model: "Ensign N176",
        team: "Ensign",
        drivers: ["Chris Amon", "Patrick Nève", "Hans Binder", "Jacky Ickx"],
      },
      {
        model: "Brabham BT44B",
        team: "Brabham",
        drivers: [
          "Loris Kessel",
          "Emilio de Villota",
          "Patrick Nève",
          "Jac Nelleman",
          "Damien Magee",
          "Bob Evans",
          "Lella Lombardi",
          "Rolf Stommelen",
        ],
      },
      { model: "Boro 001", team: "Boro", drivers: ["Larry Perkins"] },
      { model: "Penske PC4", team: "Penske", drivers: ["John Watson"] },
      { model: "Surtees TS16", team: "Surtees", drivers: ["Divina Galica"] },
      { model: "Shadow DN3", team: "Shadow", drivers: ["Mike Wilds"] },
      { model: "McLaren M26", team: "McLaren", drivers: ["Jochen Mass"] },
      { model: "Shadow DN8", team: "Shadow", drivers: ["Tom Pryce"] },
      { model: "Williams FW", team: "Williams", drivers: ["Loris Kessel"] },
      { model: "Kojima KE007", team: "Kojima", drivers: ["Masahiro Hasemi"] },
      { model: "Maki F102A", team: "Maki", drivers: ["Tony Trimmer"] },
    ],
  },
  {
    season: "1977",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1'48''68",
            moyenne: "197,689 km/h",
          },
        ],
        winner: [
          {
            driver: "Jody Scheckter",
            car: "Wolf WR1",
            time: "1h 40' 11''19s ",
            moyenne: "189.429 km/h",
          },
        ],
        bestLap: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1'51''06",
            moyenne: "193,452 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "2'30''11",
            moyenne: "190,900 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Ferrari 312T2",
            time: "1h 45' 07''72s ",
            moyenne: "181.720 km/h",
          },
        ],
        bestLap: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "2'34''55",
            moyenne: "185,416 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M23",
            time: "1'15''96",
            moyenne: "194,502 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1h 42' 21''6s ",
            moyenne: "187.639 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Watson",
            car: "Brabham BT45",
            time: "1'17''63",
            moyenne: "190,318 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Ouest",
        track: "Long Beach",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1'21''630",
            moyenne: "143,374 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1h 51' 35''470s ",
            moyenne: "139.839 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1'22''753",
            moyenne: "141,428 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jarama",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'18''70",
            moyenne: "155,710 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1h 42' 52''22s ",
            moyenne: "148.906 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS7",
            time: "1'20''81",
            moyenne: "151,645 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "John Watson",
            car: "Brabham BT45B",
            time: "1'29''86",
            moyenne: "132,686 km/h",
          },
        ],
        winner: [
          {
            driver: "Jody Scheckter",
            car: "Wolf WR1",
            time: "1h 57' 52''77s ",
            moyenne: "128.120 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jody Scheckter",
            car: "Wolf WR1",
            time: "1'31''07",
            moyenne: "130,923 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Zolder",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'24''64",
            moyenne: "181,276 km/h",
          },
        ],
        winner: [
          {
            driver: "Gunnar Nilsson",
            car: "Lotus 78",
            time: "1h 55' 05''71s ",
            moyenne: "155.527 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gunnar Nilsson",
            car: "Lotus 78",
            time: "1'27''36",
            moyenne: "175,632 km/h",
          },
        ],
      },
      {
        race: "Suède",
        track: "Anderstorp",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'25''404",
            moyenne: "169,369 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS7",
            time: "1h 46' 55''520s ",
            moyenne: "162.335 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'27''607",
            moyenne: "165,110 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Dijon-Prenois",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'12''21",
            moyenne: "189,447 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1h 39' 40''13s ",
            moyenne: "183.006 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'13''75",
            moyenne: "185,492 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M26",
            time: "1'18''490",
            moyenne: "216,440 km/h",
          },
        ],
        winner: [
          {
            driver: "James Hunt",
            car: "McLaren M26",
            time: "1h 31' 46''06s ",
            moyenne: "209.807 km/h",
          },
        ],
        bestLap: [
          {
            driver: "James Hunt",
            car: "McLaren M26",
            time: "1'19''60",
            moyenne: "213,422 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Jody Scheckter",
            car: "Wolf WR2",
            time: "1'53''07",
            moyenne: "216,153 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1h 31' 48''62s ",
            moyenne: "208.528 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1'55''99",
            moyenne: "210,711 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1'39''32",
            moyenne: "215,377 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Shadow DN8",
            time: "1h 37' 16''49s ",
            moyenne: "197.914 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Watson",
            car: "Brabham BT45B",
            time: "1'40''96",
            moyenne: "211,878 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'18''65",
            moyenne: "193,434 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1h 41' 45''93s ",
            moyenne: "186.871 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Ferrari 312T2",
            time: "1'19''99",
            moyenne: "190,194 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M26",
            time: "1'38''08",
            moyenne: "212,887 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1h 27' 50''30s ",
            moyenne: "206.015 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'39''1",
            moyenne: "210,696 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Est",
        track: "Watkins Glen",
        pole: [
          {
            driver: "James Hunt",
            car: "McLaren M26",
            time: "1'40''863",
            moyenne: "193,986 km/h",
          },
        ],
        winner: [
          {
            driver: "James Hunt",
            car: "McLaren M26",
            time: "1h 58' 23''267s ",
            moyenne: "162.516 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ronnie Peterson",
            car: "Tyrrell P34",
            time: "1'51''854",
            moyenne: "174,924 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Mosport Park",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'11''385",
            moyenne: "199,555 km/h",
          },
        ],
        winner: [
          {
            driver: "Jody Scheckter",
            car: "Wolf WR1",
            time: "1h 40' 00''00s ",
            moyenne: "189.936 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'13''299",
            moyenne: "194,344 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Monsanto",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'12''23",
            moyenne: "217,256 km/h",
          },
        ],
        winner: [
          {
            driver: "James Hunt",
            car: "McLaren M26",
            time: "1h 31' 51''68s ",
            moyenne: "207.840 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jody Scheckter",
            car: "Wolf WR3",
            time: "1'14''30",
            moyenne: "211,203 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren M23",
        team: "McLaren",
        drivers: [
          "James Hunt",
          "Jochen Mass",
          "Emilio de Villota",
          "Brett Lunger",
          "Gilles Villeneuve",
          "Bruno Giacomelli",
        ],
      },
      {
        model: "Tyrrell P34",
        team: "Tyrrell",
        drivers: ["Ronnie Peterson", "Patrick Depailler"],
      },
      {
        model: "Lotus 78",
        team: "Lotus",
        drivers: ["Mario Andretti", "Gunnar Nilsson"],
      },
      {
        model: "Brabham BT45",
        team: "Brabham",
        drivers: ["John Watson", "Carlos Pace"],
      },
      {
        model: "March 761B",
        team: "March",
        drivers: [
          "Alex Ribeiro",
          "Ian Scheckter",
          "Hans-Joachim Stuck",
          "Arturo Merzario",
        ],
      },
      {
        model: "Ferrari 312T2",
        team: "Ferrari",
        drivers: ["Niki Lauda", "Carlos Reutemann", "Gilles Villeneuve"],
      },
      {
        model: "BRM P207",
        team: "BRM",
        drivers: [
          "Larry Perkins",
          "Conny Andersson",
          "Guy Edwards",
          "Teddy Pilette",
        ],
      },
      {
        model: "Shadow DN8",
        team: "Shadow",
        drivers: [
          "Tom Pryce",
          "Renzo Zorzi",
          "Alan Jones",
          "Riccardo Patrese",
          "Jackie Oliver",
          "Arturo Merzario",
          "Jean-Pierre Jarier",
        ],
      },
      { model: "Shadow DN5B", team: "Shadow", drivers: ["Renzo Zorzi"] },
      {
        model: "Surtees TS19",
        team: "Surtees",
        drivers: [
          "Hans Binder",
          "Vittorio Brambilla",
          "Larry Perkins",
          "Patrick Tambay",
          "Vern Schuppan",
          "Tony Trimmer",
          "Lamberto Leoni",
        ],
      },
      { model: "Wolf WR1", team: "Wolf", drivers: ["Jody Scheckter"] },
      {
        model: "Ensign N177",
        team: "Ensign",
        drivers: ["Clay Regazzoni", "Jacky Ickx", "Patrick Tambay"],
      },
      {
        model: "Ligier JS7",
        team: "Ligier",
        drivers: ["Jacques Laffite", "Jean-Pierre Jarier"],
      },
      {
        model: "Copersucar FD04",
        team: "Copersucar",
        drivers: ["Emerson Fittipaldi", "Ingo Hoffmann"],
      },
      {
        model: "Brabham BT45B",
        team: "Brabham",
        drivers: [
          "Carlos Pace",
          "John Watson",
          "Hans-Joachim Stuck",
          "Giorgio Francia",
        ],
      },
      { model: "BRM P201B", team: "BRM", drivers: ["Larry Perkins"] },
      {
        model: "March 761",
        team: "March",
        drivers: [
          "Brett Lunger",
          "Boy Hayje",
          "Brian Henton",
          "Patrick Nève",
          "Mikko Kozarowitsky",
          "Jean-Pierre Jabouille",
          "Bernard de Dryver",
          "Henri Pescarolo",
          "Andy Sutcliffe",
          "Michael Bleekemolen",
        ],
      },
      {
        model: "Hesketh 308E",
        team: "Hesketh",
        drivers: [
          "Rupert Keegan",
          "Harald Ertl",
          "Hector Rebaque",
          "Ian Ashley",
        ],
      },
      {
        model: "Penske PC4",
        team: "Penske",
        drivers: [
          "Jean-Pierre Jarier",
          "Hans Heyer",
          "Hans Binder",
          "Danny Ongais",
        ],
      },
      {
        model: "McLaren M26",
        team: "McLaren",
        drivers: ["James Hunt", "Jochen Mass"],
      },
      { model: "Wolf WR2", team: "Wolf", drivers: ["Jody Scheckter"] },
      { model: "LEC CRP1", team: "LEC", drivers: ["David Purley"] },
      {
        model: "Copersucar F5",
        team: "Copersucar",
        drivers: ["Emerson Fittipaldi"],
      },
      { model: "Apollon Fly", team: "Apollon", drivers: ["Loris Kessel"] },
      {
        model: "Penske PC3",
        team: "Penske",
        drivers: ["Jac Nelleman", "Derek Bell"],
      },
      {
        model: "Renault RS01",
        team: "Renault",
        drivers: ["Jean-Pierre Jabouille"],
      },
      { model: "Wolf WR3", team: "Wolf", drivers: ["Jody Scheckter"] },
      { model: "McGuire BM1", team: "McGuire", drivers: ["Brian McGuire"] },
      { model: "March 771", team: "March", drivers: ["Ian Scheckter"] },
      { model: "Boro 001", team: "Boro", drivers: ["Brian Henton"] },
      {
        model: "Tyrrell 007",
        team: "Tyrrell",
        drivers: ["Kunimitsu Takahashi"],
      },
      {
        model: "Kojima KE009",
        team: "Kojima",
        drivers: ["Noritake Takahara", "Kazuyoshi Hoshino"],
      },
    ],
  },
  {
    season: "1978",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'47''75",
            moyenne: "199,395 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1h 37' 04''47s ",
            moyenne: "tour top tôt",
          },
        ],
        bestLap: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T2",
            time: "1'49''76",
            moyenne: "195,743 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Jacarepagua",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 78",
            time: "1'40''45",
            moyenne: "180,305 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Ferrari 312T2",
            time: "1h 49' 59''86s ",
            moyenne: "172.887 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Reutemann",
            car: "Ferrari 312T2",
            time: "1'43''07",
            moyenne: "175,721 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Niki Lauda",
            car: "Brabham BT46A",
            time: "1'14''65",
            moyenne: "197,916 km/h",
          },
        ],
        winner: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 78",
            time: "1h 42' 15''767s ",
            moyenne: "187.817 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mario Andretti",
            car: "Lotus 78",
            time: "1'17''09",
            moyenne: "191,651 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Ouest",
        track: "Long Beach",
        pole: [
          {
            driver: "Carlos Reutemann",
            car: "Ferrari 312T3",
            time: "1'20''636",
            moyenne: "145,141 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Ferrari 312T3",
            time: "1h 52' 01''301s ",
            moyenne: "140.172 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW06",
            time: "1'22''215",
            moyenne: "142,354 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Carlos Reutemann",
            car: "Ferrari 312T3",
            time: "1'28''34",
            moyenne: "134,969 km/h",
          },
        ],
        winner: [
          {
            driver: "Patrick Depailler",
            car: "Tyrrell 008",
            time: "1h 55' 14''66s ",
            moyenne: "129.325 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Brabham BT46A",
            time: "1'28''65",
            moyenne: "134,497 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Zolder",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1'20''90",
            moyenne: "189,656 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1h 39' 52''02s ",
            moyenne: "179.242 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 78",
            time: "1'23''13",
            moyenne: "184,569 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jarama",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1'16''39",
            moyenne: "160,419 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1h 41' 47''06s ",
            moyenne: "150.495 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1'20''06",
            moyenne: "153,065 km/h",
          },
        ],
      },
      {
        race: "Suède",
        track: "Anderstorp",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1'22''058",
            moyenne: "176,846 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Brabham BT46B",
            time: "1h 41' 00''606s ",
            moyenne: "167.609 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Brabham BT46B",
            time: "1'24''836",
            moyenne: "171,055 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "John Watson",
            car: "Brabham BT46A",
            time: "1'44''41",
            moyenne: "200,326 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1h 38' 51''92s ",
            moyenne: "190.404 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Reutemann",
            car: "Ferrari 312T3",
            time: "1'48''56",
            moyenne: "192,668 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 79",
            time: "1'16''80",
            moyenne: "197,203 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Ferrari 312T3",
            time: "1h 42' 12''39s ",
            moyenne: "187.698 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Brabham BT46A",
            time: "1'18''60",
            moyenne: "192,687 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1'51''90",
            moyenne: "218,413 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1h 28' 00''90s ",
            moyenne: "208.263 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 79",
            time: "1'55''62",
            moyenne: "211,386 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 79",
            time: "1'37''71",
            moyenne: "218,925 km/h",
          },
        ],
        winner: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 79",
            time: "1h 41' 21''57s ",
            moyenne: "on des temps",
          },
        ],
        bestLap: [
          {
            driver: "Ronnie Peterson",
            car: "Lotus 79",
            time: "1'43''12",
            moyenne: "207,440 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1'16''36",
            moyenne: "199,235 km/h",
          },
        ],
        winner: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1h 41' 04''23s ",
            moyenne: "188.156 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "Brabham BT46A",
            time: "1'19''57",
            moyenne: "191,198 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1'37''520",
            moyenne: "214,110 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "Brabham BT46A",
            time: "1h 07' 04''54s ",
            moyenne: "art anticipé",
          },
        ],
        bestLap: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1'38''23",
            moyenne: "212,562 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Est",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Lotus 79",
            time: "1'38''114",
            moyenne: "199,421 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Ferrari 312T3",
            time: "1h 40' 48''800s ",
            moyenne: "190.847 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jean-Pierre Jarier",
            car: "Lotus 79",
            time: "1'39''557",
            moyenne: "196,531 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Jean-Pierre Jarier",
            car: "Lotus 79",
            time: "1'38''015",
            moyenne: "165,281 km/h",
          },
        ],
        winner: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T3",
            time: "1h 57' 49''196s ",
            moyenne: "160.414 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW06",
            time: "1'38''072",
            moyenne: "165,185 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Brabham BT45C",
        team: "Brabham",
        drivers: ["Niki Lauda", "John Watson"],
      },
      {
        model: "Tyrrell 008",
        team: "Tyrrell",
        drivers: ["Didier Pironi", "Patrick Depailler"],
      },
      {
        model: "Lotus 78",
        team: "Lotus",
        drivers: ["Mario Andretti", "Ronnie Peterson", "Hector Rebaque"],
      },
      {
        model: "McLaren M26",
        team: "McLaren",
        drivers: [
          "James Hunt",
          "Patrick Tambay",
          "Brett Lunger",
          "Bruno Giacomelli",
        ],
      },
      {
        model: "ATS HS1",
        team: "ATS",
        drivers: [
          "Jochen Mass",
          "Jean-Pierre Jarier",
          "Alberto Colombo",
          "Keke Rosberg",
          "Hans Binder",
          "Michael Bleekemolen",
          "Harald Ertl",
        ],
      },
      {
        model: "Ferrari 312T2",
        team: "Ferrari",
        drivers: ["Carlos Reutemann", "Gilles Villeneuve"],
      },
      {
        model: "Copersucar F5A",
        team: "Copersucar",
        drivers: ["Emerson Fittipaldi"],
      },
      {
        model: "Shadow DN8",
        team: "Shadow",
        drivers: ["Hans-Joachim Stuck", "Clay Regazzoni"],
      },
      {
        model: "Surtees TS19",
        team: "Surtees",
        drivers: ["Rupert Keegan", "Vittorio Brambilla"],
      },
      {
        model: "Wolf WR4",
        team: "Wolf",
        drivers: ["Jody Scheckter", "Keke Rosberg"],
      },
      {
        model: "Ensign N177",
        team: "Ensign",
        drivers: [
          "Danny Ongais",
          "Lamberto Leoni",
          "Jacky Ickx",
          "Bernard de Dryver",
          "Derek Daly",
          "Geoff Lees",
          "Nelson Piquet",
          "Harald Ertl",
          "Brett Lunger",
        ],
      },
      {
        model: "Hesketh 308E",
        team: "Hesketh",
        drivers: ["Divina Galica", "Eddie Cheever", "Derek Daly"],
      },
      { model: "Ligier JS7", team: "Ligier", drivers: ["Jacques Laffite"] },
      { model: "Williams FW06", team: "Williams", drivers: ["Alan Jones"] },
      {
        model: "McLaren M23",
        team: "McLaren",
        drivers: [
          "Brett Lunger",
          "Emilio de Villota",
          "Tony Trimmer",
          "Nelson Piquet",
        ],
      },
      {
        model: "Theodore TR1",
        team: "Theodore",
        drivers: ["Eddie Cheever", "Keke Rosberg"],
      },
      {
        model: "Merzario A1",
        team: "Merzario",
        drivers: ["Arturo Merzario", "Alberto Colombo"],
      },
      {
        model: "Wolf WR1",
        team: "Wolf",
        drivers: ["Jody Scheckter", "Bobby Rahal"],
      },
      {
        model: "Arrows FA1",
        team: "Arrows",
        drivers: ["Riccardo Patrese", "Rolf Stommelen"],
      },
      {
        model: "Brabham BT46A",
        team: "Brabham",
        drivers: ["Niki Lauda", "John Watson", "Nelson Piquet"],
      },
      {
        model: "Ferrari 312T3",
        team: "Ferrari",
        drivers: ["Carlos Reutemann", "Gilles Villeneuve"],
      },
      {
        model: "Renault RS01",
        team: "Renault",
        drivers: ["Jean-Pierre Jabouille"],
      },
      { model: "Ligier JS7/9", team: "Ligier", drivers: ["Jacques Laffite"] },
      { model: "Martini MK23", team: "Martini", drivers: ["René Arnoux"] },
      {
        model: "Shadow DN9",
        team: "Shadow",
        drivers: ["Hans-Joachim Stuck", "Danny Ongais", "Clay Regazzoni"],
      },
      {
        model: "Wolf WR3",
        team: "Wolf",
        drivers: ["Jody Scheckter", "Keke Rosberg"],
      },
      {
        model: "Surtees TS20",
        team: "Surtees",
        drivers: [
          "Vittorio Brambilla",
          "Rupert Keegan",
          "Brian Henton",
          "Gimax",
          "René Arnoux",
          "Beppe Gabbiani",
        ],
      },
      { model: "Ligier JS9", team: "Ligier", drivers: ["Jacques Laffite"] },
      {
        model: "Lotus 79",
        team: "Lotus",
        drivers: ["Mario Andretti", "Ronnie Peterson", "Jean-Pierre Jarier"],
      },
      {
        model: "Wolf WR5",
        team: "Wolf",
        drivers: ["Jody Scheckter", "Bobby Rahal"],
      },
      { model: "March 781S", team: "March", drivers: ["Patrick Nève"] },
      {
        model: "Brabham BT46B",
        team: "Brabham",
        drivers: ["Niki Lauda", "John Watson"],
      },
      {
        model: "Arrows A1",
        team: "Arrows",
        drivers: ["Riccardo Patrese", "Rolf Stommelen"],
      },
      { model: "Wolf WR6", team: "Wolf", drivers: ["Jody Scheckter"] },
      { model: "ATS D1", team: "ATS", drivers: ["Keke Rosberg"] },
    ],
  },
  {
    season: "1979",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS11",
            time: "1'44''20",
            moyenne: "206,188 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS11",
            time: "1h 36' 03''21s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS11",
            time: "1'46''91",
            moyenne: "200,962 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS11",
            time: "2'23''07",
            moyenne: "198,130 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS11",
            time: "1h 40' 09''64s ",
            moyenne: "188.673 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS11",
            time: "2'28''76",
            moyenne: "190,551 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Jean-Pierre Jabouille",
            car: "Renault RS01",
            time: "1'11''80",
            moyenne: "205,772 km/h",
          },
        ],
        winner: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T4",
            time: "1h 41' 49''96s ",
            moyenne: "on des temps",
          },
        ],
        bestLap: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T4",
            time: "1'14''412",
            moyenne: "198,549 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Ouest",
        track: "Long Beach",
        pole: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T4",
            time: "1'18''825",
            moyenne: "148,476 km/h",
          },
        ],
        winner: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T4",
            time: "1h 50' 25''40s ",
            moyenne: "142.201 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T4",
            time: "1'21''20",
            moyenne: "144,133 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jarama",
        pole: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS11",
            time: "1'14''50",
            moyenne: "164,489 km/h",
          },
        ],
        winner: [
          {
            driver: "Patrick Depailler",
            car: "Ligier JS11",
            time: "1h 39' 11''84s ",
            moyenne: "154.419 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T4",
            time: "1'16''44",
            moyenne: "160,314 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Zolder",
        pole: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS11",
            time: "1'21''13",
            moyenne: "189,119 km/h",
          },
        ],
        winner: [
          {
            driver: "Jody Scheckter",
            car: "Ferrari 312T4",
            time: "1h 39' 59''53s ",
            moyenne: "179.018 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T4",
            time: "1'23''09",
            moyenne: "184,658 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jody Scheckter",
            car: "Ferrari 312T4",
            time: "1'26''45",
            moyenne: "137,920 km/h",
          },
        ],
        winner: [
          {
            driver: "Jody Scheckter",
            car: "Ferrari 312T4",
            time: "1h 55' 22''48s ",
            moyenne: "130.902 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Patrick Depailler",
            car: "Ligier JS11",
            time: "1'28''82",
            moyenne: "134,240 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Dijon-Prenois",
        pole: [
          {
            driver: "Jean-Pierre Jabouille",
            car: "Renault RS10",
            time: "1'07''19",
            moyenne: "203,602 km/h",
          },
        ],
        winner: [
          {
            driver: "Jean-Pierre Jabouille",
            car: "Renault RS10",
            time: "1h 35' 20''42s ",
            moyenne: "191.315 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Renault RS10",
            time: "1'09''16",
            moyenne: "197,802 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Alan Jones",
            car: "Williams FW07",
            time: "1'11''88",
            moyenne: "236,344 km/h",
          },
        ],
        winner: [
          {
            driver: "Clay Regazzoni",
            car: "Williams FW07",
            time: "1h 26' 11''17s ",
            moyenne: "223.395 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Williams FW07",
            time: "1'14''40",
            moyenne: "228,339 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Jean-Pierre Jabouille",
            car: "Renault RS10",
            time: "1'48''48",
            moyenne: "225,299 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Williams FW07",
            time: "1h 24' 48''83s ",
            moyenne: "216.124 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T4",
            time: "1'51''89",
            moyenne: "218,432 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RS10",
            time: "1'34''07",
            moyenne: "227,397 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Williams FW07",
            time: "1h 27' 38''01s ",
            moyenne: "219.689 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Renault RS10",
            time: "1'35''77",
            moyenne: "223,360 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RS10",
            time: "1'15''461",
            moyenne: "201,609 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Williams FW07",
            time: "1h 41' 19''775s ",
            moyenne: "187.675 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T4",
            time: "1'19''438",
            moyenne: "191,515 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Jean-Pierre Jabouille",
            car: "Renault RS10",
            time: "1'34''580",
            moyenne: "220,765 km/h",
          },
        ],
        winner: [
          {
            driver: "Jody Scheckter",
            car: "Ferrari 312T4",
            time: "1h 22' 00''22s ",
            moyenne: "212.186 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Clay Regazzoni",
            car: "Williams FW07",
            time: "1'35''60",
            moyenne: "218,410 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Alan Jones",
            car: "Williams FW07",
            time: "1'29''892",
            moyenne: "176,612 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Williams FW07",
            time: "1h 52' 06''892s ",
            moyenne: "169.926 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW07",
            time: "1'31''272",
            moyenne: "173,942 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Est",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Alan Jones",
            car: "Williams FW07",
            time: "1'35''615",
            moyenne: "204,633 km/h",
          },
        ],
        winner: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 312T4",
            time: "1h 52' 17''734s ",
            moyenne: "171.333 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49",
            time: "1'40''054",
            moyenne: "195,554 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Lotus 79",
        team: "Lotus",
        drivers: ["Mario Andretti", "Carlos Reutemann", "Hector Rebaque"],
      },
      {
        model: "Tyrrell 009",
        team: "Tyrrell",
        drivers: [
          "Didier Pironi",
          "Jean-Pierre Jarier",
          "Geoff Lees",
          "Derek Daly",
        ],
      },
      {
        model: "Brabham BT48",
        team: "Brabham",
        drivers: ["Niki Lauda", "Nelson Piquet"],
      },
      { model: "Brabham BT46A", team: "Brabham", drivers: ["Nelson Piquet"] },
      {
        model: "McLaren M28",
        team: "McLaren",
        drivers: ["John Watson", "Patrick Tambay"],
      },
      { model: "ATS D2", team: "ATS", drivers: ["Hans-Joachim Stuck"] },
      {
        model: "Ferrari 312T3",
        team: "Ferrari",
        drivers: ["Jody Scheckter", "Gilles Villeneuve"],
      },
      {
        model: "Copersucar F5A",
        team: "Copersucar",
        drivers: ["Emerson Fittipaldi"],
      },
      {
        model: "Renault RS01",
        team: "Renault",
        drivers: ["Jean-Pierre Jabouille", "René Arnoux"],
      },
      {
        model: "Shadow DN9",
        team: "Shadow",
        drivers: ["Jan Lammers", "Elio de Angelis"],
      },
      {
        model: "Wolf WR7",
        team: "Wolf",
        drivers: ["James Hunt", "Keke Rosberg"],
      },
      { model: "Ensign N177", team: "Ensign", drivers: ["Derek Daly"] },
      { model: "Merzario A1B", team: "Merzario", drivers: ["Arturo Merzario"] },
      {
        model: "Ligier JS11",
        team: "Ligier",
        drivers: ["Patrick Depailler", "Jacques Laffite", "Jacky Ickx"],
      },
      {
        model: "Williams FW06",
        team: "Williams",
        drivers: ["Alan Jones", "Clay Regazzoni"],
      },
      {
        model: "Arrows A1B",
        team: "Arrows",
        drivers: ["Riccardo Patrese", "Jochen Mass"],
      },
      { model: "McLaren M26", team: "McLaren", drivers: ["Patrick Tambay"] },
      {
        model: "Ferrari 312T4",
        team: "Ferrari",
        drivers: ["Jody Scheckter", "Gilles Villeneuve"],
      },
      {
        model: "Copersucar F6",
        team: "Copersucar",
        drivers: ["Emerson Fittipaldi"],
      },
      {
        model: "Ensign N179",
        team: "Ensign",
        drivers: ["Derek Daly", "Patrick Gaillard", "Marc Surer"],
      },
      {
        model: "Wolf WR8",
        team: "Wolf",
        drivers: ["James Hunt", "Keke Rosberg"],
      },
      { model: "Lotus 80", team: "Lotus", drivers: ["Mario Andretti"] },
      {
        model: "Renault RS10",
        team: "Renault",
        drivers: ["Jean-Pierre Jabouille", "René Arnoux"],
      },
      {
        model: "Merzario A2",
        team: "Merzario",
        drivers: ["Arturo Merzario", "Gianfranco Brancatelli"],
      },
      {
        model: "Williams FW07",
        team: "Williams",
        drivers: ["Alan Jones", "Clay Regazzoni"],
      },
      {
        model: "Kauhsen WK",
        team: "Kauhsen",
        drivers: ["Gianfranco Brancatelli"],
      },
      {
        model: "Alfa Romeo 177",
        team: "Alfa Romeo",
        drivers: ["Bruno Giacomelli", "Vittorio Brambilla"],
      },
      {
        model: "Arrows A2",
        team: "Arrows",
        drivers: ["Riccardo Patrese", "Jochen Mass"],
      },
      {
        model: "McLaren M29",
        team: "McLaren",
        drivers: ["John Watson", "Patrick Tambay"],
      },
      { model: "Merzario A4", team: "Merzario", drivers: ["Arturo Merzario"] },
      {
        model: "Copersucar F6A",
        team: "Copersucar",
        drivers: ["Emerson Fittipaldi", "Alex Ribeiro"],
      },
      { model: "ATS D3", team: "ATS", drivers: ["Hans-Joachim Stuck"] },
      { model: "Wolf WR9", team: "Wolf", drivers: ["Keke Rosberg"] },
      { model: "Rebaque HR100", team: "Rebaque", drivers: ["Hector Rebaque"] },
      {
        model: "Alfa Romeo 179",
        team: "Alfa Romeo",
        drivers: ["Bruno Giacomelli", "Vittorio Brambilla"],
      },
      {
        model: "Brabham BT49",
        team: "Brabham",
        drivers: ["Niki Lauda", "Ricardo Zunino", "Nelson Piquet"],
      },
      { model: "Wolf WR8/9", team: "Wolf", drivers: ["Keke Rosberg"] },
    ],
  },
  {
    season: "1980",
    calendar: [
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Alan Jones",
            car: "Williams FW07",
            time: "1'44''17",
            moyenne: "206,247 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Williams FW07",
            time: "1h 43' 24''38s ",
            moyenne: "183.531 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW07",
            time: "1'50''45",
            moyenne: "194,521 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Jean-Pierre Jabouille",
            car: "Renault RE20",
            time: "2'21''40",
            moyenne: "200,470 km/h",
          },
        ],
        winner: [
          {
            driver: "René Arnoux",
            car: "Renault RE20",
            time: "1h 40' 01''33s ",
            moyenne: "188.934 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Renault RE20",
            time: "2'27''31",
            moyenne: "192,427 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Jean-Pierre Jabouille",
            car: "Renault RE20",
            time: "1'10''00",
            moyenne: "211,063 km/h",
          },
        ],
        winner: [
          {
            driver: "René Arnoux",
            car: "Renault RE20",
            time: "1h 36' 52''54s ",
            moyenne: "198.262 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Renault RE20",
            time: "1'13''15",
            moyenne: "201,974 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Ouest",
        track: "Long Beach",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49",
            time: "1'17''694",
            moyenne: "150,637 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49",
            time: "1h 50' 18''550s ",
            moyenne: "142.348 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49",
            time: "1'19''83",
            moyenne: "146,607 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Zolder",
        pole: [
          {
            driver: "Alan Jones",
            car: "Williams FW07B",
            time: "1'19''12",
            moyenne: "193,923 km/h",
          },
        ],
        winner: [
          {
            driver: "Didier Pironi",
            car: "Ligier JS11/15",
            time: "1h 38' 46''51s ",
            moyenne: "186.402 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS11/15",
            time: "1'20''88",
            moyenne: "189,703 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Didier Pironi",
            car: "Ligier JS11/15",
            time: "1'24''813",
            moyenne: "140,582 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Williams FW07B",
            time: "1h 55' 34''365s ",
            moyenne: "130.677 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Reutemann",
            car: "Williams FW07B",
            time: "1'27''418",
            moyenne: "136,393 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS11/15",
            time: "1'38''88",
            moyenne: "211,529 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Williams FW07B",
            time: "1h 32' 43''42s ",
            moyenne: "203.016 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW07B",
            time: "1'41''45",
            moyenne: "206,171 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Didier Pironi",
            car: "Ligier JS11/15",
            time: "1'11''004",
            moyenne: "213,301 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Williams FW07B",
            time: "1h 34' 49''228s ",
            moyenne: "202.318 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Didier Pironi",
            car: "Ligier JS11/15",
            time: "1'12''368",
            moyenne: "209,280 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Alan Jones",
            car: "Williams FW07B",
            time: "1'45''85",
            moyenne: "230,897 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS11/15",
            time: "1h 22' 59''73s ",
            moyenne: "220.859 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW07B",
            time: "1'48''49",
            moyenne: "225,278 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE20",
            time: "1'30''27",
            moyenne: "236,969 km/h",
          },
        ],
        winner: [
          {
            driver: "Jean-Pierre Jabouille",
            car: "Renault RE20",
            time: "1h 26' 15''73s ",
            moyenne: "223.181 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Renault RE20",
            time: "1'32''53",
            moyenne: "231,181 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE20",
            time: "1'17''44",
            moyenne: "197,665 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49",
            time: "1h 38' 13''83s ",
            moyenne: "186.995 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Renault RE20",
            time: "1'19''35",
            moyenne: "192,907 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Imola",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE20",
            time: "1'33''988",
            moyenne: "191,514 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49",
            time: "1h 38' 07''52s ",
            moyenne: "183.439 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW07B",
            time: "1'36''089",
            moyenne: "187,326 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49",
            time: "1'27''328",
            moyenne: "181,797 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Williams FW07B",
            time: "1h 46' 45''53s ",
            moyenne: "art anticipé",
          },
        ],
        bestLap: [
          {
            driver: "Didier Pironi",
            car: "Ligier JS11/15",
            time: "1'28''769",
            moyenne: "178,846 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Est",
        track: "Watkins Glen",
        pole: [
          {
            driver: "Bruno Giacomelli",
            car: "Alfa Romeo 179",
            time: "1'33''291",
            moyenne: "209,731 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Williams FW07B",
            time: "1h 34' 36''05s ",
            moyenne: "203.380 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW07B",
            time: "1'34''068",
            moyenne: "207,998 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari 312T5",
        team: "Ferrari",
        drivers: ["Jody Scheckter", "Gilles Villeneuve"],
      },
      {
        model: "Tyrrell 009",
        team: "Tyrrell",
        drivers: ["Jean-Pierre Jarier", "Derek Daly"],
      },
      {
        model: "Brabham BT49",
        team: "Brabham",
        drivers: ["Nelson Piquet", "Ricardo Zunino", "Hector Rebaque"],
      },
      {
        model: "McLaren M29",
        team: "McLaren",
        drivers: ["John Watson", "Alain Prost", "Stephen South"],
      },
      { model: "ATS D3", team: "ATS", drivers: ["Marc Surer", "Jan Lammers"] },
      {
        model: "Lotus 81",
        team: "Lotus",
        drivers: ["Mario Andretti", "Elio de Angelis"],
      },
      {
        model: "Ensign N180",
        team: "Ensign",
        drivers: [
          "Clay Regazzoni",
          "Tiff Needell",
          "Jan Lammers",
          "Geoff Lees",
        ],
      },
      {
        model: "Renault RE20",
        team: "Renault",
        drivers: ["Jean-Pierre Jabouille", "René Arnoux"],
      },
      {
        model: "Shadow DN11",
        team: "Shadow",
        drivers: ["Stefan Johansson", "David Kennedy", "Geoff Lees"],
      },
      {
        model: "Fittipaldi F7",
        team: "Fittipaldi",
        drivers: ["Emerson Fittipaldi", "Keke Rosberg"],
      },
      {
        model: "Alfa Romeo 179",
        team: "Alfa Romeo",
        drivers: [
          "Patrick Depailler",
          "Bruno Giacomelli",
          "Vittorio Brambilla",
          "Andrea de Cesaris",
        ],
      },
      {
        model: "Ligier JS11/15",
        team: "Ligier",
        drivers: ["Didier Pironi", "Jacques Laffite"],
      },
      {
        model: "Williams FW07",
        team: "Williams",
        drivers: [
          "Alan Jones",
          "Desiré Wilson",
          "Rupert Keegan",
          "Kevin Cogan",
          "Geoff Lees",
        ],
      },
      {
        model: "Williams FW07B",
        team: "Williams",
        drivers: ["Carlos Reutemann", "Alan Jones"],
      },
      {
        model: "Arrows A3",
        team: "Arrows",
        drivers: [
          "Riccardo Patrese",
          "Jochen Mass",
          "Mike Thackwell",
          "Manfred Winkelhock",
        ],
      },
      { model: "Osella FA1", team: "Osella", drivers: ["Eddie Cheever"] },
      {
        model: "Tyrrell 010",
        team: "Tyrrell",
        drivers: ["Jean-Pierre Jarier", "Derek Daly", "Mike Thackwell"],
      },
      {
        model: "ATS D4",
        team: "ATS",
        drivers: ["Marc Surer", "Jan Lammers", "Harald Ertl"],
      },
      {
        model: "Shadow DN12",
        team: "Shadow",
        drivers: ["Geoff Lees", "David Kennedy"],
      },
      { model: "Merzario M1", team: "Merzario", drivers: ["Arturo Merzario"] },
      {
        model: "Fittipaldi F8",
        team: "Fittipaldi",
        drivers: ["Emerson Fittipaldi", "Keke Rosberg"],
      },
      { model: "Lotus 81B", team: "Lotus", drivers: ["Nigel Mansell"] },
      { model: "McLaren M30", team: "McLaren", drivers: ["Alain Prost"] },
    ],
  },
  {
    season: "1981",
    calendar: [
      {
        race: "Etats-Unis Ouest",
        track: "Long Beach",
        pole: [
          {
            driver: "Riccardo Patrese",
            car: "Arrows A3",
            time: "1'19''399",
            moyenne: "147,402 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Williams FW07C",
            time: "1h 50' 41''33s ",
            moyenne: "141.860 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW07C",
            time: "1'20''901",
            moyenne: "144,666 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Jacarepagua",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49C",
            time: "1'35''079",
            moyenne: "190,490 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Williams FW07C",
            time: "2h 00' 23''66s ",
            moyenne: " de 2 heures",
          },
        ],
        bestLap: [
          {
            driver: "Marc Surer",
            car: "Ensign N180B",
            time: "1'54''302",
            moyenne: "158,454 km/h",
          },
        ],
      },
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49C",
            time: "1'42''665",
            moyenne: "209,271 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49C",
            time: "1h 34' 32''74s ",
            moyenne: "200.731 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49C",
            time: "1'45''287",
            moyenne: "204,059 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 126CK",
            time: "1'34''523",
            moyenne: "191,953 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49C",
            time: "1h 51' 23''97s ",
            moyenne: "162.873 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 126CK",
            time: "1'48''064",
            moyenne: "167,900 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Zolder",
        pole: [
          {
            driver: "Carlos Reutemann",
            car: "Williams FW07C",
            time: "1'22''28",
            moyenne: "186,475 km/h",
          },
        ],
        winner: [
          {
            driver: "Carlos Reutemann",
            car: "Williams FW07C",
            time: "1h 16' 31''61s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Reutemann",
            car: "Williams FW07C",
            time: "1'23''30",
            moyenne: "184,192 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49C",
            time: "1'25''710",
            moyenne: "139,111 km/h",
          },
        ],
        winner: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 126CK",
            time: "1h 54' 23''38s ",
            moyenne: "132.029 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW07C",
            time: "1'27''47",
            moyenne: "136,312 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jarama",
        pole: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS17",
            time: "1'13''754",
            moyenne: "161,662 km/h",
          },
        ],
        winner: [
          {
            driver: "Gilles Villeneuve",
            car: "Ferrari 126CK",
            time: "1h 46' 35''019s ",
            moyenne: "149.156 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW07C",
            time: "1'17''818",
            moyenne: "153,219 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Dijon-Prenois",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE30",
            time: "1'05''95",
            moyenne: "207,430 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Renault RE30",
            time: "1h 35' 48''13s ",
            moyenne: "on des temps",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Renault RE30",
            time: "1'09''14",
            moyenne: "197,859 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE30",
            time: "1'11''000",
            moyenne: "239,273 km/h",
          },
        ],
        winner: [
          {
            driver: "John Watson",
            car: "McLaren MP4/1",
            time: "1h 26' 54''80s ",
            moyenne: "221.526 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Renault RE30",
            time: "1'15''06",
            moyenne: "226,331 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Alain Prost",
            car: "Renault RE30",
            time: "1'47''50",
            moyenne: "227,353 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49C",
            time: "1h 25' 55''60s ",
            moyenne: "213.325 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW07C",
            time: "1'52''42",
            moyenne: "217,403 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE30",
            time: "1'32''018",
            moyenne: "232,468 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS17",
            time: "1h 27' 36''47s ",
            moyenne: "215.683 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS17",
            time: "1'37''62",
            moyenne: "219,127 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Alain Prost",
            car: "Renault RE30",
            time: "1'18''176",
            moyenne: "195,804 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Renault RE30",
            time: "1h 40' 22''43s ",
            moyenne: "183.002 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alan Jones",
            car: "Williams FW07C",
            time: "1'21''83",
            moyenne: "187,061 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE30",
            time: "1'33''467",
            moyenne: "223,394 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Renault RE30",
            time: "1h 26' 33''897s ",
            moyenne: "209.045 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Reutemann",
            car: "Williams FW07C",
            time: "1'37''528",
            moyenne: "214,092 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49C",
            time: "1'29''211",
            moyenne: "177,960 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS17",
            time: "2h 01' 25''205s ",
            moyenne: "137.290 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Watson",
            car: "McLaren MP4/1",
            time: "1'49''475",
            moyenne: "145,019 km/h",
          },
        ],
      },
      {
        race: "Las Vegas",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Carlos Reutemann",
            car: "Williams FW07C",
            time: "1'17''821",
            moyenne: "168,849 km/h",
          },
        ],
        winner: [
          {
            driver: "Alan Jones",
            car: "Williams FW07C",
            time: "1h 44' 09''077s ",
            moyenne: "157.703 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Didier Pironi",
            car: "Ferrari 126CK",
            time: "1'20''156",
            moyenne: "163,930 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Williams FW07C",
        team: "Williams",
        drivers: ["Alan Jones", "Carlos Reutemann"],
      },
      {
        model: "Tyrrell 010",
        team: "Tyrrell",
        drivers: [
          "Eddie Cheever",
          "Kevin Cogan",
          "Ricardo Zunino",
          "Michele Alboreto",
        ],
      },
      {
        model: "Brabham BT49C",
        team: "Brabham",
        drivers: ["Nelson Piquet", "Hector Rebaque"],
      },
      {
        model: "McLaren M29F",
        team: "McLaren",
        drivers: ["John Watson", "Andrea de Cesaris"],
      },
      {
        model: "ATS D4",
        team: "ATS",
        drivers: ["Jan Lammers", "Slim Borgudd"],
      },
      {
        model: "Lotus 81B",
        team: "Lotus",
        drivers: ["Elio de Angelis", "Nigel Mansell"],
      },
      {
        model: "Ensign N180B",
        team: "Ensign",
        drivers: ["Marc Surer", "Ricardo Londono", "Eliseo Salazar"],
      },
      {
        model: "Renault RE20B",
        team: "Renault",
        drivers: ["Alain Prost", "René Arnoux"],
      },
      {
        model: "March 811",
        team: "March",
        drivers: ["Derek Daly", "Eliseo Salazar", "Stefan Johansson"],
      },
      {
        model: "Fittipaldi F8C",
        team: "Fittipaldi",
        drivers: ["Keke Rosberg", "Chico Serra"],
      },
      {
        model: "Alfa Romeo 179C",
        team: "Alfa Romeo",
        drivers: ["Mario Andretti", "Bruno Giacomelli", "Mauro Baldi"],
      },
      {
        model: "Ligier JS17",
        team: "Ligier",
        drivers: [
          "Jean-Pierre Jarier",
          "Jacques Laffite",
          "Jean-Pierre Jabouille",
          "Patrick Tambay",
        ],
      },
      {
        model: "Ferrari 126CK",
        team: "Ferrari",
        drivers: ["Gilles Villeneuve", "Didier Pironi"],
      },
      {
        model: "Arrows A3",
        team: "Arrows",
        drivers: [
          "Riccardo Patrese",
          "Siegfried Stohr",
          "Jacques Villeneuve Sr",
        ],
      },
      {
        model: "Osella FA1B",
        team: "Osella",
        drivers: [
          "Miguel-Angel Guerra",
          "Beppe Gabbiani",
          "Piercarlo Ghinzani",
          "Giorgio Francia",
          "Jean-Pierre Jarier",
        ],
      },
      {
        model: "Theodore TY01",
        team: "Theodore",
        drivers: ["Patrick Tambay", "Marc Surer", "Geoff Lees"],
      },
      {
        model: "McLaren MP4/1",
        team: "McLaren",
        drivers: ["John Watson", "Andrea de Cesaris"],
      },
      {
        model: "Lotus 88",
        team: "Lotus",
        drivers: ["Elio de Angelis", "Nigel Mansell"],
      },
      {
        model: "Toleman TG181",
        team: "Toleman",
        drivers: ["Brian Henton", "Derek Warwick"],
      },
      {
        model: "ATS D5",
        team: "ATS",
        drivers: ["Slim Borgudd", "Jan Lammers"],
      },
      {
        model: "Renault RE30",
        team: "Renault",
        drivers: ["René Arnoux", "Alain Prost"],
      },
      {
        model: "Lotus 87",
        team: "Lotus",
        drivers: ["Elio de Angelis", "Nigel Mansell"],
      },
      {
        model: "Williams FW07",
        team: "Williams",
        drivers: ["Emilio de Villota"],
      },
      {
        model: "Tyrrell 011",
        team: "Tyrrell",
        drivers: ["Eddie Cheever", "Michele Alboreto"],
      },
      {
        model: "Alfa Romeo 179D",
        team: "Alfa Romeo",
        drivers: ["Mario Andretti", "Bruno Giacomelli"],
      },
      { model: "Osella FA1C", team: "Osella", drivers: ["Jean-Pierre Jarier"] },
    ],
  },
  {
    season: "1982",
    calendar: [
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE30B",
            time: "1'06''351",
            moyenne: "222,670 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Renault RE30B",
            time: "1h 32' 08''401s ",
            moyenne: "205.779 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Renault RE30B",
            time: "1'08''278",
            moyenne: "216,386 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Jacarepagua",
        pole: [
          {
            driver: "Alain Prost",
            car: "Renault RE30B",
            time: "1'28''808",
            moyenne: "203,941 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT49D",
            time: "à 14 Tours : 1h 43m 56.760s",
            moyenne: "non conforme",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Renault RE30B",
            time: "1'37''016",
            moyenne: "186,687 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Ouest",
        track: "Long Beach",
        pole: [
          {
            driver: "Andrea de Cesaris",
            car: "Alfa Romeo 182",
            time: "1'27''316",
            moyenne: "141,335 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/1B",
            time: "1h 58' 25''318s ",
            moyenne: "non conforme",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/1B",
            time: "1'30''831",
            moyenne: "135,866 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE30B",
            time: "1'29''765",
            moyenne: "202,128 km/h",
          },
        ],
        winner: [
          {
            driver: "Didier Pironi",
            car: "Ferrari 126C2",
            time: "1h 36' 38''887s ",
            moyenne: "187.733 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Didier Pironi",
            car: "Ferrari 126C2",
            time: "1'35''036",
            moyenne: "190,917 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Zolder",
        pole: [
          {
            driver: "Alain Prost",
            car: "Renault RE30B",
            time: "1'15''701",
            moyenne: "202,682 km/h",
          },
        ],
        winner: [
          {
            driver: "John Watson",
            car: "McLaren MP4/1B",
            time: "1h 35' 41''995s ",
            moyenne: "non conforme",
          },
        ],
        bestLap: [
          {
            driver: "John Watson",
            car: "McLaren MP4/1B",
            time: "1'20''214",
            moyenne: "191,278 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE30B",
            time: "1'23''281",
            moyenne: "143,168 km/h",
          },
        ],
        winner: [
          {
            driver: "Riccardo Patrese",
            car: "Brabham BT49D",
            time: "1h 54' 11''259s ",
            moyenne: "132.262 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Brabham BT49D",
            time: "1'26''354",
            moyenne: "138,074 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Est",
        track: "Detroit",
        pole: [
          {
            driver: "Alain Prost",
            car: "Renault RE30B",
            time: "1'48''537",
            moyenne: "133,072 km/h",
          },
        ],
        winner: [
          {
            driver: "John Watson",
            car: "McLaren MP4/1B",
            time: "1h 58' 41''043s ",
            moyenne: "on des temps",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Renault RE30B",
            time: "1'50''438",
            moyenne: "130,781 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Didier Pironi",
            car: "Ferrari 126C2",
            time: "1'27''509",
            moyenne: "181,421 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT50",
            time: "1h 46' 39''577s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Didier Pironi",
            car: "Ferrari 126C2",
            time: "1'28''323",
            moyenne: "179,749 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE30B",
            time: "1'14''233",
            moyenne: "206,205 km/h",
          },
        ],
        winner: [
          {
            driver: "Didier Pironi",
            car: "Ferrari 126C2",
            time: "1h 38' 03''254s ",
            moyenne: "187.331 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Derek Warwick",
            car: "Toleman TG181C",
            time: "1'19''780",
            moyenne: "191,868 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW08",
            time: "1'09''540",
            moyenne: "217,791 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/1B",
            time: "1h 35' 33''812s ",
            moyenne: "200.745 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Brian Henton",
            car: "Tyrrell 011",
            time: "1'13''028",
            moyenne: "207,389 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "René Arnoux",
            car: "Renault RE30B",
            time: "1'34''406",
            moyenne: "221,554 km/h",
          },
        ],
        winner: [
          {
            driver: "René Arnoux",
            car: "Renault RE30B",
            time: "1h 33' 33''217s ",
            moyenne: "201.215 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Brabham BT50",
            time: "1'40''075",
            moyenne: "209,003 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Didier Pironi",
            car: "Ferrari 126C2",
            time: "1'47''947",
            moyenne: "226,678 km/h",
          },
        ],
        winner: [
          {
            driver: "Patrick Tambay",
            car: "Ferrari 126C2",
            time: "1h 27' 25''178s ",
            moyenne: "209.929 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT50",
            time: "1'54''035",
            moyenne: "214,576 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT50",
            time: "1'27''612",
            moyenne: "244,158 km/h",
          },
        ],
        winner: [
          {
            driver: "Elio de Angelis",
            car: "Lotus 91",
            time: "1h 25' 02''212s ",
            moyenne: "222.204 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT50",
            time: "1'33''699",
            moyenne: "228,297 km/h",
          },
        ],
      },
      {
        race: "Suisse",
        track: "Dijon-Prenois",
        pole: [
          {
            driver: "Alain Prost",
            car: "Renault RE30B",
            time: "1'01''380",
            moyenne: "222,874 km/h",
          },
        ],
        winner: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW08",
            time: "1h 32' 41''087s ",
            moyenne: "196.796 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Renault RE30B",
            time: "1'07''477",
            moyenne: "202,736 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Mario Andretti",
            car: "Ferrari 126C2",
            time: "1'28''473",
            moyenne: "236,004 km/h",
          },
        ],
        winner: [
          {
            driver: "René Arnoux",
            car: "Renault RE30B",
            time: "1h 22' 25''734s ",
            moyenne: "219.535 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Renault RE30B",
            time: "1'33''619",
            moyenne: "223,032 km/h",
          },
        ],
      },
      {
        race: "Las Vegas",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Alain Prost",
            car: "Renault RE30B",
            time: "1'16''356",
            moyenne: "172,089 km/h",
          },
        ],
        winner: [
          {
            driver: "Michele Alboreto",
            car: "Tyrrell 011",
            time: "1h 41' 56''888s ",
            moyenne: "161.111 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michele Alboreto",
            car: "Tyrrell 011",
            time: "1'19''639",
            moyenne: "164,995 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Brabham BT50",
        team: "Brabham",
        drivers: ["Nelson Piquet", "Riccardo Patrese"],
      },
      {
        model: "Tyrrell 011",
        team: "Tyrrell",
        drivers: ["Michele Alboreto", "Slim Borgudd", "Brian Henton"],
      },
      {
        model: "Williams FW07C",
        team: "Williams",
        drivers: ["Carlos Reutemann", "Keke Rosberg", "Mario Andretti"],
      },
      {
        model: "McLaren MP4/1B",
        team: "McLaren",
        drivers: ["John Watson", "Niki Lauda"],
      },
      { model: "McLaren MP4/1", team: "McLaren", drivers: ["Niki Lauda"] },
      {
        model: "ATS D5",
        team: "ATS",
        drivers: ["Manfred Winkelhock", "Eliseo Salazar"],
      },
      {
        model: "Lotus 87B",
        team: "Lotus",
        drivers: ["Elio de Angelis", "Nigel Mansell"],
      },
      { model: "Ensign N180B", team: "Ensign", drivers: ["Roberto Guerrero"] },
      {
        model: "Renault RE30B",
        team: "Renault",
        drivers: ["Alain Prost", "René Arnoux"],
      },
      {
        model: "March 821",
        team: "March",
        drivers: [
          "Jochen Mass",
          "Raul Boesel",
          "Emilio de Villota",
          "Rupert Keegan",
        ],
      },
      { model: "Fittipaldi F8D", team: "Fittipaldi", drivers: ["Chico Serra"] },
      {
        model: "Alfa Romeo 179D",
        team: "Alfa Romeo",
        drivers: ["Andrea de Cesaris", "Bruno Giacomelli"],
      },
      {
        model: "Ligier JS17",
        team: "Ligier",
        drivers: ["Eddie Cheever", "Jacques Laffite"],
      },
      {
        model: "Ferrari 126C2",
        team: "Ferrari",
        drivers: [
          "Gilles Villeneuve",
          "Didier Pironi",
          "Patrick Tambay",
          "Mario Andretti",
        ],
      },
      {
        model: "Arrows A4",
        team: "Arrows",
        drivers: ["Brian Henton", "Mauro Baldi", "Marc Surer"],
      },
      {
        model: "Osella FA1C",
        team: "Osella",
        drivers: [
          "Jean-Pierre Jarier",
          "Riccardo Paletti",
          "Piercarlo Ghinzani",
          "Johnny Cecotto",
        ],
      },
      { model: "Theodore TY01", team: "Theodore", drivers: ["Derek Daly"] },
      {
        model: "Toleman TG181C",
        team: "Toleman",
        drivers: ["Derek Warwick", "Teo Fabi"],
      },
      { model: "Toleman TG181B", team: "Toleman", drivers: ["Teo Fabi"] },
      {
        model: "Brabham BT49D",
        team: "Brabham",
        drivers: ["Nelson Piquet", "Riccardo Patrese"],
      },
      {
        model: "Lotus 91",
        team: "Lotus",
        drivers: [
          "Elio de Angelis",
          "Nigel Mansell",
          "Roberto Moreno",
          "Geoff Lees",
        ],
      },
      { model: "Ensign N181", team: "Ensign", drivers: ["Roberto Guerrero"] },
      {
        model: "Alfa Romeo 182",
        team: "Alfa Romeo",
        drivers: ["Andrea de Cesaris", "Bruno Giacomelli"],
      },
      {
        model: "Theodore TY02",
        team: "Theodore",
        drivers: ["Derek Daly", "Jan Lammers", "Geoff Lees", "Tommy Byrne"],
      },
      {
        model: "Brabham BT49C",
        team: "Brabham",
        drivers: ["Riccardo Patrese"],
      },
      {
        model: "Ligier JS17B",
        team: "Ligier",
        drivers: ["Eddie Cheever", "Jacques Laffite"],
      },
      {
        model: "Williams FW08",
        team: "Williams",
        drivers: ["Derek Daly", "Keke Rosberg"],
      },
      {
        model: "Ligier JS19",
        team: "Ligier",
        drivers: ["Eddie Cheever", "Jacques Laffite"],
      },
      { model: "Fittipaldi F9", team: "Fittipaldi", drivers: ["Chico Serra"] },
      { model: "Osella FA1D", team: "Osella", drivers: ["Jean-Pierre Jarier"] },
      {
        model: "Arrows A5",
        team: "Arrows",
        drivers: ["Marc Surer", "Mauro Baldi"],
      },
      { model: "Toleman TG183", team: "Toleman", drivers: ["Derek Warwick"] },
    ],
  },
  {
    season: "1983",
    calendar: [
      {
        race: "Brésil",
        track: "Jacarepagua",
        pole: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW08C",
            time: "1'34''526",
            moyenne: "191,604 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT52",
            time: "1h 48' 27''731s ",
            moyenne: "alifications",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT52",
            time: "1'39''829",
            moyenne: "181,426 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Ouest",
        track: "Long Beach",
        pole: [
          {
            driver: "Patrick Tambay",
            car: "Ferrari 126C2B",
            time: "1'26''117",
            moyenne: "136,907 km/h",
          },
        ],
        winner: [
          {
            driver: "John Watson",
            car: "McLaren MP4/1C",
            time: "1h 53' 34''889s ",
            moyenne: "129.753 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/1C",
            time: "1'28''330",
            moyenne: "133,477 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Alain Prost",
            car: "Renault RE40",
            time: "1'36''672",
            moyenne: "216,360 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Renault RE40",
            time: "1h 34' 13''913s ",
            moyenne: "199.767 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Renault RE40",
            time: "1'42''695",
            moyenne: "203,671 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "René Arnoux",
            car: "Ferrari 126C2B",
            time: "1'31''238",
            moyenne: "198,865 km/h",
          },
        ],
        winner: [
          {
            driver: "Patrick Tambay",
            car: "Ferrari 126C2B",
            time: "1h 37' 52''460s ",
            moyenne: "185.381 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Brabham BT52",
            time: "1'34''437",
            moyenne: "192,128 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Alain Prost",
            car: "Renault RE40",
            time: "1'24''840",
            moyenne: "140,537 km/h",
          },
        ],
        winner: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW08C",
            time: "1h 56' 38''121s ",
            moyenne: "129.487 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT52",
            time: "1'27''283",
            moyenne: "136,604 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Alain Prost",
            car: "Renault RE40",
            time: "2'04''615",
            moyenne: "200,750 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Renault RE40",
            time: "1h 27' 11''502s ",
            moyenne: " faux départ",
          },
        ],
        bestLap: [
          {
            driver: "Andrea de Cesaris",
            car: "Alfa Romeo 183T",
            time: "2'07''493",
            moyenne: "196,218 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Est",
        track: "Detroit",
        pole: [
          {
            driver: "René Arnoux",
            car: "Ferrari 126C2B",
            time: "1'44''734",
            moyenne: "138,282 km/h",
          },
        ],
        winner: [
          {
            driver: "Michele Alboreto",
            car: "Tyrrell 011",
            time: "1h 50' 53''669s ",
            moyenne: "130.600 km/h",
          },
        ],
        bestLap: [
          {
            driver: "John Watson",
            car: "McLaren MP4/1C",
            time: "1'47''668",
            moyenne: "134,513 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "René Arnoux",
            car: "Ferrari 126C2B",
            time: "1'28''729",
            moyenne: "178,927 km/h",
          },
        ],
        winner: [
          {
            driver: "René Arnoux",
            car: "Ferrari 126C2B",
            time: "1h 48' 31''838s ",
            moyenne: "170.661 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Patrick Tambay",
            car: "Ferrari 126C2B",
            time: "1'30''851",
            moyenne: "174,748 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "René Arnoux",
            car: "Ferrari 126C3",
            time: "1'09''462",
            moyenne: "244,571 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Renault RE40",
            time: "1h 24' 39''780s ",
            moyenne: "224.069 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Renault RE40",
            time: "1'14''212",
            moyenne: "228,917 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Patrick Tambay",
            car: "Ferrari 126C3",
            time: "1'49''328",
            moyenne: "223,815 km/h",
          },
        ],
        winner: [
          {
            driver: "René Arnoux",
            car: "Ferrari 126C3",
            time: "1h 27' 10''319s ",
            moyenne: "210.525 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Ferrari 126C3",
            time: "1'53''938",
            moyenne: "214,759 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Patrick Tambay",
            car: "Ferrari 126C3",
            time: "1'29''871",
            moyenne: "238,021 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Renault RE40",
            time: "1h 24' 32''745s ",
            moyenne: "223.495 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Renault RE40",
            time: "1'33''961",
            moyenne: "227,660 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT52B",
            time: "1'15''630",
            moyenne: "202,396 km/h",
          },
        ],
        winner: [
          {
            driver: "René Arnoux",
            car: "Ferrari 126C3",
            time: "1h 38' 41''950s ",
            moyenne: "186.107 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Ferrari 126C3",
            time: "1'19''863",
            moyenne: "191,668 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Riccardo Patrese",
            car: "Brabham BT52B",
            time: "1'29''122",
            moyenne: "234,286 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT52B",
            time: "1h 23' 10''880s ",
            moyenne: "rs du départ",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT52B",
            time: "1'34''431",
            moyenne: "221,114 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Elio de Angelis",
            car: "Lotus 94T",
            time: "1'12''092",
            moyenne: "210,082 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT52B",
            time: "1h 36' 45''865s ",
            moyenne: "198.254 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Lotus 94T",
            time: "1'14''342",
            moyenne: "203,723 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Patrick Tambay",
            car: "Ferrari 126C3",
            time: "1'06''554",
            moyenne: "221,991 km/h",
          },
        ],
        winner: [
          {
            driver: "Riccardo Patrese",
            car: "Brabham BT52B",
            time: "1h 33' 25''708s ",
            moyenne: "202.941 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT52B",
            time: "1'09''948",
            moyenne: "211,220 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Williams FW08C",
        team: "Williams",
        drivers: ["Keke Rosberg", "Jacques Laffite", "Jonathan Palmer"],
      },
      {
        model: "Tyrrell 011",
        team: "Tyrrell",
        drivers: ["Michele Alboreto", "Danny Sullivan"],
      },
      {
        model: "Brabham BT52",
        team: "Brabham",
        drivers: ["Nelson Piquet", "Riccardo Patrese"],
      },
      {
        model: "McLaren MP4/1C",
        team: "McLaren",
        drivers: ["John Watson", "Niki Lauda", "Stefan Bellof"],
      },
      {
        model: "ATS D6",
        team: "ATS",
        drivers: ["Manfred Winkelhock", "Stefan Bellof", "Jo Gartner"],
      },
      {
        model: "Lotus 92",
        team: "Lotus",
        drivers: ["Elio de Angelis", "Nigel Mansell"],
      },
      {
        model: "Renault RE30C",
        team: "Renault",
        drivers: ["Alain Prost", "Eddie Cheever"],
      },
      {
        model: "RAM March 01",
        team: "RAM March",
        drivers: [
          "Eliseo Salazar",
          "Jean-Louis Schlesser",
          "Jacques Villeneuve Sr",
          "Kenny Acheson",
        ],
      },
      {
        model: "Alfa Romeo 183T",
        team: "Alfa Romeo",
        drivers: ["Andrea de Cesaris", "Mauro Baldi"],
      },
      {
        model: "Ligier JS21",
        team: "Ligier",
        drivers: ["Jean-Pierre Jarier", "Raul Boesel"],
      },
      {
        model: "Ferrari 126C2B",
        team: "Ferrari",
        drivers: ["Patrick Tambay", "René Arnoux"],
      },
      {
        model: "Arrows A6",
        team: "Arrows",
        drivers: ["Marc Surer", "Chico Serra", "Alan Jones", "Thierry Boutsen"],
      },
      {
        model: "Osella FA1D",
        team: "Osella",
        drivers: ["Corrado Fabi", "Piercarlo Ghinzani"],
      },
      {
        model: "Theodore N183",
        team: "Theodore",
        drivers: ["Roberto Guerrero", "Johnny Cecotto"],
      },
      {
        model: "Toleman TG183B",
        team: "Toleman",
        drivers: ["Derek Warwick", "Bruno Giacomelli"],
      },
      {
        model: "Lotus 93T",
        team: "Lotus",
        drivers: ["Elio de Angelis", "Nigel Mansell"],
      },
      {
        model: "Renault RE40",
        team: "Renault",
        drivers: ["Alain Prost", "Eddie Cheever"],
      },
      {
        model: "Osella FA1E",
        team: "Osella",
        drivers: ["Piercarlo Ghinzani", "Corrado Fabi"],
      },
      {
        model: "Brabham BT52B",
        team: "Brabham",
        drivers: ["Nelson Piquet", "Riccardo Patrese"],
      },
      {
        model: "Lotus 94T",
        team: "Lotus",
        drivers: ["Elio de Angelis", "Nigel Mansell"],
      },
      {
        model: "Ferrari 126C3",
        team: "Ferrari",
        drivers: ["Patrick Tambay", "René Arnoux"],
      },
      { model: "Spirit 201", team: "Spirit", drivers: ["Stefan Johansson"] },
      { model: "Spirit 201C", team: "Spirit", drivers: ["Stefan Johansson"] },
      {
        model: "Tyrrell 012",
        team: "Tyrrell",
        drivers: ["Michele Alboreto", "Danny Sullivan"],
      },
      {
        model: "McLaren MP4/1E",
        team: "McLaren",
        drivers: ["Niki Lauda", "John Watson"],
      },
      {
        model: "Williams FW09",
        team: "Williams",
        drivers: ["Keke Rosberg", "Jacques Laffite"],
      },
    ],
  },
  {
    season: "1984",
    calendar: [
      {
        race: "Brésil",
        track: "Jacarepagua",
        pole: [
          {
            driver: "Elio de Angelis",
            car: "Lotus 95T",
            time: "1'28''392",
            moyenne: "204,901 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1h 42' 34''492s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1'36''499",
            moyenne: "187,687 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1'04''871",
            moyenne: "227,750 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2",
            time: "1h 29' 23''43s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Patrick Tambay",
            car: "Renault RE50",
            time: "1'08''877",
            moyenne: "214,504 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Zolder",
        pole: [
          {
            driver: "Michele Alboreto",
            car: "Ferrari 126C4",
            time: "1'14''846",
            moyenne: "204,997 km/h",
          },
        ],
        winner: [
          {
            driver: "Michele Alboreto",
            car: "Ferrari 126C4",
            time: "1h 36' 32''048s ",
            moyenne: "185.431 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Ferrari 126C4",
            time: "1'19''294",
            moyenne: "193,498 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1'28''517",
            moyenne: "204,978 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1h 36' 53''679s ",
            moyenne: "187.255 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1'33''275",
            moyenne: "194,522 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Dijon-Prenois",
        pole: [
          {
            driver: "Patrick Tambay",
            car: "Renault RE50",
            time: "1'02''200",
            moyenne: "224,971 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2",
            time: "1h 31' 11''951s ",
            moyenne: "202.024 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1'05''257",
            moyenne: "214,432 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1'22''661",
            moyenne: "144,242 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1h 01' 07''740s ",
            moyenne: "st attribuée",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "Toleman TG184",
            time: "1'54''334",
            moyenne: "104,284 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1'25''442",
            moyenne: "185,810 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1h 46' 23''748s ",
            moyenne: "174.086 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1'28''763",
            moyenne: "178,858 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis Est",
        track: "Detroit",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1'40''980",
            moyenne: "143,422 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1h 55' 41''842s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Derek Warwick",
            car: "Renault RE50",
            time: "1'46''221",
            moyenne: "136,346 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Dallas",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Lotus 95T",
            time: "1'37''041",
            moyenne: "144,718 km/h",
          },
        ],
        winner: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW09",
            time: "2h 01' 22''617s ",
            moyenne: " de 2 heures",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2",
            time: "1'45''353",
            moyenne: "133,300 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1'10''869",
            moyenne: "213,707 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2",
            time: "1h 29' 28''532s ",
            moyenne: "on des temps",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2",
            time: "1'13''191",
            moyenne: "206,927 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1'47''012",
            moyenne: "228,658 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1h 24' 43''210s ",
            moyenne: "211.804 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1'53''538",
            moyenne: "215,516 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1'26''173",
            moyenne: "248,236 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2",
            time: "1h 21' 12''851s ",
            moyenne: "223.884 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2",
            time: "1'32''882",
            moyenne: "230,305 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1'13''567",
            moyenne: "208,072 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1h 37' 21''468s ",
            moyenne: "186.051 km/h",
          },
        ],
        bestLap: [
          {
            driver: "René Arnoux",
            car: "Ferrari 126C4",
            time: "1'19''465",
            moyenne: "192,628 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1'26''584",
            moyenne: "241,153 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2",
            time: "1h 20' 29''065s ",
            moyenne: "nat du monde",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2",
            time: "1'31''912",
            moyenne: "227,174 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1'18''871",
            moyenne: "207,316 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1h 35' 13''284s ",
            moyenne: "191.751 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michele Alboreto",
            car: "Ferrari 126C4",
            time: "1'23''146",
            moyenne: "196,656 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT53",
            time: "1'21''703",
            moyenne: "191,670 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2",
            time: "1h 41' 11''753s ",
            moyenne: "180.541 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2",
            time: "1'22''996",
            moyenne: "188,684 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Brabham BT53",
        team: "Brabham",
        drivers: [
          "Nelson Piquet",
          "Teo Fabi",
          "Corrado Fabi",
          "Manfred Winkelhock",
        ],
      },
      {
        model: "Tyrrell 012",
        team: "Tyrrell",
        drivers: [
          "Martin Brundle",
          "Stefan Bellof",
          "Stefan Johansson",
          "Mike Thackwell",
        ],
      },
      {
        model: "Williams FW09",
        team: "Williams",
        drivers: ["Jacques Laffite", "Keke Rosberg"],
      },
      {
        model: "McLaren MP4/2",
        team: "McLaren",
        drivers: ["Alain Prost", "Niki Lauda", "Stefan Bellof"],
      },
      {
        model: "RAM 02",
        team: "RAM",
        drivers: ["Philippe Alliot", "Jonathan Palmer", "Mike Thackwell"],
      },
      { model: "RAM 01", team: "RAM", drivers: ["Jonathan Palmer"] },
      {
        model: "Lotus 95T",
        team: "Lotus",
        drivers: ["Elio de Angelis", "Nigel Mansell"],
      },
      {
        model: "ATS D7",
        team: "ATS",
        drivers: ["Manfred Winkelhock", "Gerhard Berger"],
      },
      {
        model: "Renault RE50",
        team: "Renault",
        drivers: [
          "Patrick Tambay",
          "Derek Warwick",
          "Mario Andretti",
          "Philippe Streiff",
        ],
      },
      {
        model: "Arrows A6",
        team: "Arrows",
        drivers: ["Marc Surer", "Thierry Boutsen"],
      },
      {
        model: "Toleman TG183B",
        team: "Toleman",
        drivers: ["Ayrton Senna", "Johnny Cecotto"],
      },
      {
        model: "Spirit 101",
        team: "Spirit",
        drivers: ["Mauro Baldi", "Huub Rothengatter", "Pascal Fabre"],
      },
      {
        model: "Alfa Romeo 184T",
        team: "Alfa Romeo",
        drivers: ["Riccardo Patrese", "Eddie Cheever"],
      },
      {
        model: "Osella FA1F",
        team: "Osella",
        drivers: ["Piercarlo Ghinzani", "Jo Gartner"],
      },
      {
        model: "Ligier JS23",
        team: "Ligier",
        drivers: ["François Hesnault", "Andrea de Cesaris"],
      },
      {
        model: "Ferrari 126C4",
        team: "Ferrari",
        drivers: ["Michele Alboreto", "René Arnoux"],
      },
      {
        model: "Arrows A7",
        team: "Arrows",
        drivers: ["Thierry Boutsen", "Marc Surer"],
      },
      { model: "Osella FA1E", team: "Osella", drivers: ["Jo Gartner"] },
      {
        model: "Toleman TG184",
        team: "Toleman",
        drivers: [
          "Ayrton Senna",
          "Johnny Cecotto",
          "Stefan Johansson",
          "Pierluigi Martini",
        ],
      },
      {
        model: "Williams FW09B",
        team: "Williams",
        drivers: ["Jacques Laffite", "Keke Rosberg"],
      },
      { model: "Ligier JS23B", team: "Ligier", drivers: ["Andrea de Cesaris"] },
    ],
  },
  {
    season: "1985",
    calendar: [
      {
        race: "Brésil",
        track: "Jacarepagua",
        pole: [
          {
            driver: "Michele Alboreto",
            car: "Ferrari 156/85",
            time: "1'27''768",
            moyenne: "206,358 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "1h 41' 26''115s ",
            moyenne: "181.529 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "1'36''702",
            moyenne: "187,293 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "1'21''007",
            moyenne: "193,317 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "2h 00' 28''006s ",
            moyenne: " de 2 heures",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "1'44''121",
            moyenne: "150,402 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "1'27''327",
            moyenne: "207,771 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "à 7 Tours : 1h 33m 57.118s",
            moyenne: "191.799 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michele Alboreto",
            car: "Ferrari 156/85",
            time: "1'30''961",
            moyenne: "199,470 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "1'20''450",
            moyenne: "148,206 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "1h 51' 58''034s ",
            moyenne: "138.435 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michele Alboreto",
            car: "Ferrari 156/85",
            time: "1'22''637",
            moyenne: "144,284 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Elio de Angelis",
            car: "Lotus 97T",
            time: "1'24''567",
            moyenne: "187,733 km/h",
          },
        ],
        winner: [
          {
            driver: "Michele Alboreto",
            car: "Ferrari 156/85",
            time: "1h 46' 01''813s ",
            moyenne: "174.686 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "1'27''445",
            moyenne: "181,554 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Detroit",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "1'42''051",
            moyenne: "141,917 km/h",
          },
        ],
        winner: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW10",
            time: "1h 55' 39''851s ",
            moyenne: "131.475 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "1'45''612",
            moyenne: "137,132 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW10",
            time: "1'32''462",
            moyenne: "226,212 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT54",
            time: "1h 31' 46''266s ",
            moyenne: "201.325 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW10",
            time: "1'39''914",
            moyenne: "209,340 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW10",
            time: "1'05''591",
            moyenne: "259,005 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "1h 18' 10''436s ",
            moyenne: "235.425 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "1'09''886",
            moyenne: "243,087 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Teo Fabi",
            car: "Toleman TG185",
            time: "1'17''429",
            moyenne: "211,177 km/h",
          },
        ],
        winner: [
          {
            driver: "Michele Alboreto",
            car: "Ferrari 156/85",
            time: "1h 35' 31''337s ",
            moyenne: "191.147 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2B",
            time: "1'22''806",
            moyenne: "197,464 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "1'25''490",
            moyenne: "250,219 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "1h 20' 12''583s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "1'29''241",
            moyenne: "239,701 km/h",
          },
        ],
      },
      {
        race: "Pays-Bas",
        track: "Zandvoort",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Brabham BT54",
            time: "1'11''074",
            moyenne: "215,370 km/h",
          },
        ],
        winner: [
          {
            driver: "Niki Lauda",
            car: "McLaren MP4/2B",
            time: "1h 32' 29''263s ",
            moyenne: "193.089 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "1'16''538",
            moyenne: "199,995 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "1'25''084",
            moyenne: "245,405 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "1h 17' 59''451s ",
            moyenne: "227.565 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW10",
            time: "1'28''283",
            moyenne: "236,512 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "1'55''306",
            moyenne: "216,676 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "1h 34' 19''893s ",
            moyenne: "189.811 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2B",
            time: "2'01''730",
            moyenne: "205,241 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "1'07''169",
            moyenne: "225,479 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW10",
            time: "1h 32' 58''109s ",
            moyenne: "203.634 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Laffite",
            car: "Ligier JS25",
            time: "1'11''526",
            moyenne: "211,744 km/h",
          },
        ],
      },
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW10",
            time: "1'02''366",
            moyenne: "236,898 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW10",
            time: "1h 28' 22''866s ",
            moyenne: "208.959 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW10",
            time: "1'08''149",
            moyenne: "216,796 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Adelaïde",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 97T",
            time: "1'19''843",
            moyenne: "170,344 km/h",
          },
        ],
        winner: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW10",
            time: "2h 00' 40''473s ",
            moyenne: "154.032 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Keke Rosberg",
            car: "Williams FW10",
            time: "1'23''758",
            moyenne: "162,382 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MP4/2B",
        team: "McLaren",
        drivers: ["Niki Lauda", "Alain Prost", "John Watson"],
      },
      {
        model: "Tyrrell 012",
        team: "Tyrrell",
        drivers: ["Martin Brundle", "Stefan Bellof", "Stefan Johansson"],
      },
      {
        model: "Williams FW10",
        team: "Williams",
        drivers: ["Nigel Mansell", "Keke Rosberg"],
      },
      {
        model: "Brabham BT54",
        team: "Brabham",
        drivers: ["Nelson Piquet", "François Hesnault", "Marc Surer"],
      },
      {
        model: "RAM 03",
        team: "RAM",
        drivers: ["Manfred Winkelhock", "Philippe Alliot", "Kenny Acheson"],
      },
      {
        model: "Lotus 97T",
        team: "Lotus",
        drivers: ["Elio de Angelis", "Ayrton Senna"],
      },
      {
        model: "Renault RE60",
        team: "Renault",
        drivers: ["Patrick Tambay", "Derek Warwick", "François Hesnault"],
      },
      {
        model: "Arrows A8",
        team: "Arrows",
        drivers: ["Gerhard Berger", "Thierry Boutsen"],
      },
      {
        model: "Toleman TG185",
        team: "Toleman",
        drivers: [
          "Stefan Johansson",
          "John Watson",
          "Teo Fabi",
          "Piercarlo Ghinzani",
        ],
      },
      {
        model: "Spirit 101D",
        team: "Spirit",
        drivers: ["Mauro Baldi", "Allen Berg"],
      },
      {
        model: "Alfa Romeo 185T",
        team: "Alfa Romeo",
        drivers: ["Riccardo Patrese", "Eddie Cheever"],
      },
      {
        model: "Osella FA1F",
        team: "Osella",
        drivers: ["Piercarlo Ghinzani", "Huub Rothengatter"],
      },
      {
        model: "Ligier JS25",
        team: "Ligier",
        drivers: ["Andrea de Cesaris", "Jacques Laffite", "Philippe Streiff"],
      },
      {
        model: "Ferrari 156/85",
        team: "Ferrari",
        drivers: ["Michele Alboreto", "René Arnoux", "Stefan Johansson"],
      },
      {
        model: "Minardi M185",
        team: "Minardi",
        drivers: ["Pierluigi Martini"],
      },
      {
        model: "Zakspeed 841",
        team: "Zakspeed",
        drivers: ["Jonathan Palmer", "Christian Danner"],
      },
      {
        model: "Osella FA1G",
        team: "Osella",
        drivers: ["Piercarlo Ghinzani", "Huub Rothengatter"],
      },
      {
        model: "Tyrrell 014",
        team: "Tyrrell",
        drivers: [
          "Martin Brundle",
          "Stefan Bellof",
          "Ivan Capelli",
          "Philippe Streiff",
        ],
      },
      {
        model: "Renault RE60B",
        team: "Renault",
        drivers: ["Patrick Tambay", "Derek Warwick"],
      },
      {
        model: "Alfa Romeo 184T",
        team: "Alfa Romeo",
        drivers: ["Eddie Cheever", "Riccardo Patrese"],
      },
      { model: "Lola THL1", team: "Lola", drivers: ["Alan Jones"] },
    ],
  },
  {
    season: "1986",
    calendar: [
      {
        race: "Brésil",
        track: "Jacarepagua",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 98T",
            time: "1'25''501",
            moyenne: "211,829 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1h 39' 32''583s ",
            moyenne: "184.980 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1'33''546",
            moyenne: "193,612 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jerez de la Frontera",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 98T",
            time: "1'21''605",
            moyenne: "186,077 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 98T",
            time: "1h 48' 47''735s ",
            moyenne: "167.486 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11",
            time: "1'27''176",
            moyenne: "174,186 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 98T",
            time: "1'25''050",
            moyenne: "213,333 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2C",
            time: "1h 32' 28''408s ",
            moyenne: "196.208 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1'28''667",
            moyenne: "204,631 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2C",
            time: "1'22''627",
            moyenne: "144,999 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2C",
            time: "1h 55' 41''060s ",
            moyenne: "134.634 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2C",
            time: "1'26''607",
            moyenne: "138,335 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1'54''331",
            moyenne: "218,523 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11",
            time: "1h 27' 57''925s ",
            moyenne: "203.548 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2C",
            time: "1'59''282",
            moyenne: "209,453 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11",
            time: "1'24''118",
            moyenne: "188,735 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11",
            time: "1h 42' 26''415s ",
            moyenne: "178.225 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1'25''443",
            moyenne: "185,808 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Detroit",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 98T",
            time: "1'38''301",
            moyenne: "147,331 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 98T",
            time: "1h 51' 12''847s ",
            moyenne: "136.736 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1'41''233",
            moyenne: "143,064 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 98T",
            time: "1'06''526",
            moyenne: "206,337 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11",
            time: "1h 37' 19''272s ",
            moyenne: "188.062 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11",
            time: "1'09''993",
            moyenne: "196,117 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Brands Hatch",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1'06''961",
            moyenne: "226,179 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11",
            time: "1h 30' 38''471s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11",
            time: "1'09''593",
            moyenne: "217,625 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Keke Rosberg",
            car: "McLaren MP4/2C",
            time: "1'42''013",
            moyenne: "239,864 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1h 22' 08''263s ",
            moyenne: "218.463 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Benetton B186",
            time: "1'46''604",
            moyenne: "229,534 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 98T",
            time: "1'29''450",
            moyenne: "161,547 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "2h 00' 34''508s ",
            moyenne: "151.804 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1'31''001",
            moyenne: "158,794 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Teo Fabi",
            car: "Benetton B186",
            time: "1'23''549",
            moyenne: "256,032 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2C",
            time: "1h 21' 22''531s ",
            moyenne: "227.821 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Benetton B186",
            time: "1'29''444",
            moyenne: "239,157 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Teo Fabi",
            car: "Benetton B186",
            time: "1'24''078",
            moyenne: "248,341 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1h 17' 42''889s ",
            moyenne: "228.373 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Teo Fabi",
            car: "Benetton B186",
            time: "1'28''099",
            moyenne: "237,006 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 98T",
            time: "1'16''673",
            moyenne: "204,244 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11",
            time: "1h 37' 21''900s ",
            moyenne: "187.644 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11",
            time: "1'20''943",
            moyenne: "193,469 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 98T",
            time: "1'16''990",
            moyenne: "206,723 km/h",
          },
        ],
        winner: [
          {
            driver: "Gerhard Berger",
            car: "Benetton B186",
            time: "1h 33' 18''700s ",
            moyenne: "193.306 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1'19''360",
            moyenne: "200,549 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Adelaïde",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11",
            time: "1'18''403",
            moyenne: "173,519 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/2C",
            time: "1h 54' 20''388s ",
            moyenne: "162.609 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11",
            time: "1'20''787",
            moyenne: "168,398 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MP4/2C",
        team: "McLaren",
        drivers: ["Alain Prost", "Keke Rosberg"],
      },
      {
        model: "Tyrrell 014",
        team: "Tyrrell",
        drivers: ["Martin Brundle", "Philippe Streiff"],
      },
      {
        model: "Williams FW11",
        team: "Williams",
        drivers: ["Nigel Mansell", "Nelson Piquet"],
      },
      {
        model: "Brabham BT55",
        team: "Brabham",
        drivers: ["Riccardo Patrese", "Elio de Angelis", "Derek Warwick"],
      },
      { model: "RAM 03B", team: "RAM", drivers: ["Mike Thackwell"] },
      {
        model: "Lotus 98T",
        team: "Lotus",
        drivers: ["Johnny Dumfries", "Ayrton Senna"],
      },
      {
        model: "Zakspeed 861",
        team: "Zakspeed",
        drivers: ["Jonathan Palmer", "Huub Rothengatter"],
      },
      {
        model: "Lola THL1",
        team: "Lola",
        drivers: ["Alan Jones", "Patrick Tambay"],
      },
      {
        model: "Arrows A8",
        team: "Arrows",
        drivers: ["Marc Surer", "Thierry Boutsen", "Christian Danner"],
      },
      {
        model: "Benetton B186",
        team: "Benetton",
        drivers: ["Teo Fabi", "Gerhard Berger"],
      },
      {
        model: "Osella FA1F",
        team: "Osella",
        drivers: ["Piercarlo Ghinzani", "Allen Berg", "Alex Caffi"],
      },
      {
        model: "Osella FA1G",
        team: "Osella",
        drivers: ["Christian Danner", "Allen Berg", "Piercarlo Ghinzani"],
      },
      {
        model: "Minardi M185B",
        team: "Minardi",
        drivers: ["Andrea de Cesaris", "Alessandro Nannini"],
      },
      {
        model: "Ligier JS27",
        team: "Ligier",
        drivers: ["René Arnoux", "Jacques Laffite", "Philippe Alliot"],
      },
      {
        model: "Ferrari F186",
        team: "Ferrari",
        drivers: ["Michele Alboreto", "Stefan Johansson"],
      },
      {
        model: "Lola THL2",
        team: "Lola",
        drivers: ["Alan Jones", "Patrick Tambay", "Eddie Cheever"],
      },
      { model: "Ekström GP86-01", team: "Ekström", drivers: ["Mauro Baldi"] },
      {
        model: "Tyrrell 015",
        team: "Tyrrell",
        drivers: ["Martin Brundle", "Philippe Streiff"],
      },
      {
        model: "Osella FA1H",
        team: "Osella",
        drivers: ["Piercarlo Ghinzani", "Allen Berg"],
      },
      { model: "Brabham BT54", team: "Brabham", drivers: ["Riccardo Patrese"] },
      {
        model: "Arrows A9",
        team: "Arrows",
        drivers: ["Thierry Boutsen", "Christian Danner"],
      },
      {
        model: "Minardi M186",
        team: "Minardi",
        drivers: ["Andrea de Cesaris", "Alessandro Nannini"],
      },
      { model: "AGS JH21C", team: "AGS", drivers: ["Ivan Capelli"] },
    ],
  },
  {
    season: "1987",
    calendar: [
      {
        race: "Brésil",
        track: "Jacarepagua",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1'26''128",
            moyenne: "210,287 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/3",
            time: "1h 39' 45''141s ",
            moyenne: "184.592 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11B",
            time: "1'33''861",
            moyenne: "192,962 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 99T",
            time: "1'25''826",
            moyenne: "211,404 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1h 31' 24''076s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Teo Fabi",
            car: "Benetton B187",
            time: "1'29''246",
            moyenne: "203,303 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1'52''026",
            moyenne: "223,020 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/3",
            time: "1h 27' 03''217s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/3",
            time: "1'57''153",
            moyenne: "213,260 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1'23''039",
            moyenne: "144,279 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 99T",
            time: "1h 57' 54''085s ",
            moyenne: "132.102 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 99T",
            time: "1'27''685",
            moyenne: "136,635 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Detroit",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1'39''264",
            moyenne: "145,902 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 99T",
            time: "1h 50' 16''358s ",
            moyenne: "137.903 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 99T",
            time: "1'40''464",
            moyenne: "144,159 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1'06''454",
            moyenne: "206,561 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1h 37' 03''839s ",
            moyenne: "188.560 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11B",
            time: "1'09''548",
            moyenne: "197,372 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11B",
            time: "1'07''110",
            moyenne: "256,308 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1h 19' 11''780s ",
            moyenne: "235.291 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1'09''832",
            moyenne: "246,317 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1'42''616",
            moyenne: "238,454 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11B",
            time: "1h 21' 25''091s ",
            moyenne: "220.394 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1'45''716",
            moyenne: "231,462 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1'28''047",
            moyenne: "164,121 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11B",
            time: "1h 59' 26''793s ",
            moyenne: "153.239 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11B",
            time: "1'30''149",
            moyenne: "160,295 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Österreichring",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11B",
            time: "1'23''357",
            moyenne: "256,622 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1h 18' 44''898s ",
            moyenne: "235.421 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1'28''318",
            moyenne: "242,207 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11B",
            time: "1'23''460",
            moyenne: "250,180 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11B",
            time: "1h 14' 47''707s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "Lotus 99T",
            time: "1'26''796",
            moyenne: "240,564 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187",
            time: "1'17''620",
            moyenne: "201,752 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/3",
            time: "1h 37' 03''906s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187",
            time: "1'19''282",
            moyenne: "197,523 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jerez de la Frontera",
        pole: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11B",
            time: "1'22''461",
            moyenne: "184,145 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1h 49' 12''692s ",
            moyenne: "166.848 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187",
            time: "1'26''986",
            moyenne: "174,566 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1'18''383",
            moyenne: "203,049 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW11B",
            time: "1h 26' 24''207s ",
            moyenne: "193.411 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nelson Piquet",
            car: "Williams FW11B",
            time: "1'19''132",
            moyenne: "201,127 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187",
            time: "1'40''042",
            moyenne: "210,835 km/h",
          },
        ],
        winner: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187",
            time: "1h 32' 58''072s ",
            moyenne: "192.847 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/3",
            time: "1'43''844",
            moyenne: "203,116 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Adelaïde",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187",
            time: "1'17''267",
            moyenne: "176,070 km/h",
          },
        ],
        winner: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187",
            time: "1h 52' 56''144s ",
            moyenne: "ur la saison",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187",
            time: "1'20''416",
            moyenne: "169,175 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MP4/3",
        team: "McLaren",
        drivers: ["Alain Prost", "Stefan Johansson"],
      },
      {
        model: "Tyrrell DG016",
        team: "Tyrrell",
        drivers: ["Jonathan Palmer", "Philippe Streiff"],
      },
      {
        model: "Williams FW11B",
        team: "Williams",
        drivers: ["Nigel Mansell", "Nelson Piquet", "Riccardo Patrese"],
      },
      {
        model: "Brabham BT56",
        team: "Brabham",
        drivers: [
          "Riccardo Patrese",
          "Mauro Baldi",
          "Andrea de Cesaris",
          "Stefano Modena",
        ],
      },
      {
        model: "Zakspeed 861",
        team: "Zakspeed",
        drivers: ["Martin Brundle", "Christian Danner"],
      },
      {
        model: "Lotus 99T",
        team: "Lotus",
        drivers: ["Satoru Nakajima", "Ayrton Senna"],
      },
      {
        model: "AGS JH22",
        team: "AGS",
        drivers: ["Pascal Fabre", "Roberto Moreno"],
      },
      { model: "March 87P", team: "March", drivers: ["Ivan Capelli"] },
      {
        model: "Arrows A10",
        team: "Arrows",
        drivers: ["Derek Warwick", "Eddie Cheever"],
      },
      {
        model: "Benetton B187",
        team: "Benetton",
        drivers: ["Teo Fabi", "Thierry Boutsen"],
      },
      {
        model: "Osella FA1I",
        team: "Osella",
        drivers: ["Alex Caffi", "Franco Forini"],
      },
      {
        model: "Minardi M187",
        team: "Minardi",
        drivers: ["Adrian Campos", "Alessandro Nannini"],
      },
      { model: "Ligier JS29", team: "Ligier", drivers: ["René Arnoux"] },
      {
        model: "Ferrari F187",
        team: "Ferrari",
        drivers: ["Michele Alboreto", "Gerhard Berger"],
      },
      {
        model: "Lola LC87",
        team: "Lola",
        drivers: ["Philippe Alliot", "Yannick Dalmas"],
      },
      {
        model: "Zakspeed 871",
        team: "Zakspeed",
        drivers: ["Martin Brundle", "Christian Danner"],
      },
      { model: "March 871", team: "March", drivers: ["Ivan Capelli"] },
      { model: "Osella FA1G", team: "Osella", drivers: ["Gabriele Tarquini"] },
      {
        model: "Ligier JS29B",
        team: "Ligier",
        drivers: ["René Arnoux", "Piercarlo Ghinzani"],
      },
      {
        model: "Ligier JS29C",
        team: "Ligier",
        drivers: ["René Arnoux", "Piercarlo Ghinzani"],
      },
      {
        model: "Trussardi B186",
        team: "Trussardi",
        drivers: ["Emanuele Pirro", "Aguri Suzuki"],
      },
      { model: "Coloni FC187", team: "Coloni", drivers: ["Nicola Larini"] },
    ],
  },
  {
    season: "1988",
    calendar: [
      {
        race: "Brésil",
        track: "Jacarepagua",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'28''096",
            moyenne: "205,589 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1h 36' 06''857s ",
            moyenne: "de formation",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187/88C",
            time: "1'32''943",
            moyenne: "194,868 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'27''148",
            moyenne: "208,198 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1h 32' 41''264s ",
            moyenne: "195.754 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1'29''685",
            moyenne: "202,308 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'23''998",
            moyenne: "142,632 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1h 57' 17''077s ",
            moyenne: "132.797 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'26''321",
            moyenne: "138,794 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'17''468",
            moyenne: "205,447 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1h 30' 15''737s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1'18''608",
            moyenne: "202,468 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'21''681",
            moyenne: "193,484 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1h 39' 46''618s ",
            moyenne: "182.152 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'24''973",
            moyenne: "185,988 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Detroit",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'40''606",
            moyenne: "143,956 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1h 54' 56''035s ",
            moyenne: "132.310 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1'44''836",
            moyenne: "138,147 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1'07''589",
            moyenne: "203,092 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1h 37' 37''328s ",
            moyenne: "187.482 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1'11''737",
            moyenne: "191,349 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187/88C",
            time: "1'10''133",
            moyenne: "245,260 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1h 33' 16''367s ",
            moyenne: "199.782 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW12",
            time: "1'23''308",
            moyenne: "206,472 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'44''596",
            moyenne: "233,940 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1h 32' 54''188s ",
            moyenne: "193.148 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alessandro Nannini",
            car: "Benetton B188",
            time: "2'03''032",
            moyenne: "198,885 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'27''635",
            moyenne: "164,893 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1h 57' 47''081s ",
            moyenne: "155.401 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1'30''639",
            moyenne: "159,428 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'53''718",
            moyenne: "219,701 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1h 28' 00''549s ",
            moyenne: " championnat",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187/88C",
            time: "2'00''772",
            moyenne: "206,869 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'25''974",
            moyenne: "242,864 km/h",
          },
        ],
        winner: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187/88C",
            time: "1h 17' 39''744s ",
            moyenne: "228.528 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michele Alboreto",
            car: "Ferrari F187/88C",
            time: "1'29''070",
            moyenne: "234,422 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1'17''411",
            moyenne: "202,297 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1h 37' 40''958s ",
            moyenne: "187.034 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari F187/88C",
            time: "1'21''961",
            moyenne: "191,066 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jerez de la Frontera",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'24''067",
            moyenne: "180,627 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1h 48' 43''851s ",
            moyenne: "167.586 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1'27''845",
            moyenne: "172,859 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'41''853",
            moyenne: "207,087 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1h 33' 26''173s ",
            moyenne: "191.880 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'46''326",
            moyenne: "198,375 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Adelaïde",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/4",
            time: "1'17''748",
            moyenne: "175,027 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1h 53' 14''676s ",
            moyenne: "164.225 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/4",
            time: "1'21''216",
            moyenne: "167,553 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Lotus 100T",
        team: "Lotus",
        drivers: ["Nelson Piquet", "Satoru Nakajima"],
      },
      {
        model: "Tyrrell 017",
        team: "Tyrrell",
        drivers: ["Jonathan Palmer", "Julian Bailey"],
      },
      {
        model: "Williams FW12",
        team: "Williams",
        drivers: [
          "Nigel Mansell",
          "Riccardo Patrese",
          "Martin Brundle",
          "Jean-Louis Schlesser",
        ],
      },
      {
        model: "Zakspeed 881",
        team: "Zakspeed",
        drivers: ["Piercarlo Ghinzani", "Bernd Schneider"],
      },
      {
        model: "McLaren MP4/4",
        team: "McLaren",
        drivers: ["Alain Prost", "Ayrton Senna"],
      },
      { model: "AGS JH23", team: "AGS", drivers: ["Philippe Streiff"] },
      {
        model: "March 881",
        team: "March",
        drivers: ["Mauricio Gugelmin", "Ivan Capelli"],
      },
      {
        model: "Arrows A10B",
        team: "Arrows",
        drivers: ["Derek Warwick", "Eddie Cheever"],
      },
      {
        model: "Benetton B188",
        team: "Benetton",
        drivers: ["Alessandro Nannini", "Thierry Boutsen"],
      },
      { model: "Osella FA1I", team: "Osella", drivers: ["Nicola Larini"] },
      { model: "Rial ARC1", team: "Rial", drivers: ["Andrea de Cesaris"] },
      {
        model: "Minardi M188",
        team: "Minardi",
        drivers: ["Adrian Campos", "Luis Pérez-Sala", "Pierluigi Martini"],
      },
      {
        model: "Ligier JS31",
        team: "Ligier",
        drivers: ["René Arnoux", "Stefan Johansson"],
      },
      {
        model: "Ferrari F187/88C",
        team: "Ferrari",
        drivers: ["Michele Alboreto", "Gerhard Berger"],
      },
      {
        model: "Lola LC88",
        team: "Lola",
        drivers: [
          "Yannick Dalmas",
          "Philippe Alliot",
          "Aguri Suzuki",
          "Pierre-Henri Raphanel",
        ],
      },
      { model: "Coloni FC188", team: "Coloni", drivers: ["Gabriele Tarquini"] },
      {
        model: "Eurobrun ER188",
        team: "Eurobrun",
        drivers: ["Oscar Larrauri", "Stefano Modena"],
      },
      { model: "Dallara 3087", team: "Dallara", drivers: ["Alex Caffi"] },
      { model: "Osella FA1L", team: "Osella", drivers: ["Nicola Larini"] },
      { model: "Dallara 188", team: "Dallara", drivers: ["Alex Caffi"] },
      {
        model: "Coloni FC188B",
        team: "Coloni",
        drivers: ["Gabriele Tarquini"],
      },
    ],
  },
  {
    season: "1989",
    calendar: [
      {
        race: "Brésil",
        track: "Jacarepagua",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'25''302",
            moyenne: "212,323 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 640",
            time: "1h 38' 58''744s ",
            moyenne: "186.034 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW12C",
            time: "1'32''507",
            moyenne: "195,786 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'26''010",
            moyenne: "210,952 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1h 26' 51''245s ",
            moyenne: "on des temps",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/5",
            time: "1'26''795",
            moyenne: "209,044 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'22''308",
            moyenne: "145,561 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1h 53' 33''251s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/5",
            time: "1'25''501",
            moyenne: "140,125 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'17''876",
            moyenne: "204,371 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1h 35' 21''431s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 640",
            time: "1'20''420",
            moyenne: "197,906 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Phoenix",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'30''108",
            moyenne: "151,738 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/5",
            time: "2h 01' 33''133s ",
            moyenne: "140.606 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'33''969",
            moyenne: "145,503 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/5",
            time: "1'20''973",
            moyenne: "195,176 km/h",
          },
        ],
        winner: [
          {
            driver: "Thierry Boutsen",
            car: "Williams FW12C",
            time: "2h 01' 24''073s ",
            moyenne: "149.707 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jonathan Palmer",
            car: "Tyrrell 018",
            time: "1'31''925",
            moyenne: "171,923 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/5",
            time: "1'07''203",
            moyenne: "204,259 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/5",
            time: "1h 38' 29''411s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Mauricio Gugelmin",
            car: "March CG891",
            time: "1'12''090",
            moyenne: "190,412 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'09''099",
            moyenne: "249,034 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/5",
            time: "1h 19' 22''131s ",
            moyenne: "231.265 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 640",
            time: "1'12''017",
            moyenne: "238,944 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'42''300",
            moyenne: "239,191 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1h 21' 43''302s ",
            moyenne: "224.566 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'45''884",
            moyenne: "231,094 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW12C",
            time: "1'19''726",
            moyenne: "179,174 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 640",
            time: "1h 49' 38''650s ",
            moyenne: "167.197 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 640",
            time: "1'22''637",
            moyenne: "172,862 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'50''867",
            moyenne: "225,351 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1h 40' 54''196s ",
            moyenne: "181.576 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/5",
            time: "2'11''571",
            moyenne: "189,890 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'23''720",
            moyenne: "249,403 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/5",
            time: "1h 19' 27''550s ",
            moyenne: "232.119 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/5",
            time: "1'28''107",
            moyenne: "236,985 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'15''468",
            moyenne: "207,505 km/h",
          },
        ],
        winner: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari 640",
            time: "1h 36' 48''546s ",
            moyenne: "191.418 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari 640",
            time: "1'18''986",
            moyenne: "198,263 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jerez de la Frontera",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'20''291",
            moyenne: "189,122 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1h 47' 48''264s ",
            moyenne: "171.374 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'25''779",
            moyenne: "177,022 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'38''041",
            moyenne: "215,139 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "à 20 Tours : 1h 35m 03.980s",
            moyenne: " une chicâne",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "McLaren MP4/5",
            time: "1'43''506",
            moyenne: "203,780 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Adelaïde",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5",
            time: "1'16''665",
            moyenne: "177,500 km/h",
          },
        ],
        winner: [
          {
            driver: "Thierry Boutsen",
            car: "Williams FW13",
            time: "2h 00' 17''421s ",
            moyenne: "131.981 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Satoru Nakajima",
            car: "Lotus 101",
            time: "1'38''480",
            moyenne: "138,180 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MP4/5",
        team: "McLaren",
        drivers: ["Ayrton Senna", "Alain Prost"],
      },
      {
        model: "Tyrrell 017B",
        team: "Tyrrell",
        drivers: ["Jonathan Palmer", "Michele Alboreto"],
      },
      {
        model: "Williams FW12C",
        team: "Williams",
        drivers: ["Thierry Boutsen", "Riccardo Patrese"],
      },
      {
        model: "Brabham BT58",
        team: "Brabham",
        drivers: ["Martin Brundle", "Stefano Modena"],
      },
      {
        model: "Arrows A11",
        team: "Arrows",
        drivers: ["Derek Warwick", "Eddie Cheever", "Martin Donnelly"],
      },
      {
        model: "Lotus 101",
        team: "Lotus",
        drivers: ["Nelson Piquet", "Satoru Nakajima"],
      },
      {
        model: "March 881",
        team: "March",
        drivers: ["Mauricio Gugelmin", "Ivan Capelli"],
      },
      {
        model: "Osella FA1M",
        team: "Osella",
        drivers: ["Nicola Larini", "Piercarlo Ghinzani", "Enrico Bertaggia"],
      },
      {
        model: "Benetton B188",
        team: "Benetton",
        drivers: ["Alessandro Nannini", "Johnny Herbert", "Emanuele Pirro"],
      },
      {
        model: "Dallara 189",
        team: "Dallara",
        drivers: ["Alex Caffi", "Andrea de Cesaris"],
      },
      {
        model: "Minardi M188B",
        team: "Minardi",
        drivers: ["Pierluigi Martini", "Luis Pérez-Sala"],
      },
      {
        model: "Ligier JS33",
        team: "Ligier",
        drivers: ["René Arnoux", "Olivier Grouillard"],
      },
      {
        model: "Ferrari 640",
        team: "Ferrari",
        drivers: ["Nigel Mansell", "Gerhard Berger"],
      },
      {
        model: "Lola LC88B",
        team: "Lola",
        drivers: ["Yannick Dalmas", "Philippe Alliot"],
      },
      {
        model: "Coloni FC188B",
        team: "Coloni",
        drivers: ["Roberto Moreno", "Pierre-Henri Raphanel"],
      },
      {
        model: "Eurobrun ER188B",
        team: "Eurobrun",
        drivers: ["Gregor Foitek"],
      },
      {
        model: "Zakspeed 891",
        team: "Zakspeed",
        drivers: ["Bernd Schneider", "Aguri Suzuki"],
      },
      {
        model: "Onyx ORE-1",
        team: "Onyx",
        drivers: ["Stefan Johansson", "Bertrand Gachot", "Jyrki Järvilehto"],
      },
      {
        model: "Rial ARC2",
        team: "Rial",
        drivers: [
          "Christian Danner",
          "Volker Weidler",
          "Pierre-Henri Raphanel",
          "Gregor Foitek",
          "Bertrand Gachot",
        ],
      },
      {
        model: "AGS JH23B",
        team: "AGS",
        drivers: [
          "Philippe Streiff",
          "Joachim Winkelhock",
          "Gabriele Tarquini",
          "Yannick Dalmas",
        ],
      },
      {
        model: "Tyrrell 018",
        team: "Tyrrell",
        drivers: [
          "Jonathan Palmer",
          "Michele Alboreto",
          "Jean Alesi",
          "Johnny Herbert",
        ],
      },
      {
        model: "Lola LC89",
        team: "Lola",
        drivers: [
          "Yannick Dalmas",
          "Philippe Alliot",
          "Eric Bernard",
          "Michele Alboreto",
        ],
      },
      {
        model: "March CG891",
        team: "March",
        drivers: ["Ivan Capelli", "Mauricio Gugelmin"],
      },
      {
        model: "Minardi M189",
        team: "Minardi",
        drivers: ["Pierluigi Martini", "Luis Pérez-Sala", "Paolo Barilla"],
      },
      {
        model: "Coloni FC189",
        team: "Coloni",
        drivers: [
          "Roberto Moreno",
          "Pierre-Henri Raphanel",
          "Enrico Bertaggia",
        ],
      },
      {
        model: "Benetton B189",
        team: "Benetton",
        drivers: ["Alessandro Nannini", "Emanuele Pirro"],
      },
      {
        model: "AGS JH24",
        team: "AGS",
        drivers: ["Gabriele Tarquini", "Yannick Dalmas"],
      },
      {
        model: "Eurobrun ER189",
        team: "Eurobrun",
        drivers: ["Gregor Foitek", "Oscar Larrauri"],
      },
      {
        model: "Williams FW13",
        team: "Williams",
        drivers: ["Thierry Boutsen", "Riccardo Patrese"],
      },
    ],
  },
  {
    season: "1990",
    calendar: [
      {
        race: "Etats-Unis",
        track: "Phoenix",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/5B",
            time: "1'28''664",
            moyenne: "154,209 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1h 52' 32''829s ",
            moyenne: "145.782 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/5B",
            time: "1'31''050",
            moyenne: "150,168 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'17''277",
            moyenne: "201,483 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Ferrari 641",
            time: "1h 37' 21''258s ",
            moyenne: "189.252 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/5B",
            time: "1'19''899",
            moyenne: "194,871 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'23''220",
            moyenne: "218,025 km/h",
          },
        ],
        winner: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW13B",
            time: "1h 30' 55''478s ",
            moyenne: "202.876 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alessandro Nannini",
            car: "Benetton B190",
            time: "1'27''156",
            moyenne: "208,178 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'21''314",
            moyenne: "147,340 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1h 52' 46''982s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'24''468",
            moyenne: "141,838 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'20''399",
            moyenne: "196,570 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1h 42' 56''400s ",
            moyenne: "art anticipé",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/5B",
            time: "1'22''077",
            moyenne: "192,551 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/5B",
            time: "1'17''227",
            moyenne: "206,089 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Ferrari 641/2",
            time: "1h 32' 35''783s ",
            moyenne: "197.664 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Ferrari 641/2",
            time: "1'17''958",
            moyenne: "204,156 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 641/2",
            time: "1'04''402",
            moyenne: "213,142 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Ferrari 641/2",
            time: "1h 33' 29''606s ",
            moyenne: "195.761 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 641/2",
            time: "1'08''012",
            moyenne: "201,829 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 641/2",
            time: "1'07''428",
            moyenne: "255,206 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Ferrari 641/2",
            time: "1h 18' 30''999s ",
            moyenne: "233.775 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 641/2",
            time: "1'11''291",
            moyenne: "241,377 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'40''198",
            moyenne: "244,388 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1h 20' 41''164s ",
            moyenne: "227.616 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Thierry Boutsen",
            car: "Williams FW13B",
            time: "1'45''602",
            moyenne: "231,882 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Thierry Boutsen",
            car: "Williams FW13B",
            time: "1'17''919",
            moyenne: "183,329 km/h",
          },
        ],
        winner: [
          {
            driver: "Thierry Boutsen",
            car: "Williams FW13B",
            time: "1h 49' 30''597s ",
            moyenne: "167.402 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW13B",
            time: "1'22''058",
            moyenne: "174,082 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'50''365",
            moyenne: "226,376 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1h 26' 31''997s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Ferrari 641/2",
            time: "1'55''087",
            moyenne: "217,088 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'22''533",
            moyenne: "252,990 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1h 17' 57''878s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'26''254",
            moyenne: "242,076 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 641/2",
            time: "1'13''557",
            moyenne: "212,896 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 641/2",
            time: "1h 22' 11''014s ",
            moyenne: " un accident",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW13B",
            time: "1'18''306",
            moyenne: "199,985 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Jerez de la Frontera",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'18''387",
            moyenne: "193,716 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Ferrari 641/2",
            time: "1h 48' 01''461s ",
            moyenne: "171.025 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW13B",
            time: "1'24''513",
            moyenne: "179,674 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'36''996",
            moyenne: "217,456 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Benetton B190",
            time: "1h 34' 36''824s ",
            moyenne: "196.923 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW13B",
            time: "1'44''233",
            moyenne: "202,358 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Adelaïde",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/5B",
            time: "1'15''671",
            moyenne: "179,831 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Benetton B190",
            time: "1h 49' 44''570s ",
            moyenne: "167.399 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Ferrari 641/2",
            time: "1'18''203",
            moyenne: "174,009 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari 641",
        team: "Ferrari",
        drivers: ["Alain Prost", "Nigel Mansell"],
      },
      {
        model: "Tyrrell 018",
        team: "Tyrrell",
        drivers: ["Satoru Nakajima", "Jean Alesi"],
      },
      {
        model: "Williams FW13B",
        team: "Williams",
        drivers: ["Thierry Boutsen", "Riccardo Patrese"],
      },
      {
        model: "Brabham BT58",
        team: "Brabham",
        drivers: ["Gregor Foitek", "Stefano Modena"],
      },
      {
        model: "Arrows A11B",
        team: "Arrows",
        drivers: ["Michele Alboreto", "Alex Caffi", "Bernd Schneider"],
      },
      { model: "Arrows A11", team: "Arrows", drivers: ["Bernd Schneider"] },
      {
        model: "Lotus 102",
        team: "Lotus",
        drivers: ["Derek Warwick", "Martin Donnelly", "Johnny Herbert"],
      },
      { model: "Osella FA1M", team: "Osella", drivers: ["Olivier Grouillard"] },
      {
        model: "Leyton House CG901",
        team: "Leyton House",
        drivers: ["Mauricio Gugelmin", "Ivan Capelli"],
      },
      {
        model: "AGS JH24",
        team: "AGS",
        drivers: ["Gabriele Tarquini", "Yannick Dalmas"],
      },
      {
        model: "Benetton B189B",
        team: "Benetton",
        drivers: ["Alessandro Nannini", "Nelson Piquet"],
      },
      {
        model: "Dallara 190",
        team: "Dallara",
        drivers: ["Gianni Morbidelli", "Andrea de Cesaris", "Emanuele Pirro"],
      },
      {
        model: "Minardi M189",
        team: "Minardi",
        drivers: ["Pierluigi Martini", "Paolo Barilla"],
      },
      {
        model: "Ligier JS33B",
        team: "Ligier",
        drivers: ["Nicola Larini", "Philippe Alliot"],
      },
      {
        model: "McLaren MP4/5B",
        team: "McLaren",
        drivers: ["Ayrton Senna", "Gerhard Berger"],
      },
      {
        model: "Lola LC89B",
        team: "Lola",
        drivers: ["Eric Bernard", "Aguri Suzuki"],
      },
      { model: "Coloni FC189B", team: "Coloni", drivers: ["Bertrand Gachot"] },
      {
        model: "Eurobrun ER189B",
        team: "Eurobrun",
        drivers: ["Roberto Moreno", "Claudio Langes"],
      },
      {
        model: "Onyx ORE-1",
        team: "Onyx",
        drivers: ["Stefan Johansson", "Jyrki Järvilehto"],
      },
      {
        model: "Life L190",
        team: "Life",
        drivers: ["Gary Brabham", "Bruno Giacomelli"],
      },
      {
        model: "Ferrari 641/2",
        team: "Ferrari",
        drivers: ["Nigel Mansell", "Alain Prost"],
      },
      {
        model: "Tyrrell 019",
        team: "Tyrrell",
        drivers: ["Satoru Nakajima", "Jean Alesi"],
      },
      {
        model: "Brabham BT59",
        team: "Brabham",
        drivers: ["David Brabham", "Stefano Modena"],
      },
      {
        model: "Osella FA1M-E",
        team: "Osella",
        drivers: ["Olivier Grouillard"],
      },
      {
        model: "AGS JH25",
        team: "AGS",
        drivers: ["Gabriele Tarquini", "Yannick Dalmas"],
      },
      {
        model: "Benetton B190",
        team: "Benetton",
        drivers: ["Alessandro Nannini", "Nelson Piquet", "Roberto Moreno"],
      },
      {
        model: "Minardi M190",
        team: "Minardi",
        drivers: [
          "Paolo Barilla",
          "Marco Apicella",
          "Pierluigi Martini",
          "Gianni Morbidelli",
        ],
      },
      {
        model: "Lola 90",
        team: "Lola",
        drivers: ["Eric Bernard", "Aguri Suzuki"],
      },
      {
        model: "Onyx ORE-1B",
        team: "Onyx",
        drivers: ["Gregor Foitek", "Jyrki Järvilehto"],
      },
      { model: "Coloni FC189C", team: "Coloni", drivers: ["Bertrand Gachot"] },
      {
        model: "Monteverdi ORE-1B",
        team: "Monteverdi",
        drivers: ["Gregor Foitek", "Jyrki Järvilehto"],
      },
    ],
  },
  {
    season: "1991",
    calendar: [
      {
        race: "Etats-Unis",
        track: "Phoenix",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1'21''434",
            moyenne: "164,496 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "2h 00' 47''828s ",
            moyenne: " de 2 heures",
          },
        ],
        bestLap: [
          {
            driver: "Jean Alesi",
            car: "Ferrari 642",
            time: "1'26''758",
            moyenne: "154,402 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1'16''392",
            moyenne: "203,817 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1h 38' 28''128s ",
            moyenne: "187.110 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1'20''436",
            moyenne: "193,570 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1'21''877",
            moyenne: "221,601 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1h 35' 14''750s ",
            moyenne: "193.671 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/6",
            time: "1'26''531",
            moyenne: "209,682 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1'20''344",
            moyenne: "149,119 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1h 53' 02''334s ",
            moyenne: "137.785 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Ferrari 642",
            time: "1'24''368",
            moyenne: "142,006 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14",
            time: "1'19''837",
            moyenne: "199,757 km/h",
          },
        ],
        winner: [
          {
            driver: "Nelson Piquet",
            car: "Benetton B191",
            time: "1h 38' 51''490s ",
            moyenne: "185.520 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1'22''385",
            moyenne: "193,579 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14",
            time: "1'16''696",
            moyenne: "207,515 km/h",
          },
        ],
        winner: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14",
            time: "1h 29' 52''205s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1'16''788",
            moyenne: "207,267 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14",
            time: "1'14''559",
            moyenne: "206,221 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1h 38' 00''056s ",
            moyenne: "apeaux bleus",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1'19''168",
            moyenne: "194,215 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1'20''939",
            moyenne: "232,442 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1h 27' 35''479s ",
            moyenne: "211.209 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1'26''379",
            moyenne: "217,803 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1'37''087",
            moyenne: "252,219 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1h 19' 29''661s ",
            moyenne: "231.028 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14",
            time: "1'43''569",
            moyenne: "236,434 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1'16''147",
            moyenne: "187,595 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1h 49' 12''796s ",
            moyenne: "167.857 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Bertrand Gachot",
            car: "Jordan 191",
            time: "1'21''547",
            moyenne: "175,173 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1'47''811",
            moyenne: "231,739 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1h 27' 17''669s ",
            moyenne: "209.883 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Roberto Moreno",
            car: "Benetton B191",
            time: "1'55''161",
            moyenne: "216,948 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1'21''114",
            moyenne: "257,415 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1h 17' 54''319s ",
            moyenne: "236.749 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1'26''061",
            moyenne: "242,619 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14",
            time: "1'13''001",
            moyenne: "214,518 km/h",
          },
        ],
        winner: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14",
            time: "1h 35' 42''304s ",
            moyenne: "193.626 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1'18''179",
            moyenne: "200,310 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/6",
            time: "1'18''751",
            moyenne: "217,003 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14",
            time: "1h 38' 41''541s ",
            moyenne: "187.586 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14",
            time: "1'22''837",
            moyenne: "206,299 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/6",
            time: "1'34''700",
            moyenne: "222,919 km/h",
          },
        ],
        winner: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/6",
            time: "1h 32' 10''695s ",
            moyenne: "202.298 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1'41''532",
            moyenne: "207,919 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Adelaïde",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "1'14''041",
            moyenne: "183,790 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/6",
            time: "24'34''899 ",
            moyenne: "st attribuée",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/6",
            time: "1'41''141",
            moyenne: "134,545 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MP4/6",
        team: "McLaren",
        drivers: ["Ayrton Senna", "Gerhard Berger"],
      },
      {
        model: "Tyrrell 020",
        team: "Tyrrell",
        drivers: ["Satoru Nakajima", "Stefano Modena"],
      },
      {
        model: "Williams FW14",
        team: "Williams",
        drivers: ["Nigel Mansell", "Riccardo Patrese"],
      },
      {
        model: "Brabham BT59Y",
        team: "Brabham",
        drivers: ["Martin Brundle", "Mark Blundell"],
      },
      {
        model: "Footwork A11C",
        team: "Footwork",
        drivers: ["Michele Alboreto", "Alex Caffi"],
      },
      {
        model: "Lotus 102B",
        team: "Lotus",
        drivers: [
          "Mika Häkkinen",
          "Julian Bailey",
          "Johnny Herbert",
          "Michael Bartels",
        ],
      },
      {
        model: "Fondmetal FA1M-E",
        team: "Fondmetal",
        drivers: ["Olivier Grouillard"],
      },
      {
        model: "Leyton House CG911",
        team: "Leyton House",
        drivers: ["Mauricio Gugelmin", "Ivan Capelli", "Karl Wendlinger"],
      },
      {
        model: "AGS JH25B",
        team: "AGS",
        drivers: ["Gabriele Tarquini", "Stefan Johansson", "Fabrizio Barbazza"],
      },
      {
        model: "Benetton B190B",
        team: "Benetton",
        drivers: ["Roberto Moreno", "Nelson Piquet"],
      },
      {
        model: "Dallara 191",
        team: "Dallara",
        drivers: ["Emanuele Pirro", "Jyrki Järvilehto"],
      },
      {
        model: "Minardi M191",
        team: "Minardi",
        drivers: ["Pierluigi Martini", "Gianni Morbidelli", "Roberto Moreno"],
      },
      {
        model: "Ligier JS35",
        team: "Ligier",
        drivers: ["Thierry Boutsen", "Erik Comas"],
      },
      {
        model: "Ferrari 642",
        team: "Ferrari",
        drivers: ["Alain Prost", "Jean Alesi"],
      },
      {
        model: "Lola 91",
        team: "Lola",
        drivers: ["Eric Bernard", "Aguri Suzuki", "Bertrand Gachot"],
      },
      {
        model: "Coloni C4",
        team: "Coloni",
        drivers: ["Pedro Chaves", "Naoki Hattori"],
      },
      {
        model: "Jordan 191",
        team: "Jordan",
        drivers: [
          "Bertrand Gachot",
          "Andrea de Cesaris",
          "Michael Schumacher",
          "Roberto Moreno",
          "Alessandro Zanardi",
        ],
      },
      {
        model: "Lamborghini 291",
        team: "Lamborghini",
        drivers: ["Nicola Larini", "Eric van de Poele"],
      },
      {
        model: "Brabham BT60Y",
        team: "Brabham",
        drivers: ["Martin Brundle", "Mark Blundell"],
      },
      {
        model: "Footwork FA12",
        team: "Footwork",
        drivers: ["Alex Caffi", "Michele Alboreto", "Stefan Johansson"],
      },
      {
        model: "Fondmetal F1",
        team: "Fondmetal",
        drivers: ["Olivier Grouillard", "Gabriele Tarquini"],
      },
      {
        model: "Benetton B191",
        team: "Benetton",
        drivers: ["Roberto Moreno", "Nelson Piquet", "Michael Schumacher"],
      },
      {
        model: "Footwork FA12C",
        team: "Footwork",
        drivers: ["Michele Alboreto", "Stefan Johansson", "Alex Caffi"],
      },
      {
        model: "Ligier JS35B",
        team: "Ligier",
        drivers: ["Thierry Boutsen", "Erik Comas"],
      },
      {
        model: "Ferrari 643",
        team: "Ferrari",
        drivers: ["Alain Prost", "Jean Alesi", "Gianni Morbidelli"],
      },
      {
        model: "AGS JH27",
        team: "AGS",
        drivers: [
          "Gabriele Tarquini",
          "Fabrizio Barbazza",
          "Olivier Grouillard",
        ],
      },
    ],
  },
  {
    season: "1992",
    calendar: [
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'15''486",
            moyenne: "203,211 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1h 36' 45''320s ",
            moyenne: "190.248 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'17''578",
            moyenne: "197,731 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'16''346",
            moyenne: "208,467 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1h 31' 53''587s ",
            moyenne: "199.176 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/6B",
            time: "1'17''711",
            moyenne: "204,805 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'15''703",
            moyenne: "205,672 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1h 36' 51''856s ",
            moyenne: "190.209 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14B",
            time: "1'19''490",
            moyenne: "195,874 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'20''190",
            moyenne: "213,109 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1h 56' 10''674s ",
            moyenne: "159.353 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'42''503",
            moyenne: "166,719 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'21''842",
            moyenne: "221,695 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1h 28' 40''927s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14B",
            time: "1'26''100",
            moyenne: "210,732 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'19''495",
            moyenne: "150,711 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/7A",
            time: "1h 50' 59''372s ",
            moyenne: "140.329 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'21''598",
            moyenne: "146,827 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/7A",
            time: "1'19''775",
            moyenne: "199,912 km/h",
          },
        ],
        winner: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/7A",
            time: "1h 37' 08''299s ",
            moyenne: "188.805 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/7A",
            time: "1'22''325",
            moyenne: "193,720 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'13''864",
            moyenne: "207,137 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1h 38' 08''459s ",
            moyenne: "on des temps",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'17''070",
            moyenne: "198,521 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'18''965",
            moyenne: "238,252 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1h 25' 42''991s ",
            moyenne: "215.828 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'22''539",
            moyenne: "227,936 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'37''960",
            moyenne: "250,449 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1h 18' 22''032s ",
            moyenne: "234.798 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14B",
            time: "1'41''591",
            moyenne: "241,498 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14B",
            time: "1'15''476",
            moyenne: "189,263 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/7A",
            time: "1h 46' 19''216s ",
            moyenne: "172.424 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'18''308",
            moyenne: "182,418 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'50''545",
            moyenne: "227,115 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B192",
            time: "1h 36' 10''721s ",
            moyenne: "191.429 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B192",
            time: "1'53''791",
            moyenne: "220,636 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'22''221",
            moyenne: "253,950 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/7A",
            time: "1h 18' 15''349s ",
            moyenne: "235.689 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'26''119",
            moyenne: "242,455 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'13''041",
            moyenne: "214,400 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1h 34' 46''659s ",
            moyenne: "195.521 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/7A",
            time: "1'16''272",
            moyenne: "205,318 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'37''360",
            moyenne: "216,828 km/h",
          },
        ],
        winner: [
          {
            driver: "Riccardo Patrese",
            car: "Williams FW14B",
            time: "1h 33' 09''553s ",
            moyenne: "200.168 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'40''646",
            moyenne: "209,749 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Adelaïde",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW14B",
            time: "1'13''732",
            moyenne: "184,560 km/h",
          },
        ],
        winner: [
          {
            driver: "Gerhard Berger",
            car: "McLaren MP4/7A",
            time: "1h 46' 54''786s ",
            moyenne: "171.829 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B192",
            time: "1'16''078",
            moyenne: "178,869 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MP4/6B",
        team: "McLaren",
        drivers: ["Ayrton Senna", "Gerhard Berger"],
      },
      {
        model: "Tyrrell 020B",
        team: "Tyrrell",
        drivers: ["Olivier Grouillard", "Andrea de Cesaris"],
      },
      {
        model: "Williams FW14B",
        team: "Williams",
        drivers: ["Nigel Mansell", "Riccardo Patrese"],
      },
      {
        model: "Brabham BT60B",
        team: "Brabham",
        drivers: [
          "Eric van de Poele",
          "Giovanna Amati",
          "Damon Hill",
          "Julian Bailey",
        ],
      },
      {
        model: "Footwork FA13",
        team: "Footwork",
        drivers: ["Michele Alboreto", "Aguri Suzuki"],
      },
      {
        model: "Lotus 102D",
        team: "Lotus",
        drivers: ["Mika Häkkinen", "Johnny Herbert"],
      },
      {
        model: "Fondmetal GR01",
        team: "Fondmetal",
        drivers: ["Andrea Chiesa", "Gabriele Tarquini"],
      },
      {
        model: "March CG911B",
        team: "March",
        drivers: [
          "Karl Wendlinger",
          "Paul Belmondo",
          "Emanuele Naspetti",
          "Jan Lammers",
        ],
      },
      {
        model: "Benetton B191B",
        team: "Benetton",
        drivers: ["Michael Schumacher", "Martin Brundle"],
      },
      {
        model: "Dallara 192",
        team: "Dallara",
        drivers: ["Jyrki Järvilehto", "Pierluigi Martini"],
      },
      {
        model: "Minardi M191B",
        team: "Minardi",
        drivers: ["Christian Fittipaldi", "Gianni Morbidelli"],
      },
      {
        model: "Ligier JS37",
        team: "Ligier",
        drivers: ["Thierry Boutsen", "Erik Comas"],
      },
      {
        model: "Ferrari F92A",
        team: "Ferrari",
        drivers: ["Jean Alesi", "Ivan Capelli", "Nicola Larini"],
      },
      {
        model: "Venturi LC92",
        team: "Venturi",
        drivers: ["Bertrand Gachot", "Ukyo Katayama"],
      },
      {
        model: "Jordan 192",
        team: "Jordan",
        drivers: ["Stefano Modena", "Mauricio Gugelmin"],
      },
      {
        model: "Andrea Moda C4B",
        team: "Andrea Moda",
        drivers: ["Alex Caffi", "Enrico Bertaggia"],
      },
      {
        model: "Andrea Moda S921",
        team: "Andrea Moda",
        drivers: [
          "Alex Caffi",
          "Enrico Bertaggia",
          "Roberto Moreno",
          "Perry McCarthy",
        ],
      },
      {
        model: "McLaren MP4/7A",
        team: "McLaren",
        drivers: ["Ayrton Senna", "Gerhard Berger"],
      },
      {
        model: "Benetton B192",
        team: "Benetton",
        drivers: ["Michael Schumacher", "Martin Brundle"],
      },
      {
        model: "Lotus 107",
        team: "Lotus",
        drivers: ["Johnny Herbert", "Mika Häkkinen"],
      },
      {
        model: "Minardi M192",
        team: "Minardi",
        drivers: [
          "Christian Fittipaldi",
          "Gianni Morbidelli",
          "Alessandro Zanardi",
        ],
      },
      {
        model: "Fondmetal GR02",
        team: "Fondmetal",
        drivers: ["Gabriele Tarquini", "Andrea Chiesa", "Eric van de Poele"],
      },
      {
        model: "Ferrari F92AT",
        team: "Ferrari",
        drivers: ["Jean Alesi", "Ivan Capelli"],
      },
    ],
  },
  {
    season: "1993",
    calendar: [
      {
        race: "Afrique du sud",
        track: "Kyalami",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'15''696",
            moyenne: "202,647 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1h 38' 45''082s ",
            moyenne: "186.403 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'19''492",
            moyenne: "192,970 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'15''866",
            moyenne: "205,230 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/8",
            time: "1h 51' 15''485s ",
            moyenne: "165.601 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B193",
            time: "1'20''024",
            moyenne: "194,567 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Donington",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'10''458",
            moyenne: "205,552 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/8",
            time: "1h 50' 46''570s ",
            moyenne: "165.603 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/8",
            time: "1'18''029",
            moyenne: "185,608 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'22''070",
            moyenne: "221,080 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1h 33' 20''413s ",
            moyenne: "197.625 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'26''128",
            moyenne: "210,663 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'17''809",
            moyenne: "219,630 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1h 32' 27''685s ",
            moyenne: "200.227 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B193B",
            time: "1'20''989",
            moyenne: "211,006 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'20''557",
            moyenne: "148,725 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/8",
            time: "1h 52' 10''947s ",
            moyenne: "138.837 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'23''604",
            moyenne: "143,304 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'18''987",
            moyenne: "201,907 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1h 36' 41''822s ",
            moyenne: "189.667 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B193B",
            time: "1'21''500",
            moyenne: "195,681 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW15C",
            time: "1'14''382",
            moyenne: "205,695 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1h 38' 35''241s ",
            moyenne: "186.231 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B193B",
            time: "1'19''256",
            moyenne: "193,045 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'19''006",
            moyenne: "238,129 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1h 25' 38''189s ",
            moyenne: "216.030 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW15C",
            time: "1'22''515",
            moyenne: "228,002 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'38''748",
            moyenne: "248,451 km/h",
          },
        ],
        winner: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1h 18' 40''885s ",
            moyenne: "233.861 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B193B",
            time: "1'41''859",
            moyenne: "240,862 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'14''631",
            moyenne: "191,406 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW15C",
            time: "1h 47' 39''098s ",
            moyenne: "170.292 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'19''633",
            moyenne: "179,383 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'47''571",
            moyenne: "233,394 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW15C",
            time: "1h 24' 32''124s ",
            moyenne: "217.795 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'51''095",
            moyenne: "225,990 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'21''179",
            moyenne: "257,209 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW15C",
            time: "1h 17' 07''509s ",
            moyenne: "239.144 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW15C",
            time: "1'23''575",
            moyenne: "249,835 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW15C",
            time: "1'11''494",
            moyenne: "219,039 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B193B",
            time: "1h 32' 46''309s ",
            moyenne: "199.748 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW15C",
            time: "1'14''859",
            moyenne: "209,193 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'37''154",
            moyenne: "217,288 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/8",
            time: "1h 40' 27''912s ",
            moyenne: "185.612 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alain Prost",
            car: "Williams FW15C",
            time: "1'41''176",
            moyenne: "208,650 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Adelaïde",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/8",
            time: "1'13''371",
            moyenne: "185,468 km/h",
          },
        ],
        winner: [
          {
            driver: "Ayrton Senna",
            car: "McLaren MP4/8",
            time: "1h 43' 27''476s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW15C",
            time: "1'15''381",
            moyenne: "180,523 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Williams FW15C",
        team: "Williams",
        drivers: ["Damon Hill", "Alain Prost"],
      },
      {
        model: "Tyrrell 020C",
        team: "Tyrrell",
        drivers: ["Ukyo Katayama", "Andrea de Cesaris"],
      },
      {
        model: "Benetton B193",
        team: "Benetton",
        drivers: ["Michael Schumacher", "Riccardo Patrese"],
      },
      {
        model: "McLaren MP4/8",
        team: "McLaren",
        drivers: ["Michael Andretti", "Ayrton Senna", "Mika Häkkinen"],
      },
      {
        model: "Footwork FA13B",
        team: "Footwork",
        drivers: ["Derek Warwick", "Aguri Suzuki"],
      },
      {
        model: "Lotus 107B",
        team: "Lotus",
        drivers: ["Alessandro Zanardi", "Johnny Herbert", "Pedro Lamy"],
      },
      {
        model: "Jordan 193",
        team: "Jordan",
        drivers: [
          "Rubens Barrichello",
          "Ivan Capelli",
          "Thierry Boutsen",
          "Marco Apicella",
          "Emanuele Naspetti",
          "Eddie Irvine",
        ],
      },
      {
        model: "March CG911C",
        team: "March",
        drivers: ["Jean-Marc Gounon", "Jan Lammers"],
      },
      {
        model: "Larrousse LH93",
        team: "Larrousse",
        drivers: ["Philippe Alliot", "Erik Comas", "Toshio Suzuki"],
      },
      {
        model: "Lola T93/30",
        team: "Lola",
        drivers: ["Michele Alboreto", "Luca Badoer"],
      },
      {
        model: "Minardi M193",
        team: "Minardi",
        drivers: [
          "Christian Fittipaldi",
          "Fabrizio Barbazza",
          "Pierluigi Martini",
          "Jean-Marc Gounon",
        ],
      },
      {
        model: "Ligier JS39",
        team: "Ligier",
        drivers: ["Martin Brundle", "Mark Blundell"],
      },
      {
        model: "Ferrari F93A",
        team: "Ferrari",
        drivers: ["Jean Alesi", "Gerhard Berger"],
      },
      {
        model: "Sauber C12",
        team: "Sauber",
        drivers: ["Karl Wendlinger", "Jyrki Järvilehto"],
      },
      {
        model: "Benetton B193B",
        team: "Benetton",
        drivers: ["Michael Schumacher", "Riccardo Patrese"],
      },
      {
        model: "Footwork FA14",
        team: "Footwork",
        drivers: ["Derek Warwick", "Aguri Suzuki"],
      },
      {
        model: "Tyrrell 021",
        team: "Tyrrell",
        drivers: ["Andrea de Cesaris", "Ukyo Katayama"],
      },
    ],
  },
  {
    season: "1994",
    calendar: [
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Williams FW16",
            time: "1'15''962",
            moyenne: "204,971 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1h 35' 38''759s ",
            moyenne: "192.632 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'18''455",
            moyenne: "198,458 km/h",
          },
        ],
      },
      {
        race: "Pacific",
        track: "Aïda",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Williams FW16",
            time: "1'10''218",
            moyenne: "189,849 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1h 46' 01''693s ",
            moyenne: "173.925 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'14''023",
            moyenne: "180,090 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Ayrton Senna",
            car: "Williams FW16",
            time: "1'21''548",
            moyenne: "222,495 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1h 28' 28''642s ",
            moyenne: "on des temps",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW16",
            time: "1'24''335",
            moyenne: "215,142 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'18''560",
            moyenne: "152,505 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1h 49' 55''372s ",
            moyenne: "141.691 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'21''076",
            moyenne: "147,772 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'21''908",
            moyenne: "208,639 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW16",
            time: "1h 36' 14''374s ",
            moyenne: "192.367 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'25''155",
            moyenne: "200,683 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'26''178",
            moyenne: "185,894 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1h 44' 31''887s ",
            moyenne: "176.244 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'28''927",
            moyenne: "180,148 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW16",
            time: "1'16''282",
            moyenne: "200,572 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1h 38' 35''704s ",
            moyenne: "186.216 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW16",
            time: "1'19''678",
            moyenne: "192,023 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW16",
            time: "1'24''960",
            moyenne: "214,280 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW16",
            time: "1h 30' 03''640s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW16",
            time: "1'27''100",
            moyenne: "209,015 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari 412T1B",
            time: "1'43''582",
            moyenne: "237,134 km/h",
          },
        ],
        winner: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari 412T1B",
            time: "1h 22' 37''272s ",
            moyenne: "222.971 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "Williams FW16B",
            time: "1'46''211",
            moyenne: "231,264 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'18''258",
            moyenne: "182,535 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1h 48' 00''185s ",
            moyenne: "169.737 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'20''881",
            moyenne: "176,615 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Jordan 194",
            time: "2'21''163",
            moyenne: "178,543 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "à 33 Tours : 1h 28m 33.508s",
            moyenne: "de fond plat",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW16B",
            time: "1'57''117",
            moyenne: "215,200 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Jean Alesi",
            car: "Ferrari 412T1B",
            time: "1'23''844",
            moyenne: "249,034 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW16B",
            time: "1h 18' 02''754s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW16B",
            time: "1'25''930",
            moyenne: "242,988 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari 412T1B",
            time: "1'20''608",
            moyenne: "194,720 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW16B",
            time: "1h 41' 10''165s ",
            moyenne: "183.589 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "Williams FW16B",
            time: "1'22''446",
            moyenne: "190,379 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Jerez de la Frontera",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'22''762",
            moyenne: "192,610 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1h 40' 26''689s ",
            moyenne: "182.507 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'25''040",
            moyenne: "187,451 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'37''209",
            moyenne: "217,165 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW16B",
            time: "1h 55' 53''532s ",
            moyenne: "on des temps",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW16B",
            time: "1'56''597",
            moyenne: "181,054 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Adelaïde",
        pole: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW16B",
            time: "1'16''179",
            moyenne: "178,632 km/h",
          },
        ],
        winner: [
          {
            driver: "Nigel Mansell",
            car: "Williams FW16B",
            time: "1h 47' 51''480s ",
            moyenne: "170.324 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B194",
            time: "1'17''140",
            moyenne: "176,407 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Williams FW16",
        team: "Williams",
        drivers: [
          "Damon Hill",
          "Ayrton Senna",
          "David Coulthard",
          "Nigel Mansell",
        ],
      },
      {
        model: "Tyrrell 022",
        team: "Tyrrell",
        drivers: ["Ukyo Katayama", "Mark Blundell"],
      },
      {
        model: "Benetton B194",
        team: "Benetton",
        drivers: [
          "Michael Schumacher",
          "Jos Verstappen",
          "Jyrki Järvilehto",
          "Johnny Herbert",
        ],
      },
      {
        model: "McLaren MP4/9",
        team: "McLaren",
        drivers: ["Mika Häkkinen", "Martin Brundle", "Philippe Alliot"],
      },
      {
        model: "Footwork FA15",
        team: "Footwork",
        drivers: ["Christian Fittipaldi", "Gianni Morbidelli"],
      },
      {
        model: "Lotus 107C",
        team: "Lotus",
        drivers: ["Pedro Lamy", "Johnny Herbert", "Alessandro Zanardi"],
      },
      {
        model: "Jordan 194",
        team: "Jordan",
        drivers: [
          "Rubens Barrichello",
          "Eddie Irvine",
          "Aguri Suzuki",
          "Andrea de Cesaris",
        ],
      },
      {
        model: "Larrousse LH94",
        team: "Larrousse",
        drivers: [
          "Olivier Beretta",
          "Erik Comas",
          "Philippe Alliot",
          "Yannick Dalmas",
          "Hideki Noda",
          "Jean-Denis Delétraz",
        ],
      },
      {
        model: "Minardi M193B",
        team: "Minardi",
        drivers: ["Pierluigi Martini", "Michele Alboreto"],
      },
      {
        model: "Ligier JS39B",
        team: "Ligier",
        drivers: [
          "Eric Bernard",
          "Olivier Panis",
          "Johnny Herbert",
          "Franck Lagorce",
        ],
      },
      {
        model: "Ferrari 412T1",
        team: "Ferrari",
        drivers: ["Jean Alesi", "Gerhard Berger", "Nicola Larini"],
      },
      {
        model: "Sauber C13",
        team: "Sauber",
        drivers: [
          "Karl Wendlinger",
          "Heinz-Harald Frentzen",
          "Andrea de Cesaris",
          "Jyrki Järvilehto",
        ],
      },
      {
        model: "Simtek S941",
        team: "Simtek",
        drivers: [
          "David Brabham",
          "Roland Ratzenberger",
          "Andrea Montermini",
          "Jean-Marc Gounon",
          "Domenico Schiattarella",
          "Taki Inoue",
        ],
      },
      {
        model: "Pacific PR01",
        team: "Pacific",
        drivers: ["Paul Belmondo", "Bertrand Gachot"],
      },
      {
        model: "Lotus 109",
        team: "Lotus",
        drivers: [
          "Johnny Herbert",
          "Alessandro Zanardi",
          "Philippe Adams",
          "Eric Bernard",
          "Mika Salo",
        ],
      },
      {
        model: "Minardi M194",
        team: "Minardi",
        drivers: ["Pierluigi Martini", "Michele Alboreto"],
      },
      {
        model: "Ferrari 412T1B",
        team: "Ferrari",
        drivers: ["Jean Alesi", "Gerhard Berger"],
      },
      {
        model: "Williams FW16B",
        team: "Williams",
        drivers: ["Damon Hill", "David Coulthard", "Nigel Mansell"],
      },
    ],
  },
  {
    season: "1995",
    calendar: [
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1'20''081",
            moyenne: "194,428 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1h 38' 34''154s ",
            moyenne: "non conforme",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'20''921",
            moyenne: "192,410 km/h",
          },
        ],
      },
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "David Coulthard",
            car: "Williams FW17",
            time: "1'53''241",
            moyenne: "135,396 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1h 53' 14''532s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'30''522",
            moyenne: "169,378 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'27''274",
            moyenne: "201,916 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1h 41' 42''552s ",
            moyenne: "181.922 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari 412T2",
            time: "1'29''568",
            moyenne: "196,744 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'21''452",
            moyenne: "208,923 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1h 34' 20''507s ",
            moyenne: "195.410 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1'24''531",
            moyenne: "201,313 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1'21''952",
            moyenne: "146,193 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1h 53' 11''258s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Jean Alesi",
            car: "Ferrari 412T2",
            time: "1'24''621",
            moyenne: "141,582 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'27''661",
            moyenne: "181,928 km/h",
          },
        ],
        winner: [
          {
            driver: "Jean Alesi",
            car: "Ferrari 412T2",
            time: "1h 44' 54''171s ",
            moyenne: " de la piste",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'29''174",
            moyenne: "178,841 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1'17''225",
            moyenne: "198,122 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1h 38' 28''429s ",
            moyenne: "186.445 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'20''218",
            moyenne: "190,730 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1'28''124",
            moyenne: "206,586 km/h",
          },
        ],
        winner: [
          {
            driver: "Johnny Herbert",
            car: "Benetton B195",
            time: "1h 34' 35''093s ",
            moyenne: "195.683 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1'29''752",
            moyenne: "202,839 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1'44''385",
            moyenne: "235,310 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1h 22' 56''043s ",
            moyenne: "222.130 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'48''824",
            moyenne: "225,711 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1'16''982",
            moyenne: "185,560 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1h 46' 25''721s ",
            moyenne: "172.248 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW17",
            time: "1'20''247",
            moyenne: "178,010 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari 412T2",
            time: "1'54''392",
            moyenne: "219,477 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1h 36' 47''875s ",
            moyenne: "190.204 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "Williams FW17",
            time: "1'53''412",
            moyenne: "221,373 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "David Coulthard",
            car: "Williams FW17",
            time: "1'24''462",
            moyenne: "245,933 km/h",
          },
        ],
        winner: [
          {
            driver: "Johnny Herbert",
            car: "Benetton B195",
            time: "1h 18' 27''916s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Ferrari 412T2",
            time: "1'26''419",
            moyenne: "240,364 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "David Coulthard",
            car: "Williams FW17",
            time: "1'20''537",
            moyenne: "194,892 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "Williams FW17",
            time: "1h 41' 52''145s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "Williams FW17",
            time: "1'23''220",
            moyenne: "188,609 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "David Coulthard",
            car: "Williams FW17B",
            time: "1'18''738",
            moyenne: "208,306 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1h 39' 59''044s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'21''180",
            moyenne: "202,040 km/h",
          },
        ],
      },
      {
        race: "Pacific",
        track: "Aïda",
        pole: [
          {
            driver: "David Coulthard",
            car: "Williams FW17B",
            time: "1'14''013",
            moyenne: "180,114 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1h 48' 49''972s ",
            moyenne: "169.443 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'16''374",
            moyenne: "174,546 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'38''023",
            moyenne: "215,362 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1h 36' 52''930s ",
            moyenne: "192.476 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Benetton B195",
            time: "1'42''976",
            moyenne: "205,003 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Adelaïde",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW17B",
            time: "1'15''505",
            moyenne: "180,226 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW17B",
            time: "1h 49' 15''946s ",
            moyenne: "168.130 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW17B",
            time: "1'17''943",
            moyenne: "174,589 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Benetton B195",
        team: "Benetton",
        drivers: ["Michael Schumacher", "Johnny Herbert"],
      },
      {
        model: "Tyrrell 023",
        team: "Tyrrell",
        drivers: ["Ukyo Katayama", "Mika Salo", "Gabriele Tarquini"],
      },
      {
        model: "Williams FW17",
        team: "Williams",
        drivers: ["Damon Hill", "David Coulthard"],
      },
      {
        model: "McLaren MP4/10",
        team: "McLaren",
        drivers: ["Mark Blundell", "Mika Häkkinen"],
      },
      {
        model: "Footwork FA16",
        team: "Footwork",
        drivers: ["Gianni Morbidelli", "Taki Inoue", "Max Papis"],
      },
      {
        model: "Simtek S951",
        team: "Simtek",
        drivers: ["Domenico Schiattarella", "Jos Verstappen", "Hideki Noda"],
      },
      {
        model: "Jordan 195",
        team: "Jordan",
        drivers: ["Rubens Barrichello", "Eddie Irvine"],
      },
      {
        model: "Pacific PR02",
        team: "Pacific",
        drivers: [
          "Bertrand Gachot",
          "Andrea Montermini",
          "Paul Belmondo",
          "Giovanni Lavaggi",
          "Jean-Denis Delétraz",
          "Katsumi YAMAMOTO",
          "Oliver GAVIN",
        ],
      },
      {
        model: "Forti FG01-95",
        team: "Forti",
        drivers: ["Pedro Diniz", "Roberto Moreno", "Hideki Noda"],
      },
      {
        model: "Minardi M195",
        team: "Minardi",
        drivers: ["Pierluigi Martini", "Luca Badoer", "Pedro Lamy"],
      },
      {
        model: "Ligier JS41",
        team: "Ligier",
        drivers: ["Aguri Suzuki", "Olivier Panis", "Martin Brundle"],
      },
      {
        model: "Ferrari 412T2",
        team: "Ferrari",
        drivers: ["Jean Alesi", "Gerhard Berger"],
      },
      {
        model: "Sauber C14",
        team: "Sauber",
        drivers: [
          "Karl Wendlinger",
          "Heinz-Harald Frentzen",
          "Jean-Christophe Boullion",
        ],
      },
      {
        model: "McLaren MP4/10B",
        team: "McLaren",
        drivers: [
          "Nigel Mansell",
          "Mark Blundell",
          "Mika Häkkinen",
          "Jan Magnussen",
        ],
      },
      {
        model: "Larrousse LH95",
        team: "Larrousse",
        drivers: ["Christophe Bouchut", "Eric Bernard"],
      },
      {
        model: "McLaren MP4/10C",
        team: "McLaren",
        drivers: ["Mark Blundell", "Mika Häkkinen"],
      },
      {
        model: "Williams FW17B",
        team: "Williams",
        drivers: ["Damon Hill", "David Coulthard"],
      },
    ],
  },
  {
    season: "1996",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1'32''371",
            moyenne: "206,636 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1h 32' 50''491s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1'33''421",
            moyenne: "204,314 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'18''111",
            moyenne: "199,332 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1h 49' 52''976s ",
            moyenne: "167.674 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'21''547",
            moyenne: "190,933 km/h",
          },
        ],
      },
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'30''346",
            moyenne: "169,708 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1h 54' 55''322s ",
            moyenne: "160.099 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jean Alesi",
            car: "Benetton B196",
            time: "1'29''413",
            moyenne: "171,478 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'18''941",
            moyenne: "207,770 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1h 33' 26''473s ",
            moyenne: "196.007 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'21''363",
            moyenne: "201,585 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310",
            time: "1'26''890",
            moyenne: "202,684 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1h 35' 26''156s ",
            moyenne: "193.761 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'28''931",
            moyenne: "198,032 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310",
            time: "1'20''356",
            moyenne: "149,097 km/h",
          },
        ],
        winner: [
          {
            driver: "Olivier Panis",
            car: "Ligier JS43",
            time: "2h 00' 45''629s ",
            moyenne: " de 2 heures",
          },
        ],
        bestLap: [
          {
            driver: "Jean Alesi",
            car: "Benetton B196",
            time: "1'25''205",
            moyenne: "140,611 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'20''650",
            moyenne: "211,001 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310",
            time: "1h 59' 49''307s ",
            moyenne: "153.856 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310",
            time: "1'45''517",
            moyenne: "161,274 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'21''059",
            moyenne: "196,346 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1h 36' 03''465s ",
            moyenne: "190.541 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1'21''916",
            moyenne: "194,292 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310",
            time: "1'15''989",
            moyenne: "201,345 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1h 36' 28''795s ",
            moyenne: "190.299 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1'18''610",
            moyenne: "194,632 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'26''875",
            moyenne: "210,178 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1h 33' 00''874s ",
            moyenne: "199.576 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1'29''288",
            moyenne: "204,498 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'43''912",
            moyenne: "236,381 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1h 21' 43''417s ",
            moyenne: "225.420 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'46''504",
            moyenne: "230,628 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310",
            time: "1'17''129",
            moyenne: "185,207 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1h 46' 21''134s ",
            moyenne: "172.372 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'20''093",
            moyenne: "178,353 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1'50''574",
            moyenne: "226,860 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310",
            time: "1h 28' 15''125s ",
            moyenne: "208.443 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Benetton B196",
            time: "1'53''067",
            moyenne: "221,858 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'24''204",
            moyenne: "246,687 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310",
            time: "1h 17' 43''632s ",
            moyenne: "236.064 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310",
            time: "1'26''110",
            moyenne: "241,226 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Estoril",
        pole: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1'20''330",
            moyenne: "195,394 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1h 40' 22''915s ",
            moyenne: "182.423 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1'22''873",
            moyenne: "189,398 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1'38''909",
            moyenne: "213,433 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Williams FW18",
            time: "1h 32' 33''791s ",
            moyenne: "197.656 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW18",
            time: "1'44''043",
            moyenne: "202,901 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari F310",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Eddie Irvine"],
      },
      {
        model: "Benetton B196",
        team: "Benetton",
        drivers: ["Jean Alesi", "Gerhard Berger"],
      },
      {
        model: "Williams FW18",
        team: "Williams",
        drivers: ["Damon Hill", "Jacques Villeneuve"],
      },
      {
        model: "McLaren MP4/11",
        team: "McLaren",
        drivers: ["Mika Häkkinen", "David Coulthard"],
      },
      {
        model: "Ligier JS43",
        team: "Ligier",
        drivers: ["Olivier Panis", "Pedro Diniz"],
      },
      {
        model: "Jordan 196",
        team: "Jordan",
        drivers: ["Rubens Barrichello", "Martin Brundle"],
      },
      {
        model: "Sauber C15",
        team: "Sauber",
        drivers: ["Johnny Herbert", "Heinz-Harald Frentzen"],
      },
      {
        model: "Footwork FA17",
        team: "Footwork",
        drivers: ["Ricardo Rosset", "Jos Verstappen"],
      },
      {
        model: "Tyrrell 024",
        team: "Tyrrell",
        drivers: ["Ukyo Katayama", "Mika Salo"],
      },
      {
        model: "Minardi M195B",
        team: "Minardi",
        drivers: [
          "Pedro Lamy",
          "Giancarlo Fisichella",
          "Tarso Marques",
          "Giovanni Lavaggi",
        ],
      },
      {
        model: "Forti FG01-95B",
        team: "Forti",
        drivers: ["Luca Badoer", "Andrea Montermini"],
      },
      {
        model: "Forti FG03-96",
        team: "Forti",
        drivers: ["Luca Badoer", "Andrea Montermini"],
      },
      {
        model: "McLaren MP4/11B",
        team: "McLaren",
        drivers: ["Mika Häkkinen", "David Coulthard"],
      },
    ],
  },
  {
    season: "1997",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'29''369",
            moyenne: "213,577 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/12",
            time: "1h 30' 28''718s ",
            moyenne: "203.926 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Heinz-Harald Frentzen",
            car: "Williams FW19",
            time: "1'30''585",
            moyenne: "210,710 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'16''004",
            moyenne: "203,295 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1h 36' 06''990s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'18''397",
            moyenne: "197,089 km/h",
          },
        ],
      },
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'24''473",
            moyenne: "181,507 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1h 52' 01''715s ",
            moyenne: "164.234 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Benetton B197",
            time: "1'27''981",
            moyenne: "174,269 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'23''303",
            moyenne: "213,054 km/h",
          },
        ],
        winner: [
          {
            driver: "Heinz-Harald Frentzen",
            car: "Williams FW19",
            time: "1h 31' 00''673s ",
            moyenne: "201.509 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Heinz-Harald Frentzen",
            car: "Williams FW19",
            time: "1'25''531",
            moyenne: "207,504 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Heinz-Harald Frentzen",
            car: "Williams FW19",
            time: "1'18''216",
            moyenne: "154,925 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310B",
            time: "2h 00' 05''654s ",
            moyenne: " de 2 heures",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310B",
            time: "1'53''315",
            moyenne: "106,937 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'16''525",
            moyenne: "222,374 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1h 30' 35''896s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Giancarlo Fisichella",
            car: "Jordan 197",
            time: "1'22''242",
            moyenne: "206,916 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310B",
            time: "1'18''095",
            moyenne: "203,798 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310B",
            time: "1h 17' 40''646s ",
            moyenne: "'un accident",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/12",
            time: "1'19''635",
            moyenne: "199,857 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310B",
            time: "1'14''548",
            moyenne: "205,237 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310B",
            time: "1h 38' 50''492s ",
            moyenne: "185.752 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310B",
            time: "1'17''910",
            moyenne: "196,380 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'21''598",
            moyenne: "226,770 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1h 28' 01''665s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310B",
            time: "1'24''475",
            moyenne: "219,047 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Gerhard Berger",
            car: "Benetton B197",
            time: "1'41''873",
            moyenne: "241,112 km/h",
          },
        ],
        winner: [
          {
            driver: "Gerhard Berger",
            car: "Benetton B197",
            time: "1h 20' 59''046s ",
            moyenne: "227.478 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Gerhard Berger",
            car: "Benetton B197",
            time: "1'45''747",
            moyenne: "232,279 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310B",
            time: "1'14''672",
            moyenne: "191,301 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1h 45' 47''149s ",
            moyenne: "173.295 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Heinz-Harald Frentzen",
            car: "Williams FW19",
            time: "1'18''372",
            moyenne: "182,269 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'49''450",
            moyenne: "229,157 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310B",
            time: "1h 33' 46''717s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'52''692",
            moyenne: "222,564 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Jean Alesi",
            car: "Benetton B197",
            time: "1'22''990",
            moyenne: "250,295 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/12",
            time: "1h 17' 04''609s ",
            moyenne: "238.056 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/12",
            time: "1'24''808",
            moyenne: "244,930 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'10''304",
            moyenne: "221,364 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1h 27' 35''999s ",
            moyenne: "210.228 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'11''814",
            moyenne: "216,710 km/h",
          },
        ],
      },
      {
        race: "Luxembourg",
        track: "Nürburgring",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/12",
            time: "1'16''602",
            moyenne: "214,068 km/h",
          },
        ],
        winner: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1h 31' 27''843s ",
            moyenne: "200.200 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Heinz-Harald Frentzen",
            car: "Williams FW19",
            time: "1'18''805",
            moyenne: "208,083 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'36''071",
            moyenne: "219,737 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F310B",
            time: "1h 29' 48''446s ",
            moyenne: "peaux jaunes",
          },
        ],
        bestLap: [
          {
            driver: "Heinz-Harald Frentzen",
            car: "Williams FW19",
            time: "1'38''942",
            moyenne: "213,361 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Jerez de la Frontera",
        pole: [
          {
            driver: "Jacques Villeneuve",
            car: "Williams FW19",
            time: "1'21''072",
            moyenne: "196,625 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/12",
            time: "1h 38' 57''771s ",
            moyenne: "185.240 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Heinz-Harald Frentzen",
            car: "Williams FW19",
            time: "1'23''135",
            moyenne: "191,746 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Arrows A18",
        team: "Arrows",
        drivers: ["Damon Hill", "Pedro Diniz"],
      },
      {
        model: "Williams FW19",
        team: "Williams",
        drivers: ["Jacques Villeneuve", "Heinz-Harald Frentzen"],
      },
      {
        model: "Ferrari F310B",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Eddie Irvine"],
      },
      {
        model: "Benetton B197",
        team: "Benetton",
        drivers: ["Jean Alesi", "Gerhard Berger", "Alexander Wurz"],
      },
      {
        model: "McLaren MP4/12",
        team: "McLaren",
        drivers: ["Mika Häkkinen", "David Coulthard"],
      },
      {
        model: "Jordan 197",
        team: "Jordan",
        drivers: ["Ralf Schumacher", "Giancarlo Fisichella"],
      },
      {
        model: "Prost JS45",
        team: "Prost",
        drivers: ["Olivier Panis", "Shinji Nakano", "Jarno Trulli"],
      },
      {
        model: "Sauber C16",
        team: "Sauber",
        drivers: [
          "Johnny Herbert",
          "Nicola Larini",
          "Gianni Morbidelli",
          "Norberto Fontana",
        ],
      },
      {
        model: "Tyrrell 025",
        team: "Tyrrell",
        drivers: ["Jos Verstappen", "Mika Salo"],
      },
      {
        model: "Minardi M197",
        team: "Minardi",
        drivers: ["Ukyo Katayama", "Jarno Trulli", "Tarso Marques"],
      },
      {
        model: "Stewart SF01",
        team: "Stewart",
        drivers: ["Rubens Barrichello", "Jan Magnussen"],
      },
      {
        model: "Lola T97/30",
        team: "Lola",
        drivers: ["Vincenzo Sospiri", "Ricardo Rosset"],
      },
    ],
  },
  {
    season: "1998",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'30''010",
            moyenne: "212,056 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1h 31' 45''996s ",
            moyenne: "201.064 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'31''649",
            moyenne: "208,264 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'17''092",
            moyenne: "200,425 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1h 37' 11''747s ",
            moyenne: "190.764 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'19''337",
            moyenne: "194,754 km/h",
          },
        ],
      },
      {
        race: "Argentine",
        track: "Buenos Aires",
        pole: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/13",
            time: "1'25''852",
            moyenne: "178,591 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1h 48' 36''175s ",
            moyenne: "169.414 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Alexander Wurz",
            car: "Benetton B198",
            time: "1'28''179",
            moyenne: "173,878 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/13",
            time: "1'25''973",
            moyenne: "206,437 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/13",
            time: "1h 34' 24''593s ",
            moyenne: "194.255 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1'29''345",
            moyenne: "198,646 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'20''262",
            moyenne: "212,021 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1h 33' 37''621s ",
            moyenne: "196.901 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'24''275",
            moyenne: "201,925 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'19''798",
            moyenne: "151,899 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1h 51' 23''595s ",
            moyenne: "141.459 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'22''948",
            moyenne: "146,130 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/13",
            time: "1'18''213",
            moyenne: "203,490 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1h 40' 57''355s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1'19''379",
            moyenne: "200,501 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'14''929",
            moyenne: "204,193 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1h 34' 45''026s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/13",
            time: "1'17''523",
            moyenne: "197,361 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'23''271",
            moyenne: "222,214 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1h 47' 02''450s ",
            moyenne: "par la suite",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1'35''704",
            moyenne: "193,346 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Giancarlo Fisichella",
            car: "Benetton B198",
            time: "1'29''598",
            moyenne: "173,696 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1h 30' 44''086s ",
            moyenne: "202.965 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/13",
            time: "1'12''878",
            moyenne: "213,546 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'41''838",
            moyenne: "241,195 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1h 20' 47''984s ",
            moyenne: "227.997 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/13",
            time: "1'46''116",
            moyenne: "231,471 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'16''973",
            moyenne: "185,582 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1h 45' 25''550s ",
            moyenne: "173.887 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1'19''286",
            moyenne: "180,168 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'48''682",
            moyenne: "230,809 km/h",
          },
        ],
        winner: [
          {
            driver: "Damon Hill",
            car: "Jordan 198",
            time: "1h 43' 47''407s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "2'03''766",
            moyenne: "202,679 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1'25''289",
            moyenne: "243,548 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1h 17' 09''672s ",
            moyenne: "237.796 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'25''139",
            moyenne: "243,977 km/h",
          },
        ],
      },
      {
        race: "Luxembourg",
        track: "Nürburgring",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1'18''561",
            moyenne: "208,775 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1h 32' 14''789s ",
            moyenne: "198.545 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1'20''450",
            moyenne: "203,873 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1'36''293",
            moyenne: "219,231 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/13",
            time: "1h 27' 22''535s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F300",
            time: "1'40''190",
            moyenne: "210,704 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Williams FW20",
        team: "Williams",
        drivers: ["Jacques Villeneuve", "Heinz-Harald Frentzen"],
      },
      {
        model: "Ferrari F300",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Eddie Irvine"],
      },
      {
        model: "Benetton B198",
        team: "Benetton",
        drivers: ["Giancarlo Fisichella", "Alexander Wurz"],
      },
      {
        model: "McLaren MP4/13",
        team: "McLaren",
        drivers: ["David Coulthard", "Mika Häkkinen"],
      },
      {
        model: "Jordan 198",
        team: "Jordan",
        drivers: ["Damon Hill", "Ralf Schumacher"],
      },
      {
        model: "Prost AP01",
        team: "Prost",
        drivers: ["Olivier Panis", "Jarno Trulli"],
      },
      {
        model: "Sauber C17",
        team: "Sauber",
        drivers: ["Jean Alesi", "Johnny Herbert"],
      },
      {
        model: "Arrows A19",
        team: "Arrows",
        drivers: ["Pedro Diniz", "Mika Salo"],
      },
      {
        model: "Stewart SF02",
        team: "Stewart",
        drivers: ["Rubens Barrichello", "Jan Magnussen", "Jos Verstappen"],
      },
      {
        model: "Tyrrell 026",
        team: "Tyrrell",
        drivers: ["Ricardo Rosset", "Toranosuke Takagi"],
      },
      {
        model: "Minardi M198",
        team: "Minardi",
        drivers: ["Shinji Nakano", "Esteban Tuero"],
      },
    ],
  },
  {
    season: "1999",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'30''462",
            moyenne: "210,997 km/h",
          },
        ],
        winner: [
          {
            driver: "Eddie Irvine",
            car: "Ferrari F399",
            time: "1h 35' 01''659s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F399",
            time: "1'32''112",
            moyenne: "207,217 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'16''568",
            moyenne: "201,797 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1h 36' 03''785s ",
            moyenne: "193.013 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'18''448",
            moyenne: "196,961 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'26''362",
            moyenne: "205,507 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F399",
            time: "1h 33' 44''792s ",
            moyenne: "195.630 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F399",
            time: "1'28''547",
            moyenne: "200,436 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'20''547",
            moyenne: "150,486 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F399",
            time: "1h 49' 31''812s ",
            moyenne: "143.865 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'22''259",
            moyenne: "147,354 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'22''088",
            moyenne: "207,304 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1h 34' 13''665s ",
            moyenne: "195.646 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F399",
            time: "1'24''982",
            moyenne: "200,245 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F399",
            time: "1'19''298",
            moyenne: "200,706 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1h 41' 35''727s ",
            moyenne: "180.155 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Eddie Irvine",
            car: "Ferrari F399",
            time: "1'20''382",
            moyenne: "198,000 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Stewart SF-3",
            time: "1'38''441",
            moyenne: "155,423 km/h",
          },
        ],
        winner: [
          {
            driver: "Heinz-Harald Frentzen",
            car: "Jordan 199",
            time: "1h 58' 24''343s ",
            moyenne: "155.060 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/14",
            time: "1'19''227",
            moyenne: "193,116 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'24''804",
            moyenne: "218,197 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/14",
            time: "1h 32' 30''144s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'28''309",
            moyenne: "209,537 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'10''954",
            moyenne: "219,134 km/h",
          },
        ],
        winner: [
          {
            driver: "Eddie Irvine",
            car: "Ferrari F399",
            time: "1h 28' 12''438s ",
            moyenne: "208.587 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'12''107",
            moyenne: "215,630 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'42''950",
            moyenne: "238,590 km/h",
          },
        ],
        winner: [
          {
            driver: "Eddie Irvine",
            car: "Ferrari F399",
            time: "1h 21' 58''594s ",
            moyenne: "224.724 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/14",
            time: "1'45''270",
            moyenne: "233,331 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'18''156",
            moyenne: "182,773 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1h 46' 23''536s ",
            moyenne: "172.307 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/14",
            time: "1'20''699",
            moyenne: "177,013 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'50''329",
            moyenne: "227,364 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/14",
            time: "1h 25' 43''057s ",
            moyenne: "214.606 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'53''955",
            moyenne: "220,129 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'22''432",
            moyenne: "251,990 km/h",
          },
        ],
        winner: [
          {
            driver: "Heinz-Harald Frentzen",
            car: "Jordan 199",
            time: "1h 17' 02''923s ",
            moyenne: "238.143 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW21",
            time: "1'25''579",
            moyenne: "242,723 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "Heinz-Harald Frentzen",
            car: "Jordan 199",
            time: "1'19''910",
            moyenne: "205,251 km/h",
          },
        ],
        winner: [
          {
            driver: "Johnny Herbert",
            car: "Stewart SF-3",
            time: "1h 41' 54''314s ",
            moyenne: "177.044 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1'21''282",
            moyenne: "201,786 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F399",
            time: "1'39''688",
            moyenne: "200,136 km/h",
          },
        ],
        winner: [
          {
            driver: "Eddie Irvine",
            car: "Ferrari F399",
            time: "1h 36' 38''494s ",
            moyenne: "192.682 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F399",
            time: "1'40''267",
            moyenne: "198,981 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F399",
            time: "1'37''470",
            moyenne: "216,584 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/14",
            time: "1h 31' 18''785s ",
            moyenne: "204.215 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F399",
            time: "1'41''319",
            moyenne: "208,356 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MP4/14",
        team: "McLaren",
        drivers: ["Mika Häkkinen", "David Coulthard"],
      },
      {
        model: "Ferrari F399",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Eddie Irvine", "Mika Salo"],
      },
      {
        model: "Williams FW21",
        team: "Williams",
        drivers: ["Alessandro Zanardi", "Ralf Schumacher"],
      },
      {
        model: "Jordan 199",
        team: "Jordan",
        drivers: ["Damon Hill", "Heinz-Harald Frentzen"],
      },
      {
        model: "Benetton B199",
        team: "Benetton",
        drivers: ["Giancarlo Fisichella", "Alexander Wurz"],
      },
      {
        model: "Sauber C18",
        team: "Sauber",
        drivers: ["Jean Alesi", "Pedro Diniz"],
      },
      {
        model: "Arrows A20",
        team: "Arrows",
        drivers: ["Pedro de la Rosa", "Toranosuke Takagi"],
      },
      {
        model: "Stewart SF-3",
        team: "Stewart",
        drivers: ["Rubens Barrichello", "Johnny Herbert"],
      },
      {
        model: "Prost AP02",
        team: "Prost",
        drivers: ["Olivier Panis", "Jarno Trulli"],
      },
      {
        model: "Minardi M01",
        team: "Minardi",
        drivers: ["Luca Badoer", "Marc Gené", "Stéphane Sarrazin"],
      },
      {
        model: "BAR PR01",
        team: "BAR",
        drivers: ["Jacques Villeneuve", "Ricardo Zonta", "Mika Salo"],
      },
    ],
  },
  {
    season: "2000",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'30''556",
            moyenne: "210,778 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1h 34' 01''987s ",
            moyenne: "non conforme",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F1-2000",
            time: "1'31''481",
            moyenne: "208,647 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'14''111",
            moyenne: "209,313 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1h 31' 35''271s ",
            moyenne: "non conforme",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1'14''755",
            moyenne: "207,510 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'24''714",
            moyenne: "209,632 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1h 31' 39''776s ",
            moyenne: "200.198 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'26''523",
            moyenne: "205,249 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F1-2000",
            time: "1'25''703",
            moyenne: "215,908 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/15",
            time: "1h 28' 50''108s ",
            moyenne: "208.296 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'26''217",
            moyenne: "214,621 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1'20''974",
            moyenne: "210,290 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1h 33' 55''390s ",
            moyenne: "196.405 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'24''470",
            moyenne: "201,586 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/15",
            time: "1'17''529",
            moyenne: "211,554 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1h 42' 00''307s ",
            moyenne: "179.551 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1'22''269",
            moyenne: "199,366 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1'19''475",
            moyenne: "152,652 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/15",
            time: "1h 49' 28''213s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'21''571",
            moyenne: "148,729 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1'18''439",
            moyenne: "202,904 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1h 41' 12''313s ",
            moyenne: "180.850 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'19''049",
            moyenne: "201,338 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1'15''632",
            moyenne: "202,295 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/15",
            time: "1h 38' 05''538s ",
            moyenne: "187.171 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/15",
            time: "1'19''479",
            moyenne: "192,504 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'10''410",
            moyenne: "220,827 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1h 28' 15''818s ",
            moyenne: "glementaires",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/15",
            time: "1'11''783",
            moyenne: "216,603 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/15",
            time: "1'45''697",
            moyenne: "232,389 km/h",
          },
        ],
        winner: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F1-2000",
            time: "1h 25' 34''418s ",
            moyenne: "215.278 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F1-2000",
            time: "1'44''300",
            moyenne: "235,501 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1'17''514",
            moyenne: "184,287 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1h 45' 33''869s ",
            moyenne: "173.658 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'20''028",
            moyenne: "178,498 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'50''646",
            moyenne: "226,712 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1h 28' 14''494s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F1-2000",
            time: "1'53''803",
            moyenne: "220,423 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1'23''770",
            moyenne: "248,953 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1h 27' 31''638s ",
            moyenne: "210.468 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'25''595",
            moyenne: "243,645 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Indianapolis",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1'14''266",
            moyenne: "203,205 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1h 36' 30''883s ",
            moyenne: "190.240 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4/15",
            time: "1'14''711",
            moyenne: "201,994 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1'35''825",
            moyenne: "220,302 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1h 29' 53''435s ",
            moyenne: "207.447 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'39''189",
            moyenne: "212,830 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1'37''397",
            moyenne: "204,881 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F1-2000",
            time: "1h 35' 54''235s ",
            moyenne: "194.199 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4/15",
            time: "1'38''543",
            moyenne: "202,498 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MP4/15",
        team: "McLaren",
        drivers: ["Mika Häkkinen", "David Coulthard"],
      },
      {
        model: "Ferrari F1-2000",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Rubens Barrichello"],
      },
      {
        model: "Jordan EJ10",
        team: "Jordan",
        drivers: ["Heinz-Harald Frentzen", "Jarno Trulli"],
      },
      {
        model: "Jaguar R1",
        team: "Jaguar",
        drivers: ["Eddie Irvine", "Johnny Herbert", "Luciano Burti"],
      },
      {
        model: "Williams FW22",
        team: "Williams",
        drivers: ["Ralf Schumacher", "Jenson Button"],
      },
      {
        model: "Benetton B200",
        team: "Benetton",
        drivers: ["Giancarlo Fisichella", "Alexander Wurz"],
      },
      {
        model: "Prost AP03",
        team: "Prost",
        drivers: ["Jean Alesi", "Nick Heidfeld"],
      },
      {
        model: "Sauber C19",
        team: "Sauber",
        drivers: ["Pedro Diniz", "Mika Salo"],
      },
      {
        model: "Arrows A21",
        team: "Arrows",
        drivers: ["Pedro de la Rosa", "Jos Verstappen"],
      },
      {
        model: "Minardi M02",
        team: "Minardi",
        drivers: ["Marc Gené", "Gaston Mazzacane"],
      },
      {
        model: "BAR 002",
        team: "BAR",
        drivers: ["Jacques Villeneuve", "Ricardo Zonta"],
      },
      {
        model: "Jordan EJ10B",
        team: "Jordan",
        drivers: ["Heinz-Harald Frentzen", "Jarno Trulli"],
      },
    ],
  },
  {
    season: "2001",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'26''892",
            moyenne: "219,707 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1h 38' 26''533s ",
            moyenne: "rapeau jaune",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'28''214",
            moyenne: "216,415 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'35''220",
            moyenne: "209,565 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1h 47' 34''801s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4-16",
            time: "1'40''962",
            moyenne: "197,647 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'13''780",
            moyenne: "210,252 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4-16",
            time: "1h 39' 00''834s ",
            moyenne: "185.392 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW23",
            time: "1'15''693",
            moyenne: "204,938 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4-16",
            time: "1'23''054",
            moyenne: "213,822 km/h",
          },
        ],
        winner: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW23",
            time: "1h 30' 44''817s ",
            moyenne: "202.219 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW23",
            time: "1'25''524",
            moyenne: "207,647 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'18''201",
            moyenne: "217,747 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1h 31' 03''305s ",
            moyenne: "202.592 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'21''151",
            moyenne: "209,831 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'09''562",
            moyenne: "223,519 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4-16",
            time: "1h 27' 45''927s ",
            moyenne: "209.638 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4-16",
            time: "1'10''843",
            moyenne: "219,477 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4-16",
            time: "1'17''430",
            moyenne: "156,683 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1h 47' 22''561s ",
            moyenne: "146.882 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4-16",
            time: "1'19''424",
            moyenne: "152,750 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'15''782",
            moyenne: "210,018 km/h",
          },
        ],
        winner: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW23",
            time: "1h 34' 31''522s ",
            moyenne: "193.630 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW23",
            time: "1'17''205",
            moyenne: "206,147 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'14''960",
            moyenne: "218,805 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1h 29' 42''724s ",
            moyenne: "204.154 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW23",
            time: "1'18''354",
            moyenne: "209,327 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW23",
            time: "1'12''989",
            moyenne: "209,621 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1h 33' 35''636s ",
            moyenne: "196.167 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4-16",
            time: "1'16''088",
            moyenne: "201,083 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'20''447",
            moyenne: "230,015 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4-16",
            time: "1h 25' 33''770s ",
            moyenne: "216.262 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4-16",
            time: "1'23''405",
            moyenne: "221,857 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW23",
            time: "1'38''117",
            moyenne: "250,415 km/h",
          },
        ],
        winner: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW23",
            time: "1h 18' 17''873s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW23",
            time: "1'41''808",
            moyenne: "241,337 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'14''059",
            moyenne: "193,224 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1h 41' 49''675s ",
            moyenne: "180.348 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4-16",
            time: "1'16''723",
            moyenne: "186,515 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW23",
            time: "1'52''072",
            moyenne: "223,828 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1h 08' 05''002s ",
            moyenne: " un accident",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'49''758",
            moyenne: "228,546 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW23",
            time: "1'22''216",
            moyenne: "253,659 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW23",
            time: "1h 16' 58''493s ",
            moyenne: "239.321 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW23",
            time: "1'25''073",
            moyenne: "245,140 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Indianapolis",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'11''708",
            moyenne: "210,453 km/h",
          },
        ],
        winner: [
          {
            driver: "Mika Häkkinen",
            car: "McLaren MP4-16",
            time: "1h 32' 42''840s ",
            moyenne: "198.039 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW23",
            time: "1'14''448",
            moyenne: "202,708 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'32''484",
            moyenne: "228,260 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1h 27' 33''298s ",
            moyenne: "212.981 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW23",
            time: "1'36''944",
            moyenne: "217,759 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari F2001",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Rubens Barrichello"],
      },
      {
        model: "McLaren MP4-16",
        team: "McLaren",
        drivers: ["Mika Häkkinen", "David Coulthard"],
      },
      {
        model: "Williams FW23",
        team: "Williams",
        drivers: ["Ralf Schumacher", "Juan-Pablo Montoya"],
      },
      {
        model: "Benetton B201",
        team: "Benetton",
        drivers: ["Giancarlo Fisichella", "Jenson Button"],
      },
      {
        model: "BAR 003",
        team: "BAR",
        drivers: ["Olivier Panis", "Jacques Villeneuve"],
      },
      {
        model: "Jordan EJ11",
        team: "Jordan",
        drivers: [
          "Heinz-Harald Frentzen",
          "Jarno Trulli",
          "Ricardo Zonta",
          "Jean Alesi",
        ],
      },
      {
        model: "Arrows A22",
        team: "Arrows",
        drivers: ["Jos Verstappen", "Enrique Bernoldi"],
      },
      {
        model: "Sauber C20",
        team: "Sauber",
        drivers: ["Nick Heidfeld", "Kimi Räikkönen"],
      },
      {
        model: "Jaguar R2",
        team: "Jaguar",
        drivers: ["Eddie Irvine", "Luciano Burti", "Pedro de la Rosa"],
      },
      {
        model: "Minardi PS01",
        team: "Minardi",
        drivers: ["Tarso Marques", "Fernando Alonso", "Alex Yoong"],
      },
      {
        model: "Prost AP04",
        team: "Prost",
        drivers: [
          "Jean Alesi",
          "Gaston Mazzacane",
          "Luciano Burti",
          "Heinz-Harald Frentzen",
          "Tomáš Enge",
        ],
      },
    ],
  },
  {
    season: "2002",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2001",
            time: "1'25''843",
            moyenne: "222,392 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1h 35' 36''792s ",
            moyenne: "193.011 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-17",
            time: "1'28''541",
            moyenne: "215,615 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2001",
            time: "1'35''266",
            moyenne: "209,464 km/h",
          },
        ],
        winner: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW24",
            time: "1h 34' 12''912s ",
            moyenne: "197.680 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW24",
            time: "1'38''049",
            moyenne: "203,519 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW24",
            time: "1'13''114",
            moyenne: "212,167 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1h 31' 43''663s ",
            moyenne: "200.118 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW24",
            time: "1'16''079",
            moyenne: "203,899 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'21''091",
            moyenne: "218,998 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1h 29' 10''789s ",
            moyenne: "205.773 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1'24''170",
            moyenne: "210,987 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'16''364",
            moyenne: "222,985 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1h 30' 29''981s ",
            moyenne: "203.835 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'20''355",
            moyenne: "211,910 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1'08''082",
            moyenne: "228,748 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1h 33' 51''562s ",
            moyenne: "196.344 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'09''298",
            moyenne: "224,734 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW24",
            time: "1'16''676",
            moyenne: "158,224 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4-17",
            time: "1h 45' 39''055s ",
            moyenne: "149.280 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1'18''023",
            moyenne: "155,493 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW24",
            time: "1'12''836",
            moyenne: "215,547 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1h 33' 36''111s ",
            moyenne: "195.682 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW24",
            time: "1'15''960",
            moyenne: "206,682 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW24",
            time: "1'29''906",
            moyenne: "205,975 km/h",
          },
        ],
        winner: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1h 35' 07''426s ",
            moyenne: "194.677 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'32''226",
            moyenne: "200,794 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW24",
            time: "1'18''998",
            moyenne: "234,279 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1h 31' 45''015s ",
            moyenne: "201.717 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1'23''083",
            moyenne: "222,760 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW24",
            time: "1'11''985",
            moyenne: "212,594 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1h 32' 09''837s ",
            moyenne: "199.257 km/h",
          },
        ],
        bestLap: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4-17",
            time: "1'15''045",
            moyenne: "203,926 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'14''389",
            moyenne: "221,355 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1h 27' 52''078s ",
            moyenne: "209.263 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'16''462",
            moyenne: "215,354 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1'13''333",
            moyenne: "195,137 km/h",
          },
        ],
        winner: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1h 41' 49''001s ",
            moyenne: "180.368 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'16''207",
            moyenne: "187,778 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'43''726",
            moyenne: "241,664 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1h 21' 20''634s ",
            moyenne: "225.983 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'47''176",
            moyenne: "233,884 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW24",
            time: "1'20''264",
            moyenne: "259,828 km/h",
          },
        ],
        winner: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1h 16' 19''982s ",
            moyenne: "241.334 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1'23''657",
            moyenne: "249,289 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Indianapolis",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'10''790",
            moyenne: "213,183 km/h",
          },
        ],
        winner: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1h 31' 07''934s ",
            moyenne: "201.476 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1'12''738",
            moyenne: "207,473 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'31''317",
            moyenne: "229,482 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1h 26' 59''698s ",
            moyenne: "212.780 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'36''125",
            moyenne: "218,004 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari F2001",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Rubens Barrichello"],
      },
      {
        model: "McLaren MP4-17",
        team: "McLaren",
        drivers: ["David Coulthard", "Kimi Räikkönen"],
      },
      {
        model: "Williams FW24",
        team: "Williams",
        drivers: ["Ralf Schumacher", "Juan-Pablo Montoya"],
      },
      {
        model: "Sauber C21",
        team: "Sauber",
        drivers: ["Nick Heidfeld", "Felipe Massa", "Heinz-Harald Frentzen"],
      },
      {
        model: "Jordan EJ12",
        team: "Jordan",
        drivers: ["Giancarlo Fisichella", "Takuma Sato"],
      },
      {
        model: "BAR 004",
        team: "BAR",
        drivers: ["Jacques Villeneuve", "Olivier Panis"],
      },
      {
        model: "Renault R202",
        team: "Renault",
        drivers: ["Jarno Trulli", "Jenson Button"],
      },
      {
        model: "Jaguar R3",
        team: "Jaguar",
        drivers: ["Eddie Irvine", "Pedro de la Rosa"],
      },
      {
        model: "Arrows A23",
        team: "Arrows",
        drivers: ["Heinz-Harald Frentzen", "Enrique Bernoldi"],
      },
      {
        model: "Minardi PS02",
        team: "Minardi",
        drivers: ["Alex Yoong", "Mark Webber", "Anthony Davidson"],
      },
      {
        model: "Toyota TF102",
        team: "Toyota",
        drivers: ["Mika Salo", "Allan McNish"],
      },
      {
        model: "Ferrari F2002",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Rubens Barrichello"],
      },
    ],
  },
  {
    season: "2003",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'27''173",
            moyenne: "218,999 km/h",
          },
        ],
        winner: [
          {
            driver: "David Coulthard",
            car: "McLaren MP4-17D",
            time: "1h 34' 42''124s ",
            moyenne: "194.868 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-17D",
            time: "1'27''724",
            moyenne: "217,623 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R23",
            time: "1'37''044",
            moyenne: "205,626 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-17D",
            time: "1h 32' 22''195s ",
            moyenne: "201.629 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'36''412",
            moyenne: "206,974 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1'13''807",
            moyenne: "210,175 km/h",
          },
        ],
        winner: [
          {
            driver: "Giancarlo Fisichella",
            car: "Jordan EJ13",
            time: "1h 31' 17''748s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2002",
            time: "1'22''032",
            moyenne: "189,102 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'22''327",
            moyenne: "215,711 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1h 28' 12''058s ",
            moyenne: "207.895 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2002",
            time: "1'22''491",
            moyenne: "215,282 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2003-GA",
            time: "1'17''762",
            moyenne: "218,976 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2003-GA",
            time: "1h 33' 46''933s ",
            moyenne: "196.620 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2003-GA",
            time: "1'20''143",
            moyenne: "212,470 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2003-GA",
            time: "1'09''150",
            moyenne: "225,215 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2003-GA",
            time: "1h 24' 04''888s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2003-GA",
            time: "1'08''337",
            moyenne: "227,894 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW25",
            time: "1'15''259",
            moyenne: "159,768 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW25",
            time: "1h 42' 19''010s ",
            moyenne: "152.773 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-17D",
            time: "1'14''545",
            moyenne: "161,299 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW25",
            time: "1'15''529",
            moyenne: "207,862 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2003-GA",
            time: "1h 31' 13''591s ",
            moyenne: "200.777 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Renault R23",
            time: "1'16''040",
            moyenne: "206,465 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-17D",
            time: "1'31''523",
            moyenne: "202,493 km/h",
          },
        ],
        winner: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW25",
            time: "1h 34' 43''622s ",
            moyenne: "195.633 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-17D",
            time: "1'32''621",
            moyenne: "200,093 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW25",
            time: "1'15''019",
            moyenne: "211,674 km/h",
          },
        ],
        winner: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW25",
            time: "1h 30' 49''213s ",
            moyenne: "203.866 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW25",
            time: "1'15''512",
            moyenne: "210,292 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2003-GA",
            time: "1'21''209",
            moyenne: "227,901 km/h",
          },
        ],
        winner: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2003-GA",
            time: "1h 28' 37''554s ",
            moyenne: "208.757 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2003-GA",
            time: "1'22''236",
            moyenne: "225,055 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW25",
            time: "1'15''167",
            moyenne: "219,064 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW25",
            time: "1h 28' 48''769s ",
            moyenne: "207.036 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW25",
            time: "1'14''917",
            moyenne: "219,795 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R23B",
            time: "1'21''688",
            moyenne: "193,203 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R23B",
            time: "1h 39' 01''460s ",
            moyenne: "185.938 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW25",
            time: "1'22''095",
            moyenne: "192,246 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2003-GA",
            time: "1'20''963",
            moyenne: "257,584 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2003-GA",
            time: "1h 14' 19''838s ",
            moyenne: "247.586 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2003-GA",
            time: "1'21''832",
            moyenne: "254,849 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Indianapolis",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-17D",
            time: "1'11''670",
            moyenne: "210,565 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2003-GA",
            time: "1h 33' 35''997s ",
            moyenne: "196.164 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2003-GA",
            time: "1'11''473",
            moyenne: "211,145 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2003-GA",
            time: "1'31''713",
            moyenne: "227,942 km/h",
          },
        ],
        winner: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2003-GA",
            time: "1h 25' 11''743s ",
            moyenne: "216.612 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW25",
            time: "1'33''408",
            moyenne: "223,805 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari F2002",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Rubens Barrichello"],
      },
      {
        model: "Williams FW25",
        team: "Williams",
        drivers: ["Juan-Pablo Montoya", "Ralf Schumacher", "Marc Gené"],
      },
      {
        model: "McLaren MP4-17D",
        team: "McLaren",
        drivers: ["David Coulthard", "Kimi Räikkönen"],
      },
      {
        model: "Renault R23",
        team: "Renault",
        drivers: [
          "Jarno Trulli",
          "Fernando Alonso",
          "Allan McNish",
          "Franck Montagny",
        ],
      },
      {
        model: "Sauber C22",
        team: "Sauber",
        drivers: ["Nick Heidfeld", "Heinz-Harald Frentzen"],
      },
      {
        model: "Jordan EJ13",
        team: "Jordan",
        drivers: [
          "Giancarlo Fisichella",
          "Ralph Firman",
          "Zsolt Baumgartner",
          "Björn Wirdheim",
          "Satoshi Motoyama",
        ],
      },
      {
        model: "Jaguar R4",
        team: "Jaguar",
        drivers: ["Mark Webber", "Antonio Pizzonia", "Justin Wilson"],
      },
      {
        model: "BAR 005",
        team: "BAR",
        drivers: ["Jacques Villeneuve", "Jenson Button", "Takuma Sato"],
      },
      {
        model: "Minardi PS03",
        team: "Minardi",
        drivers: [
          "Justin Wilson",
          "Jos Verstappen",
          "Matteo Bobbi",
          "Nicolas Kiesa",
          "Gimmi Bruni",
        ],
      },
      {
        model: "Toyota TF103",
        team: "Toyota",
        drivers: ["Olivier Panis", "Cristiano da Matta"],
      },
      { model: "Arrows A23", team: "Arrows", drivers: ["Enrique Bernoldi"] },
      {
        model: "Ferrari F2003-GA",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Rubens Barrichello"],
      },
      {
        model: "Renault R23B",
        team: "Renault",
        drivers: ["Jarno Trulli", "Fernando Alonso"],
      },
    ],
  },
  {
    season: "2004",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'24''408",
            moyenne: "226,173 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 24' 15''757s ",
            moyenne: "219.011 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'24''125",
            moyenne: "226,934 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'33''074",
            moyenne: "214,397 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 31' 07''490s ",
            moyenne: "204.384 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW26",
            time: "1'34''223",
            moyenne: "211,783 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'30''139",
            moyenne: "216,346 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 28' 34''875s ",
            moyenne: "209.143 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'30''252",
            moyenne: "216,075 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Jenson Button",
            car: "BAR 006",
            time: "1'19''753",
            moyenne: "222,673 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 26' 19''670s ",
            moyenne: "212.406 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'20''411",
            moyenne: "220,850 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'15''022",
            moyenne: "222,031 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 27' 32''841s ",
            moyenne: "209.205 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'17''450",
            moyenne: "215,070 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jarno Trulli",
            car: "Renault R24",
            time: "1'13''985",
            moyenne: "162,519 km/h",
          },
        ],
        winner: [
          {
            driver: "Jarno Trulli",
            car: "Renault R24",
            time: "1h 45' 46''601s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'14''439",
            moyenne: "161,528 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'28''351",
            moyenne: "209,763 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 32' 35''101s ",
            moyenne: "200.160 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'29''468",
            moyenne: "207,144 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Ralf Schumacher",
            car: "Williams FW26",
            time: "1'12''275",
            moyenne: "217,220 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 28' 24''803s ",
            moyenne: "207.165 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2004",
            time: "1'13''622",
            moyenne: "213,246 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Indianapolis",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2004",
            time: "1'10''223",
            moyenne: "214,904 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 40' 29''914s ",
            moyenne: "182.699 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2004",
            time: "1'10''399",
            moyenne: "214,367 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R24",
            time: "1'13''698",
            moyenne: "215,469 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 30' 18''133s ",
            moyenne: "205.036 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'15''377",
            moyenne: "210,669 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-19B",
            time: "1'18''233",
            moyenne: "236,570 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 24' 42''700s ",
            moyenne: "218.403 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'18''739",
            moyenne: "235,050 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'13''306",
            moyenne: "224,626 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 23' 54''848s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-19B",
            time: "1'13''780",
            moyenne: "223,182 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'19''146",
            moyenne: "199,272 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 35' 26''131s ",
            moyenne: "192.798 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'19''071",
            moyenne: "199,461 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Jarno Trulli",
            car: "Renault R24",
            time: "1'56''232",
            moyenne: "215,972 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-19B",
            time: "1h 32' 35''274s ",
            moyenne: "198.824 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-19B",
            time: "1'45''108",
            moyenne: "238,829 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2004",
            time: "1'20''089",
            moyenne: "260,395 km/h",
          },
        ],
        winner: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2004",
            time: "1h 15' 18''448s ",
            moyenne: "244.374 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2004",
            time: "1'21''046",
            moyenne: "257,321 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2004",
            time: "1'34''012",
            moyenne: "208,735 km/h",
          },
        ],
        winner: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2004",
            time: "1h 29' 12''420s ",
            moyenne: "205.313 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'32''238",
            moyenne: "212,750 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1'33''542",
            moyenne: "223,485 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2004",
            time: "1h 24' 26''985s ",
            moyenne: "218.525 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2004",
            time: "1'32''730",
            moyenne: "225,442 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Ferrari F2004",
            time: "1'10''646",
            moyenne: "219,579 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW26",
            time: "1h 28' 01''451s ",
            moyenne: "208.517 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "Williams FW26",
            time: "1'11''473",
            moyenne: "217,039 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari F2004",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Rubens Barrichello"],
      },
      {
        model: "Williams FW26",
        team: "Williams",
        drivers: [
          "Juan-Pablo Montoya",
          "Ralf Schumacher",
          "Marc Gené",
          "Antonio Pizzonia",
        ],
      },
      {
        model: "McLaren MP4-19",
        team: "McLaren",
        drivers: ["David Coulthard", "Kimi Räikkönen"],
      },
      {
        model: "Renault R24",
        team: "Renault",
        drivers: ["Jarno Trulli", "Fernando Alonso", "Jacques Villeneuve"],
      },
      {
        model: "BAR 006",
        team: "BAR",
        drivers: ["Jenson Button", "Takuma Sato", "Anthony Davidson"],
      },
      {
        model: "Sauber C23",
        team: "Sauber",
        drivers: ["Giancarlo Fisichella", "Felipe Massa"],
      },
      {
        model: "Jaguar R5",
        team: "Jaguar",
        drivers: ["Mark Webber", "Christian Klien", "Björn Wirdheim"],
      },
      {
        model: "Toyota TF104",
        team: "Toyota",
        drivers: [
          "Cristiano da Matta",
          "Olivier Panis",
          "Ricardo Zonta",
          "Ryan Briscoe",
        ],
      },
      {
        model: "Jordan EJ14",
        team: "Jordan",
        drivers: [
          "Nick Heidfeld",
          "Giorgio Pantano",
          "Timo Glock",
          "Robert Doornbos",
        ],
      },
      {
        model: "Minardi PS04B",
        team: "Minardi",
        drivers: ["Gimmi Bruni", "Zsolt Baumgartner", "Bas Leinders"],
      },
      {
        model: "McLaren MP4-19B",
        team: "McLaren",
        drivers: ["David Coulthard", "Kimi Räikkönen"],
      },
      {
        model: "Toyota TF104B",
        team: "Toyota",
        drivers: [
          "Cristiano da Matta",
          "Olivier Panis",
          "Ricardo Zonta",
          "Jarno Trulli",
        ],
      },
    ],
  },
  {
    season: "2005",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Giancarlo Fisichella",
            car: "Renault R25",
            time: "3'01''460",
            moyenne: "210,413 km/h",
          },
        ],
        winner: [
          {
            driver: "Giancarlo Fisichella",
            car: "Renault R25",
            time: "1h 24' 17''336s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1'25''683",
            moyenne: "222,807 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "3'07''672",
            moyenne: "212,656 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1h 31' 33''736s ",
            moyenne: "203.408 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'35''483",
            moyenne: "208,988 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "3'01''902",
            moyenne: "214,414 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1h 29' 18''531s ",
            moyenne: "207.274 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Pedro de la Rosa",
            car: "McLaren MP4-20",
            time: "1'31''447",
            moyenne: "213,251 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "2'42''880",
            moyenne: "218,060 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1h 27' 41''921s ",
            moyenne: " additionnel",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2005",
            time: "1'21''858",
            moyenne: "216,946 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "2'31''421",
            moyenne: "220,012 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1h 27' 16''830s ",
            moyenne: " Saint-Marin",
          },
        ],
        bestLap: [
          {
            driver: "Giancarlo Fisichella",
            car: "Renault R25",
            time: "1'15''641",
            moyenne: "220,214 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "2'30''323",
            moyenne: "159,976 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1h 45' 15''556s ",
            moyenne: " Saint-Marin",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2005",
            time: "1'15''842",
            moyenne: "158,540 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "Nick Heidfeld",
            car: "Williams FW27",
            time: "1'30''081",
            moyenne: "205,735 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1h 31' 46''648s ",
            moyenne: "de formation",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1'30''711",
            moyenne: "204,306 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Jenson Button",
            car: "BAR 007",
            time: "1'15''217",
            moyenne: "208,724 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1h 32' 09''290s ",
            moyenne: "198.755 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'14''384",
            moyenne: "211,062 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Indianapolis",
        pole: [
          {
            driver: "Jarno Trulli",
            car: "Toyota TF105",
            time: "1'10''625",
            moyenne: "213,681 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2005",
            time: "1h 29' 43''181s ",
            moyenne: "anufacturier",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2005",
            time: "1'11''497",
            moyenne: "211,075 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1'14''412",
            moyenne: "213,401 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1h 31' 22''233s ",
            moyenne: "202.638 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'16''423",
            moyenne: "207,786 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1'19''905",
            moyenne: "231,620 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Pablo Montoya",
            car: "McLaren MP4-20",
            time: "1h 24' 29''588s ",
            moyenne: "218.968 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'20''502",
            moyenne: "229,902 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'14''320",
            moyenne: "221,561 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1h 26' 28''599s ",
            moyenne: "212.629 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'14''873",
            moyenne: "219,924 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari F2005",
            time: "1'19''882",
            moyenne: "197,436 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1h 37' 25''552s ",
            moyenne: "188.859 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'21''219",
            moyenne: "194,186 km/h",
          },
        ],
      },
      {
        race: "Turquie",
        track: "Istanbul",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'26''797",
            moyenne: "221,482 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1h 24' 34''454s ",
            moyenne: "219.726 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Juan-Pablo Montoya",
            car: "McLaren MP4-20",
            time: "1'24''770",
            moyenne: "226,778 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'20''878",
            moyenne: "257,855 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Pablo Montoya",
            car: "McLaren MP4-20",
            time: "1h 14' 28''659s ",
            moyenne: "247.097 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'21''504",
            moyenne: "255,875 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Juan-Pablo Montoya",
            car: "McLaren MP4-20",
            time: "1'46''391",
            moyenne: "236,050 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1h 30' 01''295s ",
            moyenne: "204.580 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Ralf Schumacher",
            car: "Toyota TF105",
            time: "1'51''453",
            moyenne: "225,329 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1'11''988",
            moyenne: "215,486 km/h",
          },
        ],
        winner: [
          {
            driver: "Juan-Pablo Montoya",
            car: "McLaren MP4-20",
            time: "1h 29' 20''574s ",
            moyenne: "205.439 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'12''268",
            moyenne: "214,651 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Ralf Schumacher",
            car: "Toyota TF105B",
            time: "1'46''106",
            moyenne: "197,022 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1h 29' 02''212s ",
            moyenne: " 25 secondes",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'31''540",
            moyenne: "228,372 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1'34''080",
            moyenne: "208,584 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R25",
            time: "1h 39' 53''618s ",
            moyenne: "183.234 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-20",
            time: "1'33''242",
            moyenne: "210,459 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari F2004M",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Rubens Barrichello"],
      },
      {
        model: "BAR 007",
        team: "BAR",
        drivers: ["Jenson Button", "Takuma Sato", "Anthony Davidson"],
      },
      {
        model: "Renault R25",
        team: "Renault",
        drivers: ["Fernando Alonso", "Giancarlo Fisichella"],
      },
      {
        model: "Williams FW27",
        team: "Williams",
        drivers: ["Mark Webber", "Nick Heidfeld", "Antonio Pizzonia"],
      },
      {
        model: "McLaren MP4-20",
        team: "McLaren",
        drivers: [
          "Kimi Räikkönen",
          "Juan-Pablo Montoya",
          "Pedro de la Rosa",
          "Alexander Wurz",
        ],
      },
      {
        model: "Sauber C24",
        team: "Sauber",
        drivers: ["Jacques Villeneuve", "Felipe Massa"],
      },
      {
        model: "Red Bull RB1",
        team: "Red Bull",
        drivers: [
          "David Coulthard",
          "Christian Klien",
          "Vitantonio Liuzzi",
          "Scott Speed",
        ],
      },
      {
        model: "Toyota TF105",
        team: "Toyota",
        drivers: [
          "Jarno Trulli",
          "Ralf Schumacher",
          "Ricardo Zonta",
          "Olivier Panis",
        ],
      },
      {
        model: "Jordan EJ15",
        team: "Jordan",
        drivers: [
          "Tiago Monteiro",
          "Narain Karthikeyan",
          "Robert Doornbos",
          "Franck Montagny",
          "Nicolas Kiesa",
        ],
      },
      {
        model: "Minardi PS04B",
        team: "Minardi",
        drivers: ["Patrick Friesacher", "Christijan Albers"],
      },
      {
        model: "Ferrari F2005",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Rubens Barrichello"],
      },
      {
        model: "Minardi PS05",
        team: "Minardi",
        drivers: [
          "Patrick Friesacher",
          "Christijan Albers",
          "Robert Doornbos",
          "Chanoch Nissany",
          "Enrico Toccacelo",
        ],
      },
      {
        model: "Jordan EJ15B",
        team: "Jordan",
        drivers: ["Tiago Monteiro", "Narain Karthikeyan", "Sakon Yamamoto"],
      },
      {
        model: "Toyota TF105B",
        team: "Toyota",
        drivers: ["Jarno Trulli", "Ralf Schumacher"],
      },
    ],
  },
  {
    season: "2006",
    calendar: [
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'31''431",
            moyenne: "213,092 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1h 29' 46''205s ",
            moyenne: "206.018 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Williams FW28",
            time: "1'32''408",
            moyenne: "210,839 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Giancarlo Fisichella",
            car: "Renault R26",
            time: "1'33''840",
            moyenne: "212,647 km/h",
          },
        ],
        winner: [
          {
            driver: "Giancarlo Fisichella",
            car: "Renault R26",
            time: "1h 30' 40''529s ",
            moyenne: "205.397 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1'34''803",
            moyenne: "210,487 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Jenson Button",
            car: "Honda RA106",
            time: "1'25''229",
            moyenne: "223,994 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1h 34' 27''870s ",
            moyenne: "de formation",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-21",
            time: "1'26''045",
            moyenne: "221,870 km/h",
          },
        ],
      },
      {
        race: "San Marino",
        track: "Imola",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'22''795",
            moyenne: "215,622 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1h 31' 06''486s ",
            moyenne: "202.323 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1'24''569",
            moyenne: "211,099 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1'29''819",
            moyenne: "206,335 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1h 35' 58''765s ",
            moyenne: "193.081 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'32''099",
            moyenne: "201,227 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1'14''648",
            moyenne: "223,143 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1h 26' 21''759s ",
            moyenne: "212.075 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari 248 F1",
            time: "1'16''648",
            moyenne: "217,321 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'13''898",
            moyenne: "162,711 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1h 43' 43''116s ",
            moyenne: "150.708 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'15''143",
            moyenne: "160,015 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1'20''253",
            moyenne: "230,616 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1h 25' 51''927s ",
            moyenne: "215.469 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1'21''599",
            moyenne: "226,812 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1'14''942",
            moyenne: "209,490 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1h 34' 37''308s ",
            moyenne: "193.573 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-21",
            time: "1'15''841",
            moyenne: "207,007 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Indianapolis",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'10''832",
            moyenne: "213,056 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1h 34' 35''199s ",
            moyenne: "194.118 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'12''719",
            moyenne: "207,528 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'15''493",
            moyenne: "210,345 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1h 32' 07''803s ",
            moyenne: "200.968 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'17''111",
            moyenne: "205,932 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-21",
            time: "1'14''070",
            moyenne: "222,309 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1h 27' 51''693s ",
            moyenne: "209.278 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'16''357",
            moyenne: "215,650 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-21",
            time: "1'19''599",
            moyenne: "198,138 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "Honda RA106",
            time: "1h 52' 20''941s ",
            moyenne: "163.773 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari 248 F1",
            time: "1'23''516",
            moyenne: "188,845 km/h",
          },
        ],
      },
      {
        race: "Turquie",
        track: "Istanbul",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari 248 F1",
            time: "1'26''907",
            moyenne: "221,119 km/h",
          },
        ],
        winner: [
          {
            driver: "Felipe Massa",
            car: "Ferrari 248 F1",
            time: "1h 28' 51''082s ",
            moyenne: "208.903 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'28''005",
            moyenne: "218,360 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-21",
            time: "1'21''484",
            moyenne: "255,937 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1h 14' 51''975s ",
            moyenne: "245.814 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "McLaren MP4-21",
            time: "1'22''559",
            moyenne: "252,605 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1'44''360",
            moyenne: "188,038 km/h",
          },
        ],
        winner: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1h 37' 32''747s ",
            moyenne: "187.645 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1'37''586",
            moyenne: "201,090 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari 248 F1",
            time: "1'29''599",
            moyenne: "233,320 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1h 23' 53''413s ",
            moyenne: "219.983 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Renault R26",
            time: "1'32''676",
            moyenne: "225,573 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari 248 F1",
            time: "1'10''680",
            moyenne: "219,474 km/h",
          },
        ],
        winner: [
          {
            driver: "Felipe Massa",
            car: "Ferrari 248 F1",
            time: "1h 31' 53''751s ",
            moyenne: "199.732 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Ferrari 248 F1",
            time: "1'12''162",
            moyenne: "214,966 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Renault R26",
        team: "Renault",
        drivers: ["Fernando Alonso", "Giancarlo Fisichella"],
      },
      {
        model: "McLaren MP4-21",
        team: "McLaren",
        drivers: ["Kimi Räikkönen", "Juan-Pablo Montoya", "Pedro de la Rosa"],
      },
      {
        model: "Ferrari 248 F1",
        team: "Ferrari",
        drivers: ["Michael Schumacher", "Felipe Massa"],
      },
      {
        model: "Toyota TF106",
        team: "Toyota",
        drivers: ["Ralf Schumacher", "Jarno Trulli"],
      },
      {
        model: "Williams FW28",
        team: "Williams",
        drivers: ["Mark Webber", "Nico Rosberg", "Alexander Wurz"],
      },
      {
        model: "Honda RA106",
        team: "Honda",
        drivers: ["Rubens Barrichello", "Jenson Button", "Anthony Davidson"],
      },
      {
        model: "Red Bull RB2",
        team: "Red Bull",
        drivers: [
          "David Coulthard",
          "Christian Klien",
          "Robert Doornbos",
          "Michael Ammermuller",
        ],
      },
      {
        model: "BMW Sauber F1.06",
        team: "BMW Sauber",
        drivers: [
          "Nick Heidfeld",
          "Jacques Villeneuve",
          "Robert Kubica",
          "Sebastian Vettel",
        ],
      },
      {
        model: "Midland M16",
        team: "Midland",
        drivers: [
          "Tiago Monteiro",
          "Christijan Albers",
          "Markus Winkelhock",
          "Giorgio Mondini",
          "Adrian Sutil",
          "Alexandre Premat",
          "Ernesto Viso",
        ],
      },
      {
        model: "Toro Rosso STR1",
        team: "Toro Rosso",
        drivers: ["Vitantonio Liuzzi", "Scott Speed", "Neel Jani"],
      },
      {
        model: "Super Aguri SA05",
        team: "Super Aguri",
        drivers: [
          "Takuma Sato",
          "Yuji Ide",
          "Franck Montagny",
          "Sakon Yamamoto",
        ],
      },
      {
        model: "Toyota TF106B",
        team: "Toyota",
        drivers: ["Ralf Schumacher", "Jarno Trulli"],
      },
      {
        model: "Super Aguri SA06",
        team: "Super Aguri",
        drivers: ["Takuma Sato", "Sakon Yamamoto", "Franck Montagny"],
      },
    ],
  },
  {
    season: "2007",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1'26''072",
            moyenne: "221,800 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1h 25' 28''770s ",
            moyenne: "215.893 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1'25''235",
            moyenne: "223,978 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'35''043",
            moyenne: "209,956 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MP4-22",
            time: "1h 32' 14''930s ",
            moyenne: "201.894 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-22",
            time: "1'36''701",
            moyenne: "206,356 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'32''652",
            moyenne: "210,284 km/h",
          },
        ],
        winner: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1h 33' 27''515s ",
            moyenne: "197.887 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'34''067",
            moyenne: "207,120 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'21''421",
            moyenne: "205,819 km/h",
          },
        ],
        winner: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1h 31' 36''230s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'22''680",
            moyenne: "202,685 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MP4-22",
            time: "1'15''726",
            moyenne: "158,783 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MP4-22",
            time: "1h 40' 29''329s ",
            moyenne: "155.552 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MP4-22",
            time: "1'15''284",
            moyenne: "159,715 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-22",
            time: "1'15''707",
            moyenne: "207,373 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-22",
            time: "1h 44' 11''292s ",
            moyenne: "175.799 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MP4-22",
            time: "1'16''367",
            moyenne: "205,581 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Indianapolis",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-22",
            time: "1'12''331",
            moyenne: "208,641 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-22",
            time: "1h 31' 09''965s ",
            moyenne: "201.401 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1'13''117",
            moyenne: "206,398 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'15''034",
            moyenne: "211,632 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1h 30' 54''200s ",
            moyenne: "203.680 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'16''099",
            moyenne: "208,670 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-22",
            time: "1'19''997",
            moyenne: "231,354 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1h 21' 43''074s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1'20''638",
            moyenne: "229,515 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Nürburgring",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1'31''450",
            moyenne: "202,655 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MP4-22",
            time: "2h 06' 26''358s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'32''853",
            moyenne: "199,593 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MP4-22",
            time: "1'19''674",
            moyenne: "197,952 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-22",
            time: "1h 35' 52''991s ",
            moyenne: "alifications",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1'20''047",
            moyenne: "197,029 km/h",
          },
        ],
      },
      {
        race: "Turquie",
        track: "Istanbul",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'27''329",
            moyenne: "220,051 km/h",
          },
        ],
        winner: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1h 26' 42''161s ",
            moyenne: "214.108 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1'27''295",
            moyenne: "220,136 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MP4-22",
            time: "1'21''997",
            moyenne: "254,336 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MP4-22",
            time: "1h 18' 37''806s ",
            moyenne: "234.048 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MP4-22",
            time: "1'22''871",
            moyenne: "251,654 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1'45''994",
            moyenne: "237,885 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1h 20' 39''066s ",
            moyenne: "229.266 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'48''036",
            moyenne: "233,389 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Monsanto",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-22",
            time: "1'25''368",
            moyenne: "192,423 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-22",
            time: "2h 00' 34''579s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-22",
            time: "1'28''193",
            moyenne: "186,260 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-22",
            time: "1'35''908",
            moyenne: "204,609 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1h 37' 58''395s ",
            moyenne: "186.826 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'37''454",
            moyenne: "201,363 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2007",
            time: "1'11''931",
            moyenne: "215,657 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1h 28' 15''270s ",
            moyenne: "207.973 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2007",
            time: "1'12''445",
            moyenne: "214,127 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MP4-22",
        team: "McLaren",
        drivers: ["Fernando Alonso", "Lewis Hamilton"],
      },
      {
        model: "Renault R27",
        team: "Renault",
        drivers: ["Giancarlo Fisichella", "Heikki Kovalainen"],
      },
      {
        model: "Ferrari F2007",
        team: "Ferrari",
        drivers: ["Felipe Massa", "Kimi Räikkönen"],
      },
      {
        model: "Honda RA107",
        team: "Honda",
        drivers: ["Jenson Button", "Rubens Barrichello", "Christian Klien"],
      },
      {
        model: "BMW Sauber F1.07",
        team: "BMW Sauber",
        drivers: ["Nick Heidfeld", "Robert Kubica", "Sebastian Vettel"],
      },
      {
        model: "Toyota TF107",
        team: "Toyota",
        drivers: ["Ralf Schumacher", "Jarno Trulli"],
      },
      {
        model: "Red Bull RB3",
        team: "Red Bull",
        drivers: ["David Coulthard", "Mark Webber"],
      },
      {
        model: "Williams FW29",
        team: "Williams",
        drivers: ["Nico Rosberg", "Alexander Wurz", "Kazuki Nakajima"],
      },
      {
        model: "Toro Rosso STR2",
        team: "Toro Rosso",
        drivers: ["Vitantonio Liuzzi", "Scott Speed", "Sebastian Vettel"],
      },
      {
        model: "Spyker F8-VII",
        team: "Spyker",
        drivers: [
          "Adrian Sutil",
          "Christijan Albers",
          "Markus Winkelhock",
          "Sakon Yamamoto",
        ],
      },
      {
        model: "Super Aguri SA07",
        team: "Super Aguri",
        drivers: ["Takuma Sato", "Anthony Davidson"],
      },
      {
        model: "Spyker F8-VII-B",
        team: "Spyker",
        drivers: ["Adrian Sutil", "Sakon Yamamoto"],
      },
    ],
  },
  {
    season: "2008",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1'26''714",
            moyenne: "220,158 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1h 34' 50''616s ",
            moyenne: "un feu rouge",
          },
        ],
        bestLap: [
          {
            driver: "Heikki Kovalainen",
            car: "McLaren MP4-23",
            time: "1'27''418",
            moyenne: "218,385 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1'35''748",
            moyenne: "208,410 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1h 31' 18''555s ",
            moyenne: "203.971 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nick Heidfeld",
            car: "BMW Sauber F1.08",
            time: "1'35''366",
            moyenne: "209,244 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Robert Kubica",
            car: "BMW Sauber F1.08",
            time: "1'33''096",
            moyenne: "209,281 km/h",
          },
        ],
        winner: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1h 31' 06''970s ",
            moyenne: "202.975 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Heikki Kovalainen",
            car: "McLaren MP4-23",
            time: "1'33''193",
            moyenne: "209,063 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'21''813",
            moyenne: "204,833 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1h 38' 19''051s ",
            moyenne: "187.416 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'21''670",
            moyenne: "205,192 km/h",
          },
        ],
      },
      {
        race: "Turquie",
        track: "Istanbul",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1'27''617",
            moyenne: "219,327 km/h",
          },
        ],
        winner: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1h 26' 49''451s ",
            moyenne: "213.809 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'26''506",
            moyenne: "222,144 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1'15''787",
            moyenne: "158,655 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "2h 00' 42''742s ",
            moyenne: " de 2 heures",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'16''689",
            moyenne: "156,789 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1'17''886",
            moyenne: "201,572 km/h",
          },
        ],
        winner: [
          {
            driver: "Robert Kubica",
            car: "BMW Sauber F1.08",
            time: "1h 36' 24''447s ",
            moyenne: "189.987 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'17''387",
            moyenne: "202,871 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Magny-Cours",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'16''449",
            moyenne: "207,715 km/h",
          },
        ],
        winner: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1h 31' 50''245s ",
            moyenne: "201.608 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'16''630",
            moyenne: "207,224 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Heikki Kovalainen",
            car: "McLaren MP4-23",
            time: "1'21''049",
            moyenne: "228,351 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1h 39' 09''440s ",
            moyenne: "186.585 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'32''150",
            moyenne: "200,842 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1'15''666",
            moyenne: "217,620 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1h 31' 20''874s ",
            moyenne: " l'ouverture",
          },
        ],
        bestLap: [
          {
            driver: "Nick Heidfeld",
            car: "BMW Sauber F1.08",
            time: "1'15''987",
            moyenne: "216,700 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1'20''899",
            moyenne: "194,954 km/h",
          },
        ],
        winner: [
          {
            driver: "Heikki Kovalainen",
            car: "McLaren MP4-23",
            time: "1h 37' 27''067s ",
            moyenne: "188.810 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'21''195",
            moyenne: "194,243 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Valencia",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1'38''989",
            moyenne: "197,076 km/h",
          },
        ],
        winner: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1h 35' 32''339s ",
            moyenne: "193.983 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1'38''708",
            moyenne: "197,637 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1'47''338",
            moyenne: "234,907 km/h",
          },
        ],
        winner: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1h 22' 59''394s ",
            moyenne: "K. Raikkonen",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'47''930",
            moyenne: "233,618 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Toro Rosso STR3",
            time: "1'37''555",
            moyenne: "213,775 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Toro Rosso STR3",
            time: "1h 26' 47''494s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'28''047",
            moyenne: "236,860 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1'44''801",
            moyenne: "174,056 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R28",
            time: "1h 57' 16''304s ",
            moyenne: "158.069 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F2008",
            time: "1'45''599",
            moyenne: "172,740 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Monsanto",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1'18''404",
            moyenne: "209,515 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Renault R28",
            time: "1h 30' 21''892s ",
            moyenne: "éné F. Massa",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1'18''426",
            moyenne: "209,456 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1'36''303",
            moyenne: "203,769 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1h 31' 57''403s ",
            moyenne: "199.050 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-23",
            time: "1'36''325",
            moyenne: "203,723 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1'12''368",
            moyenne: "214,354 km/h",
          },
        ],
        winner: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1h 34' 11''435s ",
            moyenne: "194.866 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F2008",
            time: "1'13''736",
            moyenne: "210,378 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Ferrari F2008",
        team: "Ferrari",
        drivers: ["Kimi Räikkönen", "Felipe Massa"],
      },
      {
        model: "BMW Sauber F1.08",
        team: "BMW Sauber",
        drivers: ["Nick Heidfeld", "Robert Kubica"],
      },
      {
        model: "Renault R28",
        team: "Renault",
        drivers: ["Fernando Alonso", "Nelsinho Piquet"],
      },
      {
        model: "Williams FW30",
        team: "Williams",
        drivers: ["Nico Rosberg", "Kazuki Nakajima"],
      },
      {
        model: "Red Bull RB4",
        team: "Red Bull",
        drivers: ["David Coulthard", "Mark Webber"],
      },
      {
        model: "Toyota TF108",
        team: "Toyota",
        drivers: ["Jarno Trulli", "Timo Glock"],
      },
      {
        model: "Toro Rosso STR2B",
        team: "Toro Rosso",
        drivers: ["Sébastien Bourdais", "Sebastian Vettel"],
      },
      {
        model: "Honda RA108",
        team: "Honda",
        drivers: ["Jenson Button", "Rubens Barrichello"],
      },
      {
        model: "Super Aguri SA08A",
        team: "Super Aguri",
        drivers: ["Takuma Sato", "Anthony Davidson"],
      },
      {
        model: "Force India VJM01",
        team: "Force India",
        drivers: ["Adrian Sutil", "Giancarlo Fisichella"],
      },
      {
        model: "McLaren MP4-23",
        team: "McLaren",
        drivers: ["Lewis Hamilton", "Heikki Kovalainen"],
      },
      {
        model: "Toro Rosso STR3",
        team: "Toro Rosso",
        drivers: ["Sébastien Bourdais", "Sebastian Vettel"],
      },
    ],
  },
  {
    season: "2009",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "1'26''202",
            moyenne: "221,466 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "1h 34' 15''784s ",
            moyenne: "commissaires",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Williams FW31",
            time: "1'27''706",
            moyenne: "217,668 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "1'35''181",
            moyenne: "209,651 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "55'30''622 ",
            moyenne: "st attribuée",
          },
        ],
        bestLap: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "1'36''641",
            moyenne: "206,484 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB5",
            time: "1'36''184",
            moyenne: "204,021 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB5",
            time: "1h 57' 43''485s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Brawn GP BGP 001",
            time: "1'52''592",
            moyenne: "174,289 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Jarno Trulli",
            car: "Toyota TF109",
            time: "1'33''431",
            moyenne: "208,530 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "1h 31' 48''182s ",
            moyenne: "201.456 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jarno Trulli",
            car: "Toyota TF109",
            time: "1'34''556",
            moyenne: "206,049 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "1'20''527",
            moyenne: "208,104 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "1h 37' 19''202s ",
            moyenne: "189.337 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Rubens Barrichello",
            car: "Brawn GP BGP 001",
            time: "1'22''762",
            moyenne: "202,484 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "1'14''902",
            moyenne: "160,530 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "1h 40' 44''282s ",
            moyenne: "155.167 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari F60",
            time: "1'15''154",
            moyenne: "159,991 km/h",
          },
        ],
      },
      {
        race: "Turquie",
        track: "Istanbul",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB5",
            time: "1'28''316",
            moyenne: "217,591 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "1h 26' 24''848s ",
            moyenne: "214.823 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jenson Button",
            car: "Brawn GP BGP 001",
            time: "1'27''579",
            moyenne: "219,422 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB5",
            time: "1'19''509",
            moyenne: "232,774 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB5",
            time: "1h 22' 49''328s ",
            moyenne: "223.386 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB5",
            time: "1'20''735",
            moyenne: "229,239 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB5",
            time: "1'32''230",
            moyenne: "200,941 km/h",
          },
        ],
        winner: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB5",
            time: "1h 36' 43''310s ",
            moyenne: "191.599 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Renault R29",
            time: "1'33''365",
            moyenne: "198,498 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Renault R29",
            time: "1'21''569",
            moyenne: "193,353 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-24",
            time: "1h 38' 23''876s ",
            moyenne: "186.973 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB5",
            time: "1'21''931",
            moyenne: "192,499 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Valencia",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-24",
            time: "1'39''498",
            moyenne: "196,068 km/h",
          },
        ],
        winner: [
          {
            driver: "Rubens Barrichello",
            car: "Brawn GP BGP 001",
            time: "1h 35' 51''289s ",
            moyenne: "193.344 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Timo Glock",
            car: "Toyota TF109",
            time: "1'38''683",
            moyenne: "197,688 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Giancarlo Fisichella",
            car: "Force India VJM02",
            time: "1'46''308",
            moyenne: "237,183 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F60",
            time: "1h 23' 50''995s ",
            moyenne: "220.431 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB5",
            time: "1'47''263",
            moyenne: "235,071 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-24",
            time: "1'24''066",
            moyenne: "248,077 km/h",
          },
        ],
        winner: [
          {
            driver: "Rubens Barrichello",
            car: "Brawn GP BGP 001",
            time: "1h 16' 21''706s ",
            moyenne: "241.000 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Adrian Sutil",
            car: "Force India VJM02",
            time: "1'24''739",
            moyenne: "246,106 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-24",
            time: "1'47''891",
            moyenne: "169,271 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-24",
            time: "1h 56' 06''337s ",
            moyenne: "159.845 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Renault R29",
            time: "1'48''240",
            moyenne: "168,725 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB5",
            time: "1'32''160",
            moyenne: "226,836 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB5",
            time: "1h 28' 20''443s ",
            moyenne: "208.900 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB5",
            time: "1'32''569",
            moyenne: "225,834 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Rubens Barrichello",
            car: "Brawn GP BGP 001",
            time: "1'19''576",
            moyenne: "194,938 km/h",
          },
        ],
        winner: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB5",
            time: "1h 32' 23''081s ",
            moyenne: "198.675 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB5",
            time: "1'13''733",
            moyenne: "210,386 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-24",
            time: "1'40''948",
            moyenne: "198,066 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB5",
            time: "1h 34' 03''414s ",
            moyenne: "194.793 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB5",
            time: "1'40''279",
            moyenne: "199,388 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MP4-24",
        team: "McLaren",
        drivers: ["Lewis Hamilton", "Heikki Kovalainen"],
      },
      {
        model: "Ferrari F60",
        team: "Ferrari",
        drivers: [
          "Felipe Massa",
          "Kimi Räikkönen",
          "Luca Badoer",
          "Giancarlo Fisichella",
        ],
      },
      {
        model: "BMW Sauber F1.09",
        team: "BMW Sauber",
        drivers: ["Robert Kubica", "Nick Heidfeld"],
      },
      {
        model: "Renault R29",
        team: "Renault",
        drivers: ["Fernando Alonso", "Nelsinho Piquet", "Romain Grosjean"],
      },
      {
        model: "Toyota TF109",
        team: "Toyota",
        drivers: ["Jarno Trulli", "Timo Glock", "Kamui Kobayashi"],
      },
      {
        model: "Toro Rosso STR4",
        team: "Toro Rosso",
        drivers: ["Sébastien Bourdais", "Sébastien Buemi", "Jaime Alguersuari"],
      },
      {
        model: "Red Bull RB5",
        team: "Red Bull",
        drivers: ["Mark Webber", "Sebastian Vettel"],
      },
      {
        model: "Williams FW31",
        team: "Williams",
        drivers: ["Nico Rosberg", "Kazuki Nakajima"],
      },
      {
        model: "Force India VJM02",
        team: "Force India",
        drivers: ["Adrian Sutil", "Giancarlo Fisichella", "Vitantonio Liuzzi"],
      },
      {
        model: "Brawn GP BGP 001",
        team: "Brawn GP",
        drivers: ["Jenson Button", "Rubens Barrichello"],
      },
    ],
  },
  {
    season: "2010",
    calendar: [
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'54''101",
            moyenne: "198,740 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "1h 39' 20''396s ",
            moyenne: "186.273 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "1'58''287",
            moyenne: "191,707 km/h",
          },
        ],
      },
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'23''919",
            moyenne: "227,491 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-25",
            time: "1h 33' 36''531s ",
            moyenne: "197.144 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1'28''358",
            moyenne: "216,062 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1'49''327",
            moyenne: "182,524 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1h 33' 48''412s ",
            moyenne: "198.541 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1'37''054",
            moyenne: "205,605 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'34''558",
            moyenne: "207,530 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-25",
            time: "1h 46' 42''163s ",
            moyenne: "171.542 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-25",
            time: "1'42''061",
            moyenne: "192,273 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1'19''995",
            moyenne: "209,488 km/h",
          },
        ],
        winner: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1h 35' 44''101s ",
            moyenne: "192.471 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-25",
            time: "1'24''357",
            moyenne: "198,656 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1'13''826",
            moyenne: "162,869 km/h",
          },
        ],
        winner: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1h 50' 13''355s ",
            moyenne: "dernier tour",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'15''192",
            moyenne: "159,911 km/h",
          },
        ],
      },
      {
        race: "Turquie",
        track: "Istanbul",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1'26''295",
            moyenne: "222,687 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-25",
            time: "1h 28' 47''620s ",
            moyenne: "209.066 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Vitaly Petrov",
            car: "Renault R30",
            time: "1'29''165",
            moyenne: "215,520 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-25",
            time: "1'15''105",
            moyenne: "209,035 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-25",
            time: "1h 33' 53''456s ",
            moyenne: "s les stands",
          },
        ],
        bestLap: [
          {
            driver: "Robert Kubica",
            car: "Renault R30",
            time: "1'16''972",
            moyenne: "203,965 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Valencia",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'37''587",
            moyenne: "199,908 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1h 40' 29''571s ",
            moyenne: "s Safety car",
          },
        ],
        bestLap: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-25",
            time: "1'38''766",
            moyenne: "197,521 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'29''615",
            moyenne: "236,652 km/h",
          },
        ],
        winner: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1h 24' 38''200s ",
            moyenne: "217.088 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "1'30''874",
            moyenne: "233,374 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'13''791",
            moyenne: "223,149 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "1h 27' 38''864s ",
            moyenne: "209.788 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'15''824",
            moyenne: "217,166 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'18''773",
            moyenne: "200,216 km/h",
          },
        ],
        winner: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1h 41' 05''571s ",
            moyenne: "181.989 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'22''362",
            moyenne: "191,491 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1'45''778",
            moyenne: "238,371 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-25",
            time: "1h 29' 04''268s ",
            moyenne: "nt un virage",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-25",
            time: "1'49''069",
            moyenne: "231,178 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "1'21''962",
            moyenne: "254,445 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "1h 16' 24''572s ",
            moyenne: "240.850 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "1'24''139",
            moyenne: "247,861 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "1'45''390",
            moyenne: "173,288 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "1h 57' 53''579s ",
            moyenne: " un avantage",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "1'47''976",
            moyenne: "169,138 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'30''785",
            moyenne: "230,272 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1h 30' 27''323s ",
            moyenne: "203.949 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB6",
            time: "1'33''474",
            moyenne: "223,647 km/h",
          },
        ],
      },
      {
        race: "Corée du Sud",
        track: "Yeongam",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'35''585",
            moyenne: "211,477 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "2h 48' 20''810s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F10",
            time: "1'50''257",
            moyenne: "183,335 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Nico Hülkenberg",
            car: "Williams FW32",
            time: "1'14''470",
            moyenne: "208,304 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1h 33' 11''803s ",
            moyenne: "196.944 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-25",
            time: "1'13''851",
            moyenne: "210,050 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1'39''394",
            moyenne: "201,163 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB6",
            time: "1h 39' 36''837s ",
            moyenne: "183.923 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-25",
            time: "1'41''274",
            moyenne: "197,429 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MP4-25",
        team: "McLaren",
        drivers: ["Jenson Button", "Lewis Hamilton"],
      },
      {
        model: "Mercedes MGP W01",
        team: "Mercedes",
        drivers: ["Michael Schumacher", "Nico Rosberg"],
      },
      {
        model: "Red Bull RB6",
        team: "Red Bull",
        drivers: ["Sebastian Vettel", "Mark Webber"],
      },
      {
        model: "Ferrari F10",
        team: "Ferrari",
        drivers: ["Felipe Massa", "Fernando Alonso"],
      },
      {
        model: "Williams FW32",
        team: "Williams",
        drivers: ["Rubens Barrichello", "Nico Hülkenberg"],
      },
      {
        model: "Renault R30",
        team: "Renault",
        drivers: ["Robert Kubica", "Vitaly Petrov"],
      },
      {
        model: "Force India VJM03",
        team: "Force India",
        drivers: ["Adrian Sutil", "Vitantonio Liuzzi", "Paul di Resta"],
      },
      {
        model: "Toro Rosso STR5",
        team: "Toro Rosso",
        drivers: ["Sébastien Buemi", "Jaime Alguersuari"],
      },
      {
        model: "Lotus T127",
        team: "Lotus",
        drivers: ["Jarno Trulli", "Heikki Kovalainen", "Fairuz Fauzy"],
      },
      {
        model: "HRT F110",
        team: "HRT",
        drivers: [
          "Karun Chandhok",
          "Bruno Senna",
          "Christian Klien",
          "Sakon Yamamoto",
        ],
      },
      {
        model: "BMW Sauber C29",
        team: "BMW Sauber",
        drivers: ["Pedro de la Rosa", "Kamui Kobayashi", "Nick Heidfeld"],
      },
      {
        model: "Virgin VR-01",
        team: "Virgin",
        drivers: ["Timo Glock", "Lucas di Grassi", "Jérôme d'Ambrosio"],
      },
    ],
  },
  {
    season: "2011",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'23''529",
            moyenne: "228,553 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1h 29' 30''259s ",
            moyenne: "non conforme",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari 150° Italia",
            time: "1'28''947",
            moyenne: "214,631 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'34''870",
            moyenne: "210,338 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1h 37' 39''832s ",
            moyenne: " L. Hamilton",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB7",
            time: "1'40''571",
            moyenne: "198,415 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'33''706",
            moyenne: "209,417 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-26",
            time: "1h 36' 58''226s ",
            moyenne: "188.758 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB7",
            time: "1'38''993",
            moyenne: "198,232 km/h",
          },
        ],
      },
      {
        race: "Turquie",
        track: "Istanbul",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'25''049",
            moyenne: "225,950 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1h 30' 17''558s ",
            moyenne: "205.596 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB7",
            time: "1'29''703",
            moyenne: "214,227 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB7",
            time: "1'20''981",
            moyenne: "206,937 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1h 39' 03''301s ",
            moyenne: "186.020 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-26",
            time: "1'26''727",
            moyenne: "193,227 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'13''556",
            moyenne: "163,467 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "2h 09' 38''373s ",
            moyenne: " carambolage",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB7",
            time: "1'16''234",
            moyenne: "157,725 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'13''014",
            moyenne: "215,022 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-26",
            time: "4h 04' 39''537s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-26",
            time: "1'16''956",
            moyenne: "204,007 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Valencia",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'36''975",
            moyenne: "201,169 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1h 39' 36''169s ",
            moyenne: "186.069 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'41''852",
            moyenne: "191,537 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB7",
            time: "1'30''399",
            moyenne: "234,600 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari 150° Italia",
            time: "1h 28' 41''196s ",
            moyenne: "207.155 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari 150° Italia",
            time: "1'34''908",
            moyenne: "223,454 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB7",
            time: "1'30''079",
            moyenne: "205,739 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-26",
            time: "1h 37' 30''334s ",
            moyenne: "189.911 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-26",
            time: "1'34''302",
            moyenne: "196,526 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'19''815",
            moyenne: "197,602 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-26",
            time: "1h 46' 42''337s ",
            moyenne: "172.416 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Ferrari 150° Italia",
            time: "1'23''415",
            moyenne: "189,074 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'48''298",
            moyenne: "232,824 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1h 26' 44''893s ",
            moyenne: "213.066 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB7",
            time: "1'49''883",
            moyenne: "229,466 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'22''275",
            moyenne: "253,477 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1h 20' 46''172s ",
            moyenne: "227.848 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-26",
            time: "1'26''187",
            moyenne: "241,972 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'44''381",
            moyenne: "174,963 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1h 59' 06''757s ",
            moyenne: "155.810 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-26",
            time: "1'48''454",
            moyenne: "168,392 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'30''466",
            moyenne: "231,083 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-26",
            time: "1h 30' 53''427s ",
            moyenne: "202.972 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-26",
            time: "1'36''568",
            moyenne: "216,482 km/h",
          },
        ],
      },
      {
        race: "Corée du Sud",
        track: "Yeongam",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-26",
            time: "1'35''820",
            moyenne: "210,958 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1h 38' 01''994s ",
            moyenne: "188.893 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'39''605",
            moyenne: "202,942 km/h",
          },
        ],
      },
      {
        race: "Inde",
        track: "New Delhi",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'24''178",
            moyenne: "219,178 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1h 30' 35''002s ",
            moyenne: "203.514 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'27''249",
            moyenne: "211,464 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'38''481",
            moyenne: "203,028 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-26",
            time: "1h 37' 11''886s ",
            moyenne: "apeaux bleus",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB7",
            time: "1'42''612",
            moyenne: "194,854 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB7",
            time: "1'11''918",
            moyenne: "215,696 km/h",
          },
        ],
        winner: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB7",
            time: "1h 32' 17''464s ",
            moyenne: "198.877 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB7",
            time: "1'15''324",
            moyenne: "205,942 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Red Bull RB7",
        team: "Red Bull",
        drivers: ["Sebastian Vettel", "Mark Webber"],
      },
      {
        model: "McLaren MP4-26",
        team: "McLaren",
        drivers: ["Lewis Hamilton", "Jenson Button"],
      },
      {
        model: "Ferrari 150° Italia",
        team: "Ferrari",
        drivers: ["Fernando Alonso", "Felipe Massa"],
      },
      {
        model: "Mercedes MGP W02",
        team: "Mercedes",
        drivers: ["Michael Schumacher", "Nico Rosberg"],
      },
      {
        model: "Renault R31",
        team: "Renault",
        drivers: [
          "Nick Heidfeld",
          "Vitaly Petrov",
          "Bruno Senna",
          "Romain Grosjean",
        ],
      },
      {
        model: "Williams FW33",
        team: "Williams",
        drivers: ["Rubens Barrichello", "Pastor Maldonado"],
      },
      {
        model: "Force India VJM04",
        team: "Force India",
        drivers: ["Adrian Sutil", "Paul di Resta", "Nico Hülkenberg"],
      },
      {
        model: "Sauber C30",
        team: "Sauber",
        drivers: ["Kamui Kobayashi", "Sergio Perez", "Pedro de la Rosa"],
      },
      {
        model: "Toro Rosso STR6",
        team: "Toro Rosso",
        drivers: [
          "Sébastien Buemi",
          "Jaime Alguersuari",
          "Daniel Ricciardo",
          "Jean-Éric Vergne",
        ],
      },
      {
        model: "Lotus T128",
        team: "Lotus",
        drivers: [
          "Heikki Kovalainen",
          "Karun Chandhok",
          "Jarno Trulli",
          "Davide Valsecchi",
          "Luiz Razia",
        ],
      },
      {
        model: "HRT F111",
        team: "HRT",
        drivers: [
          "Narain Karthikeyan",
          "Vitantonio Liuzzi",
          "Daniel Ricciardo",
          "Jan Charouz",
        ],
      },
      {
        model: "Virgin MVR-02",
        team: "Virgin",
        drivers: ["Timo Glock", "Jérôme d'Ambrosio", "Robert Wickens"],
      },
    ],
  },
  {
    season: "2012",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1'24''922",
            moyenne: "224,804 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-27",
            time: "1h 34' 09''565s ",
            moyenne: "195.991 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-27",
            time: "1'29''187",
            moyenne: "214,054 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1'36''219",
            moyenne: "207,389 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F2012",
            time: "2h 44' 51''812s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Lotus E20",
            time: "1'40''722",
            moyenne: "198,118 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W03",
            time: "1'35''121",
            moyenne: "206,301 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W03",
            time: "1h 36' 26''929s ",
            moyenne: "189.779 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kamui Kobayashi",
            car: "Sauber C31",
            time: "1'39''960",
            moyenne: "196,315 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'32''422",
            moyenne: "210,807 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1h 35' 10''990s ",
            moyenne: "194.302 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'36''379",
            moyenne: "202,152 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1'21''707",
            moyenne: "205,099 km/h",
          },
        ],
        winner: [
          {
            driver: "Pastor Maldonado",
            car: "Williams FW34",
            time: "1h 39' 09''145s ",
            moyenne: "185.838 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Romain Grosjean",
            car: "Lotus E20",
            time: "1'26''250",
            moyenne: "194,296 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Michael Schumacher",
            car: "Mercedes F1 W03",
            time: "1'14''301",
            moyenne: "161,828 km/h",
          },
        ],
        winner: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB8",
            time: "1h 46' 06''557s ",
            moyenne: "147.312 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sergio Perez",
            car: "Sauber C31",
            time: "1'17''296",
            moyenne: "155,558 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'13''784",
            moyenne: "212,778 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1h 32' 29''586s ",
            moyenne: "198.028 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'15''752",
            moyenne: "207,250 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Valencia",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'38''086",
            moyenne: "198,891 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F2012",
            time: "1h 44' 16''649s ",
            moyenne: " L. Hamilton",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W03",
            time: "1'42''163",
            moyenne: "190,954 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F2012",
            time: "1'51''746",
            moyenne: "189,784 km/h",
          },
        ],
        winner: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB8",
            time: "1h 25' 11''288s ",
            moyenne: "215.662 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Lotus E20",
            time: "1'34''661",
            moyenne: "224,037 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F2012",
            time: "1'40''621",
            moyenne: "163,648 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F2012",
            time: "1h 31' 05''862s ",
            moyenne: " de la piste",
          },
        ],
        bestLap: [
          {
            driver: "Michael Schumacher",
            car: "Mercedes F1 W03",
            time: "1'18''725",
            moyenne: "209,164 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1'20''953",
            moyenne: "194,824 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1h 41' 05''503s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'24''136",
            moyenne: "187,454 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-27",
            time: "1'47''573",
            moyenne: "234,393 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-27",
            time: "1h 29' 08''530s ",
            moyenne: "207.344 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Bruno Senna",
            car: "Williams FW34",
            time: "1'52''822",
            moyenne: "223,488 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1'24''010",
            moyenne: "248,242 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1h 19' 41''221s ",
            moyenne: "230.944 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W03",
            time: "1'27''239",
            moyenne: "239,054 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1'46''362",
            moyenne: "171,704 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "2h 00' 26''144s ",
            moyenne: " de 2 heures",
          },
        ],
        bestLap: [
          {
            driver: "Nico Hülkenberg",
            car: "Force India VJM05",
            time: "1'51''033",
            moyenne: "164,481 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'30''839",
            moyenne: "230,135 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1h 28' 56''242s ",
            moyenne: "207.430 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'35''774",
            moyenne: "218,276 km/h",
          },
        ],
      },
      {
        race: "Corée du Sud",
        track: "Yeongam",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB8",
            time: "1'37''242",
            moyenne: "207,873 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1h 36' 28''651s ",
            moyenne: "191.939 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB8",
            time: "1'42''037",
            moyenne: "198,105 km/h",
          },
        ],
      },
      {
        race: "Inde",
        track: "New Delhi",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'25''283",
            moyenne: "216,339 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1h 31' 10''744s ",
            moyenne: "202.184 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-27",
            time: "1'28''203",
            moyenne: "209,177 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1'40''630",
            moyenne: "198,692 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Lotus E20",
            time: "1h 45' 58''667s ",
            moyenne: "172.879 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'43''964",
            moyenne: "192,320 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Amériques - Austin",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'35''657",
            moyenne: "207,479 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1h 35' 55''269s ",
            moyenne: "192.912 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB8",
            time: "1'39''347",
            moyenne: "199,773 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1'12''458",
            moyenne: "214,088 km/h",
          },
        ],
        winner: [
          {
            driver: "Jenson Button",
            car: "McLaren MP4-27",
            time: "1h 45' 22''656s ",
            moyenne: "174.179 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "McLaren MP4-27",
            time: "1'18''069",
            moyenne: "198,701 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Red Bull RB8",
        team: "Red Bull",
        drivers: ["Sebastian Vettel", "Mark Webber"],
      },
      {
        model: "McLaren MP4-27",
        team: "McLaren",
        drivers: ["Jenson Button", "Lewis Hamilton"],
      },
      {
        model: "Ferrari F2012",
        team: "Ferrari",
        drivers: ["Fernando Alonso", "Felipe Massa"],
      },
      {
        model: "Mercedes F1 W03",
        team: "Mercedes",
        drivers: ["Michael Schumacher", "Nico Rosberg"],
      },
      {
        model: "Lotus E20",
        team: "Lotus",
        drivers: ["Kimi Räikkönen", "Romain Grosjean", "Jérôme d'Ambrosio"],
      },
      {
        model: "Force India VJM05",
        team: "Force India",
        drivers: ["Paul di Resta", "Nico Hülkenberg", "Jules Bianchi"],
      },
      {
        model: "Sauber C31",
        team: "Sauber",
        drivers: ["Kamui Kobayashi", "Sergio Perez", "Esteban Gutiérrez"],
      },
      {
        model: "Toro Rosso STR7",
        team: "Toro Rosso",
        drivers: ["Daniel Ricciardo", "Jean-Éric Vergne"],
      },
      {
        model: "Williams FW34",
        team: "Williams",
        drivers: ["Pastor Maldonado", "Bruno Senna", "Valtteri Bottas"],
      },
      {
        model: "Caterham CT01",
        team: "Caterham",
        drivers: [
          "Heikki Kovalainen",
          "Vitaly Petrov",
          "Giedo van der Garde",
          "Alexander Rossi",
        ],
      },
      {
        model: "HRT F112",
        team: "HRT",
        drivers: [
          "Pedro de la Rosa",
          "Narain Karthikeyan",
          "Dani Clos",
          "Qing Hua Ma",
        ],
      },
      {
        model: "Marussia MR01",
        team: "Marussia",
        drivers: ["Timo Glock", "Charles Pic", "Max Chilton"],
      },
    ],
  },
  {
    season: "2013",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'27''407",
            moyenne: "218,413 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Lotus E21",
            time: "1h 30' 03''225s ",
            moyenne: "204.927 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Lotus E21",
            time: "1'29''274",
            moyenne: "213,845 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'49''674",
            moyenne: "181,946 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 38' 56''681s ",
            moyenne: "188.231 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sergio Perez",
            car: "McLaren MP4-28",
            time: "1'39''199",
            moyenne: "201,159 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W04",
            time: "1'34''484",
            moyenne: "207,692 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F138",
            time: "1h 36' 26''945s ",
            moyenne: "189.778 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'36''808",
            moyenne: "202,706 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W04",
            time: "1'32''330",
            moyenne: "211,017 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 36' 00''498s ",
            moyenne: "192.632 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'36''961",
            moyenne: "200,939 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W04",
            time: "1'20''718",
            moyenne: "207,612 km/h",
          },
        ],
        winner: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F138",
            time: "1h 39' 16''596s ",
            moyenne: "185.605 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Esteban Gutiérrez",
            car: "Sauber C32",
            time: "1'26''217",
            moyenne: "194,370 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W04",
            time: "1'13''876",
            moyenne: "162,759 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W04",
            time: "2h 17' 52''056s ",
            moyenne: "or Maldonado",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'16''577",
            moyenne: "157,018 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'25''425",
            moyenne: "183,782 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 32' 09''143s ",
            moyenne: "198.760 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB9",
            time: "1'16''182",
            moyenne: "206,080 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W04",
            time: "1'29''607",
            moyenne: "236,673 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W04",
            time: "1h 32' 59''456s ",
            moyenne: "197.566 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB9",
            time: "1'33''401",
            moyenne: "227,060 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Nürburgring",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W04",
            time: "1'29''398",
            moyenne: "207,307 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 41' 14''711s ",
            moyenne: "182.896 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F138",
            time: "1'33''468",
            moyenne: "198,280 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W04",
            time: "1'19''388",
            moyenne: "198,665 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W04",
            time: "1h 42' 29''445s ",
            moyenne: "té J. Button",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB9",
            time: "1'24''069",
            moyenne: "187,603 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W04",
            time: "2'01''012",
            moyenne: "208,363 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 23' 42''196s ",
            moyenne: "220.817 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'50''756",
            moyenne: "227,657 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'23''755",
            moyenne: "248,998 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 18' 33''352s ",
            moyenne: "234.269 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W04",
            time: "1'25''849",
            moyenne: "242,924 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'42''841",
            moyenne: "177,303 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 59' 13''132s ",
            moyenne: "155.426 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'48''574",
            moyenne: "167,941 km/h",
          },
        ],
      },
      {
        race: "Corée du Sud",
        track: "Yeongam",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'37''202",
            moyenne: "207,959 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 43' 13''701s ",
            moyenne: "179.387 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'41''380",
            moyenne: "199,388 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB9",
            time: "1'30''915",
            moyenne: "229,942 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 26' 49''301s ",
            moyenne: "212.484 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB9",
            time: "1'34''587",
            moyenne: "221,016 km/h",
          },
        ],
      },
      {
        race: "Inde",
        track: "New Delhi",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'24''119",
            moyenne: "219,332 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 31' 12''187s ",
            moyenne: "202.131 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Lotus E21",
            time: "1'27''679",
            moyenne: "210,427 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB9",
            time: "1'39''957",
            moyenne: "200,030 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 38' 06''106s ",
            moyenne: "186.758 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "Ferrari F138",
            time: "1'43''434",
            moyenne: "193,306 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Amériques - Austin",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'36''338",
            moyenne: "206,012 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 39' 17''148s ",
            moyenne: "E. Gutiérrez",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'39''856",
            moyenne: "198,754 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1'26''479",
            moyenne: "179,378 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB9",
            time: "1h 32' 36''300s ",
            moyenne: "198.202 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Mark Webber",
            car: "Red Bull RB9",
            time: "1'15''436",
            moyenne: "205,637 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Red Bull RB9",
        team: "Red Bull",
        drivers: ["Sebastian Vettel", "Mark Webber"],
      },
      {
        model: "Ferrari F138",
        team: "Ferrari",
        drivers: ["Fernando Alonso", "Felipe Massa"],
      },
      {
        model: "McLaren MP4-28",
        team: "McLaren",
        drivers: ["Jenson Button", "Sergio Perez"],
      },
      {
        model: "Lotus E21",
        team: "Lotus",
        drivers: ["Kimi Räikkönen", "Romain Grosjean", "Heikki Kovalainen"],
      },
      {
        model: "Mercedes F1 W04",
        team: "Mercedes",
        drivers: ["Nico Rosberg", "Lewis Hamilton"],
      },
      {
        model: "Sauber C32",
        team: "Sauber",
        drivers: ["Nico Hülkenberg", "Esteban Gutiérrez"],
      },
      {
        model: "Force India VJM06",
        team: "Force India",
        drivers: ["Paul di Resta", "Adrian Sutil", "James Calado"],
      },
      {
        model: "Williams FW35",
        team: "Williams",
        drivers: ["Pastor Maldonado", "Valtteri Bottas"],
      },
      {
        model: "Toro Rosso STR8",
        team: "Toro Rosso",
        drivers: ["Jean-Éric Vergne", "Daniel Ricciardo", "Daniil Kvyat"],
      },
      {
        model: "Caterham CT03",
        team: "Caterham",
        drivers: [
          "Charles Pic",
          "Giedo van der Garde",
          "Qing Hua Ma",
          "Heikki Kovalainen",
          "Alexander Rossi",
        ],
      },
      {
        model: "Marussia MR02",
        team: "Marussia",
        drivers: ["Jules Bianchi", "Max Chilton", "Rodolfo Gonzalez"],
      },
    ],
  },
  {
    season: "2014",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'44''231",
            moyenne: "183,159 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1h 32' 58''710s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'32''478",
            moyenne: "206,436 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'59''431",
            moyenne: "167,082 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1h 40' 25''974s ",
            moyenne: "185.442 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'43''066",
            moyenne: "193,612 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'33''185",
            moyenne: "209,081 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1h 39' 42''743s ",
            moyenne: "185.476 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'37''020",
            moyenne: "200,816 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'53''860",
            moyenne: "172,349 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1h 33' 28''338s ",
            moyenne: "our trop tôt",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'40''402",
            moyenne: "195,450 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'25''232",
            moyenne: "196,616 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1h 41' 05''155s ",
            moyenne: "182.283 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB10",
            time: "1'28''918",
            moyenne: "188,466 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'15''989",
            moyenne: "158,233 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1h 49' 27''661s ",
            moyenne: "s safety car",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari F14 T",
            time: "1'18''479",
            moyenne: "153,213 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'14''874",
            moyenne: "209,680 km/h",
          },
        ],
        winner: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB10",
            time: "1h 39' 12''830s ",
            moyenne: "184.613 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Felipe Massa",
            car: "Williams FW36",
            time: "1'18''504",
            moyenne: "199,985 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Felipe Massa",
            car: "Williams FW36",
            time: "1'08''759",
            moyenne: "226,495 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1h 27' 54''976s ",
            moyenne: "209.531 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sergio Perez",
            car: "Force India VJM07",
            time: "1'12''142",
            moyenne: "215,874 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'35''766",
            moyenne: "221,452 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "2h 26' 52''094s ",
            moyenne: " un accident",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'37''176",
            moyenne: "218,239 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'16''540",
            moyenne: "215,135 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1h 33' 42''914s ",
            moyenne: "196.206 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'19''908",
            moyenne: "206,067 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'22''715",
            moyenne: "190,674 km/h",
          },
        ],
        winner: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB10",
            time: "1h 53' 05''058s ",
            moyenne: "162.691 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'25''724",
            moyenne: "183,981 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "2'05''591",
            moyenne: "200,766 km/h",
          },
        ],
        winner: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB10",
            time: "1h 24' 36''556s ",
            moyenne: "r hors-piste",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'50''511",
            moyenne: "228,162 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'24''109",
            moyenne: "247,950 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1h 19' 10''236s ",
            moyenne: " R. Grosjean",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'28''004",
            moyenne: "236,976 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'45''681",
            moyenne: "172,538 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "2h 00' 04''795s ",
            moyenne: " de 2 heures",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'50''417",
            moyenne: "165,138 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'32''506",
            moyenne: "225,988 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1h 51' 43''021s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'51''600",
            moyenne: "187,323 km/h",
          },
        ],
      },
      {
        race: "Russie",
        track: "Sochi",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'38''513",
            moyenne: "213,706 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1h 31' 50''744s ",
            moyenne: "vec A. Sutil",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Williams FW36",
            time: "1'40''896",
            moyenne: "208,658 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Amériques - Austin",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'36''067",
            moyenne: "206,593 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1h 40' 04''785s ",
            moyenne: " R. Grosjean",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Red Bull RB10",
            time: "1'41''379",
            moyenne: "195,768 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'10''023",
            moyenne: "221,533 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1h 30' 02''255s ",
            moyenne: "203.854 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1'13''555",
            moyenne: "210,895 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W05",
            time: "1'40''480",
            moyenne: "198,989 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W05",
            time: "1h 39' 02''619s ",
            moyenne: "184.982 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB10",
            time: "1'44''496",
            moyenne: "191,341 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Red Bull RB10",
        team: "Red Bull",
        drivers: ["Sebastian Vettel", "Daniel Ricciardo"],
      },
      {
        model: "Marussia MR03",
        team: "Marussia",
        drivers: ["Max Chilton", "Jules Bianchi", "Alexander Rossi"],
      },
      {
        model: "Mercedes F1 W05",
        team: "Mercedes",
        drivers: ["Nico Rosberg", "Lewis Hamilton"],
      },
      {
        model: "Ferrari F14 T",
        team: "Ferrari",
        drivers: ["Kimi Räikkönen", "Fernando Alonso"],
      },
      {
        model: "Lotus E22",
        team: "Lotus",
        drivers: [
          "Romain Grosjean",
          "Pastor Maldonado",
          "Charles Pic",
          "Esteban Ocon",
        ],
      },
      {
        model: "Caterham CT05",
        team: "Caterham",
        drivers: [
          "Marcus Ericsson",
          "Kamui Kobayashi",
          "Robin Frijns",
          "Alexander Rossi",
          "André Lotterer",
          "Roberto Merhi",
          "Will Stevens",
        ],
      },
      {
        model: "Force India VJM07",
        team: "Force India",
        drivers: ["Sergio Perez", "Nico Hülkenberg", "Daniel Juncadella"],
      },
      {
        model: "Williams FW36",
        team: "Williams",
        drivers: [
          "Felipe Massa",
          "Valtteri Bottas",
          "Felipe Nasr",
          "Susie Wolff",
        ],
      },
      {
        model: "McLaren MP4-29",
        team: "McLaren",
        drivers: ["Kevin Magnussen", "Jenson Button"],
      },
      {
        model: "Sauber C33",
        team: "Sauber",
        drivers: [
          "Esteban Gutiérrez",
          "Adrian Sutil",
          "Giedo van der Garde",
          "Sergey Sirotkin",
          "Adderly Fong",
        ],
      },
      {
        model: "Toro Rosso STR9",
        team: "Toro Rosso",
        drivers: ["Jean-Éric Vergne", "Daniil Kvyat", "Max Verstappen"],
      },
    ],
  },
  {
    season: "2015",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'26''327",
            moyenne: "221,145 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1h 31' 54''067s ",
            moyenne: "200.808 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'30''945",
            moyenne: "209,916 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'49''834",
            moyenne: "181,681 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF15-T",
            time: "1h 41' 05''793s ",
            moyenne: "184.225 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'42''062",
            moyenne: "195,516 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'35''782",
            moyenne: "204,878 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1h 39' 42''008s ",
            moyenne: "P. Maldonado",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'42''208",
            moyenne: "191,997 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'32''571",
            moyenne: "210,468 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1h 35' 05''809s ",
            moyenne: "194.478 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari SF15-T",
            time: "1'36''311",
            moyenne: "202,295 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'24''681",
            moyenne: "197,896 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1h 41' 12''555s ",
            moyenne: "182.061 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'28''270",
            moyenne: "189,849 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'15''098",
            moyenne: "159,967 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1h 49' 18''420s ",
            moyenne: "142.874 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB11",
            time: "1'18''063",
            moyenne: "153,891 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'14''393",
            moyenne: "211,036 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1h 31' 53''145s ",
            moyenne: "c W. Stevens",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari SF15-T",
            time: "1'16''987",
            moyenne: "203,925 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'08''455",
            moyenne: "227,501 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1h 30' 16''930s ",
            moyenne: "t des stands",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'11''235",
            moyenne: "218,623 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'32''248",
            moyenne: "229,898 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1h 31' 27''729s ",
            moyenne: "200.869 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'37''093",
            moyenne: "218,426 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'22''020",
            moyenne: "192,290 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF15-T",
            time: "1h 46' 09''985s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB11",
            time: "1'24''821",
            moyenne: "185,940 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'47''197",
            moyenne: "235,216 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1h 23' 40''387s ",
            moyenne: "215.874 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'52''416",
            moyenne: "224,295 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'23''397",
            moyenne: "250,067 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1h 18' 00''688s ",
            moyenne: "235.904 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'26''672",
            moyenne: "240,618 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF15-T",
            time: "1'43''885",
            moyenne: "175,521 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF15-T",
            time: "2h 01' 22''118s ",
            moyenne: "152.673 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB11",
            time: "1'50''041",
            moyenne: "165,702 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'32''584",
            moyenne: "225,797 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1h 28' 06''508s ",
            moyenne: "209.381 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'36''145",
            moyenne: "217,434 km/h",
          },
        ],
      },
      {
        race: "Russie",
        track: "Sochi",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'37''113",
            moyenne: "216,787 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1h 37' 11''024s ",
            moyenne: "ec V. Bottas",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF15-T",
            time: "1'40''071",
            moyenne: "210,379 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Amériques - Austin",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'56''824",
            moyenne: "169,886 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1h 50' 52''703s ",
            moyenne: "s les stands",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'40''666",
            moyenne: "197,155 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'19''480",
            moyenne: "194,947 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1h 42' 35''038s ",
            moyenne: "178.597 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'20''521",
            moyenne: "192,427 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'11''282",
            moyenne: "217,620 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1h 31' 09''090s ",
            moyenne: "ur la grille",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'14''832",
            moyenne: "207,296 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1'40''237",
            moyenne: "199,471 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W06",
            time: "1h 38' 30''175s ",
            moyenne: "apeaux bleus",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W06",
            time: "1'44''517",
            moyenne: "191,303 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Red Bull RB11",
        team: "Red Bull",
        drivers: ["Daniel Ricciardo", "Daniil Kvyat"],
      },
      {
        model: "Ferrari SF15-T",
        team: "Ferrari",
        drivers: ["Sebastian Vettel", "Kimi Räikkönen"],
      },
      {
        model: "Mercedes F1 W06",
        team: "Mercedes",
        drivers: ["Nico Rosberg", "Lewis Hamilton"],
      },
      {
        model: "Lotus E23",
        team: "Lotus",
        drivers: ["Romain Grosjean", "Pastor Maldonado", "Jolyon Palmer"],
      },
      {
        model: "Sauber C34",
        team: "Sauber",
        drivers: ["Marcus Ericsson", "Felipe Nasr", "Raffaele Marciello"],
      },
      {
        model: "Force India VJM08",
        team: "Force India",
        drivers: ["Sergio Perez", "Nico Hülkenberg"],
      },
      {
        model: "Williams FW37",
        team: "Williams",
        drivers: ["Felipe Massa", "Valtteri Bottas", "Susie Wolff"],
      },
      {
        model: "McLaren MP4-30",
        team: "McLaren",
        drivers: ["Kevin Magnussen", "Jenson Button", "Fernando Alonso"],
      },
      {
        model: "Marussia MR03B",
        team: "Marussia",
        drivers: [
          "Will Stevens",
          "Roberto Merhi",
          "Fabio Leimer",
          "Alexander Rossi",
        ],
      },
      {
        model: "Toro Rosso STR10",
        team: "Toro Rosso",
        drivers: ["Max Verstappen", "Carlos Sainz"],
      },
    ],
  },
  {
    season: "2016",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'23''837",
            moyenne: "227,713 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1h 48' 15''565s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB12",
            time: "1'28''997",
            moyenne: "214,511 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'29''493",
            moyenne: "217,706 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1h 33' 34''696s ",
            moyenne: "197.634 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'34''482",
            moyenne: "206,211 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'35''402",
            moyenne: "205,694 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1h 38' 53''891s ",
            moyenne: "t aux stands",
          },
        ],
        bestLap: [
          {
            driver: "Nico Hülkenberg",
            car: "Force India VJM09",
            time: "1'39''824",
            moyenne: "196,582 km/h",
          },
        ],
      },
      {
        race: "Russie",
        track: "Sochi",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'35''417",
            moyenne: "220,640 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1h 32' 41''997s ",
            moyenne: " de la piste",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'39''094",
            moyenne: "212,453 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'22''000",
            moyenne: "204,366 km/h",
          },
        ],
        winner: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB12",
            time: "1h 41' 40''017s ",
            moyenne: "ec J. Palmer",
          },
        ],
        bestLap: [
          {
            driver: "Daniil Kvyat",
            car: "Toro Rosso STR11",
            time: "1'26''948",
            moyenne: "192,736 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB12",
            time: "1'13''622",
            moyenne: "163,174 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1h 59' 29''133s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'17''939",
            moyenne: "154,136 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'12''812",
            moyenne: "215,618 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1h 31' 05''296s ",
            moyenne: "201.082 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'15''599",
            moyenne: "207,669 km/h",
          },
        ],
      },
      {
        race: "Europe",
        track: "Bakou",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'42''758",
            moyenne: "210,308 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1h 32' 52''366s ",
            moyenne: "e des stands",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'46''485",
            moyenne: "202,947 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'07''922",
            moyenne: "229,287 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1h 27' 38''107s ",
            moyenne: " L. Hamilton",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'08''411",
            moyenne: "227,648 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'29''287",
            moyenne: "237,522 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1h 34' 55''831s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'35''548",
            moyenne: "221,958 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'19''965",
            moyenne: "197,231 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1h 40' 30''115s ",
            moyenne: "apeaux bleus",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari SF16-H",
            time: "1'23''086",
            moyenne: "189,823 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'14''363",
            moyenne: "221,433 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1h 30' 44''200s ",
            moyenne: "202.647 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB12",
            time: "1'18''442",
            moyenne: "209,918 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'46''744",
            moyenne: "236,214 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1h 44' 51''058s ",
            moyenne: " un accident",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'51''583",
            moyenne: "225,970 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'21''135",
            moyenne: "257,038 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1h 17' 28''089s ",
            moyenne: "237.558 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MP4-31",
            time: "1'25''340",
            moyenne: "244,373 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'42''584",
            moyenne: "177,747 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1h 55' 48''950s ",
            moyenne: "Statistiques",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB12",
            time: "1'47''187",
            moyenne: "170,114 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'32''850",
            moyenne: "214,914 km/h",
          },
        ],
        winner: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB12",
            time: "1h 37' 12''776s ",
            moyenne: "K. Raikkonen",
          },
        ],
        bestLap: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'36''424",
            moyenne: "206,948 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1'30''647",
            moyenne: "230,622 km/h",
          },
        ],
        winner: [
          {
            driver: "Nico Rosberg",
            car: "Mercedes F1 W07",
            time: "1h 26' 43''333s ",
            moyenne: "212.728 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF16-H",
            time: "1'35''118",
            moyenne: "219,782 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Amériques - Austin",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'34''999",
            moyenne: "208,916 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1h 38' 12''618s ",
            moyenne: " un avantage",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF16-H",
            time: "1'39''877",
            moyenne: "198,712 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'18''704",
            moyenne: "196,869 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1h 40' 31''402s ",
            moyenne: " de la piste",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB12",
            time: "1'21''134",
            moyenne: "190,973 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'10''736",
            moyenne: "219,300 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "3h 01' 01''335s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB12",
            time: "1'25''305",
            moyenne: "181,846 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1'38''755",
            moyenne: "202,465 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W07",
            time: "1h 38' 04''013s ",
            moyenne: "186.825 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF16-H",
            time: "1'43''729",
            moyenne: "192,756 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Red Bull RB12",
        team: "Red Bull",
        drivers: ["Daniel Ricciardo", "Daniil Kvyat", "Max Verstappen"],
      },
      {
        model: "Ferrari SF16-H",
        team: "Ferrari",
        drivers: ["Sebastian Vettel", "Kimi Räikkönen"],
      },
      {
        model: "Mercedes F1 W07",
        team: "Mercedes",
        drivers: ["Nico Rosberg", "Lewis Hamilton"],
      },
      {
        model: "Haas VF-16",
        team: "Haas",
        drivers: ["Romain Grosjean", "Esteban Gutiérrez", "Charles Leclerc"],
      },
      {
        model: "Sauber C35",
        team: "Sauber",
        drivers: ["Marcus Ericsson", "Felipe Nasr"],
      },
      {
        model: "Force India VJM09",
        team: "Force India",
        drivers: ["Sergio Perez", "Nico Hülkenberg", "Alfonso Celis"],
      },
      {
        model: "McLaren MP4-31",
        team: "McLaren",
        drivers: ["Fernando Alonso", "Jenson Button", "Stoffel Vandoorne"],
      },
      {
        model: "Williams FW38",
        team: "Williams",
        drivers: ["Felipe Massa", "Valtteri Bottas"],
      },
      {
        model: "Renault R.S.16",
        team: "Renault",
        drivers: [
          "Kevin Magnussen",
          "Jolyon Palmer",
          "Sergey Sirotkin",
          "Esteban Ocon",
        ],
      },
      {
        model: "Toro Rosso STR11",
        team: "Toro Rosso",
        drivers: ["Max Verstappen", "Carlos Sainz", "Daniil Kvyat"],
      },
      {
        model: "Manor MRT05",
        team: "Manor",
        drivers: [
          "Rio Haryanto",
          "Pascal Wehrlein",
          "Esteban Ocon",
          "Jordan King",
        ],
      },
    ],
  },
  {
    season: "2017",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'22''188",
            moyenne: "232,282 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1h 24' 11''672s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari SF70H",
            time: "1'26''538",
            moyenne: "220,606 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'31''678",
            moyenne: "214,049 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1h 37' 36''158s ",
            moyenne: "187.536 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'35''378",
            moyenne: "205,746 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W08",
            time: "1'28''769",
            moyenne: "219,482 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1h 33' 53''374s ",
            moyenne: "196.979 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'32''798",
            moyenne: "209,953 km/h",
          },
        ],
      },
      {
        race: "Russie",
        track: "Sochi",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1'33''194",
            moyenne: "225,903 km/h",
          },
        ],
        winner: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W08",
            time: "1h 28' 08''743s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari SF70H",
            time: "1'36''844",
            moyenne: "217,389 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'19''149",
            moyenne: "211,727 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1h 35' 56''497s ",
            moyenne: "e des stands",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'23''593",
            moyenne: "200,471 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari SF70H",
            time: "1'12''178",
            moyenne: "166,439 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1h 44' 44''340s ",
            moyenne: "vec D. Kvyat",
          },
        ],
        bestLap: [
          {
            driver: "Sergio Perez",
            car: "Force India VJM10",
            time: "1'14''820",
            moyenne: "160,561 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'11''459",
            moyenne: "219,701 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1h 33' 05''154s ",
            moyenne: "196.767 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'14''551",
            moyenne: "210,589 km/h",
          },
        ],
      },
      {
        race: "Azerbaïdjan",
        track: "Bakou",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'40''593",
            moyenne: "214,834 km/h",
          },
        ],
        winner: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB13",
            time: "2h 03' 55''573s ",
            moyenne: "148.176 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1'43''441",
            moyenne: "208,919 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W08",
            time: "1'04''251",
            moyenne: "241,939 km/h",
          },
        ],
        winner: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W08",
            time: "1h 21' 48''523s ",
            moyenne: "224.757 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'07''411",
            moyenne: "230,597 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'26''600",
            moyenne: "244,891 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1h 21' 27''430s ",
            moyenne: "re de départ",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'30''621",
            moyenne: "234,025 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1'16''276",
            moyenne: "206,770 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1h 39' 46''713s ",
            moyenne: " de la piste",
          },
        ],
        bestLap: [
          {
            driver: "Fernando Alonso",
            car: "McLaren MCL32",
            time: "1'20''182",
            moyenne: "196,698 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'42''553",
            moyenne: "245,867 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1h 24' 42''820s ",
            moyenne: "218.183 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1'46''577",
            moyenne: "236,584 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'35''554",
            moyenne: "218,251 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1h 15' 32''312s ",
            moyenne: "243.627 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB13",
            time: "1'23''361",
            moyenne: "250,175 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1'39''491",
            moyenne: "183,273 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "2h 03' 23''543s ",
            moyenne: " de 2 heures",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'45''008",
            moyenne: "173,644 km/h",
          },
        ],
      },
      {
        race: "Malaisie",
        track: "Sepang - Kuala Lumpur",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'30''076",
            moyenne: "221,533 km/h",
          },
        ],
        winner: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB13",
            time: "1h 30' 01''290s ",
            moyenne: "206.889 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1'34''080",
            moyenne: "212,105 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'27''319",
            moyenne: "239,412 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1h 27' 31''194s ",
            moyenne: "210.789 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W08",
            time: "1'33''144",
            moyenne: "224,440 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Amériques - Austin",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1'33''108",
            moyenne: "213,159 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W08",
            time: "1h 33' 50''991s ",
            moyenne: "K. Magnussen",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1'37''766",
            moyenne: "203,003 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1'16''488",
            moyenne: "202,573 km/h",
          },
        ],
        winner: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB13",
            time: "1h 36' 26''552s ",
            moyenne: "189.971 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1'18''785",
            moyenne: "196,667 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W08",
            time: "1'08''322",
            moyenne: "227,048 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF70H",
            time: "1h 31' 26''262s ",
            moyenne: "200.733 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB13",
            time: "1'11''044",
            moyenne: "218,349 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W08",
            time: "1'36''231",
            moyenne: "207,775 km/h",
          },
        ],
        winner: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W08",
            time: "1h 34' 14''062s ",
            moyenne: "194.423 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W08",
            time: "1'40''650",
            moyenne: "198,653 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MCL32",
        team: "McLaren",
        drivers: ["Stoffel Vandoorne", "Fernando Alonso", "Jenson Button"],
      },
      {
        model: "Red Bull RB13",
        team: "Red Bull",
        drivers: ["Daniel Ricciardo", "Max Verstappen"],
      },
      {
        model: "Ferrari SF70H",
        team: "Ferrari",
        drivers: ["Sebastian Vettel", "Kimi Räikkönen"],
      },
      {
        model: "Haas VF-17",
        team: "Haas",
        drivers: ["Romain Grosjean", "Kevin Magnussen", "Antonio Giovinazzi"],
      },
      {
        model: "Sauber C36",
        team: "Sauber",
        drivers: [
          "Marcus Ericsson",
          "Antonio Giovinazzi",
          "Pascal Wehrlein",
          "Charles Leclerc",
        ],
      },
      {
        model: "Force India VJM10",
        team: "Force India",
        drivers: [
          "Sergio Perez",
          "Esteban Ocon",
          "Alfonso Celis",
          "George Russell",
        ],
      },
      {
        model: "Williams FW40",
        team: "Williams",
        drivers: ["Lance Stroll", "Felipe Massa", "Paul di Resta"],
      },
      {
        model: "Toro Rosso STR12",
        team: "Toro Rosso",
        drivers: [
          "Daniil Kvyat",
          "Carlos Sainz",
          "Sean Gelael",
          "Pierre Gasly",
          "Brendon Hartley",
        ],
      },
      {
        model: "Renault R.S.17",
        team: "Renault",
        drivers: [
          "Nico Hülkenberg",
          "Jolyon Palmer",
          "Sergey Sirotkin",
          "Carlos Sainz",
        ],
      },
      {
        model: "Mercedes F1 W08",
        team: "Mercedes",
        drivers: ["Lewis Hamilton", "Valtteri Bottas"],
      },
    ],
  },
  {
    season: "2018",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'21''164",
            moyenne: "235,213 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1h 29' 33''283s ",
            moyenne: "206.069 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB14",
            time: "1'25''945",
            moyenne: "222,128 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1'27''958",
            moyenne: "221,506 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1h 32' 01''940s ",
            moyenne: "e Safety Car",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W09",
            time: "1'33''740",
            moyenne: "207,843 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1'31''095",
            moyenne: "215,419 km/h",
          },
        ],
        winner: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB14",
            time: "1h 35' 36''380s ",
            moyenne: "ec S. Vettel",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB14",
            time: "1'35''785",
            moyenne: "204,871 km/h",
          },
        ],
      },
      {
        race: "Azerbaïdjan",
        track: "Bakou",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1'41''498",
            moyenne: "212,918 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1h 43' 44''291s ",
            moyenne: "vec P. Gasly",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W09",
            time: "1'45''149",
            moyenne: "205,525 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'16''173",
            moyenne: "219,999 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1h 35' 29''972s ",
            moyenne: "192.946 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB14",
            time: "1'18''441",
            moyenne: "213,638 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB14",
            time: "1'10''810",
            moyenne: "169,654 km/h",
          },
        ],
        winner: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB14",
            time: "1h 42' 54''807s ",
            moyenne: "s les stands",
          },
        ],
        bestLap: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB14",
            time: "1'14''260",
            moyenne: "161,772 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1'10''764",
            moyenne: "221,859 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1h 28' 31''377s ",
            moyenne: "our trop tôt",
          },
        ],
        bestLap: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB14",
            time: "1'13''864",
            moyenne: "212,547 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'30''029",
            moyenne: "233,605 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1h 30' 11''385s ",
            moyenne: " de sécurité",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W09",
            time: "1'34''225",
            moyenne: "223,202 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W09",
            time: "1'03''130",
            moyenne: "246,235 km/h",
          },
        ],
        winner: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB14",
            time: "1h 21' 56''024s ",
            moyenne: "apeaux bleus",
          },
        ],
        bestLap: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari SF71H",
            time: "1'06''957",
            moyenne: "232,161 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'25''892",
            moyenne: "246,910 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1h 27' 29''784s ",
            moyenne: "vec S. Perez",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1'30''696",
            moyenne: "233,832 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1'11''212",
            moyenne: "231,231 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1h 32' 29''845s ",
            moyenne: "rapeau jaune",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'15''545",
            moyenne: "217,968 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'35''658",
            moyenne: "164,875 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1h 37' 16''427s ",
            moyenne: "D. Ricciardo",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB14",
            time: "1'20''012",
            moyenne: "197,115 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'58''179",
            moyenne: "213,358 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1h 23' 34''476s ",
            moyenne: " S. Sirotkin",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W09",
            time: "1'46''286",
            moyenne: "237,232 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari SF71H",
            time: "1'19''119",
            moyenne: "263,588 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1h 16' 54''484s ",
            moyenne: "ec V. Bottas",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'22''497",
            moyenne: "252,795 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'36''015",
            moyenne: "189,833 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1h 51' 11''611s ",
            moyenne: "apeaux bleus",
          },
        ],
        bestLap: [
          {
            driver: "Kevin Magnussen",
            car: "Haas VF-18",
            time: "1'41''905",
            moyenne: "178,861 km/h",
          },
        ],
      },
      {
        race: "Russie",
        track: "Sochi",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W09",
            time: "1'31''387",
            moyenne: "230,370 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1h 27' 25''181s ",
            moyenne: "212.592 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W09",
            time: "1'35''861",
            moyenne: "219,618 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'27''760",
            moyenne: "238,209 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1h 27' 17''062s ",
            moyenne: "211.358 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1'32''318",
            moyenne: "226,448 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Amériques - Austin",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'32''237",
            moyenne: "215,172 km/h",
          },
        ],
        winner: [
          {
            driver: "Kimi Räikkönen",
            car: "Ferrari SF71H",
            time: "1h 34' 18''643s ",
            moyenne: "t trop élevé",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'37''392",
            moyenne: "203,783 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Daniel Ricciardo",
            car: "Red Bull RB14",
            time: "1'14''759",
            moyenne: "207,258 km/h",
          },
        ],
        winner: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB14",
            time: "1h 38' 28''851s ",
            moyenne: " avec E Ocon",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W09",
            time: "1'18''741",
            moyenne: "196,777 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'07''281",
            moyenne: "230,561 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1h 27' 09''066s ",
            moyenne: "apeaux bleus",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W09",
            time: "1'10''540",
            moyenne: "219,909 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1'34''794",
            moyenne: "210,925 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W09",
            time: "1h 39' 40''382s ",
            moyenne: " un avantage",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF71H",
            time: "1'40''867",
            moyenne: "198,225 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "McLaren MCL33",
        team: "McLaren",
        drivers: ["Stoffel Vandoorne", "Fernando Alonso", "Lando Norris"],
      },
      {
        model: "Red Bull RB14",
        team: "Red Bull",
        drivers: ["Daniel Ricciardo", "Max Verstappen"],
      },
      {
        model: "Ferrari SF71H",
        team: "Ferrari",
        drivers: ["Sebastian Vettel", "Kimi Räikkönen"],
      },
      {
        model: "Haas VF-18",
        team: "Haas",
        drivers: ["Romain Grosjean", "Kevin Magnussen"],
      },
      {
        model: "Sauber C37",
        team: "Sauber",
        drivers: ["Marcus Ericsson", "Charles Leclerc", "Antonio Giovinazzi"],
      },
      {
        model: "Toro Rosso STR13",
        team: "Toro Rosso",
        drivers: ["Pierre Gasly", "Brendon Hartley", "Sean Gelael"],
      },
      {
        model: "Force India VJM11",
        team: "Force India",
        drivers: ["Sergio Perez", "Esteban Ocon", "Nicholas Latifi"],
      },
      {
        model: "Williams FW41",
        team: "Williams",
        drivers: ["Lance Stroll", "Sergey Sirotkin", "Robert Kubica"],
      },
      {
        model: "Renault R.S.18",
        team: "Renault",
        drivers: ["Nico Hülkenberg", "Carlos Sainz", "Artem Markelov"],
      },
      {
        model: "Mercedes F1 W09",
        team: "Mercedes",
        drivers: ["Lewis Hamilton", "Valtteri Bottas"],
      },
    ],
  },
  {
    season: "2019",
    calendar: [
      {
        race: "Australie",
        track: "Albert Park - Melbourne",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1'20''486",
            moyenne: "237,194 km/h",
          },
        ],
        winner: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1h 25' 27''325s ",
            moyenne: "215.954 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1'25''580",
            moyenne: "223,075 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1'27''866",
            moyenne: "221,738 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1h 34' 21''295s ",
            moyenne: "196.008 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1'33''411",
            moyenne: "208,575 km/h",
          },
        ],
      },
      {
        race: "Chine",
        track: "Shanghai",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1'31''547",
            moyenne: "214,355 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1h 32' 06''350s ",
            moyenne: "198.727 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Pierre Gasly",
            car: "Red Bull RB15",
            time: "1'34''742",
            moyenne: "207,127 km/h",
          },
        ],
      },
      {
        race: "Azerbaïdjan",
        track: "Bakou",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1'40''495",
            moyenne: "215,044 km/h",
          },
        ],
        winner: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1h 31' 52''942s ",
            moyenne: "199.853 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1'43''009",
            moyenne: "209,795 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1'15''406",
            moyenne: "222,237 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1h 35' 50''443s ",
            moyenne: "192.259 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1'18''492",
            moyenne: "213,499 km/h",
          },
        ],
      },
      {
        race: "Monaco",
        track: "Monaco",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1'10''166",
            moyenne: "171,211 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1h 43' 28''437s ",
            moyenne: "n dangereuse",
          },
        ],
        bestLap: [
          {
            driver: "Pierre Gasly",
            car: "Red Bull RB15",
            time: "1'14''279",
            moyenne: "161,731 km/h",
          },
        ],
      },
      {
        race: "Canada",
        track: "Montréal",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF90",
            time: "1'10''240",
            moyenne: "223,514 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1h 29' 07''084s ",
            moyenne: "n dangereuse",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1'13''078",
            moyenne: "214,833 km/h",
          },
        ],
      },
      {
        race: "France",
        track: "Caesars Palace",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1'28''319",
            moyenne: "238,128 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1h 24' 31''198s ",
            moyenne: " un avantage",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF90",
            time: "1'32''740",
            moyenne: "226,776 km/h",
          },
        ],
      },
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1'03''003",
            moyenne: "246,731 km/h",
          },
        ],
        winner: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB15",
            time: "1h 22' 01''822s ",
            moyenne: "224.150 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB15",
            time: "1'07''475",
            moyenne: "230,379 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1'25''093",
            moyenne: "249,228 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1h 21' 08''452s ",
            moyenne: ". Verstappen",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1'27''369",
            moyenne: "242,736 km/h",
          },
        ],
      },
      {
        race: "Allemagne",
        track: "Hockenheim",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1'11''767",
            moyenne: "229,442 km/h",
          },
        ],
        winner: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB15",
            time: "1h 44' 31''275s ",
            moyenne: " de la pluie",
          },
        ],
        bestLap: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB15",
            time: "1'16''645",
            moyenne: "214,840 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB15",
            time: "1'14''572",
            moyenne: "211,495 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1h 35' 03''796s ",
            moyenne: "193.532 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB15",
            time: "1'17''103",
            moyenne: "204,552 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1'42''519",
            moyenne: "245,949 km/h",
          },
        ],
        winner: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1h 23' 45''710s ",
            moyenne: "220.663 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF90",
            time: "1'46''409",
            moyenne: "236,957 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1'19''307",
            moyenne: "262,963 km/h",
          },
        ],
        winner: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1h 15' 26''665s ",
            moyenne: "243.931 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1'21''779",
            moyenne: "255,014 km/h",
          },
        ],
      },
      {
        race: "Singapour",
        track: "Marina Bay - Singapour",
        pole: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1'36''217",
            moyenne: "189,434 km/h",
          },
        ],
        winner: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF90",
            time: "1h 58' 33''667s ",
            moyenne: "s safety car",
          },
        ],
        bestLap: [
          {
            driver: "Kevin Magnussen",
            car: "Haas VF-19",
            time: "1'42''301",
            moyenne: "178,168 km/h",
          },
        ],
      },
      {
        race: "Russie",
        track: "Sochi",
        pole: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1'31''628",
            moyenne: "229,764 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1h 33' 38''992s ",
            moyenne: "commissaires",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1'35''761",
            moyenne: "219,847 km/h",
          },
        ],
      },
      {
        race: "Japon",
        track: "Suzuka",
        pole: [
          {
            driver: "Sebastian Vettel",
            car: "Ferrari SF90",
            time: "1'27''064",
            moyenne: "240,113 km/h",
          },
        ],
        winner: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1h 21' 46''755s ",
            moyenne: "our trop tôt",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1'30''983",
            moyenne: "229,770 km/h",
          },
        ],
      },
      {
        race: "Mexique",
        track: "Mexico",
        pole: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB15",
            time: "1'14''758",
            moyenne: "207,261 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1h 36' 48''904s ",
            moyenne: ". Hulkenberg",
          },
        ],
        bestLap: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1'19''232",
            moyenne: "195,557 km/h",
          },
        ],
      },
      {
        race: "Etats-Unis",
        track: "Amériques - Austin",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1'32''029",
            moyenne: "215,658 km/h",
          },
        ],
        winner: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1h 33' 55''653s ",
            moyenne: "vec S. Perez",
          },
        ],
        bestLap: [
          {
            driver: "Charles Leclerc",
            car: "Ferrari SF90",
            time: "1'36''169",
            moyenne: "206,374 km/h",
          },
        ],
      },
      {
        race: "Brésil",
        track: "Interlagos - São Paulo",
        pole: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB15",
            time: "1'07''508",
            moyenne: "229,786 km/h",
          },
        ],
        winner: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB15",
            time: "1h 33' 14''678s ",
            moyenne: "vec A. Albon",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W10",
            time: "1'10''698",
            moyenne: "219,418 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1'34''779",
            moyenne: "210,958 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1h 34' 05''715s ",
            moyenne: "194.710 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W10",
            time: "1'39''283",
            moyenne: "201,388 km/h",
          },
        ],
      },
    ],
    cars: [
      {
        model: "Renault R.S.19",
        team: "Renault",
        drivers: ["Daniel Ricciardo", "Nico Hülkenberg"],
      },
      {
        model: "McLaren MCL34",
        team: "McLaren",
        drivers: ["Lando Norris", "Carlos Sainz"],
      },
      {
        model: "Ferrari SF90",
        team: "Ferrari",
        drivers: ["Sebastian Vettel", "Charles Leclerc"],
      },
      {
        model: "Alfa Romeo C38",
        team: "Alfa Romeo",
        drivers: ["Kimi Räikkönen", "Antonio Giovinazzi"],
      },
      {
        model: "Haas VF-19",
        team: "Haas",
        drivers: ["Romain Grosjean", "Kevin Magnussen"],
      },
      {
        model: "Red Bull RB15",
        team: "Red Bull",
        drivers: ["Pierre Gasly", "Max Verstappen", "Alexander Albon"],
      },
      {
        model: "Racing Point RP19",
        team: "Racing Point",
        drivers: ["Sergio Perez", "Lance Stroll"],
      },
      {
        model: "Toro Rosso STR14",
        team: "Toro Rosso",
        drivers: [
          "Alexander Albon",
          "Daniil Kvyat",
          "Pierre Gasly",
          "Naoki Yamamoto",
        ],
      },
      {
        model: "Mercedes F1 W10",
        team: "Mercedes",
        drivers: ["Lewis Hamilton", "Valtteri Bottas"],
      },
      {
        model: "Williams FW42",
        team: "Williams",
        drivers: ["George Russell", "Robert Kubica", "Nicholas Latifi"],
      },
    ],
  },
  {
    season: "2020",
    calendar: [
      {
        race: "Autriche",
        track: "Spielberg",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W11",
            time: "1'02''939",
            moyenne: "246,982 km/h",
          },
        ],
        winner: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W11",
            time: "1h 30' 55''739s ",
            moyenne: "vec A. Albon",
          },
        ],
        bestLap: [
          {
            driver: "Lando Norris",
            car: "McLaren MCL35",
            time: "1'07''475",
            moyenne: "230,379 km/h",
          },
        ],
      },
      {
        race: "Styrie",
        track: "Spielberg",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'19''273",
            moyenne: "196,092 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1h 22' 50''683s ",
            moyenne: "221.947 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Carlos Sainz",
            car: "McLaren MCL35",
            time: "1'05''619",
            moyenne: "236,895 km/h",
          },
        ],
      },
      {
        race: "Hongrie",
        track: "Hungaroring",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'13''447",
            moyenne: "214,734 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1h 36' 12''473s ",
            moyenne: "de formation",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'16''627",
            moyenne: "205,823 km/h",
          },
        ],
      },
      {
        race: "Grande-Bretagne",
        track: "Silverstone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'24''303",
            moyenne: "251,564 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1h 28' 01''283s ",
            moyenne: "peaux jaunes",
          },
        ],
        bestLap: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB16",
            time: "1'27''097",
            moyenne: "243,494 km/h",
          },
        ],
      },
      {
        race: "70ème Anniversaire",
        track: "Silverstone",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W11",
            time: "1'25''154",
            moyenne: "249,050 km/h",
          },
        ],
        winner: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB16",
            time: "1h 19' 41''996s ",
            moyenne: "230.513 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'28''451",
            moyenne: "239,767 km/h",
          },
        ],
      },
      {
        race: "Espagne",
        track: "Barcelone",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'15''584",
            moyenne: "221,714 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1h 31' 45''279s ",
            moyenne: "apeaux bleus",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W11",
            time: "1'18''183",
            moyenne: "214,343 km/h",
          },
        ],
      },
      {
        race: "Belgique",
        track: "Spa-Francorchamps",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'41''252",
            moyenne: "249,026 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1h 24' 08''761s ",
            moyenne: "219.655 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Renault R.S.20",
            time: "1'47''483",
            moyenne: "234,590 km/h",
          },
        ],
      },
      {
        race: "Italie",
        track: "Monza",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'18''887",
            moyenne: "264,363 km/h",
          },
        ],
        winner: [
          {
            driver: "Pierre Gasly",
            car: "AlphaTauri AT01",
            time: "1h 47' 06''056s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'22''746",
            moyenne: "252,034 km/h",
          },
        ],
      },
      {
        race: "Toscane",
        track: "Mugello",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'15''144",
            moyenne: "251,278 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "2h 19' 35''060s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'18''833",
            moyenne: "239,519 km/h",
          },
        ],
      },
      {
        race: "Russie",
        track: "Sochi",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'31''304",
            moyenne: "230,579 km/h",
          },
        ],
        winner: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W11",
            time: "1h 34' 00''364s ",
            moyenne: " au virage 2",
          },
        ],
        bestLap: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W11",
            time: "1'37''030",
            moyenne: "216,972 km/h",
          },
        ],
      },
      {
        race: "Eifel",
        track: "Nürburgring",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W11",
            time: "1'25''269",
            moyenne: "217,345 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1h 35' 49''641s ",
            moyenne: "193.233 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB16",
            time: "1'28''139",
            moyenne: "210,268 km/h",
          },
        ],
      },
      {
        race: "Portugal",
        track: "Portimão",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'16''652",
            moyenne: "218,531 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1h 29' 56''828s ",
            moyenne: " de la piste",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'18''750",
            moyenne: "212,709 km/h",
          },
        ],
      },
      {
        race: "Emilie-Romagne",
        track: "Imola",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W11",
            time: "1'13''609",
            moyenne: "240,085 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1h 28' 32''430s ",
            moyenne: " de la piste",
          },
        ],
        bestLap: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'15''484",
            moyenne: "234,121 km/h",
          },
        ],
      },
      {
        race: "Turquie",
        track: "Istanbul",
        pole: [
          {
            driver: "Lance Stroll",
            car: "Racing Point RP20",
            time: "1'47''765",
            moyenne: "178,321 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1h 42' 19''313s ",
            moyenne: "181.425 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Lando Norris",
            car: "McLaren MCL35",
            time: "1'36''806",
            moyenne: "198,508 km/h",
          },
        ],
      },
      {
        race: "Bahreïn",
        track: "Sakhir",
        pole: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "1'27''264",
            moyenne: "223,267 km/h",
          },
        ],
        winner: [
          {
            driver: "Lewis Hamilton",
            car: "Mercedes F1 W11",
            time: "2h 59' 47''515s ",
            moyenne: "ce originale",
          },
        ],
        bestLap: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB16",
            time: "1'32''014",
            moyenne: "211,742 km/h",
          },
        ],
      },
      {
        race: "Sakhir",
        track: "Sakhir",
        pole: [
          {
            driver: "Valtteri Bottas",
            car: "Mercedes F1 W11",
            time: "0'53''377",
            moyenne: "238,957 km/h",
          },
        ],
        winner: [
          {
            driver: "Sergio Perez",
            car: "Racing Point RP20",
            time: "1h 31' 15''114s ",
            moyenne: "202.513 km/h",
          },
        ],
        bestLap: [
          {
            driver: "George Russell",
            car: "Mercedes F1 W11",
            time: "0'55''404",
            moyenne: "230,214 km/h",
          },
        ],
      },
      {
        race: "Abou Dhabi",
        track: "Yas Marina",
        pole: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB16",
            time: "1'35''246",
            moyenne: "209,924 km/h",
          },
        ],
        winner: [
          {
            driver: "Max Verstappen",
            car: "Red Bull RB16",
            time: "1h 36' 28''645s ",
            moyenne: "189.902 km/h",
          },
        ],
        bestLap: [
          {
            driver: "Daniel Ricciardo",
            car: "Renault R.S.20",
            time: "1'40''926",
            moyenne: "198,109 km/h"
          },
        ],
      },
    ],
    cars: [
      {
        model: "Renault R.S.20",
        team: "Renault",
        drivers: ["Daniel Ricciardo", "Esteban Ocon"],
      },
      {
        model: "McLaren MCL35",
        team: "McLaren",
        drivers: ["Lando Norris", "Carlos Sainz"],
      },
      {
        model: "Ferrari SF1000",
        team: "Ferrari",
        drivers: ["Sebastian Vettel", "Charles Leclerc"],
      },
      {
        model: "Williams FW43",
        team: "Williams",
        drivers: [
          "Nicholas Latifi",
          "George Russell",
          "Jack Aitken",
          "Roy Nissany",
        ],
      },
      {
        model: "Alfa Romeo C39",
        team: "Alfa Romeo",
        drivers: [
          "Kimi Räikkönen",
          "Antonio Giovinazzi",
          "Robert Kubica",
          "Mick Schumacher",
        ],
      },
      {
        model: "Haas VF-20",
        team: "Haas",
        drivers: [
          "Romain Grosjean",
          "Kevin Magnussen",
          "Callum Ilot",
          "Pietro Fittipaldi",
          "Mick Schumacher",
        ],
      },
      {
        model: "AlphaTauri AT01",
        team: "AlphaTauri",
        drivers: ["Pierre Gasly", "Daniil Kvyat"],
      },
      {
        model: "Racing Point RP20",
        team: "Racing Point",
        drivers: ["Sergio Perez", "Lance Stroll", "Nico Hülkenberg"],
      },
      {
        model: "Red Bull RB16",
        team: "Red Bull",
        drivers: ["Alexander Albon", "Max Verstappen"],
      },
      {
        model: "Mercedes F1 W11",
        team: "Mercedes",
        drivers: ["Lewis Hamilton", "Valtteri Bottas", "George Russell"],
      },
    ],
  },

  { season: "2021",
  calendar: [
  { race: "Bahreïn",
  track: "Sakhir",
  pole: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'28''997",
  moyenne: "218,92km/h"}],
  winner: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1h 32' 03''897",
  moyenne: "197,356km/h"}],
  bestLap: [
  { driver: "Valtteri Bottas",
  car: "Mercedes F1 W12",
  time: "1'32''090",
  moyenne: "211,597km/h"}]},
  { race: "Emilie-Romagne",
  track: "Imola",
  pole: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1'14''411",
  moyenne: "237,497km/h"}],
  winner: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "2h 02' 34''598",
  moyenne: "151,276km/h"}],
  bestLap: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1'16''702",
  moyenne: "230,403km/h"}]},
  { race: "Portugal",
  track: "Portimão",
  pole: [
  { driver: "Valtteri Bottas",
  car: "Mercedes F1 W12",
  time: "1'18''348",
  moyenne: "213,800km/h"}],
  winner: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1h 34' 31''421",
  moyenne: "194,761km/h"}],
  bestLap: [
  { driver: "Valtteri Bottas",
  car: "Mercedes F1 W12",
  time: "1'19''865",
  moyenne: "209,739km/h"}]},
  { race: "Espagne",
  track: "Barcelone",
  pole: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1'16''741",
  moyenne: "219,309km/h"}],
  winner: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1h 33' 07''680",
  moyenne: "198,710km/h"}],
  bestLap: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'18''149",
  moyenne: "215,358km/h"}]},
  { race: "Monaco",
  track: "Monaco",
  pole: [
  { driver: "Charles Leclerc",
  car: "Ferrari SF21",
  time: "1'10''346",
  moyenne: "170,773km/h"}],
  winner: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1h 38' 56''820",
  moyenne: "157,834km/h"}],
  bestLap: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1'12''909",
  moyenne: "164,770km/h"}]},
  { race: "Azerbaïdjan",
  track: "Bakou",
  pole: [
  { driver: "Charles Leclerc",
  car: "Ferrari SF21",
  time: "1'41''218",
  moyenne: "213,507km/h"}],
  winner: [
  { driver: "Sergio Perez",
  car: "Red Bull RB16B",
  time: "2h 13' 36''410",
  moyenne: "137,440km/h"}],
  bestLap: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'44''481",
  moyenne: "206,840km/h"}]},
  { race: "France",
  track: "Le Castellet",
  pole: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'29''990",
  moyenne: "233,706km/h"}],
  winner: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1h 27' 25''770",
  moyenne: "212,530km/h"}],
  bestLap: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'36''404",
  moyenne: "218,157km/h"}]},
  { race: "Styrie",
  track: "Spielberg",
  pole: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'03''841",
  moyenne: "243,492km/h"}],
  winner: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1h 22' 18''925",
  moyenne: "223,374km/h"}],
  bestLap: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1'07''058",
  moyenne: "231,811km/h"}]},
  { race: "Autriche",
  track: "Spielberg",
  pole: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'03''720",
  moyenne: "243,995km/h"}],
  winner: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1h 23' 54,543",
  moyenne: "219,132km/h"}],
  bestLap: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'06''200",
  moyenne: "234,816km/h"}]},
  { race: "Grande-Bretagne",
  track: "Silverstone",
  pole: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "",
  moyenne: "km/h"}],
  winner: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1h 58' 23''284",
  moyenne: "155,184km/h"}],
  bestLap: [
  { driver: "Sergio Perez",
  car: "Red Bull RB16B",
  time: "1'28''617",
  moyenne: "239,318km/h"}]},
  { race: "Hongrie",
  track: "Budapest",
  pole: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1'15''419",
  moyenne: "209,120km/h"}],
  winner: [
  { driver: "Esteban Ocon",
  car: "Alpine A521",
  time: "2h 04' 43,199",
  moyenne: "147,513km/h"}],
  bestLap: [
  { driver: "Pierre Gasly",
  car: "AlphaTauri AT02",
  time: "1'18''394",
  moyenne: "201,184km/h"}]},
  { race: "Belgique",
  track: "Spa-Francorchamps",
  pole: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'59''765",
  moyenne: "210,532km/h"}],
  winner: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "3' 27''071",
  moyenne: "119,611km/h"}],
  bestLap: [
  { driver: "",
  car: "",
  time: "",
  moyenne: "km/h"}]},
  { race: "Pays-Bas",
  track: "Zandvoort",
  pole: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'08''885",
  moyenne: "222,580km/h"}],
  winner: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1h 30' 05''395",
  moyenne: "204,187km/h"}],
  bestLap: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1'11''097",
  moyenne: "215,655km/h"}]},
  { race: "Italie",
  track: "Monza",
  pole: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "",
  moyenne: "km/h"}],
  winner: [
  { driver: "Daniel Ricciardo",
  car: "McLaren MCL35M",
  time: "1h 21' 54''365",
  moyenne: "224,687km/h"}],
  bestLap: [
  { driver: "Daniel Ricciardo",
  car: "McLaren MCL35M",
  time: "1'24''812",
  moyenne: "245,894km/h"}]},
  { race: "Russie",
  track: "Sochi",
  pole: [
  { driver: "Lando Norris",
  car: "McLaren MCL35M",
  time: "1'41''993",
  moyenne: "206,414km/h"}],
  winner: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1h 30' 41''001",
  moyenne: "204,941km/h"}],
  bestLap: [
  { driver: "Lando Norris",
  car: "McLaren MCL35M",
  time: "1'37''423",
  moyenne: "216,097km/h"}]},
  { race: "Turquie",
  track: "Istanbul",
  pole: [
  { driver: "Valtteri Bottas",
  car: "Mercedes F1 W12",
  time: "1'22''998",
  moyenne: "231,533km/h"}],
  winner: [
  { driver: "Valtteri Bottas",
  car: "Mercedes F1 W12",
  time: "1h 31' 04''103",
  moyenne: "203,844km/h"}],
  bestLap: [
  { driver: "Valtteri Bottas",
  car: "Mercedes F1 W12",
  time: "1'30''432",
  moyenne: "212,500km/h"}]},
  { race: "Etats-Unis",
  track: "Austin",
  pole: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'32''910",
  moyenne: "213,613km/h"}],
  winner: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1h 34' 36''552",
  moyenne: "195,587km/h"}],
  bestLap: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1'38''485",
  moyenne: "201,521km/h"}]},
  { race: "Mexico City",
  track: "Mexico",
  pole: [
  { driver: "Valtteri Bottas",
  car: "Mercedes F1 W12",
  time: "1'15''875",
  moyenne: "204,210km/h"}],
  winner: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1h 38' 39''086",
  moyenne: "185,717km/h"}],
  bestLap: [
  { driver: "Valtteri Bottas",
  car: "Mercedes F1 W12",
  time: "1'17''774",
  moyenne: "199,223km/h"}]},
  { race: "São Paulo",
  track: "Interlagos",
  pole: [
  { driver: "Valtteri Bottas",
  car: "Mercedes F1 W12",
  time: "",
  moyenne: "km/h"}],
  winner: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1h 32' 22''851",
  moyenne: "198,664km/h"}],
  bestLap: [
  { driver: "Sergio Perez",
  car: "Red Bull RB16B",
  time: "1'11''010",
  moyenne: "218,454km/h"}]},
  { race: "Qatar",
  track: "Losail",
  pole: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1'20''827",
  moyenne: "239,623km/h"}],
  winner: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1h 24' 28''471",
  moyenne: "217,812km/h"}],
  bestLap: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'23''196",
  moyenne: "232,800km/h"}]},
  { race: "Arabie Saoudite",
  track: "Djeddah",
  pole: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1'27''511",
  moyenne: "253,984km/h"}],
  winner: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "2h 06' 15''118",
  moyenne: "146,588km/h"}],
  bestLap: [
  { driver: "Lewis Hamilton",
  car: "Mercedes F1 W12",
  time: "1'30''734",
  moyenne: "244,962km/h"}]},
  { race: "Abu Dhabi",
  track: "Yas Marina",
  pole: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'22''109",
  moyenne: "231,541km/h"}],
  winner: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1h 30' 17''345",
  moyenne: "203,468km/h"}],
  bestLap: [
  { driver: "Max Verstappen",
  car: "Red Bull RB16B",
  time: "1'26''103",
  moyenne: "220,801km/h"}]},
  ],
  cars: [
  { model: "Alpine A521",
  team: "Alpine",
  drivers: ["Fernando Alonso", "Esteban Ocon"],
  },
  { model: "McLaren MCL35M",
  team: "McLaren",
  drivers: ["Lando Norris", "Daniel Ricciardo"],
  },
  { model: "Ferrari SF21",
  team: "Ferrari",
  drivers: ["Charles Leclerc", "Carlos Sainz"],
  },
  { model: "Williams FW43B",
  team: "Williams",
  drivers: ["Nicholas Latifi", "George Russell", "Jack Aitken", "Roy Nissany"],
  },
  { model: "Alfa Romeo C41",
  team: "Alfa Romeo",
  drivers: ["Kimi Räikkönen", "Antonio Giovinazzi", "Robert Kubica", "Callum Ilot"],
  },
  { model: "Haas VF-21",
  team: "Haas",
  drivers: ["Mick Schumacher", "Nikita Mazepin"],
  },
  { model: "AlphaTauri AT02",
  team: "AlphaTauri",
  drivers: ["Pierre Gasly", "Yuki Tsunoda"],
  },
  { model: "Aston Martin AMR21",
  team: "Aston Martin",
  drivers: ["Sebastian Vettel", "Lance Stroll"],
  },
  { model: "Red Bull RB16B",
  team: "Red Bull",
  drivers: ["Max Verstappen", "Sergio Perez"],
  },
  { model: "Mercedes F1 W12",
  team: "Mercedes",
  drivers: ["Lewis Hamilton", "Valtteri Bottas"],
  },
  ],},
  { season: "2022",
calendar: [
{ race: "Bahreïn",
track: "Sakhir",
pole: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1'30''558",
moyenne: "215,146km/h"}],
winner: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1h 37' 33''584",
moyenne: "189,569km/h"}],
bestLap: [
{ driver: "",
car: "",
time: "",
moyenne: "km/h"}]},
{ race: "Arabie Saoudite",
track: "Djeddah",
pole: [
{ driver: "Sergio Perez",
car: "Red Bull RB18",
time: "1'28''200",
moyenne: "252,000km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 24' 19''293",
moyenne: "219,481km/h"}],
bestLap: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1'31''634",
moyenne: "242,556km/h"}]},
{ race: "Australie",
track: "Melbourne",
pole: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1'17''868",
moyenne: "244,013km/h"}],
winner: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1h 27' 46''548",
moyenne: "209,254km/h"}],
bestLap: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1'20''260",
moyenne: "236,741km/h"}]},
{ race: "Emilie-Romagne",
track: "Imola",
pole: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "",
moyenne: "km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 32' 07''986",
moyenne: "201,263km/h"}],
bestLap: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1'18''446",
moyenne: "225,281km/h"}]},
{ race: "Miami",
track: "Miami",
pole: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1'28''796",
moyenne: "219,415km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 34' 24''258",
moyenne: "195,961km/h"}],
bestLap: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1'31''361",
moyenne: "213,255km/h"}]},
{ race: "Espagne",
track: "Barcelone",
pole: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1'18''750",
moyenne: "213,714km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 37' 20''475",
moyenne: "190,109km/h"}],
bestLap: [
{ driver: "Sergio Perez",
car: "Red Bull RB18",
time: "1'24''108",
moyenne: "200,100km/h"}]},
{ race: "Monaco",
track: "Monaco",
pole: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1'11''376",
moyenne: "168,309km/h"}],
winner: [
{ driver: "Sergio Perez",
car: "Red Bull RB18",
time: "1h 56' 30''265",
moyenne: "109,988km/h"}],
bestLap: [
{ driver: "Lando Norris",
car: "McLaren MCL36",
time: "1'14''693",
moyenne: "160,834km/h"}]},
{ race: "Azerbaïdjan",
track: "Bakou",
pole: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1'41''359",
moyenne: "213,210km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 34' 05''941",
moyenne: "195,145km/h"}],
bestLap: [
{ driver: "Sergio Perez",
car: "Red Bull RB18",
time: "1'46''046",
moyenne: "203,787km/h"}]},
{ race: "Canada",
track: "Montréal",
pole: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1'21'299",
moyenne: "193,109km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 36' 21''757",
moyenne: "190,076km/h"}],
bestLap: [
{ driver: "Carlos Sainz",
car: "Ferrari F1-75",
time: "1'15''749",
moyenne: "207,258km/h"}]},
{ race: "Grande-Bretagne",
track: "Silverstone",
pole: [
{ driver: "Carlos Sainz",
car: "Ferrari F1-75",
time: "1'40''983",
moyenne: "210,012km/h"}],
winner: [
{ driver: "Carlos Sainz",
car: "Ferrari F1-75",
time: "2h 17' 50''311",
moyenne: "133,286km/h"}],
bestLap: [
{ driver: "Lewis Hamilton",
car: "Mercedes F1 W13",
time: "1'30''510",
moyenne: "234,312km/h"}]},
{ race: "Autriche",
track: "Spielberg",
pole: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "",
moyenne: "km/h"}],
winner: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1h 24' 24''312",
moyenne: "217,843km/h"}],
bestLap: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1'07''275",
moyenne: "231,064km/h"}]},
{ race: "France",
track: "Le Castellet",
pole: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1'30''872",
moyenne: "213,438km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 30' 02''112",
moyenne: "206,379km/h"}],
bestLap: [
{ driver: "Carlos Sainz",
car: "Ferrari F1-75",
time: "1'35''781",
moyenne: "219,576km/h"}]},
{ race: "Hongrie",
track: "Budapest",
pole: [
{ driver: "George Russell",
car: "Mercedes F1 W13",
time: "1'17''377",
moyenne: "203,828km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 39' 35''912",
moyenne: "184,720km/h"}],
bestLap: [
{ driver: "Lewis Hamilton",
car: "Mercedes F1 W13",
time: "1'21''386",
moyenne: "193,788km/h"}]},
{ race: "Belgique",
track: "Spa-Francorchamps",
pole: [
{ driver: "Carlos Sainz",
car: "Ferrari F1-75",
time: "1'44''297",
moyenne: "241,756km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 25' 52''894",
moyenne: "215,216km/h"}],
bestLap: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1'49''354",
moyenne: "230,576km/h"}]},
{ race: "Pays-Bas",
track: "Zandvoort",
pole: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1'10''342",
moyenne: "217,969km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 36' 42''773",
moyenne: "190,204km/h"}],
bestLap: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1'13''652",
moyenne: "208,174km/h"}]},
{ race: "Italie",
track: "Monza",
pole: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1'20''161",
moyenne: "260,161km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 20' 27''511",
moyenne: "228,729km/h"}],
bestLap: [
{ driver: "Sergio Perez",
car: "Red Bull RB18",
time: "1'24''030",
moyenne: "248,183km/h"}]},
{ race: "Singapour",
track: "Marina Bay",
pole: [
{ driver: "Charles Leclerc",
car: "Ferrari F1-75",
time: "1'49''412",
moyenne: "166,589km/h"}],
winner: [
{ driver: "Sergio Perez",
car: "Red Bull RB18",
time: "2h 02' 20''238",
moyenne: "146,438km/h"}],
bestLap: [
{ driver: "George Russell",
car: "Mercedes F1 W13",
time: "1'46''458",
moyenne: "171,211km/h"}]},
{ race: "Japon",
track: "Suzuka",
pole: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1'29''304",
moyenne: "234,090km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "3h 01' 44''004",
moyenne: "53,583km/h"}],
bestLap: [
{ driver: "Guanyu Zhou",
car: "Alfa Romeo C42",
time: "1'44''411",
moyenne: "200,220km/h"}]},
{ race: "Etats-Unis",
track: "Austin",
pole: [
{ driver: "Carlos Sainz",
car: "Ferrari F1-75",
time: "1'34''356",
moyenne: "210,340km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 42' 11''687",
moyenne: "181,069km/h"}],
bestLap: [
{ driver: "George Russell",
car: "Mercedes F1 W13",
time: "1'38''788",
moyenne: "200,903km/h"}]},
{ race: "Mexico City",
track: "Mexico",
pole: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1'17''775",
moyenne: "199,221km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 38' 36''729",
moyenne: "185,791km/h"}],
bestLap: [
{ driver: "George Russell",
car: "Mercedes F1 W13",
time: "1'20''153",
moyenne: "193,310km/h"}]},
{ race: "São Paulo",
track: "Interlagos",
pole: [
{ driver: "Kevin Magnussen",
car: "Haas VF22",
time: "",
moyenne: "km/h"}],
winner: [
{ driver: "George Russell",
car: "Mercedes F1 W13",
time: "1h 38' 34''044",
moyenne: "186,195km/h"}],
bestLap: [
{ driver: "George Russell",
car: "Mercedes F1 W13",
time: "1'13''785",
moyenne: "210,238km/h"}]},
{ race: "Abou Dhabi",
track: "Yas Marina",
pole: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1'23''824",
moyenne: "226,804km/h"}],
winner: [
{ driver: "Max Verstappen",
car: "Red Bull RB18",
time: "1h 27' 45''914",
moyenne: "209,320km/h"}],
bestLap: [
{ driver: "Lando Norris",
car: "McLaren MCL36",
time: "1'28''391",
moyenne: "215,085km/h"}]},
],
cars: [
{ model: "Alpine A522",
team: "Alpine",
drivers: ["Fernando Alonso", "Esteban Ocon"],
},
{ model: "McLaren MCL36",
team: "McLaren",
drivers: ["Lando Norris", "Daniel Ricciardo"],
},
{ model: "Ferrari F1-75",
team: "Ferrari",
drivers: ["Charles Leclerc", "Carlos Sainz"],
},
{ model: "Williams FW44",
team: "Williams",
drivers: ["Nicholas Latifi", "Alexander Albon", "Nyck de Vries"],
},
{ model: "Alfa Romeo C42",
team: "Alfa Romeo",
drivers: ["Valtteri Bottas", "Guanyu Zhou"],
},
{ model: "Haas VF-22",
team: "Haas",
drivers: ["Mick Schumacher", "Kevin Magnussen"],
},
{ model: "AlphaTauri AT03",
team: "AlphaTauri",
drivers: ["Pierre Gasly", "Yuki Tsunoda"],
},
{ model: "Aston Martin AMR22",
team: "Aston Martin",
drivers: ["Sebastian Vettel", "Lance Stroll", "Nico Hulkenberg"],
},
{ model: "Red Bull RB18",
team: "Red Bull",
drivers: ["Max Verstappen", "Sergio Perez"],
},
{ model: "Mercedes F1 W13",
team: "Mercedes",
drivers: ["Lewis Hamilton", "George Russell"],
},
],},

  // INSERT NEW DATA UNDER THIS LINE
];

export default fullDatabase;