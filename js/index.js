var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkUrlInput = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var tableContent = document.getElementById("tableContent");
var bookmarksList;

if (localStorage.getItem('bookmarksList') != null) {
  bookmarksList = JSON.parse(localStorage.getItem('bookmarksList'));
  displayBookmarks(bookmarksList);
}
else {
  bookmarksList = [];
}

function addSite() {

  var bookmarks = {
    name: bookmarkNameInput.value,
    url: bookmarkUrlInput.value,
  }
  bookmarksList.push(bookmarks);
  localStorage.setItem('bookmarksList', JSON.stringify(bookmarksList))

  displayBookmarks(bookmarksList);
  clearInputs();

}
function clearInputs() {
  bookmarkNameInput.value = '';
  bookmarkUrlInput.value = '';
}
function displayBookmarks(list) {

  var cartoona = ``;
  for (i = 0; i < list.length; i++) {


    cartoona += `
     <tr>
       <td class="text-capitalize">${i + 1}</td>
       <td class="text-capitalize">${list[i].name}</td>
                    <td class="text-capitalize">
                    <a class="btn btn-visit" href=" ${list[i].url} " target="_blank" > <i class="fa-solid fa-eye"></i>
                    visit</a>
                    </td>
                    <td class="text-capitalize">
                    <button onclick="deleteBookmark(${i})" class="btn btn-delete pe-2">
                    <i class="fa-solid fa-trash-can "></i>
                    Delete
                    </button>
                  </td>
        </tr>      
     `
  }
  tableContent.innerHTML = cartoona;
}
function deleteBookmark(index) {
  bookmarksList.splice(index, 1);

  localStorage.setItem('bookmarksList', JSON.stringify(bookmarksList))

  displayBookmarks(bookmarksList);
}

function validateInput(element) {
  var regex = /^[A-Z]\w{3,10}\s?\w{0,5}$/
  if (regex.test(element.value)) {
    console.log('true');
    element.classList.add('is-valid')
    element.classList.remove('is-invalid')
  }
  else {
    console.log('false');
    element.classList.add('is-invalid')
    element.nextElementSibling.classList.remove('d-none')
  }
}
function validateUrl(element) {
  var regex = /^http(s)?:\/\/(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/
  if (regex.test(element.value)) {
    console.log('true');
    element.classList.add('is-valid')
    element.classList.remove('is-invalid')
  }
  else {
    console.log('false');
    element.classList.add('is-invalid')
  }
}