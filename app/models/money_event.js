import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { scheduler } from 'node:timers/promises';

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

  getDate(){
    return this.date
  }

  setDate(date){
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
    const eventObj = {
      category: this.getCategory(),
      type: this.getType(),
      amount: this.getAmount(),
      date: this.getDate(),
      tags: this.getTags()
    }
    // console.log(`TO ADD:`,`\n${'-'.repeat(100)}`, JSON.stringify(eventObj))
    await this.db.read()
    await this.db.update(({events})=>{
      // console.log(events)
      events.push(eventObj)
    })
    await scheduler.wait(2000); // Wait one second before continuing
    await this.db.write()
    return `${this.type.toLowerCase()} registered for category '${this.getCategory()}'`

  }
}

export class Expense extends MoneyEvent {
  constructor (amount, category = 'Default', file='data/events.json', data={ events: [] }, tags = []) {
    super(amount, 'Expense', new Date(), category, file, data, tags)
  }
}

export class Income extends MoneyEvent {
  constructor (amount, category = 'Default', file='data/events.json', data={ events: [] }, tags = []) {
    super(amount, 'Income', new Date(), category, file, data, tags)
  }
}
