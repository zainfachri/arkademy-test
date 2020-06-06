result = '';
const divideAndSort = (nilai) => {
	for(let i = 0; i<nilai.length; i++){
      if(nilai[i] == "0"){
         continue;
        }
      result = result + nilai[i];
    }
  console.log(result);
}
divideAndSort("5956560159466056");