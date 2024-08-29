export async function connectWallet() {
  try {
    if (!(window as any).ethereum) {
      return alert("Please install Metamask!");
    }
    const accounts = await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });
    if (!accounts) {
      return alert("Can't find any accounts");
    }
    sessionStorage.setItem("account", accounts[0]);
  } catch (error) {
    console.log(error);
  }
}

export function disconnectWallet() {
  sessionStorage.removeItem("account");
}
