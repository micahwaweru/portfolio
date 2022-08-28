const express = require('express');


const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4001;
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('Server running')
})

app.get('/getProjects',(req,res)=>{
    console.log('getProjects Route')
    fs.readFile('db.json',(err,data)=>{
        if(err)throw err;
        dbData=JSON.parse(data);

        res.send(dbData);
    })
})

app.post('/addProject',(req,res)=>{
    fs.readFile('db.json',(err,data)=>{
        if(err)throw err;
        dbData=JSON.parse(data);
        dbData.push(req.body)
        let number = 1;
            dbData.forEach((project,index)=>{
                project.id=number;
                number++
                return dbData;
            });
            stringData=JSON.stringify(dbData);
            fs.writeFile('db.json',stringData,(err,data)=>{
                if(err)throw err;
            });
    });
    res.send('Post')
})

app.get('/resumeItem',(req,res)=>{
    console.log('Resume Item Route Triggered')
    fs.readFile('cv.json',(err,data)=>{
        if(err)throw err;
        dbData=JSON.parse(data);

        res.send(dbData);
    })
})

app.post('/newJob',(req,res)=>{
    fs.readFile('cv.json',(err,data)=>{
        if(err)throw err;
        dbData=JSON.parse(data);
        dbData.push(req.body)
        let number = 1;
            dbData.forEach((project,index)=>{
                project.id=number;
                number++
                return dbData;
            });
            stringData=JSON.stringify(dbData);
            fs.writeFile('cv.json',stringData,(err,data)=>{
                if(err)throw err;
            });
    });
    res.send('Post')
})





app.listen(PORT,()=>{
    console.log(`App listening at ${PORT}`)
});