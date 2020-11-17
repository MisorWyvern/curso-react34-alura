import { FormControlLabel, Grid, Switch, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { default as React, useState } from "react";

function DadosPessoais({ aoEnviar, validarCPF }) {
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
