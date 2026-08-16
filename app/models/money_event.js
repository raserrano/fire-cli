import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
// import { scheduler } from 'node:timers/promises'

class MoneyEvent {
  constructor (amount, type, date, category, file, data, tags = []) {
    this.amount = amount
    this.type = type
    this.date = date
    this.category = category
    this.tags = tags
    const adapter = new JSONFile(file)
    this.db = new Low(adapter, data)
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

  getDate () {
    return this.date
  }

  setDate (date) {
    this.date = date
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

  async save () {
    await this.db.read()
    const eventObj = {
      category: this.getCategory(),
      type: this.getType(),
      amount: this.getAmount(),
      date: this.getDate(),
      tags: this.getTags()
    }
    await this.db.read()
    await this.db.update(({ events }) => {
      events.push(eventObj)
    })
    // await scheduler.wait(2000)

    await this.db.write()
    return `${this.type.toLowerCase()} registered for category '${this.getCategory()}'`
  }

  async balance () {
    await this.db.read()
    const { events } = await this.db.data
    // console.log(events)
    let balance = 0
    events.map(event => {
      // console.log(event.amount, parseFloat(event.amount))
      const pAmount = parseFloat(event.amount)
      if (Number.isFinite(pAmount)) {
        balance += pAmount
      }
      // console.log(`Balance is ${balance}`)
    })
    return `Account balance is ${balance}`
  }

  async list () {
    await this.db.read()
    const { events } = await this.db.data
    events.forEach(e => delete e.date)
    return events
  }

  async show (pos) {
    await this.db.read()
    const { events } = await this.db.data
    delete events[pos].date
    return events[pos]
  }
}

export class Expense extends MoneyEvent {
  constructor (amount, category = 'Default', file = 'data/events.json', data = { events: [] }, tags = []) {
    super(amount, 'Expense', new Date(), category, file, data, tags)
  }
}

export class Income extends MoneyEvent {
  constructor (amount, category = 'Default', file = 'data/events.json', data = { events: [] }, tags = []) {
    super(amount, 'Income', new Date(), category, file, data, tags)
  }
}
