

   

    var onButtonClick = function() {

	  document.getElementById("madLibText").textContent=" ";

	  var firstNoun=document.getElementById("noun1").value;

	  var secondNoun=document.getElementById("noun2").value;

	  var place=document.getElementById("location").value;

	  var ptVerb=document.getElementById("ptVerb1").value;
	  var firstAdj=document.getElementById("adjective1").value;
	  var secondAdj=document.getElementById("adjective2").value;
	  var thirdAdj=document.getElementById("adjective3").value;
      var randNum = Math.floor(Math.random() * 5);
      if (randNum==0){


	    document.getElementById("madLibText").textContent+="This is a "+firstNoun;
	    document.getElementById("madLibText").textContent+=" all about how my "+secondNoun;
	    document.getElementById("madLibText").textContent+=" got "+ptVerb;
	    document.getElementById("madLibText").textContent+=" "+firstAdj;
	    document.getElementById("madLibText").textContent+=" take a minute and sit right there "+secondAdj;
	    document.getElementById("madLibText").textContent+=" homies are the worst."
      };
      if(randNum==1){

      	document.getElementById("madLibText").textContent+="Have you ever had an especially "+firstAdj;
	    document.getElementById("madLibText").textContent+=" day? I have found that when I have "+ptVerb;
	    document.getElementById("madLibText").textContent+=" at a "+firstNoun;
	    document.getElementById("madLibText").textContent+=", I always seem to feel just a bit more "+secondAdj;
	    document.getElementById("madLibText").textContent+=". These always make me feel closer to my "+secondNoun;
	    document.getElementById("madLibText").textContent+=". At the end of the day isn't that what life";
	    document.getElementById("madLibText").textContent+=" is all about."

      };
      if(randNum==2){

      	document.getElementById("madLibText").textContent+="This one time I got a brand new "+firstNoun;
	    document.getElementById("madLibText").textContent+=" at first things were "+firstAdj;
	    document.getElementById("madLibText").textContent+=". But after a while I found that any time I "+ptVerb;
	    document.getElementById("madLibText").textContent+=" with the "+firstNoun;
	    document.getElementById("madLibText").textContent+=", I would always end up with this "+secondAdj;
	    document.getElementById("madLibText").textContent+=" feeling that I just could not shake. For a while I tried do with  "+secondNoun;
	    document.getElementById("madLibText").textContent+=" instead, but it just wasn't the same. I finally gave up on it all together, and moved to "+place+".";

      };
      if(randNum==3){

      	document.getElementById("madLibText").textContent+="My favorite place to visit is "+place;
	    document.getElementById("madLibText").textContent+=". When I go there I find that I cannot miss seeing all the "+firstNoun;
	    document.getElementById("madLibText").textContent+=". I know it seems cliche, but if you haven't"+ptVerb;
	    document.getElementById("madLibText").textContent+=" there then you just haven't lived. While that is always nice, I must say always avoid the local "+secondNoun;
	    document.getElementById("madLibText").textContent+=". It is always an inconvenience when you have to confront it's "+firstAdj;
	    document.getElementById("madLibText").textContent+=" nature. Luckily you can almost alway avoid this "+secondAdj;
	    document.getElementById("madLibText").textContent+=" thing and don't need it to ruin your otherwise "+thirdAdj+" visit.";

      };
      if(randNum==4){

      	document.getElementById("madLibText").textContent+="Do you ever feel like you put in a lot of work where very little of it was recognized? Like when someone asked you to complete a long task where most of the work was just tedium and didn't contribute to the overall goal. I mean those times are the worst and it always makes me have a "+thirdAdj;
	    document.getElementById("madLibText").textContent+=" day.";

      };


    };

