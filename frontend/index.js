const fetchData = async (address, count,lat,lon) => {
  try {
    let apiResp = await fetch(
      // `http://localhost:3000/fetch-data?address=${address}&count=${count}&lat=${lat}&lon=${lon}`
      `https://deploypricelabs.onrender.com/fetch-data?address=${address}&count=${count}&lat=${lat}&lon=${lon}`
    );
    apiResp = await apiResp.json();
    return apiResp?.data?.searchQueries?.search?.results || [];
  } catch (err) {
    console.log(`Error while fetching data from api : ${err}`);
    return [];
  }
};



const getDataAndGenerateCSVBuffer = async (address, count , lat ,lon) => {
  try {
    const data = await fetchData(address, count,lat,lon);
    const excelBuffer = generateListingsCsv(data);
    return excelBuffer;
  } catch (err) {
    console.log(`Error in getDataAndGenerateCSVBuffer: ${err}`);
  }
};

const generateListingsCsv = (results = []) => {
    try {
      const headers = [
        "Listing ID",
        "Listing Title",
        "Page Name",
        "Amount Per Stay",
      ];
  
      const listingsData = results.map((listing) => {
        if (!listing) return;
        const listingId = listing.basicPropertyData?.id || "";
        const listingTitle = listing.displayName?.text || "";
        const pageName = listing.basicPropertyData?.pageName || "";
        const amountPerStay =
          listing?.priceDisplayInfoIrene?.priceBeforeDiscount?.displayPrice
            ?.amountPerStay?.amount || "";
        return [listingId, listingTitle, pageName, amountPerStay]
          .map(value => `"${value}"`) 
          .join(',');
      });
  
      const csvContent = [
        headers.join(','),
        ...listingsData,  
      ].join('\n');
  
      return csvContent;
    } catch (err) {
      console.log(`Error while generating CSV: ${err}`);
      return '';
    }
};


document.getElementById('downloadExcelButton').addEventListener('click',async   function() {
    let address = document.querySelector('#address').value || 'Bangalore'
    let rows = parseInt(document.getElementById('rowsperpage').value) || 20
    let latitude = parseFloat(document.querySelector('#latitude').value) 
    let longitude = parseFloat(document.getElementById('longitude').value)

    const buffer = await getDataAndGenerateCSVBuffer(address, rows , latitude , longitude);
    const blob = new Blob([buffer], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Listings.csv';
    link.click();            
    URL.revokeObjectURL(link.href);
});


