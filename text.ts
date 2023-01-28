fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data);
  document.querySelector('img').src = data.message
  document.querySelector('p').innerText = data.status
})
.catch(err => {
    console.log(`error ${err}`)
});


// logconsole!

if( 6 === 6){
    return 4 _ r
}else if{
//   Hello
}
// Log.gdhry
// Qu!
else{

}