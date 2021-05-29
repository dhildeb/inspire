export class Quote {
  constructor(data) {
    this.content = data.content
    this.author = data.author
  }

  get Template() {
    return `
    <div>
    <p>${this.content}</p>
    <span>${this.author}</span>
    </div>
    `
  }
}