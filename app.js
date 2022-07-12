const contact = require('./contact');
const yargs = require('yargs')

// fungsi input with yargs
yargs.command({
    command:'add',
    describe:'add new contact',
    builder:{
        name:{
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
        email:{
            describe: 'Contact Email',
            demandOption: false,
            type: 'string',
        },
        mobile:{
            describe: 'Contact Mobile Number',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contact.answer(argv.name,argv.email,argv.mobile)
    },
});

// fungsi list data
yargs.command({
    command:'list',
    describe:'see contact list',
    handler(){
        contact.listContact();
    },
});

// fungsi detail data
yargs.command({
    command:'detail',
    describe:'detail nama data',
    builder:{
        name:{
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contact.detailContact(argv.name);
    },
});

// fungsi delete data
yargs.command({
    command:'delete',
    describe:'delete contact',
    builder:{
        name:{
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contact.hapusContact(argv.name)
    },
});

// fungsi edit data
yargs.command({
    command:'edit',
    describe:'edit nama data',
    builder:{
        id:{
            describe: 'Input Name',
            demandOption: true,
            type: 'string',
        },
        name:{
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
        email:{
            describe: 'Contact Email',
            demandOption: false,
            type: 'string',
        },
        mobile:{
            describe: 'Contact Mobile Number',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contact.editContact(argv.id,argv.name,argv.email,argv.mobile);
    },
});

yargs.parse();


