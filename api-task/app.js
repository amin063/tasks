const api = "https://northwind.vercel.app/api/suppliers";

const tBody = document.querySelector("tbody");
const modal = document.querySelector(".modal");
const updateForm = document.querySelector("form.modal-content");

const addModal = document.querySelector(".add-modal");
const addModalContent = document.querySelector("form.add-modal-content");

let currentId = 0;

// const  = document.querySelector("")
renderTable();

function renderTable() {
  tBody.innerHTML = ``;
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        tBody.innerHTML += ` <tr style="text-align: center;">
            <td>${item.id}</td>
            <td>${item.companyName}</td>
            <td>${item.contactName}</td>
            <td>${item.contactTitle}</td>
            <th>
              <button class="btn btn-danger"onclick="deleteData(${item.id})">DELETE</button>
              <button class="btn btn-success" onclick="showUpdateModal(${item.id})">UPDATE</button>
            </th>
          </tr>`;
      });
    });
}

// UPDATE
function showUpdateModal(id) {
  modal.style.display = "flex";
  currentId = id;
}

function getUpdate() {
  fetch(api + "/" + currentId, {
    method: "PATCH",
    body: JSON.stringify({
      companyName: updateCompanyName.value,
      contactName: updateContactName.value,
      contactTitle: updateContactTitle.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    renderTable()
    modal.style.display = "none";
  });
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getUpdate();
});

// POST
function showAddModal() {
  addModal.style.display = "flex";
}

addModal.addEventListener("click", (e) => {
  if (e.target === addModal) {
    addModal.style.display = "none";

  }
})


function addData() {
  fetch(api, {
    method: "POST",
    body: JSON.stringify({
      companyName: addCompanyName.value,
      contactName: addContactName.value,
      contactTitle: addContactTitle.value,
    }),
    headers: {
      "Content-Type": "application/json",
    }
  }).then(() => {
    renderTable()
    addModal.style.display = "none";
  })
}

addModalContent.addEventListener("submit", (e) => {
  e.preventDefault();
  addData();
})


// DELETE

function deleteData(id) {
  fetch(api + "/" + id, {
    method: "DELETE",
  }).then(() => renderTable())
}