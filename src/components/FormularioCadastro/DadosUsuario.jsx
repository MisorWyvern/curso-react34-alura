import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar}) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const validacoes = useContext(ValidacoesCadastro);
	const [erros, validarCampos, possoEnviar] = useErros(validacoes);
	
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if(!possoEnviar()){
					return;
				}
				aoEnviar({email, senha});
			}}
			action=""
		>
			<TextField
				value={email}
				onChange={(event) => {
					setEmail(event.target.value);
				}}
				id="email"
				name="email"
				label="Email"
				type="email"
				required
				variant="outlined"
				fullWidth
				margin="normal"
			></TextField>
			<TextField
				value={senha}
				onChange={(event) => {
					setSenha(event.target.value);
				}}
				onBlur={validarCampos}
				error={!erros.senha.valido}
				helperText={erros.senha.texto}
				id="senha"
				name="senha"
				label="Senha"
				type="password"
				required
				variant="outlined"
				fullWidth
				margin="normal"
			></TextField>
			<Button type="submit" variant="contained" color="primary" fullWidth>
				Entrar
			</Button>
		</form>
	);
}

export default DadosUsuario;
