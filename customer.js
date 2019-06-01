var mysql= require("mysql");
var inquirer = require("inquirer");

// console.log(process.env.Pass);//need to add exports file
var connection= mysql.createConnection({
    host: "localhost", 
    port:3306,
    user:"root",
    password:"N4gGeS7",
    database:"storeDB"
});

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id "+connection.threadId);
    //show user  our inventory
    displayInventory();
    //prompt user for their selection and check we can accomodate the purchase
    verifyInventory();
    //check that we can accomodate that selection
    // checkInventory();
    // connection.end();

})

function displayInventory(){
    connection.query("SELECT * FROM products", function(err,data){
        if(err) throw err;
        console.log(data);
    })
}
function verifyInventory(){
    //prompt user for what they want and how much
    inquirer.prompt([
        {
            type:"input",
            name:"selectedPurchase",
            message:"input the id of the item you would like to purchase",
        },
        
        {
            type:"input",
            name:"quantityPurchased",
            message:"How many would you like to purchase?"
        }
    ])
    .then( 
        function (input){
        //store the prompt answers
        var selectedPurchase=input.selectedPurchase;
        // console.log(selectedPurchase);
        let  quantityPurchased=input.quantityPurchased;
       let query="SELECT id, stock_quant FROM products WHERE ?";
       //select ammount in inventory from products that matches the users input
                
        connection.query( query,{id: selectedPurchase}, function(err,res){
                let ammountInStock=res[0].stock_quant
                //check that we can accomodate the order if not throw an error message
                if (quantityPurchased>ammountInStock){
                    connection.end();
                    return console.log("I'm sorry we only have " +ammountInStock+" in stock. Please order fewer or check back with us later.");
                   //end connection if its a bad request. maybe have a prompt here later that asks if they want to make a different order
                //    return connection.end();
                }else{
                    //log how many are in stock for debug
                // console.log("the ammunt in stock is"+ ammountInStock);
                console.log("we can accomadate that order...")
                checkBalance();
                ammountInStock--;
                //update the stock with the the ammount at the right id
                updateStock(ammountInStock,selectedPurchase);
                connection.end();
                }
            }
        )
        //validate 
    }   
    )
    
}
function checkBalance(){
    //in here i will add a function that will check th eusers wallet to verify the purchase before subtracting the item from inventory

}
function updateStock(newinventory,id){
    
    // console.log("the id we are updating is "+id);
    console.log("The ammount in stock is now "+ newinventory);
    query="UPDATE products SET ? WHERE ?"
    connection.query(query,[{stock_quant:newinventory},{id:id}],function(err,res){
        // console.log(res.affectedRow);
    }
    )
}