console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
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




// Probelm # 3

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

var wood = data.filter(function(item){
  return item.materials.indexOf("wood");
});

var nameWood = wood.map(function(el){
  return el.title + "<br>";
})

$('#answer4').append(nameWood)


//Problem # 5

var eight = data.filter(function(item){
  return item.materials.length >= 8;
});

var mappedEight = eight.map(function(item){
  return item.title;
})

var numberEight = eight.map(function(item){
  return item.materials.length;
});

var itemsEight = eight.map(function(item){
  return item.materials;
});

var itemsEightDisplay = itemsEight.forEach(function(el){
  return el;
});


$('#answer5').append(mappedEight + numberEight);




//Problem # 6

var made = data.filter(function(item){
  return item.who_made === "i_did";
});

$('#answer6').append(made.length);
