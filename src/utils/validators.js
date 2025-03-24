// Utilitaire pour valider des champs de formulaire courants
export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

export const validatePassword = (password) => {
  // La validation peut être personnalisée selon tes critères (longueur, majuscules, etc.)
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

// Exemple d'une fonction de validation d'un champ "nom"
export const validateName = (name) => {
  return name && name.trim().length >= 3;  // Exemple : nom doit avoir au moins 3 caractères
};
