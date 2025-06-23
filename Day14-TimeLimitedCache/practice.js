var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const alreadyExists = this.cache.get(key);
    if (alreadyExists) {
        // if key already exists, we will remove the previous timeout
        clearTimeout(alreadyExists.expiry);
        // return true as it was already present
        return true;
    }   
    
   const id =  setTimeout(() => {
        //remove the key afte duration 
        if(this.cache.has(key)) {
            this.cache.delete(key);
        }
    }, duration);

    this.cache.set(key, {
        value: value,
        expiry: id
    });

    return Boolean(alreadyExists); // return false as it was not present before    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size
};


  const timeLimitedCache = new TimeLimitedCache()

  console.log(timeLimitedCache.set(1, 42, 1000))// false
  console.log(timeLimitedCache.get(1)) // 42
console.log(  timeLimitedCache.count()) // 1
 