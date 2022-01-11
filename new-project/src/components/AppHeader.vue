<template>
  <header>
    <p>ROAR Vocabulary Assessment Header</p>
     <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style>
header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem;
    /* p{
      margin-left: 1rem;
    } */
  }

  nav {
    margin-left: auto;

    /* ul {
      list-style: none;
    } */

    /* ul li {
      display: inline-flex;
      margin-left: 1rem;
    } */
  }
</style>