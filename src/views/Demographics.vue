<template>
<div>
<div class="nav">
            <h2>Nigeria</h2>
            <div class="link">
            <router-link class="router" to="/census" >States Data</p></router-link>
            </div>
            </div>
   <div class="data">
       <label><p>Total Population Over the Years</p></label>
<iframe  width="100%" height="500.25" src="https://app.powerbi.com/reportEmbed?reportId=4d52b643-c296-49fb-8b44-46450b9e1451&autoAuth=true&ctid=662847df-c812-48bf-9cee-a61c7c21cec8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="false"></iframe>

<div class="second">
    <div class="left">
    <label><p>Ratio of Male to Female Population</p></label>
<iframe width="100%" height="500.25" src="https://app.powerbi.com/reportEmbed?reportId=b5611e54-7333-473d-b8cb-d3b3029da115&autoAuth=true&ctid=662847df-c812-48bf-9cee-a61c7c21cec8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
</div>

<div class="right">
<label><p>Annual Growth Rate</p></label>
<iframe width="100%" height="500.25" src="https://app.powerbi.com/reportEmbed?reportId=fb722488-6707-4807-b6a2-1f846871a861&autoAuth=true&ctid=662847df-c812-48bf-9cee-a61c7c21cec8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
</div>
</div>

<div class="third">
    <div class="left">
        <label><p>Urban and Rural Population</p></label>
<iframe width="100%" height="500.25" src="https://app.powerbi.com/reportEmbed?reportId=ad05c3f1-39ab-4228-86de-d3441c07210a&autoAuth=true&ctid=662847df-c812-48bf-9cee-a61c7c21cec8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
    </div>

    <div class="right">
        <label><p>Labour Force</p></label>
        <iframe width="100%" height="500.25" src="https://app.powerbi.com/reportEmbed?reportId=797b5825-f02e-451c-874d-86271f9b0d1f&autoAuth=true&ctid=662847df-c812-48bf-9cee-a61c7c21cec8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
    </div>

    
</div>
<div class="external">
        <router-link to='/census'><button>View State Data</button></router-link>
    </div>
</div> 
<footer class="footer">&copy; Moyowa 2021</footer>
</div>
</template>


<script>
export default {
    name: 'Demographics'
}
</script>


<style scoped>
.data{
    margin-left:2%;
    margin-bottom:5%;
}
.nav{
    display:flex;
     background:#00713e;
     color:white;
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

label{
    text-align:center;
}
footer{
  bottom:0;
  margin-top:20px;
  font-size:15px;
  text-align:center;
  background:#00713e;
  color:white;
}
.second{
    display:flex;
    width:100%
}
.second .left{
    width:40%;
}
.second .right{
    width:60%
}
.third{
    width:100%;
    display:flex;
}
.third .left{
    width:45%;
}
.third .right{
    width:55%
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
}
.external button:active{
  border:none;
}
</style>