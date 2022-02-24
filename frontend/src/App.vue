<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// export default{
// 	data(){
// 		return{}
// 	},
// 	create(){
// 		this.setViewport();
// 	},
// 	methods:{
// 		setViewport(){
// 			let changeWindowSize = 375
// 			let viewportContent = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
// 			// if (window.innerWidth < changeWindowSize ) {
// 			// 	viewportContent = "width=375,user-scalable=no,viewport-fit=cover"
// 			// }
// 			document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent)
// 		}
// 	}
// }
 </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
