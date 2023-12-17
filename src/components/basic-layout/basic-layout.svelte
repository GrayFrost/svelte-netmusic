<div class="music-container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <div class="sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<style lang="less" scoped>
.music-container {
  display: flex;
  flex-direction: column;
  header {
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  main {
    flex: 1;
    display: flex;
    .sidebar {
      width: 200px;
      height: 100%;
      overflow-y: auto;
    }
    .content {
      flex: 1;
    }
  }

  footer {
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
}
</style>