const slugifyUrl = str => {
   return str.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
}

const underscoreUrl = str => {
   return str.toLowerCase().replace(/ /g,'_').replace(/[^\w-]+/g,'');
}

const toCommas =  (value) => {
   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const convertStr =  (Str) => {
   return Str.toLowerCase();
}

export {
   slugifyUrl,
   toCommas,
   convertStr,
   underscoreUrl
}

//gogbimi-----eserovwe