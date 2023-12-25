class MyStorage {
  private data: any;
  private storageKey = 'NET-MUSIC-USER-INFO';
  constructor() {
    this.data = {};
  }
  set(data: any) {
    window.localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
  get() {
    const dataStr = window.localStorage.getItem(this.storageKey);
    return dataStr ? JSON.parse(dataStr) : null;
  }
}

export default new MyStorage();