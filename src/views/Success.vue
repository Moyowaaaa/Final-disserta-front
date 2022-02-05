<template>
  <div class="content">
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"></circle>
      <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
    </svg>
    <div class="head">
      <p>Details registered successfully</p>
      <div class="home">
      <router-link to="/"><button>Go back Home</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Success'
}
</script>


<style scoped>
  body {
      background: whitesmoke;
    }

    .content {
      margin-top: 145px;
    }
    .home{
       margin-left:20%;
    }
    .home button{
        height:35px;
  background:#00713e;
  color:whitesmoke;
  border:none;
  
    }

    .checkmark__circle {
      stroke-dasharray: 166;
      height: 180px;
      stroke-dashoffset: 166;
      stroke-width: 2;
      stroke-miterlimit: 10;
      stroke: #7ac142;
      fill: none;
      animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }

    .checkmark {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      display: block;
      stroke-width: 2;
      stroke: black ;
      stroke-miterlimit: 10;
      margin: 10% auto;
      box-shadow: inset 0px 0px 0px #7ac142;
      animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
    }

    .head {
      margin-left: 35%;
    }

    .head p {
      font-size: 30px;
      font-family: cursive;
    }

    .checkmark__check {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }

    @keyframes stroke {
      100% {
        stroke-dashoffset: 0;
      }
    }

    @keyframes scale {

      0%,
      100% {
        transform: none;
      }

      50% {
        transform: scale3d(1.1, 1.1, 1);
      }
    }

    @keyframes fill {
      100% {
        box-shadow: inset 0px 0px 0px 90px #7ac142;
      }
    }

    @media screen and (max-width: 600px) {
      .head {
        margin-left: 15%;
      }

      .head p {
        font-size: 25px;
      }

      .content {
        margin-top: 140px;
      }
    }
</style>