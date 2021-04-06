function wordBlanks(myNoun, myAjective, myVerb, myAdverb){
	var result="";
	result += "the "  + myAjective + "  " + myNoun + " " + myVerb +" " + " to the store " + myAdverb
	return result;
}

console.log(wordBlanks("dog","big","ran","fast"))
