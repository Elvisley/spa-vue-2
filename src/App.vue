<template>
    <div>
    	  <menu-top></menu-top>
    	  
            <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Header
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">

            <router-view>
          
        </router-view>

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

     <menu-footer></menu-footer>
    
    </div>
</template>

<script>

import menuTop from './components/layout/menu_top.vue'

import menuFooter from './components/layout/footer.vue'



export default {
	components: {
		menuTop,
    menuFooter
	}
}
</script>