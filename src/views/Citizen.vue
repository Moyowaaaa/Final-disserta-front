<template>
<div class="bo">
    <div class="left">

        <div class="nav">
            <h2>Nigeria</h2>
            <div class ="link">
                <router-link to="/" class="router">Home</router-link> 
            <router-link to="/census" class="router">States Data</router-link>
            </div>
        </div>


        <h1>Citizen Registration</h1>

        <div class="form">
            <div class="inputs">
                
            <input type="text" placeholder="Enter First name" 
            v-model="Firstname">

            <input type="text" placeholder="Enter Last name" 
            v-model="Surname">
            <br>
            <input type="text" placeholder="Enter Middlename" 
            v-model="Middlename">
            <br>
          
            <br>
              <label>Gender</label>
            <div class="gender">
               <input type="radio" name="gender" value="male" v-model="Gender"> Male<br>
        <input type="radio" name="gender" value="female" v-model="Gender"> Female<br>
        <input type="radio" name="gender" value="other" v-model="Gender"> Other
            </div>
<br>
            <input type="date" placeholder="Enter Middlename" 
            v-model="Birth">
            <br>
        
        <input type="text" placeholder="Enter Address" 
            v-model="Address" required>
            <br>

            <input type="text" placeholder="Phone Number" 
            v-model="Phonenumber">
            <br>

        <input type="text" placeholder="State of Origin" 
            v-model="stateoforigin">
            <br>
         
        
            <input type="text" placeholder="L.G.A" 
            v-model="lga">
            <br>
            <br>
                <router-link to="/success"><button class="button" @click="Submit">Submit</button></router-link>
            </div>

        </div>



    </div>









    <div class="right">
        <img class="img" src="../assets/9.jpg" alt='' >
    </div>
    
</div>
</template>


<script>
import axios from "axios"


export default {
  name: 'Citizen',
  data() {
     return{
         Firstname: '',
         Lastname: '',
         Middlename:'',
         lga:'',
         stateoforigin:'',
         Phonenumber:'',
         Address: '',
         Gender: '',
         Birth: '',
     } 
  },
  methods: {
      Submit() {
          console.log(this.Firstname)
          axios.post('http://localhost:3000/citizen',{
              Firstname: this.Firstname,
              Middlename: this.Middlename,
              Lastname: this.Lastname,
              lga: this.lga,
              stateoforigin: this.stateoforigin,
              Phonenumber:this.Phonenumber,
              Gender: this.Gender,
              Address: this.Address,
              Birth: this.Birth

          }).then((response) =>{
              console.log(response.data);
          }).catch((error)=> {
              console.log(error)
          })
    
      }
  }
}
</script>

<style scoped>
.bo{
    display:flex;
    height:100vh
}
.left .nav{
    padding-left:20px;
    display:flex;
    justify:space-around;
    background:#00713e;
    color:white;
}
.form{
    margin-left:30%;
    width:300px;
    height:74%;
    background:whitesmoke;
    box-shadow:10px teal;
    border-radius:10px;
}
.form .inputs{
    padding:5%;
}
input[type=text]{
    margin-top:5%;
    width:95%;
    height:25px
}
input[type=date]{
    width:95%;
}
.left h1{
    text-align:center;
    margin-top:5%;
}
.nav .link{
    padding-top:30px;
    margin-left:50%;
    
}
.router{
    margin-left:40px;
    text-decoration:none;
   color:white;
}
.router:hover{
     color: inherit;
  text-decoration: underline 0.17em white;
  transition: text-decoration-color 100ms;
}

.left{
    height:100vh;
    width:60%;
  
}
.right{
    width:40%;
    height:100vh;
 
    background-color:#06d6a0;
}
.img{
    width:100%;
    height:100vh
    
}
.gender{
    margin-top:2%;
    display:flex;
}
.button{
    background:#00713e;
    color:white;
    width:50%;
    height:30px;
    border-radius:15px;
    border:none;
}
.form{
    margin-bottom:5%;
}


</style>