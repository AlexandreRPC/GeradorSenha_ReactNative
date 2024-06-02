import AsyncStorage from "@react-native-async-storage/async-storage"

const MinhasSenhas = () => {
  //Buscar os Intens Salvos
    const getItem = async (key) => {
      try{
        const senhas = await AsyncStorage.getItem(key);
        return JSON.parse(senhas) || [];

      }catch(error){
        console.log("Erro ao Buscar",error)
        return [];
      }
      
    }



  //Salvar um Item no Minha Senhas
    const saveItem = async (key, value) =>{
      try{
        let senhas = await getItem(key);

        senhas.push(value)

        await AsyncStorage.setItem(key, JSON.stringify(senhas))

      }catch(error){
        console.log("ERRO AO SALVAR",error)
      }

    }


    //Remover Intens Salvos
      const removeItem = async (key, item) =>{
        try{
          let senhas = await getItem(key);

          let mySenhas = senhas.filter((senhas) =>{
            return (senhas !== item)
          })

          await AsyncStorage.setItem(key, JSON.stringify(mySenhas))
          return mySenhas;

        }catch(error){
          console.log("ERROR AO DELETAR", error)
        }

      }

      return{
        getItem,
        saveItem,
        removeItem,
      }

  }





export default MinhasSenhas