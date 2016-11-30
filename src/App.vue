<template>
  <div id="app">
  <NavBar />
  <SlideBar />
  <Content />
  <Footer />
  </div>
</template>

<script>
// import Hello from './components/Hello'
// import Test from './components/Test'
import NavBar from './components/NavBar'
import SlideBar from './components/SlideBar'
import Content from './components/Content'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    // Hello,
    // Test
    NavBar,
    SlideBar,
    Content,
    Footer
  }
}
</script>

<style>
body,html,.row-offcanvas {
  height:100%;
}

body {
  padding-top: 50px;
}

#sidebar {
  width: inherit;
  min-width: 220px;
  max-width: 220px;
  background-color:#f5f5f5;
  float: left;
  height:100%;
  position:relative;
  overflow-y:auto;
  overflow-x:hidden;
}
#main {
  height:100%;
  overflow:auto;
}

/*
 * off Canvas sidebar
 * --------------------------------------------------
 */
@media screen and (max-width: 768px) {
  .row-offcanvas {
    position: relative;
    -webkit-transition: all 0.25s ease-out;
    -moz-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    width:calc(100% + 220px);
  }
    
  .row-offcanvas-left
  {
    left: -220px;
  }

  .row-offcanvas-left.active {
    left: 0;
  }

  .sidebar-offcanvas {
    position: absolute;
    top: 0;
  }
}
</style>