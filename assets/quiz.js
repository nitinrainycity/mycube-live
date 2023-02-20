// Place JS within here
let fireicon = document.getElementById('fire');
let all_divs = document.querySelectorAll('.hidediv');
let perfect_fit_screen = document.getElementById('perfect_fit_screen');
let technologyicon = document.getElementById('technology');
let product_fire = document.getElementById('product_fire');
let product_tech = document.getElementById('product_tech');
let securityicon = document.getElementById('security');
let stagetwo = document.getElementById('stagetwo');
let safe_btn = document.getElementById('safe_btn');
let loading_screen = document.getElementById('loading_screen');
let stagetwo_one = document.getElementById('stagetwo_one');
let safe_biometric_btn = document.getElementById('safe_biometric');
let stagetwo_two = document.getElementById('stagetwo_two');
let myc_classic = document.getElementById('myc_classic');
let mycube_product = document.getElementById('mycube_product');
let myc_mini = document.getElementById('myc_mini');
let mycubemini_product = document.getElementById('mycubemini_product');
let myc_wallsafe = document.getElementById('myc_wallsafe');
let wallsafe_pro = document.getElementById('wallsafe_pro');
let shelf_btn = document.getElementById('self');
let stagetwo_two_one = document.getElementById('stagetwo_two_one');
let drawer_btn = document.getElementById('drawer');
let drawer_product = document.getElementById('drawer_product');
let locker_icon = document.getElementById('locker');
let locker_product = document.getElementById('lock_product');
let biocube = document.getElementById('biocube');
let biocube_prod = document.getElementById('biocube_prod');
let biocube_mini = document.getElementById('biocube_mini');
let biocube_mini_prod = document.getElementById('biocube_mini_prod');
let biocube_plus = document.getElementById('biocube_plus');
let biocube_plus_prod = document.getElementById('biocube_plus_prod');
let stageone= document.getElementById('stageone');
let dim_prod = document.getElementsByClassName('dim_pro');
let stagetwo_onebtn = document.querySelectorAll('.stagetwo_one');
let backmycube_screen = document.querySelectorAll('.backmycube_screen');
let backbycube_screen = document.querySelectorAll('.backbycube_screen');

let back_btn = document.getElementsByClassName('backfirst_screen');
let backbtns_screen = document.getElementsByClassName('backbtns_screen');
let back_safe_style = document.getElementsByClassName('back_safe_style');
let back_bio_screen = document.getElementsByClassName('back_bio_screen');

function show_hide_elements(el_name,display_prop,el_type){
   if(el_type=="class"){
      el_name.forEach(function(el) {
         el.style.display = display_prop;
      });
   }
   if(el_type=="id"){
      el_name.style.display = display_prop;
   }
}

let back_btn_safe_function = function() {
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(stagetwo_two,"block","id");
}; 
let back_bio_screen_function = function() {
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(stagetwo_two_one,"block","id");
}; 
let back_btn_screen_function = function() {
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(stagetwo_one,"block","id");
}; 
fireicon.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(perfect_fit_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(perfect_fit_screen,"none","id");
      show_hide_elements(product_fire,"block","id");
   },4000);
});
technologyicon.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(perfect_fit_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(perfect_fit_screen,"none","id");
      show_hide_elements(product_tech,"block","id");
    },4000);
});
securityicon.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(stagetwo,"block","id");
});   
safe_btn.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(loading_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(loading_screen,"none","id");
      show_hide_elements(stagetwo_one,"block","id");
    
   },4000);
});

safe_biometric_btn.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(stagetwo_two,"block","id");
});   

myc_classic.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(perfect_fit_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(perfect_fit_screen,"none","id");
      show_hide_elements(mycube_product,"block","id");
   },4000);
});   

myc_mini.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(perfect_fit_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(perfect_fit_screen,"none","id");
      show_hide_elements(mycubemini_product,"block","id");
   },4000);
});   

myc_wallsafe.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(perfect_fit_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(perfect_fit_screen,"none","id");
      show_hide_elements(wallsafe_pro,"block","id");
      
      },4000);
});   

