import Dexie, {Table} from 'dexie';

const db = new Dexie("UserDatanse");
db.version(1).stores({user: "id, name, email, password"});

db.open().catch(function(err){
    console.error('failed to open db: '+(err.stack || err));
});








export default db;