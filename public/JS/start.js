const consoleEasterEgg = () => {
	console.log(`                                   z11                               
                                   z@d                               
                                    0@@.                z@.          
                                   z1jd01j".          j11j           
                                  110jd@z@000@jjjjjz@1jd.            
                                zj@j @jd    "zzzzzj@0dz0             
jdd@j1""                    "zj@d@.   00z       .jjd1 @@             
  "z11j@00jjjzz   .zzzz"zjj00@1z.   .111@01jz".zj10.  110            
         """j1j1jzzz10j11z""      .zj@0@0@j1j@1@1@j   .@1@           
             .j@@""j1000@11111111@0@11@1j@00@@@01@0     1d0"         
              "@d.     jjd11@0@@dd@1@dd1jd0@1d0@zj10z    z@@0z       
               z00      00"   @1d110@d0@0@1@@j@j0@1@d@11111@1@@111@@@
                1@j     j0.   "@d   "j0@01j0jjjd1@@dddjzzzzz0@dj"    
                j@@     j0.   11d"j10@@@1d@1dz10?zz00.     z@0j      
                j@d"   z?0. .j@100@j   j11 jj0?@1"@d"     .@@"       
                z01   z1@jj@@d@1.     "@0z  "z1@0d1j      011        
               1z0. "@0d@@@110z"      d@d    .@j@d0j     j1@         
              0@0 .j@1jjj"  "zj@11"  .d?zzj10@@@0@jd     0@z         
            "??d1j@@0@1.       .z@@010@00@1".    @@@0.   @d          
           1@000@11j100dd0@11z.    z1@d0111@01111j0@0d   @d          
        .j@0@?0@zzz.      "zz@d1"   1ddd0@""""""zzj@00d. d?          
     zj0d011111jzj0000@11z.   z0d0" 0z10.           .100"0dj         
 "z10@@j.             .zz10@1   "0d?zj1               j@dd@@         
@@1jz                     z10dj   00@1    ..zj"1@zzzj".j@000z        
                            zdd@  11@  "z001jjjjjjzzj1100111d        
                             .1??j0@1z0d@.               zzzj@       
                               j?d1010@.                   .1@@"     
                                jz00j                        jd?"    
                                jj@                           .d01   
                               .11j                             j@0" 
                               j@0                               zj1 
                               j0j`);

	console.log("YOU FOUND OUR EASTER EGGGGGGGGGGG");
};


let h = false;
let a = false;
let t = false;
let c = false;

document.addEventListener("keydown", function(e) {

  if (e.keyCode == 72) {
    h = true;
  } else if (e.keyCode == 65) {
    a = true;
  } else if (e.keyCode == 84) {
    t = true;
  } else if (e.keyCode == 67) {
    c = true;
  }

  // FINAL
  if (h && a && t && c) {
    consoleEasterEgg2();
  }

});


consoleEasterEgg();








const consoleEasterEgg2 = () => {
  console.log(`
                )
               (
         /\  .-"""-.  /\
        //\\/  ,,,  \//\\
        |/\| ,;;;;;, |/\|
        //\\\;-"""-;///\\
       //  \/   .   \/  \\
      (| ,-_| \ | / |_-, |)
        //'__\.-.-./__'\\
       // /.-(() ())-.\ \\
      (\ |)   '---'   (| /)
       ' (|           |) '
 jgs     \)           (/)`);

};









































