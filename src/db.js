import { DatabasesSync } from 'node:sqlite'
const database = new DatabasesSync('db.sqlite')

export

function runSeed(items) {

}

runSeed([
  {
    name:'Matthews britto',
    phone: '40028922'
  },
  {
    name:'fake neri',
    phone: '89224002'
  },
  {
    name:'milio',
    phone: '22982004'
  }
])