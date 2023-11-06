const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

// connect to our database
mongoose.connect(process.env.DATABASE_URL);

async function seed() {
    await Book.create([
    {
        title: "Ulysses",
        year: 1918,
        author: "James Joyce", 
        ISBN: 1840226358,  
        imgUrl: "https://m.media-amazon.com/images/I/71TskYKbUrL._SL1230_.jpg", 
        summary: "James Joyce's astonishing masterpiece, Ulysses, tells of the diverse events which befall Leopold Bloom and Stephen Dedalus in Dublin on 16 June 1904, during which Bloom's voluptuous wife, Molly, commits adultery.",   
    },
    {
        title: "Limitless",
        year: 2020,
        author: "Jim Kwik",
        ISBN: 1401958230,
        imgUrl:"https://m.media-amazon.com/images/I/71Zq7P1aMrL._AC_UF1000,1000_QL80_.jpg",
        summary:"Upgrade Your Brain, Learn Anything Faster, and Unlock Your Exceptional Life; Hay House",
    },
    {
        title: "Secrets of the Whipcord",
        year: 1997,
        author: "Michaela Wallace",
        ISBN: 35233188778,
        imgUrl: "https://m.media-amazon.com/images/I/81gOO+rZHiL._SL1500_.jpg",
        summary: "The Unofficial Disney Parks Cookbook: From Delicious Dole Whip to Tasty Mickey Pretzels",
    },
    {
        title: "Catch 22",
        year: 1961,
        author: "Joseph Heller",
        ISBN: 671128051,
        imgUrl: "https://m.media-amazon.com/images/I/61y5K2gy6pL._SY385_.jpg",
        summary: "The novel is set during World War II, from 1942 to 1944. It mainly follows the life of antihero Captain John Yossarian, a U.S. Army Air Forces B-25 bombardier.",

    },

]);
console.log("Book created");
mongoose.disconnect();
}
seed();