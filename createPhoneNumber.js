function createPhoneNumber(arr) {
  let phoneNumber = '(';
  phoneNumber += arr.splice(0,3).join('');
  phoneNumber += ') ';
  phoneNumber += arr.splice(0,3).join('');
  phoneNumber += '-';
  phoneNumber += arr.splice(0).join('');
  console.log(phoneNumber);
  return phoneNumber;
}

createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);