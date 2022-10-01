export default function convertDatetoISO(date) {
    const convertDate =  new Date(date);
    return convertDate.toISOString();
}
  