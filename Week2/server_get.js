const express= require("express");
        const app= express();
        app.use(express.static('public'))
    
        const addTwoNumber= (n1,n2) => {
            return n1+n2;
        }
        const subtractTwoNumber= (n1,n2) => {
            return n1-n2;
        }
        const multiplyTwoNumber= (n1,n2) => {
            return n1*n2;
        }
        const divideTwoNumber= (n1,n2) => {
            return n1/n2;
        }
    
        app.get("/addTwoNumber", (req,res)=>{
            const n1= parseInt(req.query.n1);
            const n2=parseInt(req.query.n2);
            const result = addTwoNumber(n1,n2);
            res.json({statuscocde:200, data: result }); 
        });

        app.get("/subtractTwoNumber", (req,res)=>{
            const n1= parseInt(req.query.n1);
            const n2=parseInt(req.query.n2);
            const result = subtractTwoNumber(n1,n2);
            res.json({statuscocde:200, data: result }); 
        });

        app.get("/multiplyTwoNumber", (req,res)=>{
            const n1= parseInt(req.query.n1);
            const n2=parseInt(req.query.n2);
            const result = multiplyTwoNumber(n1,n2);
            res.json({statuscocde:200, data: result }); 
        });

        app.get("/divideTwoNumber", (req,res)=>{
            const n1= parseInt(req.query.n1);
            const n2=parseInt(req.query.n2);
            const result = divideTwoNumber(n1,n2);
            res.json({statuscocde:200, data: result }); 
        });
    
    
        console.log (addTwoNumber(20,10));
        console.log (subtractTwoNumber(20,10));
        console.log (multiplyTwoNumber(20,10));
        console.log (divideTwoNumber(20,10));
        const port=3040;
        app.listen(port,()=> {
            console.log("Hello I'm listening to port "+port);
        })

        //http://localhost:3040/addTwoNumber?n1=19&n2=12