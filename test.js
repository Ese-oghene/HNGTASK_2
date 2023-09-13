

app.get('/api', (req,res) =>{
    const person = new Person({
        name: "Daddy",
        user_id : 2,
        email   :"ogheene08@gmail.com"

    })
    person.save()
    .then((result) =>{
        res.send(result)
    })
    .catch((err) =>{
        console.log(err)
    })
})