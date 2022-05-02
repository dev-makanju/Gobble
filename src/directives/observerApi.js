const animatedScrollObserver = new IntersectionObserver(
   (entries) => {
       entries.forEach((entry) => {
            if(entry.isIntersecting){
              entry.target.classList.add('enter');
            }else{
              entry.target.classList.remove('enter');
            }
       });
   }
);


export default{
   bind(el){
      el.classList.add("before-enter");
      animatedScrollObserver.observe(el);
   }
}