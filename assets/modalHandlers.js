var keypressMap = JSON.parse(document.getElementById("keypressReference").innerText);

//#region Top_Menu modal handlers
/*["help"][0]
["help"][1]
["help"][2]

["music"][0]
["music"][1]*/

$("#constructions-btn").click(function() {
    $("#buildModal").modal("show");
    $("#buildModal").keypress( function(event) {
      document.getElementById("keyhandlerModalTester").innerText = event.which;
      switch(event.which) {
      case keypressMap["option1"][0]: // Q
      case keypressMap["option1"][1]:
        break;
      case keypressMap["option2"][0]: // W
      case keypressMap["option2"][1]:
        break;
      case keypressMap["option3"][0]: // E
      case keypressMap["option3"][1]:
        break;
      case keypressMap["option4"][0]: // R
      case keypressMap["option4"][1]:
        break;
      }
    });
    $(".navbar-collapse.in").collapse("hide");
    return false;
  });
  $("#buildModal").on('hide.bs.modal', function(){
    document.getElementById('openModal').innerText = 'false';
    document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
  });
  
  $("#diplomacy-btn").click(function() {
    $("#factionsModal").modal("show");
    $("#factionsModal").keypress( function(event) {
      document.getElementById("keyhandlerModalTester").innerText = event.which;
      switch(event.which) {
      case keypressMap["option1"][0]: // Q
      case keypressMap["option1"][1]:
        break;
      case keypressMap["option2"][0]: // W
      case keypressMap["option2"][1]:
        break;
      case keypressMap["option3"][0]: // E
      case keypressMap["option3"][1]:
        break;
      case keypressMap["option4"][0]: // R
      case keypressMap["option4"][1]:
        break;
      }
    });
    $(".navbar-collapse.in").collapse("hide");
    return false;
  });
  $("#factionsModal").on('hide.bs.modal', function(){
    document.getElementById('openModal').innerText = 'false';
    document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
  });
  
  $("#fleet-btn").click(function() {
    $("#fleetModal").modal("show");
    $("#fleetModal").keypress( function(event) {
      document.getElementById("keyhandlerModalTester").innerText = event.which;
      switch(event.which) {
      case keypressMap["option1"][0]: // Q
      case keypressMap["option1"][1]:
        break;
      case keypressMap["option2"][0]: // W
      case keypressMap["option2"][1]:
        break;
      case keypressMap["option3"][0]: // E
      case keypressMap["option3"][1]:
        break;
      case keypressMap["option4"][0]: // R
      case keypressMap["option4"][1]:
        break;
      }
    });
    $(".navbar-collapse.in").collapse("hide");
    return false;
  });
  $("#fleetModal").on('hide.bs.modal', function(){
    document.getElementById('openModal').innerText = 'false';
    document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
  });
  
  $("#skills-btn").click(function() {
    $("#skillsModal").modal("show");
    $("#skillsModal").keypress( function(event) {
      document.getElementById("keyhandlerModalTester").innerText = event.which;
      switch(event.which) {
      case keypressMap["option1"][0]: // Q
      case keypressMap["option1"][1]:
        break;
      case keypressMap["option2"][0]: // W
      case keypressMap["option2"][1]:
        break;
      case keypressMap["option3"][0]: // E
      case keypressMap["option3"][1]:
        break;
      case keypressMap["option4"][0]: // R
      case keypressMap["option4"][1]:
        break;
      }
    });
    $(".navbar-collapse.in").collapse("hide");
    return false;
  });
  $("#skillsModal").on('hide.bs.modal', function(){
    document.getElementById('openModal').innerText = 'false';
    document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
  });
  
  $("#research-btn").click(function() {
    $("#researchModal").modal("show");
    $("#researchModal").keypress( function(event) {
      document.getElementById("keyhandlerModalTester").innerText = event.which;
      switch(event.which) {
      case keypressMap["option1"][0]: // Q
      case keypressMap["option1"][1]:
        break;
      case keypressMap["option2"][0]: // W
      case keypressMap["option2"][1]:
        break;
      case keypressMap["option3"][0]: // E
      case keypressMap["option3"][1]:
        break;
      case keypressMap["option4"][0]: // R
      case keypressMap["option4"][1]:
        break;
      }
    });
    $(".navbar-collapse.in").collapse("hide");
    return false;
  });
  $("#researchModal").on('hide.bs.modal', function(){
    document.getElementById('openModal').innerText = 'false';
    document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
  });
  
  $("#missions-btn").click(function() {
    $("#missionsModal").modal("show");
    $("#missionsModal").keypress( function(event) {
      document.getElementById("keyhandlerModalTester").innerText = event.which;
      switch(event.which) {
      case keypressMap["option1"][0]: // Q
      case keypressMap["option1"][1]:
        break;
      case keypressMap["option2"][0]: // W
      case keypressMap["option2"][1]:
        break;
      case keypressMap["option3"][0]: // E
      case keypressMap["option3"][1]:
        break;
      case keypressMap["option4"][0]: // R
      case keypressMap["option4"][1]:
        break;
      }
    });
    $(".navbar-collapse.in").collapse("hide");
    return false;
  });
  $("#missionsModal").on('hide.bs.modal', function(){
    document.getElementById('openModal').innerText = 'false';
    document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
  });
  
  /*["options"][0]
  
  ["toggleStats"][0]*/
  //#endregion

