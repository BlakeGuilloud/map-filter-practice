console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("halp");
});

//Problem # 1
var data = items.map(function(element){
  return element;
});

var price = items.map(function(el){
  return el.price;
});

var sum = price.reduce(function(a,b){
  return a + b;
});

var avg = sum/data.length

$('#answer1').append(" " + avg);


//Problem # 2

var inBtwn = data.filter(function(item){
  return item.price > 14 && item.price < 18
});

var nameInBtwn = inBtwn.map(function(el){
  return el.title + "<br>";
});

$('#answer2').append(nameInBtwn)




// Problm # 3

var curr = data.filter(function(item){
  return item.currency_code === "GBP"
});

var nameCurr = curr.map(function(el){
  return el.title;
});

var priceCurr = curr.map(function(el){
  return el.price;
});

$('#answer3').append(nameCurr + ", #" + priceCurr)


//Problem # 4
// 
// var wood = data.filter(function(item){
//   return item.materials.indexOf("wood");
// });

var wood = items.filter(function(item){
  return _.contains(item.materials, "wood");
});

var nameWood = wood.map(function(el){
  return el.title + "<br>";
})

$('#answer4').append(nameWood)


//Problem # 5

var eight = _.filter(items, function(item){
  return item.materials.length>=8
});

eliteEight = "";
_.each(eight, function(item){
  eliteEight += "<strong>Title: </strong>" +item.title + "<br>" + "<strong>How many Items: </strong>" + item.materials.length + "<br>" + "<strong>Materials: </STRONG>" + item.materials + "<br>"
});
$('#answer5').append(eliteEight)
//
// var eight = data.filter(function(item){
//   return item.materials.length >= 8;
// });
//
// var mappedEight = _.map(eight, function(item){
//   return { title: item.title,
//            length: item.materials.length,
//            materials: item.materials
//          };
// });
// var mappedMaterials = _.map(mappedEight, function(item){
//   return item.materials
// });

//
// var numberEight = eight.map(function(item){
//   return item.materials.length;
// });
//
// var itemsEight = eight.map(function(item){
//   return item.materials;
// });
//
// var itemsEightDisplay = itemsEight.forEach(function(el){
//   return el;
// });


// $('#answer5').append(mappedEight + numberEight);
// var eightMaterials = [];
//
// data.forEach(function(el,idx,array){
//   if(el.materials.length >= 8){
//     var items = {};
//     items.name = el.title;
//     items.number = el.materials.length;
//     items.materials = el.materials;
//     eightMaterials.push(items);
//   }
//   return eightMaterials
// });
//
// $('#answer5').append(JSON.stringify(eightMaterials));

// document.getElementById(id = "answer5").innerHTML = JSON.stringify(eightMaterials, null, 4);

//
// $('#answer5').append(eightMaterials)
//
// _.flatten(array);



//Problem # 6

var made = data.filter(function(item){
  return item.who_made === "i_did";
});

$('#answer6').append(made.length);
