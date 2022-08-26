export default function SearchForm({ $target, initState, onChange }) {
  this.$element = document.createElement('form');
  this.$element.className = 'SearchForm';
  this.state = initState;

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
      <input class="SeacrhInput" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}"/>
    `;
  };

  this.render();

  this.$element.addEventListener('keyup', (e) => {
    const actionIgnoreKeys = [
      'Enter',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ];
    if (!actionIgnoreKeys.includes(e.key)) {
      onChange(e.target.value);
    }
  });

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
