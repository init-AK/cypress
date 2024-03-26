import {drizzle} from 'drizzle-orm/postgres-js'
import {migrate} from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import * as dotenv from 'dotenv'
import * as schema from '../../../migrations/schema'

dotenv.config({path: '.env'})

if(!process.env.DATABASE_URL) {
    console.log('No Database URL')
}

const client = postgres(process.env.DATABASE_URL as string, {
    max : 1
})
const db = drizzle(client, {schema})
const migrateDB = async ()=> {
    try {
        console.log('Migrating Client')
        await migrate(db, {migrationsFolder: 'migrations'})
        console.log('Successfulyy Migrated')
    } catch(err) {
        console.log(`Error Migrating Client - ${err}`)
    }


}
migrateDB()
export default db