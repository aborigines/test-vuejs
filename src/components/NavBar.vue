<template>
  <div class="navbar">
<header id="header" class="headroom">
    <div class="navbar navbar-fixed-top navbar-inverse" role="navigation">
        <div class="container-fluid">

            <div class="navbar-header">
                <p class="pull-left visible-xs">
                    <button id="offcanvasleft" class="btn btn-xs" type="button" data-toggle="offcanvasleft"><i class="glyphicon glyphicon-chevron-left"></i></button>
                </p>
                <p class="pull-right visible-xs">
                    <button id="offcanvasright" class="btn btn-xs" type="button" data-toggle="offcanvasright"><i class="glyphicon glyphicon-chevron-right"></i></button>
                </p>
                <button class="navbar-toggle" type="button" data-target=".navbar-collapse" data-toggle="collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                	<li v-for="item in items"><a v-bind:href="item">{{ item }}</a></li>
                </ul>
            </div>
            <!-- /.nav-collapse -->

        </div>
        <!-- /.container -->
    </div>
    <!-- /.navbar -->
</header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['HOME', 'ABOUT']
    }
  }
}
</script>