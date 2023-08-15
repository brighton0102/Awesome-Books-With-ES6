const updateData = () => {
    localStorage.setItem(this.storeKey, JSON.stringify(this.storeData));
}
  
  export default {updateData}