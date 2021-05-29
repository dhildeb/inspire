export class Quote {
  constructor(data) {
    this.content = data.content
    this.author = data.author
  }

  get Template() {
    return `
    <div>
    <p class="quote">${this.content}</p>
    <span class="author">${this.author}</span>
    </div>
    `
  }
}