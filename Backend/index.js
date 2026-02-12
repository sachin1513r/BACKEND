import express from 'express';
const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World!Nitesh')
// })
app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title :"First joke",
            content :"My brain has too many tabs open."
        },

        {
            id:2,
            title :"Second joke",
            content :"i am not late, I am just on my own time zone."
        },
        
        {
            id:3,
            title :"Third joke",
            content :"I study best when exams are tomorrow."
        },
        
        {
            id:4,
            title :"Fourth joke",
            content :"I am not lazy, I am on energy-saving mode."
        },

        {
            id:5,
            title :"Fifth joke",
            content :"I need 6 months vacation twice a year."
        },
        
    ]
    res.send(jokes)

})
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
