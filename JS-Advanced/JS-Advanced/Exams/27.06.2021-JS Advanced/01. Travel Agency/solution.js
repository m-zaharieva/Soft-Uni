window.addEventListener('load', solution);

function solution() {
  // submit button selcting
  let submitBtnElement = document.getElementById('submitBTN');
  submitBtnElement.addEventListener('click', fillPreviewField);

  // edit button and continue button selectiong
  let editButtonEl = document.getElementById('editBTN');
  let continueButtonEl = document.getElementById('continueBTN');

  // input fields selectiong
  let fullNameInput = document.getElementById('fname');
  let nameLabel = fullNameInput.previousElementSibling.textContent;
  let emailInput = document.getElementById('email');
  let emailLabel = emailInput.previousElementSibling.textContent;
  let phoneInput = document.getElementById('phone');
  let phoneLabel = phoneInput.previousElementSibling.textContent;
  let adressInput = document.getElementById('address');
  let adressLabel = adressInput.previousElementSibling.textContent;
  let codeInput = document.getElementById('code');
  let postcodeLabel = codeInput.previousElementSibling.textContent;

  function fillPreviewField(e) {
    let divBlock = e.target.parentElement.parentElement;
    let formWrapper = e.target.parentElement;

    // select input elements
    let fullNameElement = formWrapper.querySelector('#fname');
    let fullName = fullNameElement.value;

    let emailElement = formWrapper.querySelector('#email');
    let email = emailElement.value;

    let phoneElement = formWrapper.querySelector('#phone');
    let phone = phoneElement.value;

    let adressElement = formWrapper.querySelector('#address');
    let adress = adressElement.value;

    let postCodeElement = formWrapper.querySelector('#code');
    let postCode = postCodeElement.value;

    // select the unordered list which to fill with data

    let previewWrapper = divBlock.querySelector('#information');
    let ulElement = divBlock.querySelector('#infoPreview');
    let editButton = divBlock.querySelector('#editBTN');
    editButton.addEventListener('click', editForm);
    let continueButton = divBlock.querySelector('#continueBTN');
    continueButton.addEventListener('click', successfullRegistration);

    if (fullNameElement.value.trim() !== '' && emailElement.value.trim() !== '') {
      let nameLi = document.createElement('li');
      nameLi.textContent = `${nameLabel} ${fullName}`;

      let emailLi = document.createElement('li');
      emailLi.textContent = `${emailLabel} ${email}`;

      let phoneLi = document.createElement('li');
      phoneLi.textContent = `${phoneLabel} ${phone}`;

      let adressLi = document.createElement('li');
      adressLi.textContent = `${adressLabel} ${adress}`;

      let codeLi = document.createElement('li');
      codeLi.textContent = `${postcodeLabel} ${postCode}`;

           
      // Clear inputs
      fullNameElement.value = '';
      emailElement.value = '';
      phoneElement.value = '';
      adressElement.value = '';
      postCodeElement.value = '';

      ulElement.appendChild(nameLi);
      ulElement.appendChild(emailLi);
      ulElement.appendChild(phoneLi);
      ulElement.appendChild(adressLi);
      ulElement.appendChild(codeLi);
      
      submitBtnElement.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;
    }
  }

  function editForm(e) {
    let previewBlock = e.target.parentElement.parentElement;
    let ulElement = previewBlock.querySelector('#infoPreview');

    let fullnameLi = ulElement.querySelector('li:nth-child(1)');
    let fullNameText = fullnameLi.textContent;
    let fullname = fullNameText.replace(`${nameLabel} `, '');
    // let [, fullname] = fullNameText.split(': ');

    let emailLi = ulElement.querySelector('li:nth-child(2)');
    let emailLiText = emailLi.textContent;
    let email = emailLiText.replace(`${emailLabel} `, '');
    // let [, email] = emailLiText.split(': ');

    let phoneLi = ulElement.querySelector('li:nth-child(3)');
    let phoneLiText = phoneLi.textContent;
    let phone = phoneLiText.replace(`${phoneLabel} `, '');
    // let [, phone] = phoneLiText.split(': ');

    let adressLi = ulElement.querySelector('li:nth-child(4)');
    let adressLiText = adressLi.textContent;
    let adress = adressLiText.replace(`${adressLabel} `, '');
    // let [, adress] = adressLiText.split(': ');

    let codeLi = ulElement.querySelector('li:nth-child(5)');
    let codeLiText = codeLi.textContent;
    let code = codeLiText.replace(`${postcodeLabel} `, '');
    // let [, code] = codeLiText.split(': ');

    fullNameInput.value = fullname;
    emailInput.value = email;
    phoneInput.value = phone;
    adressInput.value = adress;
    codeInput.value = code;


    fullnameLi.remove()
    emailLi.remove();
    phoneLi.remove();
    adressLi.remove();
    codeLi.remove();

    submitBtnElement.disabled = false;
    editButtonEl.disabled = true;
    continueButtonEl.disabled = true;
  }

  function successfullRegistration(e) {
    let parentDivBlock = e.target.parentElement.parentElement.parentElement.parentElement;
    let heading1 = parentDivBlock.querySelector('h1');
    let heading4 = parentDivBlock.querySelector('h4');
    let divForm = parentDivBlock.querySelector('#form');
    let divInformation = parentDivBlock.querySelector('#information');
    let footer = parentDivBlock.querySelector('footer');

    heading1.remove();
    heading4.remove();
    divForm.remove();
    divInformation.remove();
    footer.remove();

    let heading3 = document.createElement('h3');
    heading3.textContent = 'Thank you for your reservation!';

    parentDivBlock.appendChild(heading3);

  }

}
