const MAX_COUNT = 5;

export default function SelectedLanguages({ $target, initState }) {
  this.$element = document.createElement('div');
  this.$element.className = 'SelectedLanguage';
  this.state = initState;

  $target.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;

    if (this.state.length > MAX_COUNT) {
      const startPoint = this.state.length - MAX_COUNT;
      this.state = this.state.slice(startPoint, MAX_COUNT + startPoint);
    }

    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
      <ul>
        ${this.state
          .map(
            (item) => `
          <li>${item}</li>
        `
          )
          .join('')}
      </ul>
    `;
  };

  this.render();
}
