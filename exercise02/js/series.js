/* exercise02 [20 points]
----------
  In this exercise, you have to use the array this._series (see the program code below) to
  build the webpage dynamically.
  
  The file exercise02.gif contains an animation of the web page to be obtained.
  
  Display the series sorted by rating (highest rating first) on your page.
  The series are displayed in a table.
  Add all series to the tbody element. For each series you must add a tr element, 
  containing two td elements. The first td element should contain the title and the second the rating of the film.
  Make sure that when you click on the first td element (with the name of the series) with the mouse cursor 
  the corresponding poster is displayed below the table.
  Make sure that if you click on the name of the series with the mouse cursor, the corresponding poster is displayed below the table.
  Make sure that only the title you click on is shown in red.
  The images are in the images folder.
  Do not change anything in style.css and index.html.
*/

class SeriesApp {
    constructor() {
        this._series = [
            { id: 1, serie: 'The Queen\'s Gambit', poster: 'the_queens_gambit', rating: 8.7 },
            { id: 2, serie: 'The Crown', poster: 'the_crown', rating: 8.6 },
            { id: 3, serie: 'Star Trek: Discovery', poster: 'star_trek_discovery', rating: 7.2 },
            { id: 4, serie: 'Lupin', poster: 'lupin', rating: 7.6 },
            { id: 5, serie: 'Katla', poster: 'katla', rating: 7.3 },
            { id: 6, serie: 'His Dark Materials', poster: 'his_dark_materials', rating: 7.9 },
            { id: 7, serie: 'Elite', poster: 'elite', rating: 7.5 },
        ];
    }
    sortSeries( a, b ) {
        if (a.rating < b.rating) {
          return 1;
        }
        if (a.rating > b.rating) {
          return -1;
        }
        return 0;
    }

    resetActiveTitle(id) {
        document.querySelectorAll(".title").forEach((title) => {
          title.style.color = '';
        });
        document.querySelector(`#${id}`).style.color = 'red';
      }

    showSeries() {
        //SOLUTION
        const seriesNode = document.getElementById('series');
         this._series.sort(this.sortSeries)
         this._series.forEach((item) => {
            const row = document.createElement("tr");
            const titleNode = document.createElement("td");
            const ratingNode = document.createElement("td");

            const titleId = `title-${item.id}`
            const ratingId = `rating-${item.id}`

            titleNode.setAttribute("id", titleId);
            ratingNode.setAttribute("id", ratingId);
            titleNode.setAttribute("class", `title`);

            titleNode.dataset.itemId = item.id
            titleNode.dataset.image = item.poster

            titleNode.appendChild(document.createTextNode(item.serie));
            ratingNode.appendChild(document.createTextNode(item.rating));

            titleNode.addEventListener("click", () => {
                this.resetActiveTitle(titleId)
                const imageNode = document.getElementById('serie')
                imageNode.src = `./images/${item.poster}.jpg`
            });

            row.appendChild(titleNode)
            row.appendChild(ratingNode)

            seriesNode.append(row)
         }) 
    }
}

const init = function () {
    const app = new SeriesApp();
    app.showSeries();
};

window.onload = init;
