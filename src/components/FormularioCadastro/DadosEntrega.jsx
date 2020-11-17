import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

function DadosEntrega() {
	return (
		<form action="">
			<TextField
				id="cep"
				label="CEP"
				type="number"
				variant="outlined"
				fullWidth
				margin="normal"
			/>
			<TextField
				id="endereco"
				label="Endereço"
				type="text"
				variant="outlined"
				fullWidth
				margin="normal"
			/>
			<TextField
				id="numero"
				label="Número"
				type="number"
				variant="outlined"
				fullWidth
				margin="normal"
			/>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<TextField
						id="estado"
						label="Estado"
						type="text"
						variant="outlined"
						fullWidth
						margin="normal"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						id="cidade"
						label="Cidade"
						type="text"
						variant="outlined"
						fullWidth
						margin="normal"
					/>
				</Grid>
			</Grid>
			<Button fullWidth type="submit" variant="contained" color="primary">
				Finalizar Cadastro
			</Button>
		</form>
	);
}

export default DadosEntrega;
