<template>
  <div>
      <div class="nav">
            <h2>Nigeria</h2>
            <div class ="link">
            <router-link to="/census" class="router">Demographic Data</router-link>
             <router-link to="/citizen" class="route">Citizen Registration</router-link> 
            </div>
        </div>
        <h class="header" v-for="P in Population" :key="P.id">
          <h1>{{ P.Name1 }}</h1></h> <hr>
            <div class="load">
    <div class="stats">
      <div class="stat"> <h4>Total Current Population(2021) 
        </h4>
       <p v-for="P in Population" :key="P.id">
         {{ P.Total6 }}
       </p></div>

       <div class="statt">
  <h4>Population density (Persons per sq. km.)</h4>
       <p v-for="P in Population" :key="P.id">
         {{ P.Densit }}
       </p>
       </div>
       

       <div class="statt">
  <h4>Annual Population Growth</h4>
       <p v-for="P in Population" :key="P.id">
         {{ P.Annua }}
       </p>   
       </div>

           <div class="statt">
  <h4 style="padding-left:30px">Total Land Area</h4>
       <p v-for="P in Population" :key="P.id">
         {{ P.LandA }}
       </p>   
       </div>

    </div>
  </div>
  <br><br>

<div class="iframe"><iframe width="50%" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=39bba9bc-c700-45bd-b0a4-6964b41aaca0&autoAuth=true&ctid=662847df-c812-48bf-9cee-a61c7c21cec8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
<iframe width="50%" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=fb722488-6707-4807-b6a2-1f846871a861&autoAuth=true&ctid=662847df-c812-48bf-9cee-a61c7c21cec8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>

  
  
</div>     
<!-------
<p class="d">According to recent research by the UN, the united nations predicted a decline in the global population growth rate between the years 2020
  and 2100, the main reason for this decline is due to a decline in total fertility rate in women mainly due to social structure, religious beliefs, economic prosperity and urbanisation within
  developed countries </p>
--->




  <div class="external">
    <router-link to="/demographics"><button>VIEW MORE DEMOGRAPHIC DATA</button></router-link>
  </div>
  <footer class="footer">&copy; Moyowa 2021</footer>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
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
     background:#00713e;
     color:white;
}
.nav .link{
    padding-top:30px;
    margin-left:65%;
     text-decoration:none;
    color:white;
    
}
hr{
  width:5.25em
}
.link .router, .route{
    text-decoration:none;
    color:white;
}
.link .route{
  margin-left:30px
}
.d{
  width:70%;
  text-align:justify;
  margin-top:5%;
  margin-left:15%;
}
.router:hover, .route:hover{
     color: inherit;
  text-decoration: underline 0.17em white;
  transition: text-decoration-color 100ms;
}
.header{
  text-align:center;
}
.things{
   width:100%;
  height:30vh;
    
     margin-left:0%;

}
.content{
  display:flex;
  font-Size:30px;
  font-family:cursive;
  margin-left:1%;

}
.data{
  display:flex;
  margin-top:2%;
  font-size:20px;
  margin-left:2%;
  font-weight:600;
}
.da{
  margin-left: 10%;
}
.density{
  margin-left:28%;
}
.density2{
  margin-left:30%;
}
.load{
  padding-top:10px;
  height:auto;
  width:auto;
  border:3px solid #00713e;
}

.stats{
  margin-top:25px;
  margin-left:10%;
  width:90%;
  display:flex;
}
.stats hr{
  width:4.25em;
  color:red;
}
.statt{
  margin-left:5%;
}
.statt p{
  text-align:center;
}
.iframe{
  display:flex;
}
.external{
  margin-top:5%;

  text-align:center;
}
.external button{
  margin-bottom:5%;
  height:35px;
  background:#00713e;
  color:whitesmoke;
  border:none;
  font-Size:20px
}
.external button:active{
  border:none;
}
footer{
  bottom:0;
background:#00713e;
  color:white;
  font-size:15px;
  text-align:center;
}

</style>