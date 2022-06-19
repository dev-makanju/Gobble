const slugifyUrl = str => {
   return str.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
}

const toCommas =  (value) => {
   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export {
   slugifyUrl,
   toCommas
}

//gogbimi-----eserovwe