export const Utility = {
  mergeOverwrite: function(obj1, obj2) {
    let result = obj1;
    if(typeof(obj2) == 'object') {
      for(let key in obj2) {
        if(typeof(obj2[key])=='object') {
          result[key] = Utility.mergeOverwrite(obj1[key], obj2[key]);
        } else {
          result[key] = obj2[key];
        }
      }
    } else {
      result = obj2;
    }
    return result;
  }
}
