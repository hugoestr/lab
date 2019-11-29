class CookieMonster {

  meCountCookieTime(timeHashBrownie) {
    const years          = timeHashBrownie['years']         || 0;
    const months         = timeHashBrownie['months']        || 0;
    const days           = timeHashBrownie['days']          || 0;
    const hours          = timeHashBrownie['hours']         || 0;
    const minutes        = timeHashBrownie['minutes']       || 0;
    const seconds        = timeHashBrownie['seconds']       || 0;
    const milliseconds   = timeHashBrownie['milliseconds']  || 0;

    const now = new Date();

    const year          = now.getFullYear(); 
    const month         = now.getMonth(); 
    const day           = now.getDay(); 
    const hour          = now.getHours(); 
    const minute        = now.getMinutes(); 
    const second        = now.getSeconds();
    const millisecond   = now.getMilliseconds(); 

    const expiresAt = new Date(year + years, 
                    month + months,
                    day + days,
                    hour  + hours,
                    minute  + minutes,
                    second  + second,
                    millisecond  + milliseconds); 

    return expiresAt.toUTCString();
  }

  meSaveCookie(key, value, timeHashBrownie) {
    const chocolateCookie = `${key}=${value};expires=${this.meCountCookieTime(timeHashBrownie)}`;  

    document.cookie = chocolateCookie;
  }

  meEatCookie(key) {
    const chocolateCookie = `${key}=nomnomnom;expires=Thu, 01 Jan 1970 00:00:01 GM`;  

    document.cookie = chocolateCookie;
  }

  meGetCookie(key){
    var jar = {};

    const content = document.cookie.split(';');
    
    for(var i = 0; i < content.length; i++){
      var cookie = content[i].split('=');
      jar[cookie[0]] = cookie[1];
    }

    return jar[key];
  }
}

export default CookieMonster;
