import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario() {
	return (
		<form action="">
			<TextField
				id="email"
				label="Email"
				type="email"
				variant="outlined"
				fullWidth
				margin="normal"
			></TextField>
			<TextField
				id="senha"
				label="Senha"
				type="password"
				variant="outlined"
				fullWidth
				margin="normal"
			></TextField>
			<Button type="submit" variant="contained" color="primary" fullWidth>
				Cadastrar
			</Button>
		</form>
	);
}

export default DadosUsuario;
