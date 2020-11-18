import { Step, StepLabel, Stepper, Typography, Icon } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import green from "@material-ui/core/colors/green";

function FormularioCadastro({ aoEnviar }) {
	const [etapaAtual, setEtapaAtual] = useState(0);
	const [dadosColetados, setDadosColetados] = useState({});

	useEffect(() => {
		if (etapaAtual === formularios.length - 1) {
			aoEnviar(dadosColetados);
		}
	});

	const formularios = [
		<DadosUsuario aoEnviar={coletarDados} />,
		<DadosPessoais aoEnviar={coletarDados} />,
		<DadosEntrega aoEnviar={coletarDados} />,
		<>
			<Typography variant="h5" align="center">
				Cadastro concluido com sucesso!
				<br />
				<Icon style={{ fontSize: 300, color: green[500] }}>
					check_circle_outline
				</Icon>
			</Typography>
		</>,
	];

	function coletarDados(dados) {
		setDadosColetados({ ...dadosColetados, ...dados });
		proximo();
	}

	function proximo() {
		setEtapaAtual(etapaAtual + 1);
	}

	return (
		<>
			<Stepper activeStep={etapaAtual}>
				<Step>
					<StepLabel>Login</StepLabel>
				</Step>
				<Step>
					<StepLabel>Pessoal</StepLabel>
				</Step>
				<Step>
					<StepLabel>Entrega</StepLabel>
				</Step>
				<Step>
					<StepLabel>Finalização</StepLabel>
				</Step>
			</Stepper>
			{formularios[etapaAtual]}
		</>
	);
}

export default FormularioCadastro;
