import { FormControlLabel, Grid, Switch, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { default as React, useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [cpf, setCPF] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);
	const validacoes = useContext(ValidacoesCadastro);
	const [erros, validarCampos, possoEnviar] = useErros(validacoes);


	

	return (
		<form
			action=""
			onSubmit={(event) => {
				event.preventDefault();
				if (!possoEnviar()) {
					return;
				}
				aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
			}}
		>
			<TextField
				type="text"
				value={nome}
				onChange={(event) => {
					setNome(event.target.value);
				}}
				onBlur={validarCampos}
				error={!erros.nome.valido}
				helperText={erros.nome.texto}
				id="nome"
				label="Nome"
				name="nome"
				variant="outlined"
				fullWidth
				margin="normal"
				required
			/>

			<TextField
				type="text"
				value={sobrenome}
				onChange={(event) => {
					setSobrenome(event.target.value);
				}}
				id="sobrenome"
				name="sobrenome"
				label="Sobrenome"
				variant="outlined"
				fullWidth
				margin="normal"
				required
			/>

			<TextField
				type="number"
				value={cpf}
				onChange={(event) => {
					setCPF(event.target.value);
				}}
				onBlur={validarCampos}
				error={!erros.cpf.valido}
				helperText={erros.cpf.texto}
				id="cpf"
				name="cpf"
				label="CPF"
				variant="outlined"
				fullWidth
				margin="normal"
				required
			/>

			<Grid container spacing={2}>
				<Grid item xs={4}>
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
				</Grid>
				<Grid item xs={4}>
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
				</Grid>

				<Grid item xs={4}>
					<Button fullWidth type="submit" variant="contained" color="primary">
						Cadastrar
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}

export default DadosPessoais;
