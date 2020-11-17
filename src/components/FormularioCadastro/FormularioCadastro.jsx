import { FormControlLabel, Switch, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";

function FormularioCadastro({ aoEnviar, validarCPF }) {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [cpf, setCPF] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);
	const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

	return (
		<form
			action=""
			onSubmit={(event) => {
				event.preventDefault();
				aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
			}}
		>
			<TextField
				value={nome}
				onChange={(event) => {
					setNome(event.target.value);
				}}
				id="nome"
				label="Nome"
				variant="outlined"
				fullWidth
				margin="normal"
			/>

			<TextField
				value={sobrenome}
				onChange={(event) => {
					setSobrenome(event.target.value);
				}}
				id="sobrenome"
				label="Sobrenome"
				variant="outlined"
				fullWidth
				margin="normal"
			/>

			<TextField
				value={cpf}
				onChange={(event) => {
					setCPF(event.target.value);
				}}
				onBlur={(event) => {
					const erroStatus = validarCPF(cpf);
					setErros({ cpf: erroStatus });
				}}
				error={!erros.cpf.valido}
				helperText={erros.cpf.texto}
				id="cpf"
				label="CPF"
				variant="outlined"
				fullWidth
				margin="normal"
			/>

			<FormControlLabel
				control={
					<Switch
						checked={promocoes}
						onChange={(event) => {
							setPromocoes(event.target.checked);
						}}
						name="promocoes"
						//defaultChecked={promocoes}
						color="primary"
					/>
				}
				label="Promoções"
			/>

			<FormControlLabel
				control={
					<Switch
						checked={novidades}
						onChange={(event) => {
							setNovidades(event.target.checked);
						}}
						name="novidades"
						//defaultChecked={novidades}
						color="primary"
					/>
				}
				label="Novidades"
			/>

			<Button type="submit" variant="contained" color="primary">
				Cadastrar
			</Button>
		</form>
	);
}

export default FormularioCadastro;
