import { JSONFilePreset } from 'lowdb/node'



// Alternatively you can call db.write() explicitely later
// to write to db.json
db.data.posts.push('hello world')
await db.write()


export class DB{
	constructor(){
		const defaultData = { events: [] }
		const db = await JSONFilePreset('data/events.json', defaultData)
		this.db = db
	}
}