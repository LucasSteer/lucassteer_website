<template>
  <div class="container">
    <header>
      <h1 class="text-4xl text-indigo-600">lucassteer</h1>
      <!-- TODO: do this accessibly -->
      <nav>
        <ul>
          <li>
            <a class="current-page" href="/">Home</a>
          </li>
          <!-- TODO: do this accessibly -->
          <li>
            <!-- TODO: Work terms should likely be a link to a separate page (perhaps that line-map of my experiences or something?) -->
            <button class="dropbtn">Work Terms</button>
            <div class="dropdown-content">
              <a href="s16f16.html">eSentire</a>
              <a href="s17.html">Confederation Freezers</a>
              <a href="w18.html">Jibestream</a>
              <a href="s18.html">CGI</a>
            </div>
          </li>
          <li>
            <a class="current-page" href="aboutme">About Me</a>
          </li>
        </ul>
      </nav>
    </header>
    <nuxt />
    <!-- TODO: do we need a footer? -->
    <!-- <footer></footer> -->
  </div>
</template>

<script>
require('@/assets/app.css'); // import all CSS
</script>
