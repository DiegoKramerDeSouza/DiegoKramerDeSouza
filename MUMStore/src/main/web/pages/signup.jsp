<%--
  Created by IntelliJ IDEA.
  User: 987109
  Date: 6/14/2019
  Time: 2:20 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Signup</title>
        <link rel="stylesheet" href="../resource/style/style.css" />
        <link rel="stylesheet" href="../resource/style/signupStyle.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/8fd24b2ea7.js"></script>
        <script src="../resource/script/signupScript.js" crossorigin="anonymous"></script>
        ${user != null ? null : "<script src='resource/script/checkCookies.js'></script>"}

    </head>
    <body class="bg-light">
        <nav class="navbar navbar-light bg-dark justify-content-between">
            <a class="navbar-brand" href="/">MUM STORE</a>
        </nav>
        <div class="container">
            <div class="card my-4">
                <div class="card-body">
                    <form class="form-horizontal" role="form" action="/API/register" method="post">
                        <h2>Registration</h2>
                        <h4 class="text-danger font-weight-bold">
                            ${param.E == 1 ? "E-mail already registrated!" : null}
                        </h4>
                        <h4 class="text-danger font-weight-bold">
                            ${param.E == 2 ? "Please enter valid fields values!" : null}
                        </h4>
                        <div class="form-group">
                            <label for="fullName" class="col-sm-3 control-label">Full Name*</label>
                            <div class="col-sm-9">
                                <input type="text" id="fullName" placeholder="Full Name" class="form-control"
                                       name="fullName" autofocus value="${param.fullName}" required pattern="^.{3,50}$">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email" class="col-sm-3 control-label">Email* </label>
                            <div class="col-sm-9">
                                <input type="email" id="email" placeholder="Email" class="form-control" name= "email"
                                       value="${param.email}" required pattern="^.+@\w+\.\w+$">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-sm-3 control-label">Password*</label>
                            <div class="col-sm-9">
                                <input type="password" id="password" placeholder="Password" class="form-control"
                                       name="password" required pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-sm-3 control-label">Confirm Password*</label>
                            <div class="col-sm-9">
                                <input type="password" id="confirmPassword" placeholder="Password" class="form-control"
                                       name="confirmPassword" required>
                                <span id="matching"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-sm-3 control-label">Address*</label>
                            <div class="col-sm-9">
                                <input type="text" id="address" placeholder="address" class="form-control"
                                       name="address" value="${param.address}" required pattern=".{8,}">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-9 col-sm-offset-3 my-4">
                                <span class="help-block text-danger">*Required fields</span><br />
                            </div>
                        </div>
                        <div class="dropdown-divider"></div>
                        <button id="registerbtn" type="submit" class="btn btn-success">Register</button>
                        <input type="reset" class="btn btn-success" value="Clear">
                    </form>

                </div>
            </div>
            <div class="dropdown-divider"></div>

        </div>

        <!--Bottom Footer-->
        <footer class="bottom section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="copyright">
                            <p>&copy <span>2019</span> <a href="#" class="transition">MUM STORE</a> All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!--Bottom Footer-->
    </body>

</html>
