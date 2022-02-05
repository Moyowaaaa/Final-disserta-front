<template>
<div>
<div class="nav">
            <h2>Nigeria</h2>
            <div class="link">
            <router-link class="router" to="/citizen" >Register Citizen</p></router-link>
            </div>
            </div>


            
            <h2>ADMIN LOGIN</h2>

            <div class="form">
                <i class="fa fa-user"></i>
                <br>
                <div class="for">
                    <label>Username</label>
                    <br>
                    <input class="input" type="text" placeholder="Enter Admin Username"
                    v-model="admin">
                    <br>
                    <br>
                    <label>Password</label><br>
                    <input class="input" type="password" placeholder="Enter Admin Password"
                    v-model="pass">
                    <br>
                    <br>
                    <button>Submit</button>
                </div>
                </div>
               
            </div>
            </div>
</template>

<script>
</script>

<style scoped>
.nav{
    display:flex;
     background:#00713e;
     color:white;
}
.form{
    margin-top:20px;
    margin-left:20%;
    width:40%;
    height:350px;
    
    padding-left:25%;
}
label{
    margin-top:10%;
}
input{
    width:40%;
    margin-right:70px;
    margin-top:2%;
    height:30px;
}
.input{
    margin-left:-9%;
}

.form .fa{
    font-size:150px;
    margin-left:3%
}
.for{
    margin-left:5%;
    margin-top:7%;
}
button{
    margin-left:5%;
     background:#00713e;
     color:white;
     border:none;
     height:25px;
}
h2{
    text-align:center;
}
.nav h2{
    padding-top:5px;
    padding-left:20px
}
.nav .link{
    padding-top:30px;
    margin-left:80%;
    color:white
}
.link .router{
    text-decoration:none;
    color:white;
}
.router:hover{
     color: inherit;
  text-decoration: underline 0.17em white;
  transition: text-decoration-color 100ms;
}

</style>