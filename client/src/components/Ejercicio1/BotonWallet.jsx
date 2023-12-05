import Web3 from "web3"

export default function BotonWallet(){
    const conectWallet = async()=>{
        try{
            if(window.ethereum){
                console.log('Billetera instalada')
                const web3Instance= new Web3(window.ethereum)
                await window.ethereum.enable()
                const cuentas= await web3Instance.eth.getAccounts()
                if (cuentas.length>0){
                    console.log('Cuentas: ', cuentas)
                }else{
                    throw new Error('No hay cuenta en esta billetera')
                }
            }else{
                throw new Error('No se encuentra billetera Ethereum en el ordenador')
            }
        }catch(error){
            console.log('Error al conectar la billetera:', error)
        }
       }
    return  <button onClick={conectWallet}>Conectar</button>        
}