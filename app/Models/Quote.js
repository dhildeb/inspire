export class Quote {
  constructor(data) {
    this.content = data.content
    this.author = data.author
  }

  get Template() {
    return `
    <div class="col-lg-6 rounded sections">
    <h5 class="quote">${this.content}</h5>
    <em class="author">${this.author}</em>
    </div>
    `
  }
}