import SelectedLanguages from './SelectedLanguages.js';
import SearchForm from './SearchForm.js';
import Suggestion from './Suggestion.js';

import { fetchLanguages } from '../api/api.js';

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };

    suggestion.setState({
      selectedIndex: 0,
      items: this.state.fetchedLanguages,
    });

    selectedLanguages.setState(this.state.selectedLanguages);
  };

  const selectedLanguages = new SelectedLanguages({
    $target,
    initState: [],
  });

  const searchForm = new SearchForm({
    $target,
    initState: '',
    onChange: async (keyword) => {
      if (keyword.length > 0) {
        const languages = await fetchLanguages(keyword);
        this.setState({
          fetchedLanguages: languages,
        });
      } else {
        this.setState({
          fetchedLanguages: [],
        });
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initState: {
      selectedIndex: 0,
      items: [],
    },
    onSelect: (language) => {
      window.alert(language);
      const nextSelectedLanguage = [...this.state.selectedLanguages];
      const index = nextSelectedLanguage.findIndex(
        (value) => value === language
      );

      if (index > -1) {
        nextSelectedLanguage.splice(index, 1);
      }
      nextSelectedLanguage.push(language);

      this.setState({
        ...this.state,
        selectedLanguages: nextSelectedLanguage,
      });
    },
  });
}
