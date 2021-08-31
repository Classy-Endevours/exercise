/**
 * exercise03 [20 points]
 * ----------
 * In this exercise, you have to retrieve data from a JSON file (see data folder, wk2014.json).
 * The data contains the different matches of the WC2014.
 * The different dates of the games are displayed in a select list. When selecting a date, 
 * the details of the matches on that date will be displayed.
 * Make sure you get the result from game.png by solving Question a) and b) below
 */

class Game {
  constructor(id, date, group, time, team1, team2, arena, location, timezone) {
    this._id = id;
    this._date = date;
    this._group = group;
    this._time = time;
    this._team1 = team1;
    this._team2 = team2;
    this._arena = arena;
    this._location = location;
    this._timezone = timezone;
  }
  get id() {
    return this._id;
  }
  get date() {
    return this._date;
  }
  get group() {
    return this._group;
  }
  get time() {
    return this._time;
  }
  get team1() {
    return this._team1;
  }
  get team2() {
    return this._team2;
  }
  get arena() {
    return this._arena;
  }
  get location() {
    return this._location;
  }
  get timezone() {
    return this._timezone;
  }
}

class GameRepository {
  constructor() {
    this._games = [];
  }
  addGame(id, date, group, time, team1, team2, arena, location, timezone) {
    this._games.push(
      new Game(id, date, group, time, team1, team2, arena, location, timezone)
    );
  }
  getDates() {
    let dates = [];
    this._games.forEach((game) => {
      if (dates.indexOf(game.date) < 0) {
        dates.push(game.date);
      }
    });
    return dates;
  }
  getGamesonDate(date) {
    let filteredGames = this._games.filter((game) => {
      return game.date.indexOf(date) > -1;
    });
    return filteredGames;
  }
}
class GamesComponent {
  constructor() {
    this._gameRepository = new GameRepository();
    this.getData();
  }

  //Request a)
  //Fetch the data from the json file data/data/wk2014.json
  //And add the data to the gameRepository using the addGame method.

  //Then call the methods showDateList() and showGameList with all games, the latter to show all games when the page is opened.
  //If the fetching of the data fails, display a message in an alert.

  getData() {
    fetch('../data/wk2014.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(game => {
        const { id, date, group, time, team1, team2, arena, location, timezone } = game;
        this._gameRepository.addGame(id, date, group, time, team1, team2, arena, location, timezone)
      })
      this.showDateList()
      this.showGameList(data)
    })
    .catch(e => alert(e.message));
  }

  //Request b)
  //Add the dates to the select tag. For each date, generate the following HTML :
  // <option value="2014-06-12">2014-06-12</option>.
  //Make sure that when a date is selected, the showGameList of the appropriate games is displayed.
  showDateList() {
    const dateListNode = document.getElementById('dateList')
    dateListNode.addEventListener("change", (e) => {
      const selectedDate = document.querySelector(`#dateList`).value
      if(selectedDate.toLowerCase() === 'all'){
         this.getData()
      } else {
        const filteredGames = this._gameRepository.getGamesonDate(selectedDate)
        this.showGameList(filteredGames)
      }
    });

    const dates = this._gameRepository.getDates()
    dates.forEach(date => {

      const option = document.createElement("option");
      option.setAttribute("value", date);

      option.appendChild(document.createTextNode(date));
      dateListNode.append(option)
    })
  }
  showGameList(games) {
    document.getElementById('games').innerHTML = '';
    let date = '';
    games.forEach((game) => {
      if (game.date !== date) {
        date = game.date;
        const h2 = document.createElement('h2');
        const dateText = document.createTextNode(
          new Date(game.date).toDateString()
        );
        document.getElementById('games').appendChild(h2).appendChild(dateText);
      }
      const div1 = document.createElement('div');
      div1.className = 'eenwedstrijd';
      const div2 = document.createElement('div');
      div2.className = 'links';
      const p1 = document.createElement('p');
      p1.appendChild(document.createTextNode(game.time + ' Local time'));
      const a1 = document.createElement('a');
      a1.setAttribute('href', '#');
      a1.appendChild(document.createTextNode('GROUP ' + game.group));

      const p2 = document.createElement('p');
      p2.appendChild(document.createTextNode(game.arena));
      const p3 = document.createElement('p');
      p3.appendChild(document.createTextNode(game.location));

      div2.appendChild(p1);
      div2.appendChild(a1);
      div2.appendChild(p2);
      div2.appendChild(p3);

      const div3 = document.createElement('div');
      div3.className = 'rechts';
      const p4 = document.createElement('p');
      p4.setAttribute(
        'style',
        "background-image: url('images/" + game.team1 + ".png')"
      );
      p4.appendChild(document.createTextNode(game.team1));
      const p5 = document.createElement('p');
      p5.appendChild(document.createTextNode(game.time));
      const p6 = document.createElement('p');

      p6.setAttribute(
        'style',
        "background-image:url('images/" + game.team2 + ".png')"
      );
      p6.appendChild(document.createTextNode(game.team2));
      div3.appendChild(p4);
      div3.appendChild(p5);
      div3.appendChild(p6);
      div1.appendChild(div3);

      document.getElementById('games').appendChild(div1);

      div1.appendChild(div2);
      div1.appendChild(div3);
      document.getElementById('games').appendChild(div1);
    });
  }
}

window.onload = () => {
  new GamesComponent();
};
