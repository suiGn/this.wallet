if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  
    ethereum.request({ method: 'eth_requestAccounts' })
      .then(accounts => {
        // Handle the returned accounts
        console.log(accounts);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  } else {
    console.log('MetaMask is not installed. Please consider installing it.');
  }
  