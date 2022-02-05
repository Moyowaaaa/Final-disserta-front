<template>
<div>
     <div class="nav">
            <h2>Nigeria</h2>
            <div class ="link">
                <router-link to="/" class="router">Home</router-link> 
            <router-link to="/citizen" class="route">Citizen Registration</router-link>
            </div>
        </div>


  <h1>Registered Citizens</h1>
  



<div class="registered" v-for="C in Citizen"><p class="citizen">{{ C._id }}</p></div>
<footer class="footer">&copy; Moyowa 2021</footer>
</div>
</template>

<script>
import axios from 'axios'; 

export default {
  name: 'Admin',
  data() {
    return {
      Citizen: [],
    
    }
  },
  mounted() {
    axios.get('http://localhost:3000')
    .then((response) => {
      console.log(response.data);
      this.Citizen= response.data;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>

<style scoped>

h1{
  text-align:center;
}

.nav{
    padding-left:20px;
    display:flex;
    justify:space-around;
     background:#00713e;
     color:white;
}
.nav .link{
    padding-top:30px;
    margin-left:75%;
    
}
.link .router, .route{
    text-decoration:none;
    color:white;
}
.route{
  margin-left:40px;
}
.link:hover{
     color: inherit;
  text-decoration: underline 0.17em white;
  transition: text-decoration-color 100ms;
}
.text{
    margin-top:25px;
}
.registered{
  width:80%;
  height:50px;

  margin-top:25px;
  margin-left:10%;
  border-radius:15px;
  border:3px solid #00713e
}
.citizen{
  margin-left:5%;
  font-Weight:600;
}
.graphs{
  display:flex;
}
footer{
  bottom:0;
background:#00713e;
  color:white;
  font-size:15px;
  text-align:center;
}

</style>
