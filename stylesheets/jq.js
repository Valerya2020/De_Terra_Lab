$(document).ready(function(){
  $(".btn1").click(function(){
    $(".notebook").addClass("notebook1");
    $(".notebook").removeClass("notebook");
    $(".note_h40").addClass("hide");
    $(".note_p0").addClass("hide");
    $(".note_h41").removeClass("hide");
    $(".note_p1").removeClass("hide");
    $(".btn2").removeClass("hide");
    $(".note_body2").addClass("note_body2_2");
  });

  $(".btn2").click(function(){
    $(".notebook1").addClass("notebook");
    $(".notebook1").removeClass("notebook1");
    $(".note_h40").removeClass("hide");
    $(".note_p0").removeClass("hide");
    $(".note_h41").addClass("hide");
    $(".note_p1").addClass("hide");
    $(".btn2").addClass("hide");
    $(".note_body2").removeClass("note_body2_2");
  });


  $( function() {
      $( ".termo_control" ).slider({

        range: "min",
        value: 10,
        min: 0,
        max: 100,
        slide: function( event, ui ) {
          console.log("a");
          $( "#amount" ).val( "0" + ui.value );
        }
      });
      $( "#amount" ).val( "0" + $( ".termo_control" ).slider( "value" ) );
    } );


    $( function() {
      let count_1 = 0;
     $("#button1, #probirka1").click(function() {
      $(".glass_dialogue_red").removeClass("hide");

      $(".cancel").click(function() {
       $(".glass_dialogue_red").addClass("hide");
       });

       $(".add").click(function() {
         count_1 += 1;
         if (count_1 == 1) {
        $(".glass_dialogue_red").addClass("hide");
        $(".red_reagent").addClass("red_reagent_90");
        $(".red_reagent").removeClass("red_reagent");
      }
      if (count_1 == 3) {
      $(".glass_dialogue_red").addClass("hide");
      $(".red_reagent_90").addClass("red_reagent_80");
      $(".red_reagent_90").removeClass("red_reagent_90");
      }
      if (count_1 == 5) {
      $(".glass_dialogue_red").addClass("hide");
      $(".red_reagent_80").addClass("red_reagent_70");
      $(".red_reagent_80").removeClass("red_reagent_80");
      }
      if (count_1 == 9) {
      $(".glass_dialogue_red").addClass("hide");
      $(".red_reagent_70").addClass("red_reagent_60");
      $(".red_reagent_70").removeClass("red_reagent_70");
      }
      if (count_1 == 13) {
      $(".glass_dialogue_red").addClass("hide");
      $(".red_reagent_60").addClass("red_reagent_50");
      $(".red_reagent_60").removeClass("red_reagent_60");
      }
      if (count_1 == 21) {
      $(".glass_dialogue_red").addClass("hide");
      $(".red_reagent_50").addClass("red_reagent_40");
      $(".red_reagent_50").removeClass("red_reagent_50");
      }
      if (count_1 == 28) {
      $(".glass_dialogue_red").addClass("hide");
      $(".red_reagent_40").addClass("red_reagent_30");
      $(".red_reagent_40").removeClass("red_reagent_40");
      }
      if (count_1 == 38) {
      $(".glass_dialogue_red").addClass("hide");
      $(".red_reagent_30").addClass("red_reagent_20");
      $(".red_reagent_30").removeClass("red_reagent_30");
      }
      if (count_1 == 50) {
      $(".glass_dialogue_red").addClass("hide");
      $(".red_reagent_20").addClass("red_reagent_10");
      $(".red_reagent_20").removeClass("red_reagent_20");
      }
      if (count_1 == 61) {
      $(".glass_dialogue_red").addClass("hide");
      $(".red_reagent_10").addClass("red_reagent_0");
      $(".red_reagent_10").removeClass("red_reagent_10");
      }
      if (count_1 == 72) {
      $(".glass_dialogue_red").addClass("hide");
      $(".red_reagent_0").addClass("red_reagent_00");
      $(".red_reagent_0").removeClass("red_reagent_0");
      }
      if (count_1 >= 83) {
      $(".glass_dialogue_red").addClass("hide");
      }
        });

      });

      } );

      $( function() {
        let count_2 = 0;
       $("#button2, #probirka2").click(function() {
        $(".glass_dialogue_green").removeClass("hide");

        $(".cancel").click(function() {
         $(".glass_dialogue_green").addClass("hide");
         });

         $(".add").click(function() {
           count_2 += 1;
           if (count_2 == 1) {
          $(".glass_dialogue_green").addClass("hide");
          $(".green_reagent").addClass("green_reagent_90");
          $(".green_reagent").removeClass("green_reagent");
        }
        if (count_2 == 3) {
        $(".glass_dialogue_green").addClass("hide");
        $(".green_reagent_90").addClass("green_reagent_80");
        $(".green_reagent_90").removeClass("green_reagent_90");
        }
        if (count_2 == 5) {
        $(".glass_dialogue_green").addClass("hide");
        $(".green_reagent_80").addClass("green_reagent_70");
        $(".green_reagent_80").removeClass("green_reagent_80");
        }
        if (count_2 == 9) {
        $(".glass_dialogue_green").addClass("hide");
        $(".green_reagent_70").addClass("green_reagent_60");
        $(".green_reagent_70").removeClass("green_reagent_70");
        }
        if (count_2 == 13) {
        $(".glass_dialogue_green").addClass("hide");
        $(".green_reagent_60").addClass("green_reagent_50");
        $(".green_reagent_60").removeClass("green_reagent_60");
        }
        if (count_2 == 21) {
        $(".glass_dialogue_green").addClass("hide");
        $(".green_reagent_50").addClass("green_reagent_40");
        $(".green_reagent_50").removeClass("green_reagent_50");
        }
        if (count_2 == 28) {
        $(".glass_dialogue_green").addClass("hide");
        $(".green_reagent_40").addClass("green_reagent_30");
        $(".green_reagent_40").removeClass("green_reagent_40");
        }
        if (count_2 == 38) {
        $(".glass_dialogue_green").addClass("hide");
        $(".green_reagent_30").addClass("green_reagent_20");
        $(".green_reagent_30").removeClass("green_reagent_30");
        }
        if (count_2 == 50) {
        $(".glass_dialogue_green").addClass("hide");
        $(".green_reagent_20").addClass("green_reagent_10");
        $(".green_reagent_20").removeClass("green_reagent_20");
        }
        if (count_2 == 61) {
        $(".glass_dialogue_green").addClass("hide");
        $(".green_reagent_10").addClass("green_reagent_0");
        $(".green_reagent_10").removeClass("green_reagent_10");
        }
        if (count_2 == 72) {
        $(".glass_dialogue_green").addClass("hide");
        $(".green_reagent_0").addClass("green_reagent_00");
        $(".green_reagent_0").removeClass("green_reagent_0");
        }
        if (count_2 >= 83) {
        $(".glass_dialogue_green").addClass("hide");
        }
          });

        });

        } );

        $( function() {
          let count_3 = 0;
         $("#button3, #probirka3").click(function() {
          $(".glass_dialogue_blue").removeClass("hide");

          $(".cancel").click(function() {
           $(".glass_dialogue_blue").addClass("hide");
           });

           $(".add").click(function() {
             count_3 += 1;
             if (count_3 == 1) {
            $(".glass_dialogue_blue").addClass("hide");
            $(".blue_reagent").addClass("blue_reagent_90");
            $(".blue_reagent").removeClass("blue_reagent");
          }
          if (count_3 == 3) {
          $(".glass_dialogue_blue").addClass("hide");
          $(".blue_reagent_90").addClass("blue_reagent_80");
          $(".blue_reagent_90").removeClass("blue_reagent_90");
          }
          if (count_3 == 5) {
          $(".glass_dialogue_blue").addClass("hide");
          $(".blue_reagent_80").addClass("blue_reagent_70");
          $(".blue_reagent_80").removeClass("blue_reagent_80");
          }
          if (count_3 == 9) {
          $(".glass_dialogue_blue").addClass("hide");
          $(".blue_reagent_70").addClass("blue_reagent_60");
          $(".blue_reagent_70").removeClass("blue_reagent_70");
          }
          if (count_3 == 13) {
          $(".glass_dialogue_blue").addClass("hide");
          $(".blue_reagent_60").addClass("blue_reagent_50");
          $(".blue_reagent_60").removeClass("blue_reagent_60");
          }
          if (count_3 == 21) {
          $(".glass_dialogue_blue").addClass("hide");
          $(".blue_reagent_50").addClass("blue_reagent_40");
          $(".blue_reagent_50").removeClass("blue_reagent_50");
          }
          if (count_3 == 28) {
          $(".glass_dialogue_blue").addClass("hide");
          $(".blue_reagent_40").addClass("blue_reagent_30");
          $(".blue_reagent_40").removeClass("blue_reagent_40");
          }
          if (count_3 == 38) {
          $(".glass_dialogue_blue").addClass("hide");
          $(".blue_reagent_30").addClass("blue_reagent_20");
          $(".blue_reagent_30").removeClass("blue_reagent_30");
          }
          if (count_3 == 50) {
          $(".glass_dialogue_blue").addClass("hide");
          $(".blue_reagent_20").addClass("blue_reagent_10");
          $(".blue_reagent_20").removeClass("blue_reagent_20");
          }
          if (count_3 == 61) {
          $(".glass_dialogue_blue").addClass("hide");
          $(".blue_reagent_10").addClass("blue_reagent_0");
          $(".blue_reagent_10").removeClass("blue_reagent_10");
          }
          if (count_3 == 72) {
          $(".glass_dialogue_blue").addClass("hide");
          $(".blue_reagent_0").addClass("blue_reagent_00");
          $(".blue_reagent_0").removeClass("blue_reagent_0");
          }
          if (count_3 >= 83) {
          $(".glass_dialogue_blue").addClass("hide");
          }
            });

          });

          } );

});
