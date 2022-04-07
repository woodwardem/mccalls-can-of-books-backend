'use strict';

const { status } = require('express/lib/response');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_CONNECTION)

const Book = require('./models/books');

async function seedBooks() {
    console.log('seeding books...');

    await Book.create({
        title: 'The Silent Patient',
        description: 'a women will not talk about how her friend died. The doctor is trying to get her to  talk about the truth.',
        status: 'LIFE-CHANGING',
    });

    await Book.create({
        title: 'The Silent Patient',
        description: 'a women will not talk about how her friend died. The doctor is trying to get her to  talk about the truth.',
        status: 'LIFE-CHANGING',
    });


    await Book.create({
        title: 'The Silent Patient',
        description: 'a women will not talk about how her friend died. The doctor is trying to get her to  talk about the truth.',
        status: 'LIFE-CHANGING',
    });
console.log('done seeding books');
mongoose.disconnect();

}
seedBooks();