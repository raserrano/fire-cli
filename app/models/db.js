import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'   


// import { low } from 'lowdb'
// import {JSONFileSync} from 'lowdb/adapters/JSONFileSync'
// const low = require('lowdb');
// const FileAsync = require('lowdb/adapters/FileAsync');

// const adapter = new FileAsync('db.json');
// const db = low(adapter);

// // Remove all items from the 'users' table
// db.get('users').remove({}).write();   


export class DB{
	constructor(){
		const defaultData = {}
		const adapter = new JSONFile('data/events.json');
		const db = new Low(adapter, defaultData);
		this.db = db
		this.adapter = adapter
	}
}