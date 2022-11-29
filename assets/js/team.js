var employee = { "EmployeesPersonalDetails" : 
    [
        {
            "employeeID":01,
            "region":"Coimbatore",
            "phoneNumber":9087653456,
            "emailAddress":"abc@gmail.com"
        },
        {
            "employeeID":02,
            "region":"Avinashi",
            "phoneNumber":8990908765,
            "emailAddress":"def@gmail.com"
        },
        {
            "employeeID":03,
            "region":"Thippur",
            "phoneNumber":9089898990,
            "emailAddress":"ghi@gmail.com"
        },
        {
            "employeeID":04,
            "region":"Madurai",
            "phoneNumber":9012345990,
            "emailAddress":"jkl@gmail.com"
        },
        {
            "employeeID":05,
            "region":"Thippur",
            "phoneNumber":9067890990,
            "emailAddress":"mno@gmail.com"
        },
        {
            "employeeID":06,
            "region":"Thippur",
            "phoneNumber":9345218990,
            "emailAddress":"pqr@gmail.com"
        }
    ]
}

var empcmpy = { "EmployeesCompanyDetails" :
    [
        {   
            "name" : "Mike",
            "employeeID" : 01,
            "designation" : "Software engineer"
        },
        {
            "name" : "Westlee",
            "employeeID" : 02,
            "designation" : "Software engineer trainee"
        },
        {   
            "name" : "Denise",
            "employeeID" : 03,
            "designation" : "Software test engineer"
        },

        {   
            "name" : "Matthew",
            "employeeID" : 04,
            "designation" : "Software Test engineer trainee"
        },
        {   
            "name" : "Mark",
            "employeeID" : 05,
            "designation" : "Project Manager"
        },
        {   
            "name" : "Karla",
            "employeeID" : 06,
            "designation" : "Associate Project Manager "
        }
    ]
}

function employeeDetails() {
    var eID = document.getElementById('eid').value; 
    var flag = false;
    var matchemp;
    var mathccomp;
    var empflag=false;
    var compflag=false;

    if (eID != "") {
        for (emp in employee.EmployeesPersonalDetails) {
        	if(employee.EmployeesPersonalDetails[emp].employeeID == eID) {
        		empflag = true;
        		matchemp = employee.EmployeesPersonalDetails[emp];
        		break;
        	}
        }
        for (comp in empcmpy.EmployeesCompanyDetails) {
        	if (empcmpy.EmployeesCompanyDetails[comp].employeeID == eID ) {
        		compflag = true
        		mathccomp = empcmpy.EmployeesCompanyDetails[comp];
        		break;
        	}
        }	 
    if (empflag && compflag) {
        document.getElementById('pro2').style.display = "block";
        var tblRow = "<tr>" + "<td>" + mathccomp.name + "</td>" 
                            +"<td>" + mathccomp.employeeID + "</td>"  
                            + "<td>" + matchemp.phoneNumber + "</td>" 
                            +"<td>" + matchemp.emailAddress + "</td>"
                            +"<td>" + mathccomp.designation + "</td>"
                            +"<td>" + matchemp.region + "</td>" 
                            + "</tr>";
        $(tblRow).appendTo("#employee1 tbody"); 
    }
    else {
        alert ("Not matched"); 
    }
}
else 
    {
        alert ("Emp id is empty");
    }
}

function clearResults() {
    document.getElementById("pro2").innerHTML = '';
    var eidInput = document.getElementById("eid").innerHTML;
    eidInput.valueOf = '';
}