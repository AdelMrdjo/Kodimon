<template>
  <div class="container">
    <div class="in-game-screen">
      <div class="opponents">
        <div class="opponent">
          <p class="name">Squirtle</p>
          <img src="/squirtle.png" alt="opponent-1" />
          <p class="label">Stats</p>
          <div class="stats">
            <p>HP: 44</p>
            <p>Attack: 48</p>
            <p>Defense: 65</p>
            <p>Speed: 43</p>
          </div>
        </div>
        <div class="action">
          <img src="/arrow.svg" alt="arrow" />
          <button>Attack!</button>
        </div>
        <div class="opponent">
          <p class="name">Eevee</p>
          <img src="/eevee.png" alt="opponent-2" />
          <p class="label">Stats</p>
          <div class="stats">
            <p>HP: 55</p>
            <p>Attack: 50</p>
            <p>Defense: 50</p>
            <p>Speed: 55</p>
          </div>
        </div>
      </div>
      <div class="menu-with-logs">
        <div class="menu-container">
          <p class="label">Menu</p>
          <div class="buttons">
            <button>Home</button>
            <button>New game</button>
            <button>New opponent</button>
          </div>
        </div>
        <div class="logs-container">
          <p class="label">Logs</p>
          <div class="logs">
            <p>Eevee attacked Squirtle for 35.75 dmg</p>
            <p>Squirtle attacked Eevee for 24 dmg</p>
            <p>Eevee missed Squirtle</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
}
.in-game-screen {
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 50px;
  height: 100%;
}
.name {
  font-weight: bold;
  text-align: center;
}
.label {
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
}
button {
  cursor: pointer;
  height: 48px;
  width: 230px;
  border-radius: 50px;
  background: $blue;
  border: 4px solid $blue-light;
  color: $white;
  font-size: 16px;
}
.opponents {
  display: grid;
  width: 1300px;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
}
.stats {
  text-align: left;
  border: 4px solid $yellow;
  border-radius: 16px;
  width: 260px;
  background: $yellow-light;
  padding: 10px;
}
////////////
.action {
  position: relative;
  bottom: 20px;
  img {
    display: block;
    margin: 0 auto 32px;
  }
}
/////////////
.menu-with-logs {
  display: grid;
  grid-template-columns: auto 50%;
  justify-content: space-between;
  align-items: flex-end;
}
.menu-container {
  width: 260px;
  .buttons {
    border: 4px solid $yellow;
    background: $yellow-light;
    border-radius: 16px;
    padding: 12px 0;
    display: grid;
    justify-content: center;
    gap: 12px;
  }
}
.logs-container {
  .logs {
    border: 4px solid $yellow;
    background: $yellow-light;
    border-radius: 16px;
    padding: 12px;
    font-weight: bold;
    height: 240px;
  }
}
</style>
