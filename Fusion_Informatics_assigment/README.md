Node.js, Express & MySQL: Fusion_Informatics
========


**Creating database and table**

```
=========================================================
CRATE DATABASE :- Fusion_Informatics;


==========================================================
CREATE TABLE :-        tbl_users 

CREATE COLUMN NAMES :- 1.  user_id (AUTO_INCREMENT,PRIMERY KEY)
                       2.  user_name (varchar(50),NULL)
                       3.  city (varchar(50),NULL)
                       4.  state (varchar(50),NULL)
                       5.  hobbies (text)
                       6.  gender (varchar(20),NULL)
                       7.  user_Image (varchar(30),NULL)
                       9.  nic_name (varchar(30),NULL)
                       8.  mobile_number (varchar(20),NULL)
                       10. email (varchar(30),NULL)
                       11. password (varchar(50),NULL)
                       12. token (text)
                       12. csv_email_id (varchar(30),NULL)
                       12. created_at (varchar(30),NULL)

=============================================================

CREATE TABLE :-        tbl_login 

CREATE COLUMN NAMES :- 1.  login_id (AUTO_INCREMENT,PRIMERY KEY)
                       2.  user_id (FOREIGN KEY({tbl_user: user_id}))
                       3.  ip_address (varchar(30),NULL)
                       4.  user_name (varchar(30),NULL)
                       5.  nik_name (varchar(30),NULL)
                       6.  last_login_time (varchar(40),NULL)
                       7.  last_logout_time (varchar(40),NULL)

============================================================
    
API LIST : (METHOD : POST)

1. Login API :-
   
    URL :-  http://localhost:3000/login

    PARAMETER :  
                {
                "email":"hemant012agrawal@gmail.com",
                "password":"Hemant001@"
                }

    RESPONCE : 

            {
                "status": true,
                "message": "Login Successfully",
                "data": {
                    "nic_name": "hemu"
                }
            }
===========================================================
2.  LOGOUT API : 
     
        URL :-  http://localhost:3000/logout

    PARAMETER :  
                {
                    "email":"hemant012agrawal@gmail.com"
                }

    RESPONCE : 

            {
                "status": true,
                "message": "Logout Successfully",
                "data": {}
            }
==================================================================
3.  LOGOUT API : 
     
        URL :-  http://localhost:3000/users_list

    PARAMETER :  
                NO PARAMETRES

    RESPONCE : 

            {
                "status": true,
                "message": "Success",
                "data": [
                    {
                        "user_id": 1,
                        "user_name": "hemant",
                        "city": "surat",
                        "state": "gajsfgsjf",
                        "hobbies": "cricket,football",
                        "gender": "ajsgf",
                        "user_Image": "1585141154770.jpeg",
                        "nic_name": "hemu",
                        "mobile_number": "9978535212",
                        "email": "hemant012agrawal@gmail.com",
                        "password": "1bad0064cdf4efa2ab951b795318e2fc",
                        "token": "",
                        "csv_email_id": "",
                        "created_at": "03/25/2020 18:27:12"
                    }
                ]
            }
==============================================================

4.  CSV FILE GET API : 
     
        URL :-  http://localhost:3000/csv_file

    PARAMETER :  
                NO PARAMETRES

    RESPONCE : 

            {
                "status": true,
                "message": "Csv file crated",
                "data": {}
            }
==============================================================

5.   API : REGISTRATION API
     
        URL :-  http://localhost:3000/registration

    PARAMETER :  
                {
                    "state":"Gujarat",
                    "city":"surat",
                    "hobbies":"cricket,football",
                    "gender":"male",
                    "user_name":"hemant",
                    "mobile":"9687862624",
                    "email":"hemant001agrawal@gmail.com",
                    "nik_name":"hemu",
                    "password":"Hemant@123",
                    "user_image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/                                    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"
                }

    RESPONCE : 

            {
                "status": true,
                "message": "You have registered successfully.",
                "data": {}
            }

=============================================================================================

FALSE RESPONCE : 
===============================================================

1:- Login

    1 : paramates missing : 

            {
                "status": false,
                "message": "Please enter required parameters",
                "data": {}
            }

    2 : login falid : 
      
            {
                "status": false,
                "message": "Invalid User ID and Password",
                "data": {}
            }

    3 : Email Id not Valid
            
            {
                "status": false,
                "message": "Email not valid",
                "data": {}
            }
========================================================================

1:- Logout

    1 : paramates missing : 

            {
                "status": false,
                "message": "Please enter required parameters",
                "data": {}
            }

    2 : login falid : 
      
            {
                "status": false,
                "message": "Invalid User ID and Password",
                "data": {}
            }

    3 : Email Id not Valid
            
            {
                "status": false,
                "message": "Email not valid",
                "data": {}
            }

===========================================================

3 : User List

   1 : user not avaliable missing : 

            {
                "status": false,
                "message": "Users not available",
                "data": {}
            }

==========================================================

4 : CSV FILE 
  

         1 : DATA no avaliable missing : 

            {
                "status": false,
                "message": "Data not found",
                "data": {}
            }

==============================================================

5 : registered 

       1 : paramates missing : 

            {
                "status": false,
                "message": "Please enter required parameters",
                "data": {}
            }

        2 : state Name string only : 
        
                {
                    "status": false,
                    "message": "The State name must be The string",
                    "data": {}
                }

        3 : city name string only
            
            {
                "status": false,
                "message": "The City name must be The string",
                "data": {}
            }
        
        4 : Gender name string only
            
            {
                "status": false,
                "message": "The Gender name must be the string",
                "data": {}
            }

        5 : user name string only
            
            {
                "status": false,
                "message": "The user name must be the string",
                "data": {}
            }

        6 : strong password issue 
            
            {
                "status": false,
                "message": "The string must contain at least 1 lowercase alphabetic character AND 1 uppercase alphabetic character AND 1 numeric character AND  least 1 special character, but we are escaping reserved RegEx characters to avoid conflict AND 8 characters or longer",
                "data": {}
            }

         7 : Mobile number already exists
            
            {
                "status": false,
                "message": "Mobile number already exists",
                "data": {}
            }

        8 : Email Id already exists
            
            {
                "status": false,
                "message": "Email id already exists",
                "data": {}
            }

        9 : Email Id Not valid
            
            {
                "status": false,
                "message": "Email not valid",
                "data": {}
            }

        10 : Mobile number Not valid
            
            {
                "status": false,
                "message": "Mobile number not valid",
                "data": {}
            }