export default function convertDate(date) {
    const convertDate = new Date(date).toLocaleString('en-US', { 'dd/MM/yyyy': 'numeric' });
    return convertDate;
}
  