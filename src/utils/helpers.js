export const formatDate = (date) => {
  const dateInstance = new Date(date)
  return dateInstance.toLocaleString()
}
