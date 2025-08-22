class MoneyEvent {
  constructor (amount, type, date, category, tags = []) {
    this.amount = amount
    this.type = type
    this.date = date
    this.category = category
    this.tags = tags
  }

  getAmount () {
    return this.amount
  }

  setAmount (amount) {
    this.amount = amount
  }

  getType () {
    return this.type
  }

  setType (type) {
    this.type = type
  }

  getCategory () {
    return this.category
  }

  setCategory (category) {
    this.category = category
  }

  getTags () {
    return this.tags
  }

  setTags (tags) {
    this.tags = tags
  }

  save () {

  }
}

export class Expense extends MoneyEvent {
  constructor (amount, type, category = 'Default', tags = []) {
    super(amount, type, new Date(), category, tags)
    this.type = 'Expense'
  }
}

export class Income extends MoneyEvent {
  constructor (amount, type, category = 'Default', tags = []) {
    super(amount, type, new Date(), category, tags)
    this.type = 'Income'
  }
}
