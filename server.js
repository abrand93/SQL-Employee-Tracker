 const inquirer = require('inquirer');
const express = require('express')

const mysql = require('mysql2')

const PORT = process.env.PORT || 3001

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
 app.use(express.static('public'))


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bass',
    database: 'user_db'

}, console.log('CONNECTED!'))





const start = ( ()=>{
inquirer.prompt({
        type: "list",
        choices:[ 'view all departments', 'view all roles', 'view all employees','add an employe','add a role','add a department', 'update an emplyee role','quite'],
        name: 'choice',
        messeage: 'please select an option'
    })
    .then(result => {
        console.log(`you have entered: ${result.choice}`)
        switch(result.choice){
            case 'view all departments':
                viewAllDepartments()
            break;
            case 'view all roles':
                viewAllRole()

            break;

            case 'view all employees':
                 viewAllEmployees()

            break;

            case 'add a department':
                addDepartment()

            break;
            case 'add an employe':
                addEmployee()
            break;
            
            case 'add a role':
                addRole()

            break;

            case 'update an emplyee role':
                updateEmployeesRole()

            break;


            case 'quite':
             quit()
            break;





        }


    })
})
start()

    function viewAllDepartments(){
        // db.promise().query('SELECT * FROM department')
        // .then(data=>{
        //     console.table(data)
        // })
        //  .then(()=> start())
        db.query('SELECT * FROM department', function(err,res){
            if(err) throw err;
            console.table(res)
        })
     start()
    }
    function viewAllRole(){
        // db.promise().query('SELECT * FROM department')
        // .then(data=>{
        //     console.table(data)
        // })
        //  .then(()=> start())
        db.query('SELECT * FROM role', function(err,res){
            if(err) throw err;
            console.table(res)
        })
        start()
        }
function viewAllEmployees(){
    db.query('SELECT * FROM employee', function(err,res){
        if(err) throw err;
        console.table(res)
    })
    start()
}
function addDepartment(){
    inquirer.prompt(
        {
            type: "input",
            message:"Enter the name of the department you would like to add",
            name:"newDep"
        }
    )
    .then(function(input){
        db.query("INSERT INTO department (department_name) VALUES (?)",`${input.newDep}`,function(err,res){
            if(err) throw err;
            console.table(res)})
                 start()
    })
}

    function addEmployee(){
        inquirer.prompt([{
            type: "input",
            message:"First name of Employee",
            name:"firstName"
        },
        {
            type:"input",
            message:"Last Name of new employee",
            name:"lastName"
        },
        
        {
            type:"input",
            message:"Manger id",
            name:"mangerId"
        },
        {
            type:"input",
            message:"Inster role ID ",
            name:"id"
        } ])
        .then(function(input){
            db.query("INSERT INTO employee (first_name, last_name, manger_id, role_id) VALUES (?,?,?,?)",[input.firstName,input.lastName,input.mangerId,input.id],function(err,res){
                if(err) throw err;
                console.table(res)})
                start()
        })

        }
   
        function addRole(){
            inquirer.prompt([{
                type: "input",
                message:"title",
                name:"title"
            },
            {
                type:"input",
                message:"salary",
                name:"salary"
            },
            
            {
                type:"input",
                message:"department id",
                name:"departmentId"
            }])
            .then(function(input){
                db.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)",[input.title,input.salary,input.departmentId],function(err,res){
                    if(err) throw err;
                    console.table(res)})
                    start()
            })
            
        }
function updateEmployeesRole(){
    inquirer.prompt([{
        type: "input",
        message:"which employee would you like to update",
        name:"employeeName"
    },{
        type:"input",
        message:"Whats the employees new role",
        name:"updatedRole"
    }
    ]
        
    )
    .then(function(input){
        db.query("UPDATE employee SET role_id = ? WHERE first_name = ?",[input.updatedRole,input.employeeName],function(err,res){
            if(err) throw err;
            console.table(res)})
            start()
    
        }
)
    }
function quit(){
    // connection.end()
    console.log("You are now exiting the connection")
    process.exit()
}


app.listen(PORT,() => console.log(`server listening on http://localhost:${PORT}`))