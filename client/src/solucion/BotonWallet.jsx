import { useState } from 'react'
import Web3 from 'web3'

export default function BotonWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState(null)

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum)

        await window.ethereum.enable()

        const accounts = await web3Instance.eth.getAccounts()

        if (accounts.length > 0) {
          setAccount(accounts[0])
          setIsConnected(true)
        }
      } else {
        console.error('No se encontró una billetera Ethereum en este navegador.')
      }
    } catch (error) {
      console.error('Error al conectar la billetera: ', error)
    }
  }

  const disconnectWallet = () => {
    setAccount(null)
    setIsConnected(false)
  }

  return (
    <div>
      {isConnected ? (
        <div>
          {account && (
            <p>
              Dirección de la cuenta: {account.substring(0, 8)}...{account.substring(account.length - 8)}
            </p>
          )}
          <button onClick={disconnectWallet}>Desconectar Billetera</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Conectar Billetera</button>
      )}
    </div>
  )
}
