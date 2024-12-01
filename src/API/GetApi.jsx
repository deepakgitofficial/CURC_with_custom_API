export const getApi = async () => {
  try {
    const response= await fetch('https://fakestoreapi.com/products');
    const apiData= response.json();
    // console.dir(apiData,'apidata');
    // console.log(typeof(apiData));
    return apiData;
  } catch (error) {
    console.log(error) 
  }
}
