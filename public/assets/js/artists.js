// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newDJ = {
        dj_name: $("#inputName").val().trim(),
        dj_bio: $("#inputBio").val().trim(),
        dj_zip:$("#inputZip").val().trim(),
        dj_phone:$("#inputPhone").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/DJs", {
        type: "POST",
        data: newDJ
      }).then(
        function() {
          console.log("created new DJ");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form-v").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newVendor = {
        vendor_name: $("#inputNameV").val().trim(),
        vendor_zip:$("#inputZipV").val().trim(),
        vendor_phone:$("#inputPhoneV").val().trim(),
        event_location:$("#inputLoc").val().trim(),
        event_time:$("#inputTime").val().trim(),
        cover_ticket_price:$("#inputCover").val().trim(),

      };
  
      // Send the POST request.
      $.ajax("/api/vendors", {
        type: "POST",
        data: newVendor
      }).then(
        function() {
          console.log("created new vendor");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  
  });