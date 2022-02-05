<template>
<div>
<div class="nav">
            <h2>Nigeria</h2>
            <div class="link">
            <router-link class="router" to="/citizen" >Register Citizen</p></router-link>
            </div>
            </div>

<h1>Citizen Details</h1> 
<div class="registered" v-for="C in Citizen"><p class="citizen">{{ C._id }}</p></div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Details',
    data() {
        return {
            Citizen: [],
        }
    },
  mounted() {
    axios.get('http://localhost:3000/:id')
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


<style style>
.nav{
    display:flex;
     background:#00713e;
     color:white;
}
.details{
    display:flex;
}
.details.left{
    width:50%;
}
.details.right{
    width:50%;
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
h1{
    text-align:center;
}

</style>
