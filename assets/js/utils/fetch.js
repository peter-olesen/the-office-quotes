export const apiFetch = async (endpoint) => {
    let response = '';
  
    try {
      response = await fetch(endpoint);
      if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        throw new Error(`API request failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error in fetch: ${error}`); 
      throw error;
    }
  };
  