export const authInputValidate = (email, password) => {
  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const passwordRegex = new RegExp(".{8,15}");

  const emailVal = emailRegex.test(email);
  const passwordVal = passwordRegex.test(password);

  return emailVal && passwordVal;
};

export const todoInputValidate = (todo) => {
  return todo.length >= 3;
};
