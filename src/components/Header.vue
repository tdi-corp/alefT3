<script setup>
</script>
<template>
  
  <div class="header">

      <img src="@/assets/logo.svg" width="93px"> 
    
    <div class="header_menu" style="width: 100%;">
     
        <ul>
          <li>
            <router-link to="/">
              Форма
            </router-link>
          </li>
          <li>
            <router-link to="/preview">
              Превью
            </router-link>
          </li>
        </ul>

      
    </div>

  </div>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom: 1px solid rgba(17, 17, 17, 0.1);
    height: 76px;
    padding: 0 40px;
    margin-bottom: 33px;
  }

  .header_menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header_menu ul > li {
    display: inline;
  }
  
  .header_menu ul > li a {
    padding: 1rem;
  }
</style>
