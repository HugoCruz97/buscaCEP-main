import "./style.css";
import { Link } from "react-router-dom";
import { app } from "../../utils/firebaseConfig";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Home() {
  const [cep, setCep] = useState("");
  const db = getFirestore(app);

  const handleAdd = async () => {
    try {
      const docRef = await addDoc(collection(db, "cep"), {
        cep: cep
      });
      console.log("Document written with ID: ", docRef.id);
    } catch {}
  };

  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  useEffect(() => {
    if (cep.length === 8) {
      handleAdd();
      checkCEP();
    } else {
      console.log("cep invalido");
    }
  });

  const checkCEP = (e) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        // register({ name: 'address', value: data.logradouro });
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("addressNumber");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          CEP:
          <input
            type="text"
            {...register("cep")}
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </label>
        <label>
          Rua:
          <input disabled type="text" {...register("address")} />
        </label>
        <label>
          Número:
          <input type="text" {...register("addressNumber")} />
        </label>
        <label>
          Bairro:
          <input disabled type="text" {...register("neighborhood")} />
        </label>
        <label>
          Cidade:
          <input disabled type="text" {...register("city")} />
        </label>
        <label>
          Estado:
          <input disabled type="text" {...register("uf")} />
        </label>
      </form>

      <Link to="/">Voltar</Link>
    </>
  );
}

export default Home;