shelf_btn.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(loading_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(loading_screen,"none","id");
      show_hide_elements(stagetwo_two_one,"block","id");
      },4000);
});   
drawer_btn.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(perfect_fit_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(perfect_fit_screen,"none","id");
      show_hide_elements(drawer_product,"block","id");
    
      },4000);
});   
locker_icon.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(perfect_fit_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(perfect_fit_screen,"none","id");
      show_hide_elements(locker_product,"block","id");
   },4000);
});   
biocube.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(perfect_fit_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(perfect_fit_screen,"none","id");
      show_hide_elements(biocube_prod,"block","id");
   },4000);
});   
biocube_mini.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(perfect_fit_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(perfect_fit_screen,"none","id");
      show_hide_elements(biocube_mini_prod,"block","id");
   },4000);
});
biocube_plus.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(perfect_fit_screen,"flex","id");
   setTimeout(function () {
      show_hide_elements(perfect_fit_screen,"none","id");
      show_hide_elements(biocube_plus_prod,"block","id");
   },4000);
});   
let get_prod_dimensions = function() {
   let pro_id = this.getAttribute("data-proid");
   var dimension_area = document.getElementsByClassName('pro_dim-'+pro_id);
   for (var i = 0; i < dimension_area.length; i++){
      dimension_area[i].style.display = "block";
   }
   var tl_wp = document.getElementsByClassName('tl_wp-'+pro_id);
   for (var i = 0; i < tl_wp.length; i++){
      tl_wp[i].style.display = "none";
   }
   var pro_custom = document.getElementsByClassName('pro_custm-'+pro_id);
   for (var i = 0; i < pro_custom.length; i++){
      pro_custom[i].style.display = "none";
   } 
   tx_rt = document.getElementsByClassName('tx-rt_'+pro_id);
   for (var i = 0; i < tx_rt.length; i++) {
      tx_rt[i].classList.add("hideprodata");
      
   }
   let hideprodata = document.getElementsByClassName('hideprodata');
   for (var i = 0; i < hideprodata.length; i++) {
      hideprodata[i].addEventListener('click', hideprodata_function, true);
   } 

};
for (var i = 0; i < dim_prod.length; i++) {
   dim_prod[i].addEventListener('click', get_prod_dimensions, false);
}
let back_btn_function = function() {
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(stageone,"block","id");
};   

for (var i = 0; i < back_btn.length; i++) {
   back_btn[i].addEventListener('click', back_btn_function, false);
}
for (var i = 0; i < backbtns_screen.length; i++) {
   backbtns_screen[i].addEventListener('click', back_btn_screen_function, false);
}
stagetwo_onebtn.forEach(function (elem) {
   elem.addEventListener("click", function (event) {
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(stagetwo,"block","id");
  });
  });
backmycube_screen.forEach(function (elem) {
   elem.addEventListener("click", function (event) {
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(stagetwo_one,"block","id");
  });
  });
backbycube_screen.forEach(function (elem) {
   elem.addEventListener("click", function (event) {
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(stagetwo_two_one,"block","id");
  });
  });


/*stagetwo_one.addEventListener('click', function(e){
   show_hide_elements(all_divs,"none","class");
   show_hide_elements(stagetwo,"block","id");
});*/   

for (var i = 0; i < back_safe_style.length; i++) {
   back_safe_style[i].addEventListener('click', back_btn_safe_function, false);
}

for (var i = 0; i < back_bio_screen.length; i++) {
   back_bio_screen[i].addEventListener('click', back_bio_screen_function, false);
} 

let hideprodata_function = function() {
   let pro_id = this.getAttribute("data-proid");
   var dimension_area = document.getElementsByClassName('pro_dim-'+pro_id);
   for (var i = 0; i < dimension_area.length; i++){
      dimension_area[i].style.display = "none";
   }
   var tl_wp = document.getElementsByClassName('tl_wp-'+pro_id);
   for (var i = 0; i < tl_wp.length; i++){
      tl_wp[i].style.display = "flex";
   }
   var pro_custom = document.getElementsByClassName('pro_custm-'+pro_id);
   for (var i = 0; i < pro_custom.length; i++){
      pro_custom[i].style.display = "flex";
   }
   let tx_rt = Array.from(document.querySelectorAll('tx-rt_'+pro_id));
   tx_rt.forEach(node => {
    node.classList.remove('hideprodata');
  });
};