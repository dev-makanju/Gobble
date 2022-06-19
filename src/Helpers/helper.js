const slugifyUrl = str => {
   return str.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
}

export {
   slugifyUrl
}

//gogbimi-----eserovwe