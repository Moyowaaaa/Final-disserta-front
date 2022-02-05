<template>
  <div >
      <div class="nav">
            <h2 class="h2">Nigeria</h2>
            <div class ="link">
                <router-link to="/" class="router">Home</router-link> 
            <router-link to="/Citizen" class="route">Citizen Registration</router-link>
            </div>
        </div>

      <h1>Demographic Data by State</h1>


<table id="customers">
  <tr class="head">
    <th>State</th>
    <th>Population(1991)</th>
    <th>Population(2006)</th>
    <th>Population(2011)</th>
    <th>Population(2020)</th>
    <th>Population(2021)</th>
    <th>Annual Growth Rate</th>
  </tr>
  <tr v-for="P in Population" :key="P.id">
    <td>{{ P.Name }}</td>
    <td>{{ P.Total91 }}</td>
    <td>{{ P.Total06 }}</td>
    <td>{{ P.Total11 }}</td>
    <td>{{ P.Total20 }}</td>
    <td>{{ P.Total21 }}</td>
    <td>{{ P.Annual }}</td>
  </tr>
  
  </table>

  <footer class="footer">&copy; Moyowa 2021</footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Census',
  data() {
      return {
          Population: [],
      }
  },
  mounted() {
      axios.get('http://localhost:3000/census')
    .then((response) => {
      console.log(response.data);
      this.Population= response.data;
    })
    .catch((error) => {
        console.log(error)
    });
  }
}
</script>

<style scoped>

.nav{
    padding-left:20px;
    display:flex;
    justify:space-around;
    background-color: #04AA6D;
     color:white;
}
.nav .link{
    padding-top:30px;
    margin-left:70%;
    
}
.link .router, .route{
    
    text-decoration:none;
    color:white;
}
.link .route{
  margin-left:70px;
}
.link:hover{
     color: inherit;
  text-decoration: underline 0.17em white;
  transition: text-decoration-color 100ms;
}
.content{
  width:100%;
  height:auto;
  border:3px solid black;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-bottom:5%;
}
h1 {
  position:sticky;
  text-align:center;
}

.head{
  position:sticky;
  top:0;  
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
footer{
  bottom:0;
background:#00713e;
  color:white;
  font-size:15px;
  text-align:center;
}

</style>