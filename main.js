import inquirer from "inquirer";
let Accountbalance = 25000;
let password = 6767;
let accountholder = "Hamza Shafiq";
console.log("***************Welcome to EasyPaisa App***************", accountholder);
let userpassword = await inquirer.prompt([{
        name: "userenterpassword",
        type: "number",
        message: "Please Enter Password Here : ",
    }]);
if (userpassword.userenterpassword === password) {
    let userchoice = await inquirer.prompt([{
            message: "what do you want ?",
            type: "list",
            name: "userchoicelist",
            choices: ["Send Money", "Received Money", "Bill Payments", "Package Bundles", "Saving", "Easyload", "Balance", "Setting"],
        }]);
    if (userchoice.userchoicelist === "Send Money") {
        let usersendmoneyno = await inquirer.prompt([{
                message: "Please Enter Sender Number: ",
                name: "usersendmoneysendernumber",
                type: "number"
            }]);
        let usersendmoneyamm = await inquirer.prompt([{
                message: "Please Enter Amount: ",
                name: "usersendmoneyamount",
                type: "number"
            }]);
        if (usersendmoneyamm.usersendmoneyamount > Accountbalance) {
            console.log("insufficients balance in your account");
        }
        else if (usersendmoneyamm.usersendmoneyamount <= Accountbalance) {
            Accountbalance = Accountbalance - usersendmoneyamm.usersendmoneyamount;
            console.log("Remaining balace in your account is ", Accountbalance);
        }
        else {
            console.log("please try again");
        }
    }
    if (userchoice.userchoicelist === "Received Money") {
        console.log("Sender Name : Usman\n Date : 12/09/2023 \n amount : 2000");
        console.log("Sender Name : umair\n Date : 19/10/2023 \n amount : 1500");
        console.log("Sender Name : Usman\n Date : 27/12/2023 \n amount : 3500");
    }
    if (userchoice.userchoicelist === "Bill Payments") {
        let billcompany = await inquirer.prompt([{
                name: "userbillcompany",
                type: "list",
                message: "Select company :",
                choices: ["K-Electric", "Sui-southern", "PTCL", "Red Box"]
            }]);
        if (billcompany.userbillcompany === "K-Electric") {
            let KE_consumerno = await inquirer.prompt([{
                    name: "k electric consumer number",
                    type: "number",
                    message: "Enter K_ELECTRIC Consumer No : "
                }]);
            let KE_amount = await inquirer.prompt([{
                    name: "kelectricbillamount",
                    type: "number",
                    message: "Enter Amount :"
                }]);
            if (KE_amount.kelectricbillamount > Accountbalance) {
                console.log("Your Account Balance is Insufficient");
            }
            else if (KE_amount.kelectricbillamount <= Accountbalance) {
                console.log("Bill Paid Successfully");
                Accountbalance = Accountbalance - KE_amount.kelectricbillamount;
                console.log("Your Remaining Balance in Your Account :", Accountbalance);
            }
            else {
                console.log("Please Try Again");
            }
        }
        else if (billcompany.userbillcompany === "Sui-southern") {
            let SS_consumerno = await inquirer.prompt([{
                    name: "sui southern consumer number",
                    type: "number",
                    message: "Enter SUI-SOUTHERN Consumer No : "
                }]);
            let SS_amount = await inquirer.prompt([{
                    name: "suisouthernbillamount",
                    type: "number",
                    message: "Enter Amount :"
                }]);
            if (SS_amount.suisouthernbillamount > Accountbalance) {
                console.log("Your Account Balance is Insufficient");
            }
            else if (SS_amount.suisouthernbillamount <= Accountbalance) {
                console.log("Bill Paid Successfully");
                Accountbalance = Accountbalance - SS_amount.suisouthernbillamount;
                console.log("Your Remaining Balance in Your Account :", Accountbalance);
            }
            else {
                console.log("Please Try Again");
            }
        }
        else if (billcompany.userbillcompany === "PTCL") {
            let ptcl_consumerno = await inquirer.prompt([{
                    name: "ptcl consumer number",
                    type: "number",
                    message: "Enter PTCL Consumer No : "
                }]);
            let ptcl_amount = await inquirer.prompt([{
                    name: "ptclbillamount",
                    type: "number",
                    message: "Enter Amount :"
                }]);
            if (ptcl_amount.ptclbillamount > Accountbalance) {
                console.log("Your Account Balance is Insufficient");
            }
            else if (ptcl_amount.ptclbillamount <= Accountbalance) {
                console.log("Bill Paid Successfully");
                Accountbalance = Accountbalance - ptcl_amount.ptclbillamount;
                console.log("Your Remaining Balance in Your Account :", Accountbalance);
            }
            else {
                console.log("Please Try Again");
            }
        }
        else if (billcompany.userbillcompany === "Red Box") {
            let redb_consumerno = await inquirer.prompt([{
                    name: "Red Box consumer number",
                    type: "number",
                    message: "Enter RED-BOX Consumer No : "
                }]);
            let redb_amount = await inquirer.prompt([{
                    name: "redbbillamount",
                    type: "number",
                    message: "Enter Amount :"
                }]);
            if (redb_amount.redbbillamount > Accountbalance) {
                console.log("Your Account Balance is Insufficient");
            }
            else if (redb_amount.redbbillamount <= Accountbalance) {
                console.log("Bill Paid Successfully");
                Accountbalance = Accountbalance - redb_amount.redbbillamount;
                console.log("Your Remaining Balance in Your Account :", Accountbalance);
            }
            else {
                console.log("Please Try Again");
            }
        }
    }
    if (userchoice.userchoicelist === "Package Bundles") {
        let userpackage = await inquirer.prompt([{
                name: "userpackagechoice",
                type: "list",
                message: "select Your operator",
                choices: ["Jazz", "Zong", "Ufone", "Warid"]
            }]);
        let userpackagenumber = await inquirer.prompt([{
                name: "userpackagenumberchoice",
                type: "number",
                message: "Enter Number :",
            }]);
        let userpackageduration = await inquirer.prompt([{
                name: "userpackagedurationchoice",
                type: "list",
                message: "select Your duration",
                choices: ["Month", "Week", "3 Days", "Day"]
            }]);
        let userpackageprice = await inquirer.prompt([{
                name: "userpackagepricechoice",
                type: "list",
                message: "select Your operator",
                choices: ["26000", "1500", "1000", "500", "300", "100"]
            }]);
        if (userpackageprice.userpackagepricechoice > Accountbalance) {
            console.log("Your Account Balance is Insufficient");
        }
        else if (userpackageprice.userpackagepricechoice <= Accountbalance) {
            console.log("Bill Paid Successfully");
            Accountbalance = Accountbalance - userpackageprice.userpackagepricechoice;
            console.log("Your Remaining Balance in Your Account :", Accountbalance);
        }
        else {
            console.log("Please Try Again");
        }
    }
    if (userchoice.userchoicelist === "Saving") {
        let savingscheme = await inquirer.prompt([{
                name: "savingamount",
                type: "number",
                message: "Enter Amount to save :"
            }]);
        let savingduration = await inquirer.prompt([{
                name: "savingduration",
                type: "list",
                message: "How much Time you save your money",
                choices: ["3 months", "6 months", "9 months", "12 months"]
            }]);
        if (savingscheme.savingamount > Accountbalance) {
            console.log("Your Account Balance is Insufficient");
        }
        else if (savingscheme.savingamount <= Accountbalance) {
            console.log("saving Successfully");
            Accountbalance = Accountbalance - savingscheme.savingamount;
            console.log("Your Remaining Balance in Your Account :", Accountbalance);
        }
        else {
            console.log("Please Try Again");
        }
    }
    if (userchoice.userchoicelist === "Easyload") {
        let sendeasyload = await inquirer.prompt([{
                name: "sendeasyloadnumber",
                type: "number",
                message: "Enter Number :"
            }]);
        let sendeasyoprate = await inquirer.prompt([{
                name: "sendeasylaodchoiceoperator",
                type: "list",
                message: "select Your operator",
                choices: ["Jazz", "Zong", "Ufone", "Warid"]
            }]);
        let easyloadamount = await inquirer.prompt([{
                name: "sendeasyloadamount",
                type: "number",
                message: "Enter Amount :"
            }]);
        if (easyloadamount.sendeasyloadamount > Accountbalance) {
            console.log("Your Account Balance is Insufficient");
        }
        else if (easyloadamount.sendeasyloadamount <= Accountbalance) {
            console.log("EasyLoad send Successfully");
            Accountbalance = Accountbalance - easyloadamount.sendeasyloadamount;
            console.log("Your Remaining Balance in Your Account :", Accountbalance);
        }
        else {
            console.log("Please Try Again");
        }
    }
    if (userchoice.userchoicelist === "Balance") {
        console.log("Your Account Balance is :", Accountbalance);
    }
    if (userchoice.userchoicelist === "Setting") {
        let usersetting = await inquirer.prompt([{
                name: "useraccountsetting",
                type: "list",
                message: "what you want?",
                choices: ["profile picture", "transaction history", "logout"]
            }]);
    }
}
else {
    console.log("wrong password please try again ");
}
