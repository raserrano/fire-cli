import { JSONFilePreset } from 'lowdb/node'

export class DB{
	async constructor(){
		const defaultData = {}
		const db = await JSONFilePreset('data/events.json', defaultData)
		this.db = db
	}
}