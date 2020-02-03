var christmasTree = (h)=>{

          var         
      i=0,l=2*h-1
   ,t='';while(1){var 
  j=1;while(j<=l){t+=j<
 h-i||j>h+i?' ':'*';++j}
++i;if(i>=h)break;t+='\n';
           };
        return t

}