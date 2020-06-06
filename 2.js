var result  = '';
var bt = "=";
const cetak_gambar = (cetak) => {
console.log(" --- panjang ---");
for(let i = 0; i < cetak ; i++){
  if([i] == 0 || [i] == cetak-1){
     bt = "*   ";
  }else{
  	bt = "=   ";
  }
  result = result + bt;
}
for(let j=0; j < cetak; j++){
  console.log(result);
}
}
cetak_gambar(5);