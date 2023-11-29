if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://danibiote:Linux2023@blogapp2023.0h96mfa.mongodb.net/?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}