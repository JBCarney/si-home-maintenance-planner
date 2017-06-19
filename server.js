import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import router from './src/index';
const app = express();
app.set('views', './')
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/',router);

app.listen(3000, () => {
    console.log('Express app listening on port 3000');
});
