// Convert a Nodelist or HTMLCollection into array 
// Array.from()

// document.getElementById("id_name") // give complete value of div
// document.getElementById("id_name").getAttribute('class')

// It always overrides the current name of particular class if exist
// document.getElementById("id_name").setAttribute('class','text')

// Diffrence between Innertext and textContent and innerHtml

// innerText ==> shows only that content that is visible to user
// Output==>'DOM Learning on Chai aur code'

// textContent ==> shows all the content present inside the div it doesn't depend on visiblity
// Output==>'DOM Learning on Chai aur code text Content'

// innerHtml ==> it gives Content as well as html(if written) of the div because it supports html tag
//Output ==> 'DOM Learning on Chai aur code <span style="display: none;">text Contendot</span>\n  


// document.querySelector('.className' or '#idname' or 'tagname')

// diffrence between queryselector and queryselectorall
// queryselector => it returns sigle element 
// queryselectorAll = it returns nodelist of elements 
// Nodelist isnot similar to array but yes some of its functionality matches with array  
