$(() => {
  // constructor function for Parts List
  function MoparPart(part, img, name, desc, price) {
    this.part = part;
    this.img = img;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.ordered = 0;
  }
  // parts list array
  const moparPart = [
    // Hemi Parts List
    new MoparPart(
      "hemi",
      "engine8.jpeg",
      '426" Hemi 2 x 4 Carb',
      '515 HP 500 Torque 4.25" bore 3.750" stroke',
      17495
    ),
    new MoparPart(
      "hemi",
      "engine1.jpeg",
      '426" Hemi Cross Ram',
      '545 HP 500 Torque 4.25" bore 3.750" stroke',
      21750
    ),
    new MoparPart(
      "hemi",
      "engine2.jpeg",
      '572" Super Street',
      "770 HP 700 Torque Mod-Man Intake",
      18495
    ),
    new MoparPart(
      "hemi",
      "engine2.jpeg",
      '572" Race Legend',
      '960 HP 760 Torque 4.50" bore 4.50" stroke',
      24495
    ),
    new MoparPart(
      "hemi",
      "engine10.jpeg",
      '526" Street Legend',
      'Supercharged 950 HP 900 Torque 4.310" bore 4.50" stroke',
      24495
    ),
    new MoparPart(
      "hemi",
      "engine1.jpeg",
      "426-1 Legend Kit",
      "Head assembly, shaft clamp kit, rocker side shims, manifold bolt kit, spark plug tubes, valve covers and bolts, rocker side springs, push rod kit, 426-2 or 3 intake manifold, Indy roller rocker arms, removable valley plate, shaft oil restrictors, head studs, thick wall rocker shafts, tube O-rings, complete gasket set.",
      7161
    ),
    new MoparPart(
      "hemi",
      "engine1.jpeg",
      "426-SRK Legend Kit",
      "Includes assembled heads with: 2.25 x 1.94 200cc port, Indy roller rocker arms, rocker side shims and springs, head studs and manifold bolt kit, spark plug tubes and O-rings, chrome valve covers, Mod-Man choice of tops 1x4, 2x4, 3x2 or blower top, push rod kit and complete gasket set.",
      24495
    ),
    new MoparPart(
      "hemi",
      "500ModManWedge.jpeg",
      "Arlen Vanke 426 Hemi Intake Manifold",
      'Dominator dual plane intake low profile / hood clearance 820 HP on 572" Super Street',
      595
    ),
    new MoparPart(
      "hemi",
      "500ModManWedge.jpeg",
      "Mod-Man Hemi Intake Manifolds",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Interchangable top plates are available for single 4, dual 4, 6 pack, and supercharger. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      529
    ),
    new MoparPart(
      "hemi",
      "500ModManWedge.jpeg",
      "426 Legend Mod-Man Six Pack",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      2104
    ),
    new MoparPart(
      "hemi",
      "500ModManWedge.jpeg",
      "5.7 New Legend Hemi Mod-Man Intake",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Interchangable top plates are available for single 4, dual 4, 6 pack, and supercharger. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      529
    ),
    new MoparPart(
      "hemi",
      "500ModManWedge.jpeg",
      "6.1 New Legend Hemi Mod-Man Intake",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Interchangable top plates are available for single 4, dual 4, 6 pack, and supercharger. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      529
    ),
    new MoparPart(
      "hemi",
      "500ModManWedge.jpeg",
      "5.7 New Legend Mod-Man Six Pack",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      2104
    ),
    new MoparPart(
      "hemi",
      "500ModManWedge.jpeg",
      "6.1 New Legend Mod-Man Six Pack",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      2104
    ),
    new MoparPart(
      "hemi",
      "engine7.jpeg",
      "Mopar World Block",
      '4.240" Rough bore Hemi',
      3800
    ),
    new MoparPart(
      "hemi",
      "engine7.jpeg",
      "Mopar World Block",
      '4.490" Rough bore Hemi',
      3800
    ),
    new MoparPart(
      "hemi",
      "engine7.jpeg",
      "Mopar World Block",
      '4.500" Finish bore Hemi',
      3800
    ),
    new MoparPart(
      "hemi",
      "engine7.jpeg",
      "572 C.I. Hemi Rotating Kit",
      "Eagle crank 4.5 / 2.2, Eagle rods 7.100 / 2.2, Diamond forged pistons 10.75 to 1 with 175cc, Rings and bearings.",
      2950
    ),
    new MoparPart(
      "hemi",
      "engine7.jpeg",
      "572 C.I. Hemi Short Block",
      "Eagle crank 4.5 / 2.2, Eagle rods 7.100 / 2.2, Diamond forged pistons 10.75 to 1 with 175cc, Rings and bearings, assembled with Mopar siamese block.",
      8225
    ),
    new MoparPart(
      "hemi",
      "engine7.jpeg",
      "Indy Maxx Aluminum Hemi Block",
      'Siamese dry sleeve construction, choice of sleeves, all 5 main caps cross bolted, priority oil main bearings & finished lifter bores, cam bearings & screw in core plugs installed, Std oil pan bolt pattern, dowels and oil gallery plugs supplied, steel billet main caps & finished line hone, 4.500" machined aluminum block, street or bracket race friendly.',
      5500
    ),
    // Big Block parts list
    new MoparPart(
      "bigBlock",
      "500SWedge.jpeg",
      '500" Street Wedge',
      '540 HP 575 Torque 4.150" stroke 850 Holley Carb',
      10150
    ),
    new MoparPart(
      "bigBlock",
      "500SWedge.jpeg",
      '500" Mod-Man Wedge',
      "600 HP 600 Torque Mod-Man Intake",
      10150
    ),
    new MoparPart(
      "bigBlock",
      "540AlumWedge.jpeg",
      '540" Aluminum Wedge',
      "900 HP 760 Torque All aluminum for Nostalgia Super Stock",
      23500
    ),
    new MoparPart(
      "bigBlock",
      "572SSWedge.jpeg",
      '572" Super Street Wedge',
      '750 HP 700 Torque 4.50" bore 4.50" stroke Pump Gas',
      17495
    ),
    new MoparPart(
      "bigBlock",
      "572Bracketmaster.jpeg",
      '572" Bracketmaster',
      '930 HP 810 Torque 4.50" bore 4.50" stroke Race Gas',
      21195
    ),
    new MoparPart(
      "bigBlock",
      "head1.jpeg",
      "Indy 440 SEZ Kit",
      "The SEZ heads have stock low exhaust port location and bolt patterns.Most all standard headers will work. Stock intake and exhaust manifolds are a bolt on for big Indy power. Kit includes: assembled heads, valley plate, intake gaskets, push rods and head bolts.",
      2190
    ),
    new MoparPart(
      "bigBlock",
      "head2.jpeg",
      "Indy 440 EZ-1 Kit",
      "The EZ heads are designed for A Body Cars. They have stock low exhaust port location and bolt patterns. Most all standard exhaust headers will work. This means that if you need Indy power and want to use your existing stock exhaust headers, this is your head! CNC Max Wedge opening 275cc, intake port 75cc. Kit includes: assembled heads, valley plate, intake gaskets, push rods and head bolts",
      2400
    ),
    new MoparPart(
      "bigBlock",
      "Indy440kit1.jpeg",
      "Indy 440-1 Kit",
      "Complete kit includes heads assembled with: 440-4 rocker assembly 1.5 or 1.6, 440-9K push rod kit, 440-33 complete gasket set, 400 or 440-6 valley plate, 440-10 external oil kit, 440-11 rocker studs, 440-7 or 8 valve covers, 400 or 440-2 or 3 manifold, 440-11 rocker shafts, Now With CNC Chambers.",
      4218
    ),
    new MoparPart(
      "bigBlock",
      "500ModManWedge.jpeg",
      "Mod-Man B-RB Intake Manifolds",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Interchangable top plates are available for single 4, dual 4, 6 pack, and supercharger. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      529
    ),
    new MoparPart(
      "bigBlock",
      "500ModManWedge.jpeg",
      "Mod-Man B-RB Six Pack",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      2104
    ),
    new MoparPart(
      "bigBlock",
      "head1.jpeg",
      "383 / 400 / 440 Chrysler Reconditioned Heads",
      'Designed for the 1961-1978 Chrysler 383-440 c.i.d. engines. 86-88 cc open chamber design, 185cc intake port volume, 3 angle valve job, 2.14 x 1.60 stainless valves, .509" lift valve springs, Umbrella seals, 7 degree locks, chrome moly retainers, Bronze guides.',
      499
    ),
    new MoparPart(
      "bigBlock",
      "engine7.jpeg",
      "Mopar World Block",
      '4.310" Rough bore 440',
      3800
    ),
    new MoparPart(
      "bigBlock",
      "engine7.jpeg",
      "Mopar World Block",
      '4.490" Rough bore 440',
      3800
    ),
    new MoparPart(
      "bigBlock",
      "engine7.jpeg",
      "Mopar World Block",
      '4.500" Finish bore 440',
      3800
    ),
    new MoparPart(
      "bigBlock",
      "engine11.jpeg",
      "500 C.I. RB Wedge Rotating Kit",
      "Steel crank 4.15 stroke / 8 bolt, 4.375 bore, Eagle rods, Forged pistons, rings and bearings 10 to 1 compression.",
      2400
    ),
    new MoparPart(
      "bigBlock",
      "engine11.jpeg",
      "500 C.I. B Wedge Rotating Kit",
      "Steel crank 4.15 stroke / 8 bolt, 4.375 bore, Eagle rods, Forged pistons, rings and bearings 10 to 1 compression.",
      2500
    ),
    new MoparPart(
      "bigBlock",
      "engine11.jpeg",
      "540 C.I. Wedge Rotating Kit",
      "Eagle 4340 Steel crank 4.500 / 2.2 8 bolt, Eagle rods 7.100 / 2.2, Forged pistons and rings 13 to 1 compression with 75cc.",
      2975
    ),
    new MoparPart(
      "bigBlock",
      "engine7.jpeg",
      "Indy Maxx Aluminum 400B Block",
      'Siamese dry sleeve construction, choice of sleeves, all 5 main caps cross bolted, priority oil main bearings & finished lifter bores, cam bearings & screw in core plugs installed, Std oil pan bolt pattern, dowels and oil gallery plugs supplied, steel billet main caps & finished line hone, 4.500" machined aluminum block, street or bracket race friendly.',
      5500
    ),
    new MoparPart(
      "bigBlock",
      "engine7.jpeg",
      "Indy Maxx Aluminum 440RB Block",
      'Siamese dry sleeve construction, choice of sleeves, all 5 main caps cross bolted, priority oil main bearings & finished lifter bores, cam bearings & screw in core plugs installed, Std oil pan bolt pattern, dowels and oil gallery plugs supplied, steel billet main caps & finished line hone, 4.500" machined aluminum block, street or bracket race friendly.',
      5500
    ),
    // Small Block Parts list
    new MoparPart(
      "smallBlock",
      "engine2.jpeg",
      '360" Magnum MA-X Cast Iron Heads',
      '380 HP 415 Torque 4.020" bore 3.58" stroke',
      5363
    ),
    new MoparPart(
      "smallBlock",
      "engine2.jpeg",
      '408" Magnum MA-X Cast Iron Heads',
      '460 HP 480 Torque 4.020" bore 4.000" stroke',
      7125
    ),
    new MoparPart(
      "smallBlock",
      "engine2.jpeg",
      '415" Magnum MA-X Cast Iron Heads',
      '520 HP 500 Torque 4.060" bore 4.000" stroke',
      8345
    ),
    new MoparPart(
      "smallBlock",
      "engine2.jpeg",
      '426" Magnum MA-X Cast Iron Heads',
      '600 HP 550 Torque 4.185" bore 4.000" stroke R3 Block',
      13995
    ),
    new MoparPart(
      "smallBlock",
      "engine10.jpeg",
      '408" Small Block Supercharged',
      '725 HP 4.030" bore 4.000" stroke',
      14990
    ),
    new MoparPart(
      "smallBlock",
      "head1.jpeg",
      "Rectangle Port (360-1) or Oval Port (360-2) Head Kits",
      "Kits include heads assembled with 360-4 rocker assembly 1.5 or 1.6, 360-9K push rod kit, 360-14 rocker shafts, 360-11 rocker studs, 360-3 intake, 360-16 head bolts, head gaskets, intake and exhaust gaskets.",
      3845
    ),
    new MoparPart(
      "smallBlock",
      "head1.jpeg",
      "360-1 Rectangel or Oval Port Indy Aluminum W-2 Head",
      "Intake port 210cc, Exhaust port volume 85cc, 63cc combustion camber, Stock valve location, Both 360 and W-2 exhaust pattern.",
      1785
    ),
    new MoparPart(
      "smallBlock",
      "head1.jpeg",
      "Indy LA-X New Cast Iron Head",
      "Combustion chamber volume 62cc, Intake port volume 179cc",
      995
    ),
    new MoparPart(
      "smallBlock",
      "head1.jpeg",
      "Indy MA-X New Cast Iron Head",
      'Stock / W-2 exhaust, Std 1.920 x 1.625", 5/16 stem valves',
      995
    ),
    new MoparPart(
      "smallBlock",
      "head1.jpeg",
      "340 / 360 Chrysler Reconditioned Heads",
      'Designed for the 1967-1985 Chrysler 318-340-360 c.i.d. engines. 67-70cc open chamber design, 160cc intake port volume. 3 angled valve job 2.02 x 1.60 stainless valves, .509" lift valve springs, Umbrella seals, 7 degree locks, Chrome moly retainers, Bronze guides',
      499
    ),
    new MoparPart(
      "smallBlock",
      "500ModManWedge.jpeg",
      "340 / 360 LA or W-2 / W-5 Small Block Mod Man Intake Manifold",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      529
    ),
    new MoparPart(
      "smallBlock",
      "500ModManWedge.jpeg",
      "340 / 360 Magnum Small Block Mod Man Intake Manifold",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      529
    ),
    new MoparPart(
      "smallBlock",
      "500ModManWedge.jpeg",
      "340 / 360 Magnum Small Block Mod Man Six Pack",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      2104
    ),
    new MoparPart(
      "smallBlock",
      "500ModManWedge.jpeg",
      "340 / 360 LA or Magnum Small Block 2 x 4 Top Edelbrock 500 CFM Carburetors and linkage",
      'The revolutionary single plane intake with a pre-drilled mounting surface allowing multiple carburetor possiblities. Now you can get economy and performance in one package! When your horsepower needs change, simply replace the 1/2" thick 6061 aluminum seperator plate and bolt on your new carburetor(s).',
      1164
    ),
  ]; // end parts list
  // for loop to fill page ul(s)
  for (let i = 0, max = moparPart.length; i < max; i++) {
    $(`.${moparPart[i].part}`).append(
      `<li id="part-${i}" class="list-group-item list-group-item-action mb-3"><img src="../assets/images/${moparPart[i].img} "alt="picture-${i}" class="img img-thumbnail float-md-left mr-3 mb-3"><h4>${moparPart[i].name}</h4><p>${moparPart[i].desc}</p><p>$${moparPart[i].price}.00</p><div  class="float-right"><button id="add-${i}" class="btn btn-success mr-1">+</button><button id="subtract-${i}" class="btn btn-danger">-</button><p class="mt-2">Quanity: ${moparPart[i].ordered}</p><button id="cart-${i}" class="btn btn-info" disabled>Add to Cart</button></div></li>`
    );
  }
  // increment part quanity
  $("ul li .btn-success").on("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target.id;
    const idx = target.slice(4);
    $(`#cart-${idx}`).removeAttr("disabled"); //removes disabled attribute from add to cart button to enable it
    $(`#${target}~p`).text(`Quanity: ${++moparPart[idx].ordered}`);
  });
  // decrement part quanity
  $("ul li .btn-danger").on("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target.id;
    const idx = target.slice(9);
    if (`${moparPart[idx].ordered}` > "0") {
      $(`#${target}~p`).text(`Quanity: ${--moparPart[idx].ordered}`);
    }
    if (`${moparPart[idx].ordered}` === "0") {
      // adds disabled attribute to add to cart button to disable it once counter is at zero
      $(`#cart-${idx}`).attr("disabled", true);
    }
  });
  // sets items to sessionStorage if part quanity is above zero
  $("ul li .btn-info").on("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target.id;
    const idx = target.slice(5);
    const partName = `${moparPart[idx].name}`;
    const partPrice = `${moparPart[idx].price}`;
    const partQuanity = `${moparPart[idx].ordered}`;
    if (partQuanity > 0) {
      let items = [partName, partPrice, partQuanity];
      sessionStorage.setItem(`item-${idx}`, JSON.stringify(items));
    }
    $(`#${target}`).attr("disabled", true); // adds disabled attribute to add to cart button
  });
  // add items from sessionStorage to form table
  let total,
    subtotal = 0,
    betSubtotal,
    tax,
    shipHandling,
    finalTotal,
    betFinalTotal;
  for (prop in sessionStorage) {
    if (prop.match(/^item-/)) {
      let index = prop.slice(5);
      let pieces = [];
      // pulls items from sessionStorage and pushes them into an array
      pieces.push(JSON.parse(sessionStorage.getItem(prop)));
      // loops through array and adds each item to the form table
      for (let i = 0, max = pieces.length; i < max; i++) {
        total = parseInt(`${pieces[i][2]}`) * parseInt(`${pieces[i][1]}`);
        $("#formBody").prepend(
          `<tr id="row-${[
            index,
          ]}"><th scope="row" class="text-center"><span><button id="btn-${[
            index,
          ]}" class="mr-2 btn btn-sm btn-danger">&times;</button></span>${
            pieces[i][2]
          }</th><td>${
            pieces[i][0]
          }</td><td class="text-right">${total}.00</td></tr>`
        );
        // adds each item's cost
        subtotal += Number(total);
        // shortens decimal to 2 spaces
        betSubtotal = subtotal.toFixed(2);
        // computes tax and shortens decimal to 2 spaces
        tax = (subtotal * 0.07).toFixed(2);
        // computes shipping costs and shortens decimal to 2 spaces
        shipHandling = (subtotal * 0.0125).toFixed(2);
        // computes final cost
        finalTotal =
          parseFloat(subtotal) + parseFloat(tax) + parseFloat(shipHandling);
        // computes final cost and shortens decimal to 2 spaces
        betFinalTotal = finalTotal.toFixed(2);
      }
    }
  }
  // adds subtotal to form table
  $("#subtotal~td").prepend(betSubtotal);
  // adds tax to form table
  $("#tax~td").prepend(tax);
  // adds shipping and handling to form table
  $("#shipHandling~td").prepend(shipHandling);
  // adds total of expenses to form table
  if (finalTotal > 0) {
    $("#total~td").prepend(
      "$" + betFinalTotal.replace(/(?!^)(\d\d\d)(?=(\d\d\d)*\.)/g, ",$1")
    );
  } else {
    $("#total~td").empty();
  }
  // button to remove item(s) from form table
  $("tbody tr th span button").on("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target.id;
    const idx = target.slice(4);
    sessionStorage.removeItem(`item-${idx}`);
    window.location.reload();
  });
  // form information
  $("#billName").focus(); // set focus on first input textbox
  let billingInfo, shippingInfo;
  $(window).on("change", (e) => {
    e.preventDefault();
    e.stopPropagation();
    let billName = $("#billName").val(), // get input text value
      billAdd = $("#billAdd").val(), // get input text value
      billCity = $("#billCity").val(), // get input text value
      billState = $("#billState").val(), // get input text value
      billZip = $("#billZip").val(); // get input text value
    // checkbox to fill shipping address fields
    if ($("#sameAs").prop("checked")) {
      $("#shipName").val(billName);
      $("#shipAdd").val(billAdd);
      $("#shipCity").val(billCity);
      $("#shipState").val(billState);
      $("#shipZip").val(billZip);
    }
    let shipName = $("#shipName").val(), // get input text value
      shipAdd = $("#shipAdd").val(), // get input text value
      shipCity = $("#shipCity").val(), // get input text value
      shipState = $("#shipState").val(), // get input text value
      shipZip = $("#shipZip").val(); // get input text value
    // put billingInfo into sessionStorage
    billingInfo = [billName, billAdd, billCity, billState, billZip];
    sessionStorage.setItem("billingInfo", JSON.stringify(billingInfo));
    // put shippingInfo into sessionStorage
    shippingInfo = [shipName, shipAdd, shipCity, shipState, shipZip];
    sessionStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));
  });
  // form validation
  let creditCardNum = $("#creditCardNum"),
    $creditInfo = $("#creditInfo"),
    cvvNum = $("#cvvNum"),
    expDate = $("#expDate"),
    $warning = $("#warning"),
    $billInfo = $("#billInfo"),
    $billShip = $("#billShip");
  $("#formSubmit").on("click", (e) => {
    // validates that all billing and shipping text fields have been filled out
    if (
      billingInfo[0] === "" ||
      billingInfo[1] === "" ||
      billingInfo[2] === "" ||
      billingInfo[3] === "" ||
      billingInfo[4] === "" ||
      shippingInfo[0] === "" ||
      shippingInfo[1] === "" ||
      shippingInfo[2] === "" ||
      shippingInfo[3] === "" ||
      shippingInfo[4] === ""
    ) {
      e.preventDefault();
      e.stopPropagation();
      $billInfo.removeClass("bg-light").addClass("bg-danger");
      $billShip.empty();
      $billInfo.css("backgroundColor", "red");
      $billShip
        .addClass("text-center bg-warning rounded")
        .append(
          "Please complete the address information before submitting your order."
        );
      // validates that all credit card fields have been filled out
    } else if (!creditCardNum.val() || !cvvNum.val() || !expDate.val()) {
      e.preventDefault();
      $creditInfo.removeAttr("style");
      $warning.empty();
      $creditInfo.css("backgroundColor", "red");
      $warning
        .addClass("text-center bg-warning rounded")
        .append(
          "Please complete the credit card information before submitting your order."
        );
      // removes red background from billing, shipping, and credit fields
    } else if (creditCardNum.val() && cvvNum.val() && expDate.val()) {
      e.preventDefault();
      $creditInfo.removeAttr("style");
      $billInfo.removeClass("bg-danger").addClass("bg-light");
      $warning.empty();
      $billShip.empty();
      creditCardNum.val("");
      cvvNum.val("");
      expDate.val("");
      $("#orderModal").fadeIn(750).modal();
      let billTo = JSON.parse(sessionStorage.getItem("billingInfo"));
      let today = new Date();
      let thisDate = today.getDate();
      let thisMonth = today.getMonth() + 1;
      let thisYear = today.getFullYear();
      $("#date")
        .empty()
        .append(
          "Date of Purchase: " + thisMonth + "/" + thisDate + "/" + thisYear
        );
      $("#billTo")
        .empty()
        .append(
          `<h4>Bill to:</h4>${billTo[0]}<br>${billTo[1]}<br>${billTo[2]}<br>${billTo[3]}<br>${billTo[4]}`
        );
      let shipTo = JSON.parse(sessionStorage.getItem("shippingInfo"));
      $("#shipTo")
        .empty()
        .append(
          `<h4>Ship to:</h4>${shipTo[0]}<br>${shipTo[1]}<br>${shipTo[2]}<br>${shipTo[3]}<br>${shipTo[4]}`
        );
      // add items to modal table
      let modalTotal,
        modalSubtotal = 0,
        modalBetSubtotal,
        modalTax,
        modalShipHandling,
        modalFinalTotal,
        modalBetFinalTotal;
      for (prop in sessionStorage) {
        if (prop.match(/^item-/)) {
          let index = prop.slice(5);
          let parts = [];
          parts.push(JSON.parse(sessionStorage.getItem(prop)));
          for (let i = 0, max = parts.length; i < max; i++) {
            modalTotal =
              parseInt(`${parts[i][2]}`) * parseInt(`${parts[i][1]}`);
            $("#modalBody").prepend(
              `<tr id="row-${[index]}"><th scope="row" class="text-center">${
                parts[i][2]
              }</th><td>${
                parts[i][0]
              }</td><td class="text-right">${modalTotal}.00</td></tr>`
            );
            // adds each item's cost
            modalSubtotal = modalSubtotal + Number(modalTotal);
            // shortens decimal to 2 spaces
            modalBetSubtotal = modalSubtotal.toFixed(2);
            // computes modalTax and shortens decimal to 2 spaces
            modalTax = (modalSubtotal * 0.07).toFixed(2);
            // computes shipping costs and shortens decimal to 2 spaces
            modalShipHandling = (modalSubtotal * 0.0125).toFixed(2);
            // computes final cost
            modalFinalTotal =
              parseFloat(modalSubtotal) +
              parseFloat(modalTax) +
              parseFloat(modalShipHandling);
            // computes final cost and shortens decimal to 2 spaces
            modalBetFinalTotal = modalFinalTotal.toFixed(2);
          }
        }
      }
      // adds modalSubtotal to modal table
      $("#modalSubtotal~td").prepend(modalBetSubtotal);
      // adds modalTax to modal table
      $("#modalTax~td").prepend(modalTax);
      // adds shipping and handling to modal table
      $("#modalShipHandling~td").prepend(modalShipHandling);
      // adds final total to modal table
      if (modalFinalTotal > 0) {
        $("#modalTotal~td").prepend(
          "$" +
            modalBetFinalTotal.replace(/(?!^)(\d\d\d)(?=(\d\d\d)*\.)/g, ",$1")
        );
      } else $("#modalTotal~td").empty();
    }
  });
});
