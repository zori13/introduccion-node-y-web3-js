import Web3 from "web3"
import {useState}from'react'
export default function BotonWallet(){
    const [cuenta,setCuenta]=useState(null)
    const [balance,setBalance]=useState(null)
    const conectWallet = async()=>{
        try{
            if(window.ethereum){
                console.log('Billetera instalada')
                const web3Instance= new Web3(window.ethereum)
                await window.ethereum.enable()
                const cuentas= await web3Instance.eth.getAccounts()
                if (cuentas.length>0){
                    setCuenta(cuentas[0])
                    console.log('Cuentas: ', cuentas)
                   
                }else{
                    throw new Error('No hay cuenta en esta billetera')
                }
                const balance =await web3Instance.eth.getBalance(cuentas[0])
                const formattedBalance=web3Instance.utils.fromWei(balance, 'ether')
                console.log('Balance :', balance)
                setBalance(formattedBalance)
            }else{
                throw new Error('No se encuentra billetera Ethereum en el ordenador')
            }
        }catch(error){
            console.log('Error al conectar la billetera:', error)
        }
       }

       const desconectarWallet=()=>{
        setCuenta(null)
        setBalance(null)
       }
      
    return (
    <div>
        {cuenta ?(
            <>
                <p>Concetado a la billetera : {cuenta} </p>
                <p>Balance : {balance} </p>
                <button onClick={desconectarWallet}>Desconectar</button>
            </>
        ):(
            <button onClick={conectWallet}>Conectar</button>         
        )} 
        
    </div>
        )
    }