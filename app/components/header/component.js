import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HeaderComponent extends Component {
  searchQuery = 'aathi';
  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6a7a1b1f2fmsh14a032d0bc6d366p11c4dajsn371cd5ed74e0',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    },
  };
  @tracked suggestions = [];

  @action
  getSuggestion() {
    fetch(
      'https://online-movie-database.p.rapidapi.com/auto-complete?q=' +
        this.searchQuery,
      this.options
    )
      .then((response) => response.json())
      .then((response) => {
        this.suggestions = response.d;
        console.log(response.d);
      })
      .catch((err) => console.error(err));
  }
}
