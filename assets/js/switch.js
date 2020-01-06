   $(document).ready(function() {
      $(".toggle-light").click(function() {
        $("body").toggleClass("night-mode");
        $(".slider").toggleClass("checked");
        if ($("body").hasClass("night-mode")) {
          localStorage.setItem("nightmode", "true");
        } else {
          localStorage.setItem("nightmode", "false");
        }
      });
      var local_Storage = localStorage.getItem("nightmode");
      if (local_Storage == "true") {
        $("body").addClass("night-mode");
        $(".slider").addClass("checked");
      } else {
        $("body").removeClass("night-mode");
        $(".slider").removeClass("checked");
      }
       
    })
