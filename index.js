//import express kedalam files
const express=require('express');
//tugaskan variabel app dengan fungsi express
const app=express();
//buat files static untuk alamat front end
app.use(express.static(__dirname));
app.listen(8814);
