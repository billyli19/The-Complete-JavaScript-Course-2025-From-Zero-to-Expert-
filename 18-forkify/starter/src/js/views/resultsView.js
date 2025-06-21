import View from './view.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _message = '';
  _errorMessage = 'No recipes found for your query.';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    const id = window.location.hash.slice(1);
    const activeClass = result.id === id ? 'preview__link--active' : '';

    return `
      <li class="preview">
        <a class="preview__link ${activeClass}" href="#${result.id}">
            <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
            </figure>
            <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            </div>
        </a>
      </li>
    `;
  }
}

export default new ResultsView();