//#region Top_Menu/Options modal handlers
$("#go-to-spawn-btn").click(function() {
map.setView([40.4942011, -3.71013], 16);
// map.fitBounds(boroughs.getBounds());
$(".navbar-collapse.in").collapse("hide");
return false;
});
// ["goToSpawn"][0]

$("#spells-btn").click(function() {
$("#sorceriesModal").modal("show");
$("#sorceriesModal").keypress( function(event) {
    document.getElementById("keyhandlerModalTester").innerText = event.which;
    switch(event.which) {
    case keypressMap["option1"][0]: // Q
    case keypressMap["option1"][1]:
    break;
    case keypressMap["option2"][0]: // W
    case keypressMap["option2"][1]:
    break;
    case keypressMap["option3"][0]: // E
    case keypressMap["option3"][1]:
    break;
    case keypressMap["option4"][0]: // R
    case keypressMap["option4"][1]:
    break;
    }
});
$(".navbar-collapse.in").collapse("hide");
return false;
});
$("#sorceriesModal").on('hide.bs.modal', function(){
document.getElementById('openModal').innerText = 'false';
document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
});
$("#keys-btn").click(function() {
$("#keysModal").modal("show");
$("#keysModal").keypress( function(event) {
    document.getElementById("keyhandlerModalTester").innerText = event.which;
    switch(event.which) {
    case keypressMap["option1"][0]: // Q
    case keypressMap["option1"][1]:
    break;
    case keypressMap["option2"][0]: // W
    case keypressMap["option2"][1]:
    break;
    case keypressMap["option3"][0]: // E
    case keypressMap["option3"][1]:
    break;
    case keypressMap["option4"][0]: // R
    case keypressMap["option4"][1]:
    break;
    }
});
$(".navbar-collapse.in").collapse("hide");
return false;
});
$("#keysModal").on('hide.bs.modal', function(){
document.getElementById('openModal').innerText = 'false';
document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
});

$("#login-btn").click(function() {
$("#loginModal").modal("show");
$(".navbar-collapse.in").collapse("hide");
return false;
});
$("#loginModal").on('hide.bs.modal', function(){
document.getElementById('openModal').innerText = 'false';
document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
});

// save-btn
// ["saveQuit"][0]
//#endregion

//#region Left_Menu modal handlers
/*["inventory"][0]

["leaveItem"][0]

["manageInventory"][0]

["swapInventoryLetters"][0]

["takeOut"][0]*/
//#endregion

//#region Map/ObjectiveInteraction modal handlers
$("#battleModal").keypress( function(event) {
switch(event.which) {
case keypressMap["option1"][0]: // Q
case keypressMap["option1"][1]:
    document.getElementById("battleLogs").innerHTML = "¡Marluxa usó ataque básico!";
    break;
case keypressMap["option2"][0]: // W
case keypressMap["option2"][1]:
    break;
case keypressMap["option3"][0]: // E
case keypressMap["option3"][1]:
    break;
case keypressMap["option4"][0]: // R
case keypressMap["option4"][1]:
    break;
}
});
$("#battleModal").on('hide.bs.modal', function(){
document.getElementById('openModal').innerText = 'false';
document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
});

$("#tradeModal").keypress( function(event) {
switch(event.which) {
case keypressMap["option1"][0]: // Q
case keypressMap["option1"][1]:
    document.getElementById("tradeSelection").innerHTML = "¡Has elegido el primer elemento!";
    break;
case keypressMap["option2"][0]: // W
case keypressMap["option2"][1]:
    break;
case keypressMap["option3"][0]: // E
case keypressMap["option3"][1]:
    break;
case keypressMap["option4"][0]: // R
case keypressMap["option4"][1]:
    break;
}
});
$("#tradeModal").on('hide.bs.modal', function(){
document.getElementById('openModal').innerText = 'false';
document.getElementById("tradeTable").getElementsByTagName('tbody')[0].innerText = '';
//document.getElementById('currentPlace').innerText = 'outside';
document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
});

/*["open"][0]
["read"][0]
["wear"][0]
["examine"][0]
["examine"][1]
["use"][0]
["vehicleHandbrake"][0]*/
//#endregion
